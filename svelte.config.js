import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess({})],

	kit: {
		// Deployed on Vercel. Pin the serverless functions to the Node 20 runtime.
		// See https://kit.svelte.dev/docs/adapter-vercel for more options.
		adapter: adapter({
			runtime: 'nodejs20.x'
		})
	}
};

export default config;
