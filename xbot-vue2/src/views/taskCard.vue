<template>
  <div class='card' :class="cardTaskOwnerClass" @click="drawerVisible = true">
    <div class="review-card flex-column">
      <div class="flex-column flex-1">
        <div class="flex-row">
          <span class="flex-1 sc-title">{{taskInfo.projectName || '中国数字城市档案馆'}}</span>
          <div class="progress-dot"></div>
          <span class="progress-text">进行中</span>
        </div>
        <div class="title" @click.stop="handleClickTitle" >{{taskInfo.taskName || '万达国际图纸校审'}}</div>
        <div class="manager-text">主责人：{{taskInfo.mainUser ? taskInfo.mainUser.map(item => item.name).join(' ') : '刘永霖'}}</div>
      </div>
      <div class="flex-row" style="justify-content: space-between;color: #6d7b98;">
        <div style="font-size: 12px;" :style="{color: taskInfo.overDueDay > 0 ? '#F43030' : ''}">
          <span v-if="taskInfo.deliveryEndTime">{{taskInfo.deliveryEndTime.slice(0,10)}} 截止</span>
          <span v-if="taskInfo.overDueDay > 0">
            逾期{{taskInfo.overDueDay}}天
          </span>
        </div>
        <el-popover  :visible-arrow="false" v-if="needButton" trigger="hover" placement="bottom">
          <template >
            <slot name="buttonList" class="buttonList">
              <el-button>dsfdsfdsf</el-button>
            </slot>
          </template>
          <div slot="reference" class="fontSet">...</div>
        </el-popover>
        <div  v-else class="fontSet">...</div>
      </div>
    </div>
    <div class="displayUser" v-if="taskInfo.cooperationUser && taskInfo.cooperationUser.length">
      <template v-if="taskInfo.cooperationUser.length <= 3">
        <div class="userCard" v-for="(item, index) in taskInfo.cooperationUser" :key="index"  >
          {{item.name.slice(-2)}}
        </div>
      </template>
      <template v-else>
        <div class="userCard" v-for="(item, index) in taskInfo.cooperationUser.slice(0,3)" :key="index"  >
          {{item.name.slice(-2)}}
        </div>
        <el-popover  :visible-arrow="false" trigger="hover" style="min-width: 130px;background-color: #ffffff" placement="bottom">
          <template>
            <div class="displayUser">
              <div class="userCard" v-for="(item, index) in taskInfo.cooperationUser.slice(3)" :key="index"  >
                {{item.name.slice(-2)}}
              </div>
            </div>
          </template>
          <div slot="reference" class="addUser">
            {{`+${taskInfo.cooperationUser.length - 3}`}}
          </div>
        </el-popover>
      </template>
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
                      <span class="property-text">{{taskInfo.formModel}}</span>
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
                      <span class="property-text" v-if="taskInfo.deliveryStartTime">{{taskInfo.deliveryStartTime.slice(0, 10)}}</span>
                </span>
            </span>
    </el-drawer>
  </div>
</template>

<script >
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
//   label: [{ id: '814789590514790400', name: '方案技术深化' }, { id: '845634302597095424', name: '其他' }, { id: '845634302509015040', name: '管理' }],
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
//   status: 0,
//   cooperationUser: null,
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
    }
  },
  emits: ['titleClick'],
  data () {
    return {
      drawerVisible: false
    }
  },
  methods: {
    handleChange (value) {
      this.drawerVisible = value
    },
    handleClickTitle () {
      this.$emit('titleClick', JSON.parse(JSON.stringify(this.taskInfo)))
    }
  }
}
</script>

<style lang="scss" >
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
  justify-content: flex-start;
  .userCard {
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg,#9daac2, #6d7b98);
    border-radius: 2px;
    font-size: 10px;
    font-weight: 500;
    text-align: center;
    color: #ffffff;
    line-height: 32px;
    margin-right: 4px;
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
  width: 72px;
  color: #6D7B98;
}
.property-text {
  color: black;
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
  height: 200px;
  background: #ffffff;
  border-radius: 4px;
  margin: 8px 16px 8px 0;
  padding: 16px;
  box-shadow: 0 2px 12px 0 #fffefe;
  .review-card {
    display: flex;
    background-color: #FFFFFF;
    width: 100%;
    height: 126px;
    border-radius: 5px;
    .sc-title {
      font-size: 14px;
      color: #47516A;
      line-height: 20px;
    }
    .fontSet {
      transform: scale(1.5);
      line-height: 13px;
      cursor: pointer;
      display: inline-block;
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
      font-size: 16px;
      font-weight: 600;
      color: #2A334A;
      cursor: pointer;
      &:hover {
        color:#F65D30;
      }
    }
    .manager-text {
      font-size: 14px;
      margin-top: 4px;
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
    .drawer-title {
      font-size: 16px;
      font-weight: 600;
      color: black;
    }
    .drawer-body {
      padding: 0px 24px;
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
