import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'dark-graf-bgmain': '#111217',
        'dark-graf-nav':'#181B1F'
      },
    }
  },
  plugins: [],
}
export default config
