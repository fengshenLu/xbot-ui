import { createStore } from 'vuex'
export default createStore({
  state: {
    currentTool: '',
    workspace: null
  },
  getters: {
    workspace: state => state.workspace,
    currentTool: state => state.currentTool,
    // 城市id
    cityid: (state:any) => {
      if (state.workspace?.type === 3) {
        return state.workspace?.workspaceMetaData?.dictId
      } else {
        return undefined
      }
    },
    entid: (state:any) => {
      let entId = state.workspace?.workspaceMetaData?.id
      if (state.workspace?.type === 2) {
        entId = state.workspace?.workspaceMetaData?._enterprise?.id
      }
      if (state.workspace?.type === 3) {
        entId = state.workspace?.workspaceMetaData?._enterprise?.id
      }
      return entId
    },
    accountid: (state:any) => {
      return state.workspace?.workspaceMetaData?.accountId
    },
    // 如果是项目级则有项目id
    projectId (state:any) {
      return state.workspace?.type === 2 ? state.workspace.id : null
    }
  },
  mutations: {
    WORK_SPACE: (state, value) => {
      state.workspace = value
    },
    SET_CURRENT_TOOL: (state, value) => {
      state.currentTool = value
    }
  },
  actions: {
    setWorkspace: ({ commit }, value) => {
      commit('WORK_SPACE', value)
    },
    setCurrentTool: ({ commit }, value) => {
      commit('SET_CURRENT_TOOL', value)
    }
  }
})
