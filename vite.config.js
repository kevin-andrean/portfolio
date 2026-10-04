import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import content from './src/data/content.js'

export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'portfolio-metadata',
      transformIndexHtml(html) {
        return html.replace('%TITLE%', content.seo.title).replace('%DESCRIPTION%', content.seo.description)
      },
    },
  ],
})