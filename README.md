个人博客主题
===

主题简介
===

主题采用了Litten大神的 [Yilia](https://github.com/litten/hexo-theme-yilia"爱的传送门") 主题,它简洁优雅，扁平风格，个人觉得非常棒。本站点在Yilia的基础上做了适当修改！

查看具体效果请点击 [爱的传送门](http://nundy.cn/"爱的传送门") !

------

目录介绍
===

项目的管理等附属文件
---

+ **.gitignore**  ：这是一个git的配置文件，定义了不列入git管理的文件
+ **.gitattributes**  :用于设置文件的对比方式（常用非文本文件）
+ **node_modules**  ：该文件夹是node.js的模块目录，备份时，通过.gitignore文件设置忽略了
+ **package.json**  : 项目的配置信息，定义了项目所需要的各个模块及其版本等信息，在包含该文件的根目录下，直接运行“npm install”命令而不指定某个模块，npm就会安装该文件中定义的所有模块
+ **.babelrc**  : babel配置文件
+ **.editorconfig**  :帮助开发者在不同的编辑器和IDE之间定义和维护一致的代码风格
+ **.eslintrc.js**  :VUE-CLI脚手架根目录下.eslintrc.js文件导出一个包含配置的对象
+ **.eslintignore**  :定义eslint忽略文件
+ **_config.yml**  :yml格式的主题配置信息
+ **webpack.config.js**  :webpack配置信息
+ **README.md**   ：项目说明文件

项目的主要源码文件
---

+ **source-src** ：源代码文件夹  
+ **source**  ：生成的目标文件夹，可以删除，由source-src文件打包生成
+ **layout**        ：布局ejs文件
+ **languages** ：语言信息文件夹

------

获取博客详细功能实现步骤，请点击 [爱的传送门](http://nundy.cn/"爱的传送门") ！