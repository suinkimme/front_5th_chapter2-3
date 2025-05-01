/// <reference types="vitest" />
import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
  },
  base: process.env.NODE_ENV === "production" ? "/front_5th_chapter2-3/" : "/",
})
