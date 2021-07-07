尝试从零模仿实现一个ui库

格式化vue文件
If you want to run eslint from the command line, make sure you include the .vue extension using the --ext option (opens new window)or a glob pattern, because ESLint targets only .js files by default.
example:
eslint --ext .js,.vue src
eslint "src/**/*.{js,vue}"