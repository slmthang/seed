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
                'light-surface-0': '#fafafa', // F6F9FC
                'light-surface-1': '#efefef',
                'light-surface-2': '#fff',
                'light-error': '#b10000',

                // text colors
                'light-text-1': '#232323',
                'light-text-2': '#656565',
                'light-text-3': '#848484',

                // border
                'light-border': '#e7e7e7'
            },

            strokeWidth: {
                '1.5': '1.5px'
            }
        }
    },
    plugins: []
};
export default config;
