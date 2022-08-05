/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/taskCard.vue?vue&type=template&id=0a3ca1a6&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "card",
    class: _vm.cardTaskOwnerClass,
    on: {
      "click": function ($event) {
        _vm.drawerVisible = true;
      }
    }
  }, [_c('div', {
    staticClass: "review-card flex-column"
  }, [_c('div', {
    staticClass: "flex-column flex-1"
  }, [_c('div', {
    staticClass: "flex-row"
  }, [_c('span', {
    staticClass: "flex-1 sc-title"
  }, [_vm._v(_vm._s(_vm.taskInfo.projectName || '中国数字城市档案馆'))]), _c('div', {
    staticClass: "progress-dot",
    style: {
      backgroundColor: _vm.taskInfo.status ? _vm.taskInfo.status == 1 ? '' : '#8ed226' : '#9DAAC2'
    }
  }), _c('span', {
    staticClass: "progress-text"
  }, [_vm._v(_vm._s(_vm.taskInfo.status ? _vm.taskInfo.status == 1 ? '进行中' : '已完成' : '未开始'))])]), _c('div', {
    staticClass: "title",
    on: {
      "click": function ($event) {
        $event.stopPropagation();
        return _vm.handleClickTitle.apply(null, arguments);
      }
    }
  }, [_vm._v(_vm._s(_vm.taskInfo.taskName || '万达国际图纸校审'))]), _c('div', {
    staticClass: "manager-text"
  }, [_vm._v("主责人：" + _vm._s(_vm.taskInfo.mainUser ? _vm.taskInfo.mainUser.map(item => item.name).join(' ') : '刘永霖'))])]), _c('div', {
    staticClass: "flex-row",
    staticStyle: {
      "justify-content": "space-between",
      "color": "#6d7b98"
    }
  }, [_c('div', {
    staticStyle: {
      "font-size": "12px"
    },
    style: {
      color: _vm.taskInfo.overDueDay > 0 ? '#F43030' : ''
    }
  }, [_vm.taskInfo.deliveryEndTime ? _c('span', [_vm._v(_vm._s(_vm.taskInfo.deliveryEndTime.slice(0, 10)) + " 截止")]) : _vm._e(), _vm.taskInfo.overDueDay > 0 ? _c('span', [_vm._v(" 逾期" + _vm._s(_vm.taskInfo.overDueDay) + "天 ")]) : _vm._e()]), _vm.needButton ? _c('el-popover', {
    attrs: {
      "visible-arrow": false,
      "trigger": "hover",
      "placement": "bottom"
    }
  }, [[_vm._t("buttonList")], _c('div', {
    staticClass: "fontSet",
    attrs: {
      "slot": "reference"
    },
    slot: "reference"
  }, [_vm._v("...")])], 2) : _vm._e()], 1)]), _vm.taskInfo.cooperationUser && _vm.taskInfo.cooperationUser.length ? _c('div', {
    staticClass: "displayUser"
  }, [_vm.taskInfo.cooperationUser.length <= 3 ? _vm._l(_vm.taskInfo.cooperationUser, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "userCard"
    }, [_vm._v(" " + _vm._s(item.name.slice(-2)) + " ")]);
  }) : [_vm._l(_vm.taskInfo.cooperationUser.slice(0, 3), function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "userCard"
    }, [_vm._v(" " + _vm._s(item.name.slice(-2)) + " ")]);
  }), _c('el-popover', {
    staticStyle: {
      "min-width": "130px",
      "background-color": "#ffffff"
    },
    attrs: {
      "visible-arrow": false,
      "trigger": "hover",
      "placement": "bottom"
    }
  }, [[_c('div', {
    staticClass: "displayUser"
  }, _vm._l(_vm.taskInfo.cooperationUser.slice(3), function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "userCard"
    }, [_vm._v(" " + _vm._s(item.name.slice(-2)) + " ")]);
  }), 0)], _c('div', {
    staticClass: "addUser",
    attrs: {
      "slot": "reference"
    },
    slot: "reference"
  }, [_vm._v(" " + _vm._s(`+${_vm.taskInfo.cooperationUser.length - 3}`) + " ")])], 2)]], 2) : _vm._e(), _c('el-drawer', {
    attrs: {
      "append-to-body": true,
      "size": 360,
      "modal": false,
      "visible": _vm.drawerVisible
    },
    on: {
      "update:visible": function ($event) {
        _vm.drawerVisible = $event;
      }
    }
  }, [_c('span', {
    staticClass: "drawer-title",
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(_vm._s(_vm.taskInfo.projectName))]), _c('span', {
    staticClass: "flex-column drawer-body"
  }, [_c('span', {
    staticClass: "flex-row"
  }, [_c('span', {
    staticClass: "property-name"
  }, [_vm._v("任务名称")]), _c('span', {
    staticClass: "property-text"
  }, [_vm._v(_vm._s(_vm.taskInfo.taskName || '万达国际图纸校审'))])]), _c('span', {
    staticClass: "flex-row"
  }, [_c('span', {
    staticClass: "property-name"
  }, [_vm._v("创建人")]), _c('span', {
    staticClass: "property-text"
  }, [_vm._v(_vm._s(_vm.taskInfo.createByName))])]), _c('span', {
    staticClass: "flex-row"
  }, [_c('span', {
    staticClass: "property-name"
  }, [_vm._v("任务模板")]), _c('span', {
    staticClass: "property-text"
  }, [_vm._v(_vm._s(_vm.taskInfo.templateName))])]), _c('span', {
    staticClass: "flex-row"
  }, [_c('span', {
    staticClass: "property-name"
  }, [_vm._v("标签")]), _vm.taskInfo.label && _vm.taskInfo.label.length ? _c('div', {
    staticStyle: {
      "display": "flex",
      "flex-wrap": "wrap"
    }
  }, _vm._l(JSON.parse(_vm.taskInfo.label), function (item, index) {
    return _c('span', {
      key: index,
      staticClass: "property-tag"
    }, [_vm._v(_vm._s(item.name))]);
  }), 0) : _vm._e()]), _c('span', {
    staticClass: "flex-row"
  }, [_c('span', {
    staticClass: "property-name"
  }, [_vm._v("任务编号")]), _c('span', {
    staticClass: "property-text"
  }, [_vm._v(_vm._s(_vm.taskInfo.taskCode))])]), _c('span', {
    staticClass: "flex-row"
  }, [_c('span', {
    staticClass: "property-name"
  }, [_vm._v("创建日期")]), _vm.taskInfo.createTime ? _c('span', {
    staticClass: "property-text"
  }, [_vm._v(_vm._s(_vm.taskInfo.createTime.slice(0, 10)))]) : _vm._e()])])])], 1);
};

