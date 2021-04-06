'use strict';

import path from 'path';

export const mode = 'development';
export const entry = './src/js/script.js';
export const output = {
  filename: 'bundle.js',
  path: __dirname + '/dist/js'
};
export const watch = true;
export const devtool = "source-map";
