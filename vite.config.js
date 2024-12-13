import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/helados-estrella/",
  // server: {
  //   host: "0.0.0.0",
  //   port: 3000,
  // },
});
