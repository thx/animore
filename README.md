###animore平台 动效demo 贡献者规范：

* demo的目录结构：
    - 所有动效demo都放在 animore/demos/tmpls 中，并配上相应的png预览图，预览图建议宽度为220px左右, 目录结构：sz/hd-xxx.html(即思竹、辉达-xxx.html), sz/em-xxx.html,demo宽度不限。
    - 所有的设计gif动态图都放在 animore/demos/gifs 中，不需要png预览图设计师的gif图片，gif图建议宽度为220px左右， 用 花名-xxx.gif 的方式去标明设计师。

* demo的js/css：请直接写在页面里，链接的文件不支持及时修改运行，类库文件可链接。

* demo必须有个id为container的元素。
    - 并在该元素上写上`设计师`、`开发师`、`兼容性`，用`行内样式`写上width、height。 
    - 如：style="width:220px;height:250px;" designer="辉达" developer="思竹" browser="Chrome、Firefox、Safari"



###animore平台开发者规范：
* npm install
* bower install