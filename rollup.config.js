import { terser } from 'rollup-plugin-terser' // 压缩js代码，包括es6代码压缩
import commonjs from 'rollup-plugin-commonjs' // 适配cjs node 适配
import resolve from '@rollup/plugin-node-resolve' // 允许加载第三方模块
import { babel } from '@rollup/plugin-babel' // 兼容性转换
import alias from '@rollup/plugin-alias'
import gzipPlugin from 'rollup-plugin-gzip'
const json = require('rollup-plugin-json') // import 支持
import less from 'rollup-plugin-less'
// import { eslint } from 'rollup-plugin-eslint'
export default {
  input: './x/sdk/app.js',
  // input: './x/Screenshot/app.js',
  output: {
    file: 'x/sdk/test/x-sdk.js',
    format: 'umd',
    name: 'xsdk'
  },
  plugins: [
    json(),
    commonjs(),
    resolve({
      browser: true
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**'
    }),
    alias({
      entries: [
        { find: 'axios', replacement: 'node_modules/axios/dist/axios.js' }
      ]
    }),
    terser(),
    gzipPlugin(),
    less({ insert: true })
    // eslint()
  ],
  external: ['moment']
}
