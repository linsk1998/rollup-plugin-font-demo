
import font from "rollup-plugin-font";
import resolve from "rollup-plugin-node-resolve";
export default {
	input: './src/index.js',
	output: {
		file: './dist/index.js',
		format: 'iife'
	},
	plugins: [
		resolve(),
		font({
			"include": [
				"node_modules/fontawesome-solid/**"
			],
			"svg":"./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg",
			"outDir":"./dist/webfonts"
		})
	]
};