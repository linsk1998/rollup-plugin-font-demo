
var { readFileSync,writeFileSync } = require('fs');
var svg2ttf = require('svg2ttf');
var ttf2eot = require('ttf2eot');


var xml = readFileSync("./dist/assets/fa-solid-900.3929b921.svg");
//console.log(xml.toString());
var ttf = svg2ttf(xml.toString());
var eot = ttf2eot(ttf.buffer);

writeFileSync("./dist/assets/fa-solid-900.ae9cbf11.eot", Buffer.from(eot.buffer));