###animore平台 动效demo 代码规范：

- demo的目录结构：文件夹名是依次递增的数字，文件夹内有同名的html文件作为demo入口
- demo的html、style必须放在一个class为container的div内(只load了container内的内容),style设上scoped属性
- demo的js的路径写在container的jsUrl属性上，相对于自己的目录
- 每一个demo的css必须在唯一的命名空间内书写,
- 每一个demo的js必须不能影响其他demo