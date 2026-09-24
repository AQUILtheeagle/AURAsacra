// IndexedDB offline persistence layer for Aura Sacra
const DB_NAME = 'AuraSacraDB';
const DB_VERSION = 1;

let dbInstance = null;
let dbPromise = null;

export async function getDB() {
  if (dbInstance) return dbInstance;
  if (dbPromise) return dbPromise;

  dbPromise = new Promise((resolve) => {
    try {
      if (typeof indexedDB === 'undefined') {
        resolve(null);
        return;
      }

      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;

        // Settings store
        if (!db.objectStoreNames.contains('settings')) {
          db.createObjectStore('settings', { keyPath: 'key' });
        }

        // Prayer Journal store
        if (!db.objectStoreNames.contains('journal')) {
          const journalStore = db.createObjectStore('journal', { keyPath: 'id', autoIncrement: true });
          journalStore.createIndex('createdAt', 'createdAt', { unique: false });
        }

        // Bible Highlights & Notes
        if (!db.objectStoreNames.contains('highlights')) {
          const hlStore = db.createObjectStore('highlights', { keyPath: 'id' });
          hlStore.createIndex('book_chapter', ['bookId', 'chapter'], { unique: false });
        }

        // Jesus Chat History
        if (!db.objectStoreNames.contains('chat_messages')) {
          const chatStore = db.createObjectStore('chat_messages', { keyPath: 'id', autoIncrement: true });
          chatStore.createIndex('timestamp', 'timestamp', { unique: false });
        }
      };

      request.onsuccess = (event) => {
        dbInstance = event.target.result;
        resolve(dbInstance);
      };

      request.onerror = (event) => {
        console.warn('IndexedDB warning:', event.target.error);
        dbPromise = null;
        resolve(null);
      };

      request.onblocked = () => {
        console.warn('IndexedDB blocked');
        resolve(dbInstance);
      };
    } catch (e) {
      console.warn('IndexedDB exception:', e);
      dbPromise = null;
      resolve(null);
    }
  });

  return dbPromise;
}

export const initDB = getDB;

// Settings Helpers with synchronous LocalStorage mirroring for instant reliability
export async function getSetting(key, defaultValue = null) {
  try {
    const localVal = localStorage.getItem(`aurasacra_${key}`);
    if (localVal !== null) {
      try { return JSON.parse(localVal); } catch (e) { return localVal; }
    }
  } catch (e) {}

  try {
    const db = await getDB();
    if (!db) return defaultValue;
    return new Promise((resolve) => {
      try {
        const tx = db.transaction('settings', 'readonly');
        const store = tx.objectStore('settings');
        const req = store.get(key);
        req.onsuccess = () => resolve(req.result ? req.result.value : defaultValue);
        req.onerror = () => resolve(defaultValue);
      } catch (e) {
        resolve(defaultValue);
      }
    });
  } catch (e) {
    return defaultValue;
  }
}

export async function setSetting(key, value) {
  try {
    localStorage.setItem(`aurasacra_${key}`, JSON.stringify(value));
  } catch (e) {}

  try {
    const db = await getDB();
    if (!db) return;
    return new Promise((resolve) => {
      try {
        const tx = db.transaction('settings', 'readwrite');
        const store = tx.objectStore('settings');
        const req = store.put({ key, value });
        req.onsuccess = () => resolve();
        req.onerror = () => resolve();
      } catch (e) {
        resolve();
      }
    });
  } catch (e) {
    return;
  }
}

// Prayer Journal Helpers
export async function getJournalEntries() {
  const db = await getDB();
  return new Promise((resolve) => {
    const tx = db.transaction('journal', 'readonly');
    const store = tx.objectStore('journal');
    const req = store.getAll();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => resolve([]);
  });
}

export async function addJournalEntry(text) {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('journal', 'readwrite');
    const store = tx.objectStore('journal');
    const entry = {
      text,
      createdAt: new Date().toISOString(),
      sentToJesus: false
    };
    const req = store.add(entry);
    req.onsuccess = () => resolve({ id: req.result, ...entry });
    req.onerror = () => reject(req.error);
  });
}

