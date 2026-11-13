// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://portfolio-two-roan-30.vercel.app',
  vite: {
    plugins: [tailwindcss()],
  },
});