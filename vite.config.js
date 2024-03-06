import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'
import { optimizeCssModules } from 'vite-plugin-optimize-css-modules'
import preload from 'vite-plugin-preload'

export default defineConfig({
	plugins: [
		optimizeCssModules(),
		viteCompression({
			algorithm: 'gzip',
			ext: '.gz',
			filter: '/\.(js|mjs|json|css|html|bin|gltf)$/i',
			deleteOriginFile: true,
		}),
		preload()
	],
	server: {
		host: true,
		port: 8080,
	},
	build: {
		outDir: './build',
		reportCompressedSize: true,
		sourcemap: true,
		minify: 'esbuild',
		cssCodeSplit: true,
		rollupOptions: {
			output: {
				chunkFileNames: 'assets/js/[name]-[hash].js',
				manualChunks(id) {
					if (id.includes('node_modules')) {
						return id.toString().split('node_modules/')[1].split('/')[0].toString();
					}
				}
			},
		},
	},
})