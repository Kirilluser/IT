import { type Config } from 'tailwindcss';

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'theme-bg': 'var(--theme-bg)',
        'theme-accent': 'var(--theme-accent)',
        'theme-text': 'var(--theme-text)'
      }
    }
  },
  plugins: []
} satisfies Config;
