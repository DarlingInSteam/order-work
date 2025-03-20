import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';

export default defineConfig({
  integrations: [
    tailwind({
      // Используем простую конфигурацию
      config: { path: './tailwind.config.mjs' }
    }),
    alpinejs()
  ]
});