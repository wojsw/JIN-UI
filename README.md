# vite 脚手架
pnpm create vite

# eslint、prettier 代码规范
安装 npx eslint --init

配置 lint命令 eslint . --ext .js,.ts,.tsx,.vue --fix

安装 pnpm i -D prettier eslint-plugin-prettier eslint-config-prettier

在 .eslintrc.js extends 中添加 plugin:prettier/recommended

配置 .prettierrc.js

# husky 

安装 npx mrm@2 lint-staged

# 自动化文档

pnpm i -D vitepress

安装一个插件 pnpm i -D vitepress-theme-demoblock

# 样式体系

pnpm install -D sass tailwindcss postcss autoprefixer

npx tailwindcss init -p

variable.scss 全局样式变量（src目录下）

xx-base.scss 基本配置 

xx-config.scss 根据不同参数生成不同配置

# tsx in vue

pnpm i @vitejs/plugin-vue-jsx -D

配置vite.config.ts

# 单元测试

pnpm i -D vitest happy-dom @testing-library/vue

vite.config.ts 配置

# 全量打包 按需打包

script/build.js script/entry.ts 配置vite构建选项

# 发布组件到npm

npm config set https://registry.npmjs.org

npm adduser

npm login

npm publish

chmod +x publish.sh;./publish.sh; 配置脚本

# cli开发

pnpm i -D commander inquirer fs-extra kolorist

commander 命令

inquirer 交互

kolorist 颜色

fs-extra 操作文件系统