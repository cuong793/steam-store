/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        primaryCustoms: process.env.PRIMARY_COLOR,
        secondaryCustoms: process.env.SECONDARY_COLOR,
        thirdCustoms: process.env.THIRD_COLOR,
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))'
        }
      },
      backgroundColor: {
        primary: process.env.PRIMARY_COLOR,
        secondary: process.env.SECONDARY_COLOR,
        primaryCustoms: process.env.PRIMARY_BACKGROUND_COLOR,
        secondaryCustoms: process.env.SECONDARY_BACKGROUND_COLOR,
        thirdCustoms: process.env.THIRD_BACKGROUND_COLOR
      },
      textColor: {
        main: process.env.MAIN_TEXT_COLOR,
        primaryCustoms: process.env.PRIMARY_TEXT_COLOR,
        secondaryCustoms: process.env.SECONDARY_TEXT_COLOR
      },
      borderColor: {
        primaryCustoms: process.env.PRIMARY_BORDER_COLOR,
        checkbox: process.env.CHECKBOX_BORDER_COLOR
      },
      ringColor: {
        primaryCustoms: process.env.PRIMARY_RING_COLOR
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
