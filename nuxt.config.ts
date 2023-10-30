// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts',
    ],
    buildModules: [
        '@nuxtjs/style-resources'
    ],
    googleFonts: {
        families: {
            Poppins: [400, 500, 700, 800]
        }
    },
    css: [
        '~/assets/scss/fonts.scss',
    ],
    preset: 'netlify',
    target: 'static',
})
