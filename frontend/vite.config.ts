import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  
    port: 10000,  
  },
  build: {
    outDir: 'dist', 
  },
});
