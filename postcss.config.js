import autoprefixer from "autoprefixer";
// import purgecss from "@fullhuman/postcss-purgecss";
export default {
  plugins: [
    autoprefixer(),
    // purgecss({
    //   content: ["./dist/**/*.html", "./dist/**/*.{js,jsx}"], // Adjust this according to your project structure
    //   // Other PurgeCSS options...
    // }),
  ],
};
