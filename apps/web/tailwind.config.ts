import type { Config } from 'tailwindcss';
import presets from '@repo/ui/tailwind.config.ts';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}', '../../packages/ui/src/**/*.{html,js,svelte,ts}'],
	presets: [presets],

	theme: {
		extend: {}
	},

	plugins: []
} satisfies Config;
