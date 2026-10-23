import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages project site: https://rahul-net.github.io/rahul-rupthi-wedding-invitation/
export default defineConfig({
  plugins: [react()],
  base: "/rahul-rupthi-wedding-invitation/",
});
