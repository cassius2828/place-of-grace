import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//   if(mode)
//   plugins: [react()],
//   rules: {
//     "no-unused-vars": "warn",
//   },
// });

// export default defineConfig(({ mode }) => {
//   if (mode === "production") {
//     return {
//       base: "/vite/",
//       plugins: [react()],
//       rules: {
//         "no-unused-vars": "warn",
//       },
//     };
//   } else
//     return {
//       base: "/",
//       plugins: [react()],
//       rules: {
//         "no-unused-vars": "warn",
//       },
//     };
// });

export default defineConfig(() => {
  return {
    base: "/",
    plugins: [react()],
    rules: {
      "no-unused-vars": "warn",
    },
  };
});
