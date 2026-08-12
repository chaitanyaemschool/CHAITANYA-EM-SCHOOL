import { defineConfig } from "@tanstack/react-start/config";

console.log("APP CONFIG LOADED"); export default defineConfig({
  server: {
    preset: "vercel",
  },
});
