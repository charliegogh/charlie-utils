// import { terser } from 'rollup-plugin-terser' // 压缩js代码，包括es6代码压缩
import commonjs from 'rollup-plugin-commonjs' // 适配cjs
// import { eslint } from 'rollup-plugin-eslint';
export default {
    input: './lib/index.js',
    output: {
        file: 'dist/index.js',
        format: 'umd',
        name:'charlie-utils'
    },
    plugins: [
        commonjs(),
        // eslint()
        // terser(),
    ]
}
