# xbotui-vue3-antd

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### libs
```
npm run lib
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### TODO Lists

- 组件库项目依赖：
    - antd: antd 组件库
    - vue: vue3.0

- 组件库引入方式：
    - npm i xbotui-vue3-antd
    - import taskCard from 'xbotui-vue3-antd'
    - import 'xbotui-vue3-antd/libs/xbotui-vue3-antd.css'
    - vue.use(taskCard)
- 组件使用方式：
  - taskCard
    - props {taskInfo, needButton ~~cardTaskOwnerClass~~}
      - taskInfo- 任务卡片信息 object 默认{}
      - needButton- 是否需要功能按钮列表气泡 Boolean 默认 false
      ~~- cardTaskOwnerClass- 自定义样式class 用于修改card样式~~
    - slot {buttonList} 功能按钮列表，需要配合:needButton = true使用  
    - method @titleClick 点击任务名自定义事件 默认返回参数taskInfo卡片信息
  -...
