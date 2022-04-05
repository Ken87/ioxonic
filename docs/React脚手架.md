 React 脚手架
=================

[TOC]

##简介


----------


该脚手架是基于**`create-react-app`**基础上添加修改功能的一个脚手架。现有的功能有：
git仓库: `git@gitlab.stargt.com.my:frontend_developers_cn/h5-develop-framework.git`

 - [eslinc （代码规范检查）](https://github.com/eslint/eslint)   
 - [fetch （fetch请求数据）](https://github.com/github/fetch)
 - [mock （接口数据模拟）](https://github.com/nuysoft/Mock/wiki)
 - [webpack-dev-server （热更新）](https://github.com/webpack/webpack-dev-server)
 - [babel-plugin-import （模块按需加载）](https://github.com/ant-design/babel-plugin-import)
 - [react （前端框架）](https://github.com/facebook/react) 
 - [react-route （前端路由）](https://reacttraining.com/react-router/web)
 - [antd （react ui framework）](https://ant.design/docs/react/introduce-cn)
 - [rc-form （表单验证）](https://www.npmjs.com/package/rc-form)
 - scss-loader （编译scss）
 - [postcss](https://github.com/postcss/postcss) 
	 -  [autoprefixer （自动补全css）](https://github.com/postcss/autoprefixer)
 - [url-loader （图片大小控制，小于10Kb转base64）](https://github.com/webpack-contrib/url-loader)
 

-----------------------

##使用方法

 - 克隆完项目之后，安装依赖包
	>$ yarn install
	 
 - 常用命令
   > 运行开发者模式
   > $ yarn start        
   >  
   >  运行产品构建模式
   >  $ yarn build
   >   
   >   运行测试模式
   >   $ yarn test

-----------------------

##目录结构

###目录图

![enter image description here](https://lh3.googleusercontent.com/NXPZrvsIyYUEmRGuaeaTpyhIy2cHS-y48XSn9WRuZGqC6ADYG36WYSa1O4BsjI2sTLJ8TcKTQpQ=s500 "脚手架目录图")
  
### 目录解析

文件夹  |   文件夹描述
-------------------------------|
**`build`**    | 当执行 `yarn build` 命令后出现，存放编译后文件
**`config`**   | 存放`webpack`的配置文件 <br><br> `commonPlugins.js` 配置开发环境与生产环境共用的插件<br><br> `webpack.config.dev.js` 配置开发环境参数<br><br> `webpack.config.prod.js` 配置生产环境参数<br><br> `webpackDevServer.config.js` 配置webpack热更新本地服务器
**`mock`**     | 里面的 `api.js` 用于生成存放模拟数据
**`public`**   | 存放 index.html
**`scripts`**  | 存放命令启动脚本。`strat.js`为开发者模式，与命令`yarn start`对应，以此类推...
**`src`**      | 存放项目资源文件，注意规则<br><br>  `components` 存放项目组件<br><br>  `images` 存放项目图片<br><br>  `pages` 存放项目页面<br><br>   `App.js` 项目的路由  <br><br>`index.js` 项目的主入口文件


----------------------------

##规则
###src文件夹
只有src中的文件参与进热更新

----------------------------------------------

###Mock文件夹
![enter image description here](https://lh3.googleusercontent.com/S4zIc_gaZY3a8PeIFidzWZrBGK3d68uUmyg0bdxgsxOsG3KI60ZN7El5qvjQHpBtaNeS80kKkUk=s500 "mock规则")

字段名为`api`名，假如字段名为`test`，那么请求的时候请求`/api/test`，便能获取到对应的数据

对应的数据可使用自定义的json格式；或者使用Mock.js动态随机生成，具体生成方法参考[Mock.js文档](http://mockjs.com/)

**该文件数据不会加载到生产环境中，只用于开发环境**


---------------------------------------------


###components与pages文件夹
![enter image description here](https://lh3.googleusercontent.com/P-BtnFI9qgv5stJQ9XP8VMBZ0LJuP-8hBrcDRGXZPs04Wh46R9XfHTiyJjSnOxiv03pli1_bcIU=s500 "pages与components文件夹规则")

page规则一致，在目录下再以个独立组件划分文件夹，独立文件夹中存放js和css代码

例如上方截图home页面与personal页面独立划分一个文件夹，里面存放各自需要的js和css代码

---------------------------------------------

##bug总结

有待后面慢慢发现~~！

