/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        garibaldi: {
          navy: {
            800: '#1E2A4A',  // Темно-синий для элементов
            900: '#0F172A',  // Основной темно-синий
            950: '#0A1120'   // Очень темный синий
          },
          gold: {
            100: '#FEF3C7',  // Светло-золотой (фон)
            400: '#FBBF24',  // Яркий золотой
            500: '#D4A017',  // Основной золотой (как на лого)
            600: '#B78F14'   // Темный золотой
          },
          accent: {
            red: '#C8102E',  // Красный акцент (как у Гарибальди)
            white: '#FFFFFF'  // Чистый белый
          }
        },
        // Альтернативные названия для удобства
        chess: {
          dark: '#0F172A',       // garibaldi.navy.900
          light: '#FFFFFF',      // garibaldi.accent.white
          gold: '#D4A017',       // garibaldi.gold.500
          black: '#0A1120',      // garibaldi.navy.950
          gray: '#64748B'        // Стандартный slate-500
        }
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'garibaldi': ['"Times New Roman"', 'serif']  // Классический шрифт для заголовков
      },
      backgroundImage: {
        'garibaldi-pattern': "url('/src/assets/garibaldi-bg-pattern.png')" // Опционально: фоновый узор
      }
    },
  },
  plugins: [],
};