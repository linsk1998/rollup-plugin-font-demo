
import font from "rollup-plugin-font";
import {getCssFile,getCompatCssFile} from "rollup-plugin-font";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';
import del from 'rollup-plugin-delete';
import filesize from 'rollup-plugin-filesize';
import html from '@rollup/plugin-html';

async function template({ files, publicPath, title }){
	var index=files.js.find(item=>item.name=="index");
	return `\ufeff
<!doctype html>
<html lang="zh">
<head>
<meta charset="utf-8"/>
<title>${title}</title>
<link rel="stylesheet" href="${publicPath}fontawesome/font-awesome.css" />
<link rel="stylesheet" href="${publicPath}${getCssFile("iconfont")}" />
<!--[if lte IE 7]>
<link rel="stylesheet" href="${publicPath}${getCompatCssFile("ionicons")}" />
<![endif]-->
<!--[if gte IE 8]><!-->
<link rel="stylesheet" href="${publicPath}${getCssFile("ionicons")}" />
<!--><![endif]-->
<link rel="stylesheet" href="${publicPath}${getCssFile("fa5")}" />
</head>
<body>
	<script src="${publicPath}${index.fileName}"></script>
</body>
</html>`;
};
export default {
	input: './src/index.js',
	output: {
		//file: './dist/index.js',
		dir:'./dist',
		format: 'iife',
		assetFileNames:"assets/[name].[hash][extname]",
		chunkFileNames:"[name].[hash].js",
		entryFileNames:"[name].js"
	},
	plugins: [
		del({ targets: 'dist/*' }),
		resolve(),
		commonjs(),
		font({
			"svg":"./node_modules/font-awesome/fonts/fontawesome-webfont.svg",
			"include": [
				"node_modules/fontawesome/**"
			],
			"css":{
				"name":"font-awesome",
				"include":["node_modules/font-awesome/css/font-awesome.css"],
				"prefix":"fa-",
				"common":"fa"
			},
			"outDir":"fontawesome"
		}),
		font({
			"svg":"./src/font/iconfont.svg",
			"unicode":{
				"include":["src/font/iconfont.woff"],
				"prefix":"unicode-"
			},
			"css":{
				"include":["src/font/iconfont.css"],
				"prefix":"icon-",
				"common":"iconfont"
			}
		}),
		font({
			"svg":"./node_modules/ionicons/fonts/ionicons.svg",
			"unicode":{
				"include":["node_modules/ionicons/fonts/ionicons.woff"]
			},
			"css":{
				"include":["node_modules/ionicons/css/ionicons.css"],
				"compat":true
			},
			whiteList:["ion-alert"]
		}),
		font({
			"svg":"./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.svg",
			"name":"fa-regular-400",
			"css":{
				"name":"fa5",
				"include":["node_modules/@fortawesome/fontawesome-free/css/all.css"],
				"common":"far",
				"prefix":"fa-"
			},
			"output":['svg', 'ttf', 'eot', 'woff', 'woff2']//为了公用css,去除了css输出
		}),
		font({
			"svg":"./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg",
			"name":"fa-solid-900",
			"css":{
				"name":"fa5",
				"include":["node_modules/@fortawesome/fontawesome-free/css/all.css"],
				"common":"fas",
				"prefix":"fa-"
			},
			"output":['svg', 'ttf', 'eot', 'woff', 'woff2','css']//最后输出css
		}),
		html({
			title:"ICON DEMO",
			template:template
		}),
		filesize()
	]
};