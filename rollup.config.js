import { terser } from 'rollup-plugin-terser' // 压缩js代码，包括es6代码压缩
import commonjs from 'rollup-plugin-commonjs' // 适配cjs node 适配
import resolve from '@rollup/plugin-node-resolve' // 允许加载第三方模块
import babel from 'rollup-plugin-babel';

// import { eslint } from 'rollup-plugin-eslint';
export default {
  input: './lib/index.js',
  output: {
    file: 'dist/app.js',
    // format: 'iife',
    // format: 'es',
    format: 'umd',
    name: 'xe-plugin'
  },
  plugins: [
    commonjs(),
    resolve(),
    // eslint(),
    babel({
      exclude: 'node_modules/**', // 不编译node_modules下的代码
      presets: [
        [
          '@babel/preset-env',
          {
            targets: '> 0.25%, not dead', // 目标浏览器
          },
        ],
      ],
    }),
    terser()
  ],
  // external: ['moment']
}
