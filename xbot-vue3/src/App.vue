<template>
  <task-card :task-info="projectInfo" @titleClick="handleChange" :needButton="true">
     <template v-slot:buttonList>
          <ul>
            <li @click="handleChange">1</li>
            <li>22222</li>
            <li>32222</li>
          </ul>
     </template>
  </task-card>
</template>
<script lang="ts">
// import taskCard from '@/views/taskCard.vue'
export default {
  // components: { taskCard },
  data () {
    return {
      projectInfo: {
        synergicUserInfo: [
          {
            avatarUrl: '',
            name: '何晶晶',
            userIsOutAssist: false,
            id: '774574992593580032'
          },
          {
            avatarUrl: '',
            name: '自动化4',
            userIsOutAssist: false,
            id: '823510816874696704'
          },
          {
            avatarUrl: '',
            name: '吴英杰',
            userIsOutAssist: false,
            id: '772516864016314368'
          },
          {
            avatarUrl: '',
            name: '自动化3',
            userIsOutAssist: false,
            id: '823510673815375872'
          },
          {
            avatarUrl: '',
            name: '自动化1',
            userIsOutAssist: false,
            id: '823510036398608384'
          },
          {
            avatarUrl: '',
            name: '自动化2',
            userIsOutAssist: false,
            id: '823510301948383232'
          }
        ],
        createByName: '林蕾',
        entId: '814789565750579200',
        deliveryEndTime: '2022-07-05 23:59:59',
        remainDay: -8,
        parentNodeId: '843086403416956928',
        label: [{ id: '814789590514790400', name: '方案技术深化' }, { id: '845634302597095424', name: '其他' }, { id: '845634302509015040', name: '管理' }],
        parentNodeName: '又一个大大项目',
        frontLabel: [
          '方案技术深化',
          '其他',
          '管理'
        ],
        treeId: '843086403416956928',
        accountId: '814789565750579201',
        createBy: '779383128987828224',
        taskCode: 'kkdsf-09',
        templateName: '图纸目录',
        overDueDay: 8,
        createTime: '2022-06-28 10:26:31',
        taskName: '图纸目录',
        id: '847782885608120320',
        mainUser: [
          {
            name: '林蕾',
            id: '779383128987828224'
          },
          {
            name: 'ty',
            id: '772760523664060416'
          },
          {
            name: '卢红生',
            id: '774200683849117696'
          }
        ],
        collaborator: [
          {
            name: '林蕾',
            id: '779383128987828224'
          },
          {
            name: 'ty',
            id: '772760523664060416'
          },
          {
            name: '卢红生',
            id: '774200683849117696'
          },
          {
            name: '林蕾',
            id: '779383128987828224'
          },
          {
            name: 'ty',
            id: '772760523664060416'
          },
          {
            name: '卢红生',
            id: '774200683849117696'
          }
        ],
        majorName: '[{"id": "814789717941940224", "name": "建筑"}]',
        deliveryStartTime: '2022-06-29 00:00:00',
        projectName: '又一个大大项目',
        projectId: '843086390233137152',
        status: 0,
        cooperationUser: null,
        realityStartTime: null,
        realityEndTime: null
      }
    }
  },
  methods: {
    handleChange (event: any) {
      console.log(event)
    }
  }
}
</script>
