import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
// import { VitePWA } from "vite-plugin-pwa";

const basePage = "/";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
    }),
    // VitePWA({
    //   registerType: "autoUpdate",
    //   manifest: {
    //     name: "Solitaire Home Consultant",
    //     short_name: "Solitaire",
    //     start_url: basePage,
    //     display: "standalone",
    //     background_color: "#d8d2c6",
    //     theme_color: "#000000",
    //     // icons: [
    //     //   {
    //     //     src: "/images/icon-192x192.png",
    //     //     sizes: "192x192",
    //     //     type: "image/png",
    //     //   },
    //     //   {
    //     //     src: "/images/icon-512x512.png",
    //     //     sizes: "512x512",
    //     //     type: "image/png",
    //     //   },
    //     // ],
    //   },
    //   workbox: {
    //     // you can customize the workbox options here
    //   },
    // }),
  ],
  base: `${basePage}`, // Set the base path for your app
  // build: {
  //   rollupOptions: {
  //     input: {
  //       home: "./src/pages/Home/index.tsx",
  //       location: "./src/pages/Location/index.tsx",
  //       property: "./src/pages/Property/index.tsx",
  //     },
  //   },
  // },
});
