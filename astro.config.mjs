import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';

export default defineConfig({
  base: '/',
  trailingSlash: 'ignore',
  integrations: [
    tailwind(),
    alpinejs()
  ]
});