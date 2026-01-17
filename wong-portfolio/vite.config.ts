import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/Wong-Portfolio/",
  define: {
    __BASE_PATH__: JSON.stringify("/Wong-Portfolio/"),
  },
});