export async function deleteJournalEntry(id) {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('journal', 'readwrite');
    const store = tx.objectStore('journal');
    const req = store.delete(Number(id));
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

export async function markJournalEntrySentToJesus(id) {
  const db = await getDB();
  return new Promise((resolve) => {
    const tx = db.transaction('journal', 'readwrite');
    const store = tx.objectStore('journal');
    const req = store.get(Number(id));
    req.onsuccess = () => {
      if (req.result) {
        const updated = { ...req.result, sentToJesus: true };
        store.put(updated);
      }
      resolve();
    };
    req.onerror = () => resolve();
  });
}

// Bible Highlights Helpers
export async function getHighlights(bookId, chapter) {
  const db = await getDB();
  return new Promise((resolve) => {
    const tx = db.transaction('highlights', 'readonly');
    const store = tx.objectStore('highlights');
    const index = store.index('book_chapter');
    const req = index.getAll([bookId, Number(chapter)]);
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => resolve([]);
  });
}

export async function saveHighlight(bookId, chapter, verse, color, note = '') {
  const db = await getDB();
  const id = `${bookId}_${chapter}_${verse}`;
  return new Promise((resolve, reject) => {
    const tx = db.transaction('highlights', 'readwrite');
    const store = tx.objectStore('highlights');
    const item = {
      id,
      bookId,
      chapter: Number(chapter),
      verse: Number(verse),
      color,
      note,
      updatedAt: new Date().toISOString()
    };
    const req = store.put(item);
    req.onsuccess = () => resolve(item);
    req.onerror = () => reject(req.error);
  });
}

export async function removeHighlight(bookId, chapter, verse) {
  const db = await getDB();
  const id = `${bookId}_${chapter}_${verse}`;
  return new Promise((resolve, reject) => {
    const tx = db.transaction('highlights', 'readwrite');
    const store = tx.objectStore('highlights');
    const req = store.delete(id);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

// Jesus Chat Helpers (Persistent History)
export async function getChatMessages() {
  const db = await getDB();
  return new Promise((resolve) => {
    const tx = db.transaction('chat_messages', 'readonly');
    const store = tx.objectStore('chat_messages');
    const req = store.getAll();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => resolve([]);
  });
}

export async function addChatMessage(sender, text, scriptureRefs = []) {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('chat_messages', 'readwrite');
    const store = tx.objectStore('chat_messages');
    const msg = {
      sender,
      text,
      scriptureRefs,
      timestamp: new Date().toISOString()
    };
    const req = store.add(msg);
    req.onsuccess = () => resolve({ id: req.result, ...msg });
    req.onerror = () => reject(req.error);
  });
}

export async function clearChatHistory() {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('chat_messages', 'readwrite');
    const store = tx.objectStore('chat_messages');
    const req = store.clear();
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

// Export and Import Everything (JSON Backup)
export async function exportAllData() {
  const db = await getDB();
  const exportData = {
    version: '1.0.0',
    exportDate: new Date().toISOString(),
    settings: [],
    journal: [],
    highlights: [],
    chat_messages: []
  };

  const getStoreData = (storeName) => {
    return new Promise((resolve) => {
      const tx = db.transaction(storeName, 'readonly');
      const store = tx.objectStore(storeName);
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => resolve([]);
    });
  };

  exportData.settings = await getStoreData('settings');
  exportData.journal = await getStoreData('journal');
  exportData.highlights = await getStoreData('highlights');
  exportData.chat_messages = await getStoreData('chat_messages');

  return JSON.stringify(exportData, null, 2);
}

export async function importAllData(jsonStr) {
  const data = JSON.parse(jsonStr);
  const db = await getDB();

  const restoreStore = (storeName, items) => {
    if (!items || !Array.isArray(items)) return Promise.resolve();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(storeName, 'readwrite');
      const store = tx.objectStore(storeName);
      store.clear();
      items.forEach((item) => store.put(item));
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  };

  await restoreStore('settings', data.settings);
  await restoreStore('journal', data.journal);
  await restoreStore('highlights', data.highlights);
  await restoreStore('chat_messages', data.chat_messages);

  return true;
}
