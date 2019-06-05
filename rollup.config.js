import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import fileSize from 'rollup-plugin-filesize'
import {uglify} from 'rollup-plugin-uglify'

const input = 'src/index.js'
const plugins = [
  resolve(),
  commonjs(),
  fileSize(),
  babel( {
    exclude: 'node_modules/**',
    babelrc: false,
    presets: [['@babel/env', { modules: false }]],
  })
]

export default [{
  input,
  output:{
    file: './dist/shield.js',
    exports:'named',
    format: 'cjs'
  },
  plugins
},{
  input,
  output:{
    file: './dist/shield.min.js',
    exports:'named',
    format: 'cjs'
  },
  plugins:plugins.concat(uglify())
}];
