import { defineConfig } from 'vite'
import react from '@vitejs/react-plugin' // or vue, etc., depending on your framework

export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ['pharmtech-ngin.onrender.com']
  }
})
