import { login, logout, getInfo, refreshTokenInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: '',
    centerId: '',
    templateId: '',
    groupId: '',
    groupName: '',
    centerName: '',
    nickName: '',
    templateName: '',
    userId: '',
    username: ''
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_CENTER_ID: (state, centerId) => {
    state.centerId = centerId
  },
  SET_TEMPLETE_ID: (state, templateId) => {
    state.templateId = templateId
  },
  SET_GROUP_ID: (state, groupId) => {
    state.groupId = groupId
  },
  SET_GROUP_NAME: (state, groupName) => {
    state.groupName = groupName
  },
  SET_CENTER_NAME: (state, centerName) => {
    state.centerName = centerName
  },
  SET_NICK_NAME: (state, nickName) => {
    state.nickName = nickName
  },
  SET_TEMPLETE_NAME: (state, templateName) => {
    state.templateName = templateName
  },
  SET_USER_ID: (state, userId) => {
    state.userId = userId
  },
  SET_USER_USER_NAME: (state, username) => {
    state.username = username
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password, templateId, centerId } = userInfo
    return new Promise((resolve, reject) => {
      login({
        username: username.trim(), password: password,
        centerId: centerId, templateId: templateId
      }).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.token)
        commit('SET_USER_USER_NAME', username.trim())


        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response

        if (!data) {
          return reject('Verification failed, please Login again.')
        }

        const { name, avatar } = data

        console.log(data)
        commit('SET_CENTER_ID', data.centerId)
        commit('SET_TEMPLETE_ID', data.templateId)
        commit('SET_GROUP_ID', data.groupId)
        commit('SET_USER_ID', data.userId)
        commit('SET_TEMPLETE_NAME', data.templateName)
        commit('SET_CENTER_NAME', data.centerName)
        commit('SET_GROUP_NAME', data.groupName)
        commit('SET_NAME', data.nickName)

        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        removeToken() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise((resolve, reject) => {
      refreshTokenInfo().then(() => {

        const { data } = response

        removeToken() // must remove  token  first
        commit('SET_TOKEN', data.token)

        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })


    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

