import {defineConfig} from "vite"
import {viteSingleFile} from "vite-plugin-singlefile"

export default defineConfig({
  plugins: [viteSingleFile()],
  root: "./",
  publicDir: "assets",
  build: {
    outDir: "dist"
  },
  server: {
    open: true,
  },
})
