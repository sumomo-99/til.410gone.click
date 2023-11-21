import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ja-JP',
  title: 'til.410gone.click',
  description: 'Today I Learned.',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'すべての記事', link: '/all-posts' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sumomo-99' },
      { icon: 'x', link: 'https://twitter.com/sumomo_99' }
    ],

    footer: {
      copyright: '© 2023 sumomo-99'
    },

    lastUpdated: true
  }
})
