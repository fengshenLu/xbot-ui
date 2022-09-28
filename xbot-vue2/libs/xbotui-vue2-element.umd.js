(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["xbotui-vue2-element"] = factory();
	else
		root["xbotui-vue2-element"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 287:
/***/ (function(module) {

module.exports = "data:image/png;base64,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";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
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

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/taskCard.vue?vue&type=template&id=8d675f76&scoped=true&
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
  }, [_c('div', {
    staticClass: "flex-1 sc-title"
  }, [_vm.projectImg ? _c('img', {
    staticStyle: {
      "margin-right": "4px"
    },
    attrs: {
      "width": "20",
      "height": "20",
      "src": _vm.projectImg
    }
  }) : _vm._e(), _c('span', {
    staticStyle: {
      "overflow": "hidden",
      "text-overflow": "ellipsis",
      "white-space": "nowrap"
    }
  }, [_vm._v(" " + _vm._s(_vm.taskInfo.projectName || '中国数字城市档案馆') + " ")])]), _c('div', {
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
  }, [_c('img', {
    staticStyle: {
      "margin-top": "1px"
    },
    attrs: {
      "width": "20",
      "height": "20",
      "src": __webpack_require__(287)
    }
  }), _vm.taskInfo.mainUser && _vm.taskInfo.mainUser.length < 4 ? _c('span', [_vm._v(_vm._s(_vm.taskInfo.mainUser.map(item => item.name).join(' ')))]) : _vm._e(), _vm.taskInfo.mainUser && _vm.taskInfo.mainUser.length >= 4 ? _c('span', [_vm._v(_vm._s(_vm.taskInfo.mainUser.map(item => item.name).slice(0, 3).join(' ')) + " 等" + _vm._s(_vm.taskInfo.mainUser.length) + "人")]) : _vm._e()])]), _c('div', {
    staticClass: "flex-row",
    staticStyle: {
      "justify-content": "space-between",
      "color": "#6d7b98",
      "margin-top": "8px"
    }
  }, [_c('div', {
    staticStyle: {
      "font-size": "12px",
      "display": "flex",
      "height": "22px",
      "line-height": "22px"
    },
    style: {
      color: _vm.taskInfo.overDueDay > 0 ? '#F43030' : _vm.taskInfo.remainDay > _vm.warnTime ? '' : '#FF7700'
    }
  }, [_c('svg', {
    staticStyle: {
      "margin-top": "1px"
    },
    attrs: {
      "width": "20px",
      "height": "20px",
      "viewBox": "0 0 20 20",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink"
    }
  }, [_c('g', {
    attrs: {
      "id": "丰富卡片",
      "stroke": "none",
      "stroke-width": "1",
      "fill": "none",
      "fill-rule": "evenodd"
    }
  }, [_c('g', {
    attrs: {
      "id": "优化",
      "transform": "translate(-592.000000, -645.000000)"
    }
  }, [_c('g', {
    attrs: {
      "id": "编组-8",
      "transform": "translate(116.000000, 195.000000)"
    }
  }, [_c('g', {
    attrs: {
      "id": "编组-14",
      "transform": "translate(460.000000, 320.000000)"
    }
  }, [_c('g', {
    attrs: {
      "id": "编组-6",
      "transform": "translate(16.000000, 130.000000)"
    }
  }, [_c('rect', {
    attrs: {
      "id": "矩形",
      "x": "0",
      "y": "0",
      "width": "20",
      "height": "20"
    }
  }), _c('path', {
    attrs: {
      "d": "M10.5,3 C14.0898509,3 17,5.91014913 17,9.5 C17,13.0898509 14.0898509,16 10.5,16 C6.91014913,16 4,13.0898509 4,9.5 C4,5.91014913 6.91014913,3 10.5,3 Z M10.5,4 C7.46243388,4 5,6.46243388 5,9.5 C5,12.5375661 7.46243388,15 10.5,15 C13.5375661,15 16,12.5375661 16,9.5 C16,6.46243388 13.5375661,4 10.5,4 Z M10.4991798,6.00225384 C10.7741297,6.00225384 10.9970206,6.2251448 10.9970206,6.50009473 L10.9961907,9.29425384 L12.6223241,10.9160157 C12.7952016,11.0885017 12.8146923,11.3565312 12.680604,11.5505585 L12.622723,11.6199177 C12.428171,11.8144697 12.1127951,11.8146484 11.9180227,11.6203171 L10.1184248,9.82516551 L10.0670804,9.75158628 L10.0670804,9.75158628 L10.031937,9.67664441 L10.031937,9.67664441 L10.0266538,9.6615729 C10.012987,9.62260145 10.0046539,9.58275051 10.0011907,9.54255784 L10.0013389,6.50009473 C10.0013389,6.2251448 10.2242298,6.00225384 10.4991798,6.00225384 Z",
      "id": "形状",
      "fill": "#6D7B98",
      "fill-rule": "nonzero"
    }
  })])])])])])]), !_vm.taskInfo.deliveryEndTime ? _c('span', {
    staticStyle: {
      "margin-left": "7px",
      "color": "#47516a"
    }
  }, [_vm._v("-")]) : _vm._e(), _vm.taskInfo.deliveryEndTime ? _c('span', {
    staticStyle: {
      "margin-left": "7px"
    }
  }, [_vm._v(_vm._s(_vm.taskInfo.deliveryEndTime.slice(0, 10)) + " 截止 ")]) : _vm._e(), _vm.taskInfo.overDueDay > 0 ? _c('span', [_vm._v(" 逾期" + _vm._s(_vm.taskInfo.overDueDay) + "天 ")]) : _vm._e(), _vm.taskInfo.remainDay <= _vm.warnTime && _vm.taskInfo.overDueDay <= 0 ? _c('span', [_vm._v(" 剩余" + _vm._s(_vm.taskInfo.remainDay) + "天 ")]) : _vm._e()])])]), _vm.users.length ? _c('div', {
    staticClass: "displayUser"
  }, [_c('div', {
    staticStyle: {
      "display": "flex"
    }
  }, [_vm._l(_vm.users.slice(0, 5), function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "userCard",
      style: {
        backgroundColor: _vm.colors[index]
      }
    }, [_vm._v(" " + _vm._s(item.name.slice(-1)) + " ")]);
  }), _vm.users.length > 5 ? _c('div', {
    staticClass: "totalUser"
  }, [_vm._v("共" + _vm._s(_vm.users.length) + "人")]) : _vm._e()], 2), _vm.needButton ? _c('el-popover', {
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
  }, [_c('span', [_vm._v("·")]), _c('span', {
    staticStyle: {
      "margin-left": "2px"
    }
  }, [_vm._v("·")]), _c('span', {
    staticStyle: {
      "margin-left": "2px"
    }
  }, [_vm._v("·")])])], 2) : _vm._e()], 1) : _vm._e(), _c('el-drawer', {
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

;// CONCATENATED MODULE: ./src/views/taskCard.vue?vue&type=template&id=8d675f76&scoped=true&

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/taskCard.vue?vue&type=script&lang=js&
// import png from '../assets/logo.png'
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
//   label:'[{"name": "22"}]',
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
//     },
//     {
//       name: '卢红生',
//       id: '774200683849117696'
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
//   cooperationUser: [
//     {"name":"何晶晶","id":"774574992593580032"},
//     {"name":"自动化","id":"823510816874696704"},
//     {"name":"吴英杰","id":"772516864016314368"},
//     {"name":"自gt","id":"823510673815375872"},
//     {"name":"自","id":"823510036398608384"},
//     {"name":"自动","id":"823510301948383232"}
//   ],
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
    },
    projectImg: {
      type: String,
      default: () => {
        return '';
      }
    },
    warnTime: {
      type: Number,
      default: () => {
        return 30;
      }
    }
  },
  emits: ['titleClick'],

  data() {
    return {
      drawerVisible: false,
      colors: ['#FF8052', '#FFC71F', '#1BD3E0', '#2499FF', '#C2A8FF', '#8E6BFF', '#9DAAC2']
    };
  },

  computed: {
    users() {
      let list = [];
      let cooperationUser = this.taskInfo.cooperationUser || [];
      let mainUser = this.taskInfo.mainUser || [];
      list = cooperationUser.concat(mainUser);
      return list;
    }

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
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/taskCard.vue?vue&type=style&index=0&id=8d675f76&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/views/taskCard.vue?vue&type=style&index=0&id=8d675f76&prod&lang=scss&scoped=true&

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
  "8d675f76",
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


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=xbotui-vue2-element.umd.js.map