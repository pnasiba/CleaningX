
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@containers": path.resolve(__dirname, "./src/components/containers"),
      "@images": path.resolve(__dirname, "./src/assets/images"),
      "@ui": path.resolve(__dirname, "./src/components/UI"),
      "@ui-layout": path.resolve(__dirname, "./src/components/layouts"),
      "@layout": path.resolve(__dirname, "./src/layout"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@router": path.resolve(__dirname, "./src/router"),
      "@service": path.resolve(__dirname, "./src/service"),
      "@axios": path.resolve(__dirname, "./src/service/axios"),
    },
  },
});
