<template>
  <div class='card' :class="cardTaskOwnerClass" @click="handleClickBody">
    <div class="review-card flex-column">
      <div class="flex-column flex-1">
        <div class="flex-row">
          <div class="flex-1 sc-title">
            <img v-if="projectImg" width="20" height="20" :src="projectImg" style="margin-right: 4px"/>
            <span style="overflow: hidden;
                  text-overflow:ellipsis;
                  white-space:nowrap;">
                  {{taskInfo.projectName || '中国数字城市档案馆'}}
            </span>
          </div>
          <div class="progress-dot" :style="{ backgroundColor: taskInfo.status ? taskInfo.status==1 ? '' : '#8ed226' : '#9DAAC2' }"></div>
          <span class="progress-text">{{taskInfo.status ? taskInfo.status==1 ? '进行中' : '已完成' : '未开始' }}</span>
        </div>
        <div class="title"  >
          <span @click.stop="handleClickTitle">
            {{taskInfo.taskName || '万达国际图纸校审'}}
          </span>
        </div>
        <div class="manager-text">
          <img  width="20" height="20" style="margin-top: 1px" src="../assets/personalCenter.png"/>
          <span >{{taskInfo.createByName}}</span>
<!--          <span v-if="taskInfo.mainUser && taskInfo.mainUser.length >= 4">{{taskInfo.mainUser.map(item => item.name).slice(0,3).join(' ')}}  等{{taskInfo.mainUser.length}}人</span>-->
        </div>
      </div>
      <div class="flex-row" style="justify-content: space-between;color: #6d7b98;margin-top: 8px">
        <div style="font-size: 12px;display: flex;height: 22px;line-height: 22px" :style="{color: taskInfo.overDueDay > 0 ? '#F43030' : taskInfo.remainDay > warnTime ? '' : '#FF7700'}">
          <svg style="margin-top: 1px" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="丰富卡片" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="优化" transform="translate(-592.000000, -645.000000)">
                <g id="编组-8" transform="translate(116.000000, 195.000000)">
                  <g id="编组-14" transform="translate(460.000000, 320.000000)">
                    <g id="编组-6" transform="translate(16.000000, 130.000000)">
                      <rect id="矩形" x="0" y="0" width="20" height="20"></rect>
                      <path d="M10.5,3 C14.0898509,3 17,5.91014913 17,9.5 C17,13.0898509 14.0898509,16 10.5,16 C6.91014913,16 4,13.0898509 4,9.5 C4,5.91014913 6.91014913,3 10.5,3 Z M10.5,4 C7.46243388,4 5,6.46243388 5,9.5 C5,12.5375661 7.46243388,15 10.5,15 C13.5375661,15 16,12.5375661 16,9.5 C16,6.46243388 13.5375661,4 10.5,4 Z M10.4991798,6.00225384 C10.7741297,6.00225384 10.9970206,6.2251448 10.9970206,6.50009473 L10.9961907,9.29425384 L12.6223241,10.9160157 C12.7952016,11.0885017 12.8146923,11.3565312 12.680604,11.5505585 L12.622723,11.6199177 C12.428171,11.8144697 12.1127951,11.8146484 11.9180227,11.6203171 L10.1184248,9.82516551 L10.0670804,9.75158628 L10.0670804,9.75158628 L10.031937,9.67664441 L10.031937,9.67664441 L10.0266538,9.6615729 C10.012987,9.62260145 10.0046539,9.58275051 10.0011907,9.54255784 L10.0013389,6.50009473 C10.0013389,6.2251448 10.2242298,6.00225384 10.4991798,6.00225384 Z" id="形状" fill="#6D7B98" fill-rule="nonzero"></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <span style="margin-left: 7px;color:#47516a" v-if="!taskInfo.deliveryEndTime">-</span>
          <span style="margin-left: 7px" v-if="taskInfo.deliveryEndTime">{{taskInfo.deliveryEndTime.slice(0,10)}}&ensp;截止&ensp;</span>
          <span v-if="taskInfo.overDueDay > 0">
              逾期{{taskInfo.overDueDay}}天
          </span>
          <span v-if="taskInfo.remainDay <= warnTime && taskInfo.overDueDay <= 0">
              剩余{{taskInfo.remainDay}}天
          </span>
        </div>
      </div>
    </div>
    <div class="displayUser" v-if="users.length">
      <div style="display: flex">
        <div class="userCard" v-for="(item, index) in users.slice(0, 5)"
             :key="index"
             :style="{backgroundColor: colors[index]}"
        >
          {{item.name.slice(-1)}}
        </div>
        <div v-if="users.length > 5" class="totalUser">共{{users.length}}人</div>
      </div>
      <el-popover  :visible-arrow="false" v-if="needButton" trigger="hover" placement="bottom">
        <template >
          <slot name="buttonList" class="buttonList">
          </slot>
        </template>
        <div slot="reference" class="fontSet"><span>·</span><span style="margin-left: 2px">·</span><span style="margin-left: 2px">·</span></div>
      </el-popover>
    </div>
    <el-drawer
        :append-to-body="true"
        :size="360"
        :modal="false"
        :visible.sync="drawerVisible"
      >
      <span slot="title" class="drawer-title">{{taskInfo.projectName}}</span>
      <span class="flex-column drawer-body">
                <span class="flex-row">
                      <span class="property-name">任务名称</span>
                      <span class="property-text">{{taskInfo.taskName || '万达国际图纸校审'}}</span>
                </span>
                <span class="flex-row">
                      <span class="property-name">创建人</span>
                      <span class="property-text">{{taskInfo.createByName}}</span>
                </span>
                <span class="flex-row">
                      <span class="property-name">任务模板</span>
                      <span class="property-text">{{taskInfo.templateName}}</span>
                </span>
                <span class="flex-row">
                      <span class="property-name">标签</span>
                      <div v-if='taskInfo.label && taskInfo.label.length' style='display: flex; flex-wrap: wrap'>
                         <span v-for="(item,index) in JSON.parse(taskInfo.label)" class="property-tag" :key="index">{{item.name}}</span>
                      </div>
                </span>
                <span class="flex-row">
                      <span class="property-name">任务编号</span>
                      <span class="property-text">{{taskInfo.taskCode}}</span>
                </span>
                <span class="flex-row">
                      <span class="property-name">创建日期</span>
                      <span class="property-text" v-if="taskInfo.createTime">{{taskInfo.createTime.slice(0, 10)}}</span>
                </span>
            </span>
    </el-drawer>
  </div>
