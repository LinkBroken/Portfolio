// Polyfill for localStorage in SSR environment
if (typeof window === 'undefined') {
  (globalThis as typeof globalThis & { localStorage: typeof localStorage }).localStorage = {
    getItem: () => null,
    setItem: () => { },
    removeItem: () => { },
    clear: () => { },
    key: () => null,
    length: 0,
  };
}
