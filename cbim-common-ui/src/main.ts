import './public-path'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Antd from 'ant-design-vue'
import '@/assets/css/reset.css'
import '@cbim/design-system-antd-adapter/vue.less'
import '@cbim/design-system-variable/index.css'
import App from './App.vue'
import routes from './router'
import store from './store'
import { microAcp } from '@/assets/global'
// @ts-ignore
import utilsTools from '@/assets/utils/utilsTools'
import taskCard from 'xbotui-vue3-antd'
import 'xbotui-vue3-antd/libs/xbotui-vue3-antd.css'
const $rootId = '#common-tools'
let instance: any = null
let router = null

function render (props: mountProps = { container: '', registry: { activeRule: '' } }) {
  const { container, registry } = props
  const { __CBIM_PLATFORM_APPLICATION_BOOT_DATA__ } = window as any
  const baseURL = registry ? (registry?.activeRule || __CBIM_PLATFORM_APPLICATION_BOOT_DATA__?.appRouter || '') : ''

  router = createRouter({
    history: createWebHistory(baseURL || process.env.BASE_URL),
    routes
  })

  console.log('[app will render]:', props)
  instance = createApp(App)
  instance
    .use(utilsTools)
    .use(store)
    .use(router)
    .use(Antd)
    .use(taskCard)
    .mount(container ? (container as any).querySelector($rootId) : $rootId)
}

export async function bootstrap () {
  console.log('[app is bootstraped!]')
}

export async function mount (props: any) {
  const {
    globalStore,
    // onGlobalStateChange,
    startMicroCbimAcp,
    commonToolPluginStore
  } = props

  const toolPropsData = (commonToolPluginStore && commonToolPluginStore.get()) || {}
  const { toolName } = toolPropsData as any

  /** 以工具模式进入的才会存在 commonToolPluginStore，toolName */
  if (commonToolPluginStore) {
    if (!toolName) {
      return
    }
    (microAcp as any).globalToolProps = {
      options: (props as any).props?.options,
      lifecycles: (props as any).props?.lifecycles,
      container: props.container,
      commonToolPluginStore
    }
  }

  (microAcp as any).acp = startMicroCbimAcp('')

  /** 主应用状态库变化 */
  globalStore.onGlobalStoreChange(([newData]: any) => {
    store.dispatch('setWorkspace', newData?.workspace)
  }, true)

  render(props)
  store.dispatch('setCurrentTool', toolName)

  return Promise.resolve()
}

export async function unmount () {
  console.log('[app is unmounted!]')
  // 应用卸载
  instance.unmount()
  instance = null
  router = null
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
  render()
}
