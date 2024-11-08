import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { stripper } from 'vite-plugin-stripper';
import path from 'path';

export default defineConfig({
	plugins: [stripper({ decorators: ['BackendMethod'] }), sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	build: {
		commonjsOptions: {
			include: [/@repo\/ui/, /node_modules/]
		}
	},
	resolve: {
		alias: {
			'@repo/ui': path.resolve('../../packages/ui/src')
		}
	},
	server: {
		proxy: {
			'/api': {
				target: 'http://localhost:3491'
			}
		}
	}
});
