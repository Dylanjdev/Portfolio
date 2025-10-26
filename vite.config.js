import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "https://github.com/Dylanjdev/Portfolio", // MUST match your GitHub repo name
  plugins: [react()],
});
