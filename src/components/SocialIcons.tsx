import type { ReactElement } from 'react';

export const socialIcons: Record<string, ReactElement> = {
  Facebook: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-8.06h2.7l.4-3.14h-3.1V7.83c0-.91.25-1.53 1.56-1.53h1.66V3.5c-.29-.04-1.27-.12-2.4-.12-2.38 0-4.01 1.45-4.01 4.11v2.3H7.6v3.14h2.71V21h3.19z" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M12 8.4a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2zm0 5.94a2.34 2.34 0 1 1 0-4.68 2.34 2.34 0 0 1 0 4.68zM17.8 3H6.2A3.2 3.2 0 0 0 3 6.2v11.6A3.2 3.2 0 0 0 6.2 21h11.6a3.2 3.2 0 0 0 3.2-3.2V6.2A3.2 3.2 0 0 0 17.8 3zm1.95 14.8a1.95 1.95 0 0 1-1.95 1.95H6.2a1.95 1.95 0 0 1-1.95-1.95V6.2A1.95 1.95 0 0 1 6.2 4.25h11.6a1.95 1.95 0 0 1 1.95 1.95v11.6zM16.95 6.3a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
    </svg>
  ),
  TikTok: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M16.6 3h-3.2v12.3a2.6 2.6 0 1 1-1.87-2.5v-3.28a5.87 5.87 0 1 0 5.07 5.82c0-.14 0-.28-.01-.42a6.58 6.58 0 0 0 3.6 1.06V12.7a4.7 4.7 0 0 1-3.6-1.77c-.63-.7-.9-1.46-1-2.03V3z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M5.2 3.5a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4zM3.4 9h3.6v11.5H3.4V9zm5.8 0h3.45v1.57h.05c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.34 2.41 4.34 5.54v6.24h-3.6v-5.53c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.93v5.62H9.2V9z" />
    </svg>
  ),
};
