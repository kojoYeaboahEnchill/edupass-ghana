import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Fixed the package name here

export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: true // This allows any host, including your Render URL
  }
})
