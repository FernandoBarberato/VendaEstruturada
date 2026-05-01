export default defineNuxtConfig({
  compatibilityDate: '2026-05-01',
  css: ['~/assets/styles/main.css'],
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Venda estruturada',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&display=swap'
        }
      ]
    }
  }
})
