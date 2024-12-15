import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            },

            colors: {
                // colors
                'dark-button-color': '#1d4ed8',
                'dark-surface-0': '#101010',
                'dark-surface-1': '#161616',
                'dark-surface-2': '#232323',
                'dark-surface-3': '#353535',
                'dark-surface-4': '#646464',
                'dark-error': '#CF6679',

                // text colors
                'dark-text-1': '#cfcfcf',
                'dark-text-2': '#b9b9b9',
                'dark-text-3': '#aeaeae',
                'dark-text-on-primary': '#121212',
                'dark-text-on-secondary': '#121212',
                'dark-text-on-background-1': '#D2D2D2',
                'dark-text-on-background-2': '#979797',
                'dark-text-on-surface-1': '#D2D2D2',
                'dark-text-on-surface-2': '#979797',
                'dark-text-on-error': '#121212',
                'dark-error-text': '#CF6679',

                // border
                'dark-border': '#303030'
            },

            strokeWidth: {
                '1.5': '1.5px'
            }
        }
    },
    plugins: []
};
export default config;
