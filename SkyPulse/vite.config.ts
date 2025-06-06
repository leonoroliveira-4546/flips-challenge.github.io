import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig({
  plugins: [angular()],
  base: '/leonoroliveira-4546/flips-challenge.github.io', 
});