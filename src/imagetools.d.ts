// Ambient module for vite-imagetools query imports.
// Any `?...&as=srcset` import resolves to a string.
declare module "*&as=srcset" {
  const src: string;
  export default src;
}