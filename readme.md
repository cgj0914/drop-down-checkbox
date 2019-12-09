# drop-down-checkbox

基于vue的下拉多选框组件

## 使用

安装
``` bash
npm install drop-down-checkbox -S
```

全局应用组件
``` javascript
import ConvenienceImage from 'convenience-image'
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
checkList: 下拉列表的固有数据
existingData: 已经被选中的数据
returnData: 选择结束后返回数据
```

## 效果
![image](https://raw.githubusercontent.com/kuangch/convenience-image/master/screen.jpg)
