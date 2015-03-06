var ndarray = require('ndarray');
var show = require('ndarray-show');
var zeros = require('zeros');
var fill = require('ndarray-fill');

var c_fill = require('../lib/fill.js').fill;

var mat = zeros([100, 100]);

console.log( show(mat) );

var cmat = c_fill(mat, 10);

console.log( show(cmat) );
