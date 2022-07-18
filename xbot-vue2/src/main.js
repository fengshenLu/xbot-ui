import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router';
import routes from "@/router";
import Element from 'element-ui'
import 'element-ui/packages/theme-chalk/src/index.scss'
Vue.config.productionTip = false
Vue.use(Element)
Vue.use(Router)
const router = new Router({
  /**
   * 按实际模式修改
   */
  mode: 'hash',
  // 运行在主应用中时，添加路由命名空间 /vue/
  // base: window.__POWERED_BY_QIANKUN__ ? process.env.VUE_APP_PUBLIC_PATH : '/',
  base: "/",
  routes: routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
