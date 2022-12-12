import { terser } from 'rollup-plugin-terser' // 压缩js代码，包括es6代码压缩
import commonjs from 'rollup-plugin-commonjs' // 适配cjs node 适配
import resolve from '@rollup/plugin-node-resolve' // 允许加载第三方模块
// import { eslint } from 'rollup-plugin-eslint';
export default {
  input: './lib/',
  output: {
    file: 'dist/app.js',
    format: 'umd',
    name: '_'
  },
  plugins: [
    commonjs(),
    resolve(),
    // eslint(),
    terser()
  ],
  external: ['moment']
}
