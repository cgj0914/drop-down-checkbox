# drop-down-checkbox

基于vue的下拉多选框组件

## 使用

安装
``` bash
npm install drop-down-checkbox -S
```

全局应用组件
``` javascript
import DropDownCheckbox from 'drop-down-checkbox'
Vue.use(DropDownCheckbox)
```

使用组件
``` html
<div>
    <drop-down-checkbox :checkList='checkList' :existingData='existingData' @returnData='getData'/>
</div>
```

组件属性
```
checkList: 下拉列表的固有数据
existingData: 已经被选中的数据
returnData: 选择结束后返回数据
```

组件方法 
```
returnData: 调用返回数据
```

## 效果
![image](https://raw.githubusercontent.com/cgj0914/drop-down-checkbox/master/checkboxImg.jpg)
