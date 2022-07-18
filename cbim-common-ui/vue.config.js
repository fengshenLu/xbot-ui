const path = require('path')
const { defineConfig } = require('@vue/cli-service')
const appName = 'utils'
const NODE_ENV = process.env.NODE_ENV
module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  outputDir: NODE_ENV === 'production' ? path.resolve(__dirname, '../dist/public') : path.resolve(__dirname, './dist'),
  configureWebpack: {
    output: {
      library: `${appName}-[name]`,
      libraryTarget: 'umd',
      // jsonpFunction: `webpackJsonp_${appName}`
      chunkLoadingGlobal: `webpackJsonp_${appName}`
    }
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },
  devServer: {
    port: 8008,
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined')
      }

      devServer.app.use('/', function (req, res, next) {
        const allowOrigins = ['http://localhost:4000', 'http://localhost:4005']
        const _origin = req.headers.origin
        if (allowOrigins.includes(_origin)) {
          res.setHeader('Access-Control-Allow-Origin', _origin)
        } else {
          res.setHeader('Access-Control-Allow-Origin', '*')
        }
        res.setHeader('Access-Control-Allow-Credentials', 'true')
        res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE')
        res.setHeader(
          'Access-Control-Allow-Headers',
          'field,session,cbim-cityid,cityid,entid,env,accountid,appcode,applicationname,sessionkey,session-key,cbim-projectid,cbim-accountid,DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,XRequested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization'
        )
        if (req.method.toLowerCase() === 'options') {
          return res.writeHeader(204).end()
        }
        next()
      })

      return middlewares
    },
    proxy: {
      '/ruleApi': {
        target: 'https://dev-rule.cbim.org.cn',
        changeOrigin: true,
        secure: true,
        pathRewrite: {
          '/ruleApi': ''
        }
      },
      '/task': {
        target: 'https://dev-gw.cbim.org.cn/cbim-task',
        changeOrigin: true,
        secure: true,
        pathRewrite: {
          '/task': ''
        }
      },
      '/bmsApi/api': {
        target: 'https://dev.cbim.org.cn',
        changeOrigin: true,
        secure: true,
        pathRewrite: {
          '/bmsApi': ''
        }
      },
      '/resourceApi/api': {
        // dev
        target: 'https://knowledge-devwh.cbim.org.cn/api/frontend',
        // test2
        // target: 'https://knowledge-testwh.cbim.org.cn/api/frontend',
        changeOrigin: true,
        secure: true,
        pathRewrite: {
          '/resourceApi': ''
        }
      },
      '/api': {
        // dev
        target: 'https://knowledge-devwh.cbim.org.cn/api/frontend',
        // test2
        // target: 'https://knowledge-testwh.cbim.org.cn/api/frontend',
        changeOrigin: true,
        secure: true
      },
      '/docApi': {
        // dev
        target: 'https://dev.cbim.org.cn/app/doc',
        // test2
        // target: 'https://test2.cbim.org.cn/app/doc',
        changeOrigin: true,
        secure: true,
        logLevel: 'debug',
        pathRewrite: {
          '/docApi': '/api'
        }
        // bypass: function (req, res, proxyOptions) {
        //     console.log(proxyOptions)
        //     // console.log(req, res, proxyOptions)
        //     return 'https://test2.cbim.org.cn/app/doc/api'
        // }
      }
    }
  }
})
