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