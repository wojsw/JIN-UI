// const { definConfig, build } = require("vite")
// const vue = require("@vitejs/plugin-vue")
// const vueJsx = require("@vitejs/plugin-vue-jsx")
// const path = require("path")
import { defineConfig, build } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import fsExtra from "fs-extra"

import path from "path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// 基础配置
const baseConfig = defineConfig({
  configFile: false, // 配置文件
  publicDir: false, // 公共目录
  plugins: [vue(), vueJsx()]
})

// 入口文件
const entryFile = path.resolve(__dirname, "./entry.ts")

// 按需打包 - 组建目录
const componentsDir = path.resolve(__dirname, "../src")

// 输出目录
const outputDir = path.resolve(__dirname, "../build")

// rollup 配置
const rollupOptions = {
  // 外置
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "vue" // umd IIFE
    }
  }
}

// 执行创建

// 全量构建
const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: entryFile,
          name: "jin-ui",
          fileName: "jin-ui",
          formats: ["es", "umd"]
        },
        outDir: outputDir
      }
    })
  )
}

// 单组件按需构建
const buildSingle = async name => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: path.resolve(componentsDir, name),
          name: "index",
          fileName: "index",
          formats: ["es", "umd"]
        },
        outDir: path.resolve(outputDir, name)
      }
    })
  )
  createPackageJson(name)
}

const createPackageJson = name => {
  const fileStr = `{
    "name": "${name ? name : "jsw-ui"}",
    "version": "0.0.1",
    "main": "${name ? "index.umd.js" : "jin-ui.umd.js"}",
    "module": "${name ? "index.js" : "jin-ui.js"}",
    "author": "金生旺",
    "github": "",
    "description": "",
    "repository": {
      "type": "git",
      "url": ""
    },
    "keywords": ["vue3", "组件库", "tsx", "UI"],
    "license": "ISC",
    "bugs": {
      "url": ""
    }
  }`
  if (name) {
    fsExtra.outputFile(
      path.resolve(outputDir, `${name}/package.json`),
      fileStr,
      "utf-8"
    )
  } else {
    fsExtra.outputFile(
      path.resolve(outputDir, "package.json"),
      fileStr,
      "utf-8"
    )
  }
}

const buildlib = async () => {
  await buildAll()

  fsExtra
    .readdirSync(componentsDir)
    .filter(name => {
      // 过滤组件目录：只要目录不要文件，且目录中包含index.ts
      const componentDir = path.resolve(componentsDir, name)
      const isDir = fsExtra.lstatSync(componentDir).isDirectory()
      return isDir && fsExtra.readdirSync(componentDir).includes("index.ts")
    })
    .forEach(async name => {
      await buildSingle(name)
    })

  createPackageJson()
}

buildlib()