var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/taskCard.vue?vue&type=script&lang=js&
// import {Popover, Drawer } from 'element-ui'
// import Vue from 'vue'
// Vue.use(Popover)
// Vue.use(Drawer)
// import 'element-ui/packages/theme-chalk/src/popover.scss'
// const testData =  {
//   synergicUserInfo: [
//     {
//       avatarUrl: '',
//       name: '何晶晶',
//       userIsOutAssist: false,
//       id: '774574992593580032'
//     },
//     {
//       avatarUrl: '',
//       name: '自动化4',
//       userIsOutAssist: false,
//       id: '823510816874696704'
//     },
//     {
//       avatarUrl: '',
//       name: '吴英杰',
//       userIsOutAssist: false,
//       id: '772516864016314368'
//     },
//     {
//       avatarUrl: '',
//       name: '自动化3',
//       userIsOutAssist: false,
//       id: '823510673815375872'
//     },
//     {
//       avatarUrl: '',
//       name: '自动化1',
//       userIsOutAssist: false,
//       id: '823510036398608384'
//     },
//     {
//       avatarUrl: '',
//       name: '自动化2',
//       userIsOutAssist: false,
//       id: '823510301948383232'
//     }
//   ],
//   createByName: '林蕾',
//   entId: '814789565750579200',
//   deliveryEndTime: '2022-07-05 23:59:59',
//   remainDay: -8,
//   parentNodeId: '843086403416956928',
//   label:'',
//   parentNodeName: '又一个大大项目',
//   frontLabel: [
//     '方案技术深化',
//     '其他',
//     '管理'
//   ],
//   treeId: '843086403416956928',
//   accountId: '814789565750579201',
//   createBy: '779383128987828224',
//   taskCode: 'kkdsf-09',
//   templateName: '图纸目录',
//   overDueDay: 8,
//   createTime: '2022-06-28 10:26:31',
//   taskName: '图纸目录',
//   id: '847782885608120320',
//   mainUser: [
//     {
//       name: '林蕾',
//       id: '779383128987828224'
//     },
//     {
//       name: 'ty',
//       id: '772760523664060416'
//     },
//     {
//       name: '卢红生',
//       id: '774200683849117696'
//     }
//   ],
//   collaborator: [
//     {
//       name: '林蕾',
//       id: '779383128987828224'
//     },
//     {
//       name: 'ty',
//       id: '772760523664060416'
//     },
//     {
//       name: '卢红生',
//       id: '774200683849117696'
//     },
//     {
//       name: '林蕾',
//       id: '779383128987828224'
//     },
//     {
//       name: 'ty',
//       id: '772760523664060416'
//     },
//     {
//       name: '卢红生',
//       id: '774200683849117696'
//     }
//   ],
//   majorName: '[{"id": "814789717941940224", "name": "建筑"}]',
//   deliveryStartTime: '2022-06-29 00:00:00',
//   projectName: '又一个大大项目',
//   projectId: '843086390233137152',
//   status: 2,
//   cooperationUser: null,
//   realityStartTime: null,
//   realityEndTime: null
// }
// import 'element-ui/packages/theme-chalk/src/drawer.scss'
/* harmony default export */ var taskCardvue_type_script_lang_js_ = ({
  name: 'taskCard',
  props: {
    taskInfo: {
      type: Object,
      default: () => {
        return {};
      }
    },
    needButton: {
      type: Boolean,
      default: () => {
        return false;
      }
    },
    cardTaskOwnerClass: {
      type: String,
      default: () => {
        return '';
      }
    }
  },
  emits: ['titleClick'],

  data() {
    return {
      drawerVisible: false
    };
  },

  methods: {
    handleChange(value) {
      this.drawerVisible = value;
    },

    handleClickTitle() {
      this.$emit('titleClick', JSON.parse(JSON.stringify(this.taskInfo)));
    }

  }
});
;// CONCATENATED MODULE: ./src/views/taskCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_taskCardvue_type_script_lang_js_ = (taskCardvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/taskCard.vue?vue&type=style&index=0&id=0a3ca1a6&prod&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/views/taskCard.vue?vue&type=style&index=0&id=0a3ca1a6&prod&lang=scss&

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/views/taskCard.vue



;


/* normalize component */

var component = normalizeComponent(
  views_taskCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var taskCard = (component.exports);
;// CONCATENATED MODULE: ./lib/lib.js

const components = [taskCard];

const install = function (Vue) {
  // 遍历并注册组件
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var lib = ({
  install,
  ...components
});
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (lib);


module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=xbotui-vue2-element.common.js.map