import taskCard from '../src/views/taskCard.vue'
const components = [taskCard]

const install = function (Vue) {
  // 遍历并注册组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install,
  ...components
}
