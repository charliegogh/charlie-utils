import { terser } from 'rollup-plugin-terser' // 压缩js代码，包括es6代码压缩
import commonjs from 'rollup-plugin-commonjs' // 适配cjs
export default {
    input: './lib/index.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs'
    },
    plugins: [
        commonjs(),
        // terser(),
    ]
}
