<h2>项目概况</h2>

````
    本项目是一个考试后台管理系统，有不同身份的用户，不同的身份对应的是不同的权限，
    里面主要有班级管理、试题管理、用户管理、考试管理；主要的是试题管理和用户管理，
    实现了查看试题、编辑试题、添加试题、试题详情，用户主要有添加新用户、设置用户身份、设置用户权限等。
 
````


<h2>技术栈</h2>

````
`vue3.0` `vuex` `vue-router-dom` `scss` `webpack` `flex` `ES6` `elemen-ui` 
````

<h2>项目运行</h2>

<h4>一、下载资源包</h4>

````
    //通过git
    git clone git@git.dev.tencent.com:hrbgss/kaoshixitonggit.git

    cd 目录

````

<h4>二、下载第三方包和插件</h4>

  
    //下载完项目后，需要在kaoshixitonggit目录中，cmd打开终端，执行：
       npm install   ——————npm i
    //下载所有依赖的第三方包和插件
  

<h4>三、运行服务</h4>

````
//在kaoshixitonggit目录下，打开终端执行：
npm run serve
````


<h2>项目结构</h2
  
>client——

>>>bulid—— 存放webpakc的配置文件,webpack, devServer,

>>>config——存放公共配置，设置的代理 proxy,host,port端口

>>>src——

>>>>>api——配置所有接口的目录——在index.

>>>>>components——存放所有公共的组件目录

>>>>>plugins——存放封装的全局组件——在index.

>>>>>router——存放配置路由表文件——在index.js中

>>>>>static——存放静态资源目录

>>>>>>>images——图片资源

>>>>>>>styles——项目样式目录

>>>>>store——状态管理库目录(仓库)

>>>>>>>index.js——配置文件

>>>>>>>moduls——模块目录

>>>>>utils——封装公共方法目录

>>>>>views——存放视图目录

>>>>>App.vue——视图出口文件,根组件

>>>>>main.js——项目入口文件

>>>package.json—— 项目用到的第三方包或者插件信息

>>>README.md ——说明文件

>>>vue.config.js ——配置文件

>>>babel.config.js ——配置element-ui按需加载





