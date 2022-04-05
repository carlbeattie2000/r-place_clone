import scss from "rollup-plugin-scss";
import { terser } from "rollup-plugin-terser";

export default {
  input: 'src/js/index.js',
  output: {
    file: 'build/js/index.min.js',
    format: 'iife'
  },
  plugins: [
    scss({
      output: "build/css/bundle.min.css",
      include: ['src/scss/**/*.scss', 'src/scss/*.scss'],
      watch: 'src/scss/',
      outputStyle: "compressed",
      runtime: require("sass"),
    }),
    // terser()
  ]
};
