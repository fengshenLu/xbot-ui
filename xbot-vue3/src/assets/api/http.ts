/*
  @Author: lize
  @Date: 2021/6/25
  @Description :
  @Parames :
  @Example :
  @Last Modified by: lize
  @Last Modified time: 2021/6/25
*/
// @ts-ignore
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { message } from 'ant-design-vue'
// import appConfig from '@/assets/utils/appConfig'
import { utilsTools } from '@/assets/utils/utilsTools'
// @ts-ignore
import JOSNBig from 'json-bigint'
// let CommunicationProtocol = null
// const { __CBIM_PLATFORM_APPLICATION_BOOT_DATA__ } = window as any
// const pix = __CBIM_PLATFORM_APPLICATION_BOOT_DATA__.serverHost || ''
// const isDev = process.env.NODE_ENV === 'development'
// const serviceValue = sessionStorage.getItem('serviceValue')
// const suffix = isDev ? serviceValue || '' : ''

const Http = axios.create({
  // baseURL: `https://devknowledge.cbim.org.cn/api/frontend`, // api请求的baseURL
  // baseURL: appConfig.RESOURCE_API, // api请求的baseURL
  timeout: 600000,
  withCredentials: true, // 允许跨域 cookie
  headers: {
    'Content-Type': 'application/json'
  },
  maxContentLength: 2000,
  /**
   * 解决后端接口不见大数处理成字符串的问题
   */
  transformResponse: [
    (data: any) => {
      try {
        return JOSNBig.parse(data)
      } catch (error) {
        return data
      }
    }
  ]
})
// 请求拦截器
Http.interceptors.request.use(
  (config: any) => {
    // config.headers.entId = CommunicationProtocol?.globalStoreData?.workspace?.workspaceMetaData?.id || __CBIM_PLATFORM_APPLICATION_BOOT_DATA__.entId || ''
    // config.headers.accountId =
    //     CommunicationProtocol?.globalStoreData?.workspace?.workspaceMetaData?.accountId || __CBIM_PLATFORM_APPLICATION_BOOT_DATA__.accountId || ''
    // // config.headers.entId = CommunicationProtocol?.globalStoreData?.workspace?.workspaceMetaData?.id || __CBIM_PLATFORM_APPLICATION_BOOT_DATA__.entId || ''
    // config.headers.appCode = appConfig.appCode
    // 请求资源平台的固定参数，标识请求来源
    config.headers.applicationName = 'microApplication'
    config.headers.sessionkey = utilsTools.cookie.get('SESSION') || utilsTools.cookie.get('CBIM-SESSION')
    config.headers.session = utilsTools.cookie.get('SESSION') || utilsTools.cookie.get('CBIM-SESSION')
    return config
  },
  (err: AxiosRequestConfig) => Promise.reject(err)
)
Http.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200) {
      if (response.config.responseType === 'blob' || response.config.responseType === 'arraybuffer') {
        return new Promise(resolve => {
          const result = utilsTools.dealBlob(response)
          result.then((data: any) => {
            if (!data.success) {
              message.error(data.errMessage)
            } else {
              resolve(data)
            }
          })
        })
      }
      if (response.data.code === '802' || response.data.code === 802) {
        // if (CommunicationProtocol && CommunicationProtocol.mircoACP) {
        //     CommunicationProtocol.logout()
        // } else {
        //     // window.location.href = `${response.data.errMessage}`
        // }
        return
      }
      // if (!response.data.success) {
      //     message.error(response.data.errMessage || '')
      // }
      return response.data
    }
    if (response.status === 400) {
      message.error(response.data.errMessage || '')
      // return
    }
  },
  (err: AxiosResponse) => {
    // message.error('服务器错误，错误代码500！')
    return Promise.reject(err)
    // return { success: false }
  }
)
export { Http }

export default {
  async install (app: any) {
    // eslint-disable-line
    app.config.globalProperties.$Http = Http
  }
}
