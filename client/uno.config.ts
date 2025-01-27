import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-2 rounded-md text-white bg-primary'],
    ['card', 'p-6 bg-white shadow-lg rounded-lg'],
    ['container', 'mx-auto px-4'],
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: 'var(--color-primary)', // Your primary color
        50: 'var(--color-primary-50)',      // Lightest shade
        100: 'var(--color-primary-100)',
        200: 'var(--color-primary-200)',
        300: 'var(--color-primary-300)',
        400: 'var(--color-primary-400)',
        500: 'var(--color-primary-500)',     // Base primary color
        600: 'var(--color-primary-600)',     // Darker shades
        700: 'var(--color-primary-700)',
        800: 'var(--color-primary-800)',
        900: 'var(--color-primary-900)',     // Darkest shade
      },
    },
    fontFamily: {
      body: ['Vazirmatn', 'Poppins', 'sans-serif'],
    },
  },
  presets: [presetUno(), presetAttributify(), presetIcons(), presetTypography(), presetWebFonts()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
