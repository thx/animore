npm install
bower install


###animore平台 动效demo 开发者规范：

- demo的目录结构：所有动效demo都放在 animore/demos/tmpls 中，并配上相应的png预览图，预览图建议宽度为220px，目录结构：sz/hd-xxx.html(即思竹、辉达-xxx.html), sz/em-xxx.html。

                所有的设计gif动态图都放在 animore/demos/gifs 中，不需要png预览图，
                设计师的gif图片，gif图建议宽度为220px，用 花名-xxx.gif 的方式去标明设计师。

- demo的js/css：请直接写在页面里，链接的文件不支持即时修改运行，引用的类库等代码可链接。

- demo必须有个id为container的元素。并在该元素上写上设计师、开发师、兼容性，用行内样式写上width、height。 
  如：style="width:220px;height:250px;" designer="辉达" developer="思竹" browser="Chrome、Firefox、Safari"
