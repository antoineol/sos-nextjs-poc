import { type Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      container: {
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px', // 1024px
          xl: '1024px', // 1280px
          '2xl': '1024px', // 1536px
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;
