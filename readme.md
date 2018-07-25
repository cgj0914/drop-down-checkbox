# convenience-image

基于vue的图片加载组件

## 使用

安装
``` bash
npm install convenience-image -S
```

全局应用组件
``` javascript
var ConvenienceImage = require('convenience-image')
Vue.use(ConvenienceImage)
```

使用组件
``` html
 <div class="container">
    <convenience-image alignment="top-left" src-nor="http://img15.3lian.com/2015/f1/173/d/40.jpg" :src-err="defaultImg"/>
 </div>
```

组件属性
```
alignment: 图片的对齐方式(left/right/top/bottom/left-top)
srcNor: 要加载的图片
srcErr: 加载失败后显示的默认图片
```

## 效果
![image](https://github.com/kuangch/convenience-image/blob/master/screen.jpg)