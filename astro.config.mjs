import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://nguyenmanh1507.github.io',
  base: '/tos-pp-collections'
})
