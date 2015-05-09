###animore平台 动效demo 开发者规范：

- demo提供的环境：jquery，animate.css，reset.css。
- demo的目录结构：所有动效demo都放在tmpl中，并把相对于tmpl的html路径配置到ini.js中，
			    推荐目录结构如：sz/hd-1.html(即思竹、辉达-1.html), sz/em-1.html。

- demo的html、style必须放在一个class为container的div内(只load了container内的内容)。
- demo的js：如果有的话，js不能直接写在html里,js文件与html同名,
  路径写在container的jsUrl属性上,不需加.js，相对于tmpl，如jsUrl="sz/hd-1"。

- 每一个demo的css必须在唯一的命名空间内书写（防止影响其他demo），
  命名规则为：目录名-html文件名 css名, 如：.sz-hd-1 .title {}。
  keyframes也应命名唯一，目录名-文件名-动画名，如@keyframes "mz-mz-circle-half-rotate" {}，
  请优先使用animate里的动效。
- 每一个demo的js必须不能影响其他demo，请使用闭包。

- demo的container上请写上设计师，开发师，兼容性。
  如：designer="辉达" developer="思竹" browser="Chrome、Firefox、Safari"
- demo的container上请不要写任何非行内样式。给每个demo提供的展示宽度为190px，高度请自行设定，若不设定将不能正常展示。