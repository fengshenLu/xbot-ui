# xbotui-vue2-element

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
    - element: element 组件库
    - vue: vue2.0

- 组件库引入方式：
    - npm i xbotui-vue2-element
    - import taskCard from 'xbotui-vue2-element'
    - import 'xbotui-vue2-element/libs/xbotui-vue2-element.css'
    - vue.use(taskCard)
- 组件使用方式：
  - taskCard
    - props {taskInfo, needButton, cardTaskOwnerClass}
      - taskInfo- 任务卡片信息 object 默认{}
      - needButton- 是否需要功能按钮列表气泡 Boolean 默认 false
      - cardTaskOwnerClass- 自定义样式class 用于修改card样式
    - slot {buttonList} 功能按钮列表，需要配合:needButton = true使用
  -...
  