// Granular School & Work Schedule Planner with Break Times for Aura Sacra
import { getSetting, setSetting } from './db.js';

const DEFAULT_SCHEDULE = {
  enabled: true,
  label: 'School / Work Focus',
  busyStart: '08:30',
  busyEnd: '16:30',
  breakStart: '12:30',
  breakEnd: '13:30',
  microPauseDuration: 30, // seconds: 30 or 60
  days: [1, 2, 3, 4, 5] // Monday - Friday
};

let activeSchedule = { ...DEFAULT_SCHEDULE };
let scheduleListeners = [];

export async function initSchedule() {
  const saved = await getSetting('user_schedule', null);
  if (saved) {
    activeSchedule = { ...DEFAULT_SCHEDULE, ...saved };
  }
  return activeSchedule;
}

export function getSchedule() {
  return activeSchedule;
}

export async function saveSchedule(newConfig) {
  activeSchedule = { ...activeSchedule, ...newConfig };
  await setSetting('user_schedule', activeSchedule);
  notifyListeners();
  return activeSchedule;
}

export function getCurrentScheduleStatus() {
  if (!activeSchedule.enabled) {
    return {
      status: 'free',
      label: 'Free Hours',
      description: 'Full monastic bells and prayer reminders active.',
      canPrayNow: true,
      color: 'emerald'
    };
  }

  const now = new Date();
  const day = now.getDay(); // 0 is Sunday, 1 is Monday...

  // Check if today is a scheduled work/school day
  if (!activeSchedule.days.includes(day)) {
    return {
      status: 'free',
      label: 'Weekend / Off Day',
      description: 'No quiet hours active today. Feel free to pray anytime.',
      canPrayNow: true,
      color: 'emerald'
    };
  }

  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const [bSH, bSM] = activeSchedule.busyStart.split(':').map(Number);
  const [bEH, bEM] = activeSchedule.busyEnd.split(':').map(Number);
  const [brSH, brSM] = activeSchedule.breakStart.split(':').map(Number);
  const [brEH, brEM] = activeSchedule.breakEnd.split(':').map(Number);

  const busyStartMin = bSH * 60 + bSM;
  const busyEndMin = bEH * 60 + bEM;
  const breakStartMin = brSH * 60 + brSM;
  const breakEndMin = brEH * 60 + brEM;

  // Inside Break Time
  if (currentMinutes >= breakStartMin && currentMinutes < breakEndMin) {
    return {
      status: 'break',
      label: 'Recess / Break Time',
      description: `Ideal moment for a ${activeSchedule.microPauseDuration}s micro-prayer before returning to tasks.`,
      canPrayNow: true,
      color: 'amber'
    };
  }

  // Inside Busy Hours (Classes or Work)
  if (currentMinutes >= busyStartMin && currentMinutes < busyEndMin) {
    return {
      status: 'busy',
      label: `${activeSchedule.label} (Quiet Mode)`,
      description: 'Audio chimes silenced so you stay focused without disruption.',
      canPrayNow: false,
      color: 'red'
    };
  }

  // Outside busy hours
  return {
    status: 'free',
    label: 'Evening / Free Time',
    description: 'Personal study, scripture reading, and peaceful dialogue.',
    canPrayNow: true,
    color: 'emerald'
  };
}

export function onScheduleChange(listener) {
  scheduleListeners.push(listener);
  return () => {
    scheduleListeners = scheduleListeners.filter((l) => l !== listener);
  };
}

function notifyListeners() {
  const status = getCurrentScheduleStatus();
  scheduleListeners.forEach((fn) => {
    try {
      fn(activeSchedule, status);
    } catch (e) {
      console.error('Schedule listener error:', e);
    }
  });
}
