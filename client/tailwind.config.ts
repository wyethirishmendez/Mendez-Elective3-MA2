import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif']
      }
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        marketplace: {
          primary: '#e991b0',
          secondary: '#f4b8cc',
          accent: '#d46a95',
          neutral: '#3b3b3b',
          'base-100': '#ffffff',
          'base-200': '#fff0f5',
          'base-300': '#fdd6e5',
          info: '#2563eb',
          success: '#3f7d38',
          warning: '#c86f2b',
          error: '#b3261e'
        }
      }
    ]
  }
};

export default config;
