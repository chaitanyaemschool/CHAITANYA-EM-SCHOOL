/**
 * Official brand marks as crisp, retina-perfect vectors (transparent, no
 * coloured plates). Same viewBox and optical weight so every icon renders at
 * an identical size in the footer and floating dock.
 */

type P = { className?: string };

export function FacebookMark({ className }: P) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="24" fill="#1877F2" />
      <path
        fill="#fff"
        d="M32.5 24H27v16h-6.6V24H16v-6h4.4v-4.1c0-4.4 2.6-7.1 7.2-7.1 2.1 0 4 .2 4.5.2v5.2h-3.1c-2 0-2.4 1-2.4 2.4V18h5.6l-.7 6Z"
      />
    </svg>
  );
}

export function InstagramMark({ className }: P) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="ig-g" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="48" height="48" rx="13" fill="url(#ig-g)" />
      <rect
        x="10.5"
        y="10.5"
        width="27"
        height="27"
        rx="8.5"
        fill="none"
        stroke="#fff"
        strokeWidth="3.2"
      />
      <circle cx="24" cy="24" r="6.6" fill="none" stroke="#fff" strokeWidth="3.2" />
      <circle cx="33.2" cy="14.8" r="2.1" fill="#fff" />
    </svg>
  );
}

export function WhatsAppMark({ className }: P) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="24" fill="#25D366" />
      <path
        fill="#fff"
        d="M33.6 14.3A13.5 13.5 0 0 0 12.4 30.6L10.5 38l7.6-2a13.5 13.5 0 0 0 6.4 1.6h.01c7.44 0 13.5-6.05 13.5-13.5 0-3.6-1.4-7-3.9-9.5Zm-9.1 20.8a11.2 11.2 0 0 1-5.7-1.6l-.4-.24-4.5 1.18 1.2-4.4-.27-.45a11.22 11.22 0 1 1 20.83-5.8c0 6.2-5.04 11.3-11.16 11.3Zm6.15-8.4c-.34-.17-2-.98-2.3-1.1-.3-.11-.53-.17-.75.17s-.86 1.1-1.05 1.32c-.2.23-.39.26-.72.09-.34-.17-1.42-.53-2.7-1.68-1-.9-1.67-1.99-1.87-2.32-.2-.34-.02-.52.15-.69.15-.15.34-.4.5-.6.17-.2.23-.34.35-.57.11-.23.06-.43-.03-.6-.09-.17-.75-1.82-1.03-2.49-.27-.65-.55-.56-.75-.57l-.64-.01c-.23 0-.6.08-.9.43-.32.34-1.2 1.17-1.2 2.85s1.23 3.3 1.4 3.53c.17.23 2.42 3.7 5.87 5.19.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.14.66-.1 2.03-.83 2.32-1.63.28-.8.28-1.49.2-1.63-.09-.15-.31-.23-.65-.4Z"
      />
    </svg>
  );
}

export function YouTubeMark({ className }: P) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#FF0000"
        d="M45.5 15.7a5.6 5.6 0 0 0-3.94-3.96C38.06 10.8 24 10.8 24 10.8s-14.06 0-17.56.94A5.6 5.6 0 0 0 2.5 15.7C1.56 19.2 1.56 24 1.56 24s0 4.8.94 8.3a5.6 5.6 0 0 0 3.94 3.96c3.5.94 17.56.94 17.56.94s14.06 0 17.56-.94a5.6 5.6 0 0 0 3.94-3.96c.94-3.5.94-8.3.94-8.3s0-4.8-.94-8.3Z"
      />
      <path fill="#fff" d="M19.5 30.7 31.2 24 19.5 17.3v13.4Z" />
    </svg>
  );
}

export const BRAND_MARKS = {
  facebook: FacebookMark,
  instagram: InstagramMark,
  whatsapp: WhatsAppMark,
  youtube: YouTubeMark,
};
