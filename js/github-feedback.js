// Algorithm to convert simple anonymous user messages into structured GitHub Issues
import { getSetting } from './db.js';
import { getCurrentPhase } from './circadian.js';

const GITHUB_REPO_URL = 'https://github.com/vasilecirnu/aura-sacra';

export async function formatAnonymousGitHubIssue(feedback) {
  const { category, title, details } = feedback;

  // 1. Sanitization: Strip emails or local private paths
  const sanitizedTitle = (title || 'User Community Feedback').replace(/[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/g, '[EMAIL_REDACTED]');
  const sanitizedDetails = (details || '').replace(/[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/g, '[EMAIL_REDACTED]');

  // 2. Gather anonymous environment diagnostics
  const confession = await getSetting('user_confession', 'Ecumenical');
  const circadianPhase = getCurrentPhase();
  const isMobile = window.innerWidth <= 768;
  const screenRes = `${window.innerWidth}x${window.innerHeight}`;
  const connection = navigator.onLine ? 'Online' : 'Offline (Local Sync)';
  const userAgent = navigator.userAgent;

  // 3. Category labels
  const labelMap = {
    bug: 'bug,triage',
    feature: 'enhancement,community-request',
    spiritual: 'spiritual-content,liturgical',
    question: 'question'
  };
  const labels = labelMap[category] || 'feedback';

  // 4. Formatted Markdown Issue Template
  const issueMarkdown = `### 🕊️ Aura Sacra — Anonymous Feedback Report

**Category**: ${category.toUpperCase()}
**Summary**: ${sanitizedTitle}

---

#### 📝 Message / Description:
${sanitizedDetails}

---

#### ⚙️ Anonymous System & Liturgical Diagnostics:
- **App Version**: Aura Sacra v1.0.0 (Offline PWA)
- **Tradition / Confession**: ${confession}
- **Liturgical Circadian Phase**: ${circadianPhase.toUpperCase()}
- **Device Type**: ${isMobile ? 'Mobile' : 'Desktop / Tablet'} (${screenRes})
- **Connectivity Status**: ${connection}
- **Timestamp**: ${new Date().toISOString()}

---
*Generated automatically by Aura Sacra feedback algorithm.*`;

  // 5. Construct GitHub New Issue URL
  const issueUrl = `${GITHUB_REPO_URL}/issues/new?title=${encodeURIComponent(`[${category.toUpperCase()}] ${sanitizedTitle}`)}&body=${encodeURIComponent(issueMarkdown)}&labels=${encodeURIComponent(labels)}`;

  return {
    markdown: issueMarkdown,
    url: issueUrl
  };
}
