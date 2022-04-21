import { terser } from 'rollup-plugin-terser'

export default {
    input: './tree2.js',
    output: {
        file: 'dist/tree.js',
        format: 'umd'
    },
    plugins: [
        terser()
    ]
}
