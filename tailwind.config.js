/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'sans' será a Inter (padrão do site)
        sans: ['Inter', 'sans-serif'],
        // 'display' será a Space Grotesk (usar em h1, h2, titulos)
        display: ['Space Grotesk', 'sans-serif'],
        // 'mono' será a JetBrains (usar em detalhes técnicos)
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        // Aqui definimos sua paleta personalizada para usar bg-brand-gold, text-brand-dark, etc.
        brand: {
          dark: '#020617',    // Slate 950
          primary: '#0B1B40', // Azul da Logo
          gold: '#C5A059',    // Dourado da Logo
          accent: '#00F0FF',  // Ciano Cyberpunk (Opcional)
        }
      }
    },
  },
  plugins: [],
}