</template>

<script >
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
export default {
  name: 'taskCard',
  props: {
    taskInfo: {
      type: Object,
      default: () => {
        return {}
      }
    },
    needButton: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    cardTaskOwnerClass: {
      type: String,
      default: () => {
        return ''
      }
    },
    projectImg: {
      type: String,
      default: () => {
        return ''
      }
    },
    warnTime: {
      type: Number,
      default: () => {
        return 30
      }
    },
    bodyClickSet: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  emits: ['titleClick', 'bodyClick'],
  data () {
    return {
      drawerVisible: false,
      colors: ['#FF8052', '#FFC71F', '#1BD3E0', '#2499FF', '#C2A8FF', '#8E6BFF', '#9DAAC2']
    }
  },
  computed: {
    users() {
      let list = []
      let cooperationUser = this.taskInfo.cooperationUser || []
      let mainUser = this.taskInfo.mainUser || []
      list = mainUser.concat(cooperationUser)
      return list
    }
  },
  methods: {
    handleClickBody() {
       if(this.bodyClickSet) {
         this.$emit('bodyClick', JSON.parse(JSON.stringify(this.taskInfo)))
       } else {
         this.drawerVisible = true
       }
    },
    handleChange (value) {
      this.drawerVisible = value
    },
    handleClickTitle () {
      this.$emit('titleClick', JSON.parse(JSON.stringify(this.taskInfo)))
    }
  }
}
</script>

<style lang="scss" scoped>
.drawer-title {
  overflow: hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  font-size: 16px;
  font-weight: 600;
  color: black;
}
.drawer-body {
  padding: 0px 20px;
}
.el-drawer__body {
  padding: 0 20px;
}
.myPopClass {
  .ant-popover-arrow {
    display: none !important;
  }
}
.ant-drawer-title {
  font-size: 16px;
  font-weight: 600;
  color: black;
}
.displayUser {
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  .userCard {
    width: 20px;
    height: 20px;
    background: #ff8052;
    border-radius: 2px;
    text-align: center;
    color: #ffffff;
    line-height: 20px;
    margin-right: 4px;
    font-size: 12px;
  }
  .addUser {
    width: 32px;
    height: 32px;
    background: #ecf0f8;
    border-radius: 4px;
    font-size: 14px;
    text-align: left;
    color: #3c3a38;
    line-height: 32px;
  }
  .totalUser {
    margin-left: 8px;
    line-height: 20px;
    height: 20px;
    font-size: 12px;
    font-weight: 400;
    color: #6d7b98;
  }
}
.flex-row {
  display: flex;
  flex-direction: row;
}
.flex-column {
  display: flex;
  flex-direction: column;
}
.property-name {
  min-width: 72px;
  width: 72px;
  color: #6D7B98;
}
.property-text {
  color: black;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.property-text, .property-name, .property-tag {
  margin-bottom: 16px;
  font-size: 14px;
}
.property-tag {
  padding: 2px 8px;
  background-color: #C9D2E1;
  color: black;
  margin-right: 12px;
  border-radius: 5px;
}
.flex-1 {
  display: flex;
  flex: 1;
  overflow: hidden;
}
.card {
  width: 358px;
  height: 180px;
  background: #ffffff;
  border-radius: 4px;
  margin: 8px 16px 8px 0;
  padding: 16px;
  box-shadow: 0 2px 12px 0 #fffefe;
  .fontSet {
    color: #6D7B98;
    line-height: 13px;
    cursor: pointer;
    display: inline-block;
  }
  .review-card {
    display: flex;
    background-color: #FFFFFF;
    width: 100%;
    border-radius: 5px;
    margin-bottom: 8px;
    .sc-title {
      font-size: 14px;
      color: #47516A;
      line-height: 20px;
    }
    .pointSet {
      width: 80px;
      text-align: right;
      line-height: 20px;
      color:#6D7B98;
      display: inline-block;
    }
    .progress-dot {
      margin-right: 8px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #0A87F5;
      margin-top: 5px;
    }
    .progress-text {
      font-size: 14px;
      color: #2A334A;
    }
    .title {
      margin-top: 8px;
      margin-bottom: 12px;
      font-size: 16px;
      font-weight: 600;
      height: 24px;
      line-height: 24px;
      color: #2A334A;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
      span{
        cursor: pointer;
      }
      &:hover {
        color:#F65D30;
      }
    }
    .manager-text {
      font-size: 12px;
      height: 22px;
      line-height: 22px;
      color: #47516A;
      display: flex;
      span {
        margin-left: 7px;
      }
    }
    .dead-line {
      font-size: 12px;
    }
    .dead-line, .extra-button {
      color: #6d7b98;
      margin-bottom: -20px;
    }
    .extra-button {
      font-size: 22px;
      cursor: pointer;
    }
    .property-tag {
      padding: 2px 8px;
      background-color: #C9D2E1;
      color: black;
      margin-right: 12px;
      border-radius: 5px;
    }
  }
  .buttonList {
    position: absolute;
    right: 0;
    top: 13px;
  }
}

</style>
