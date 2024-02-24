import { constantRoutes } from '@/router'

import Layout from '@/layout' //导入

import { getRoles } from '@/api/role'


// 加载路由
function getViews(path) {
  return resolve => {
    require.ensure([], (require) => {
      resolve(require('@/views/' + path + '.vue'))
    })
  }
}

export function convertMenu(menu) {


  console.log(menu.meta)
  const result = {
    path: menu.path,
    component: menu.component,
    name: menu.name,
    redirect: menu.redirect,
    meta: menu.meta,
    children: [],
  };

  if (menu.children && menu.children.length > 0) {
    menu.children.forEach((child) => {
      const convertedChild = convertMenu(child);
      result.children.push(convertedChild);
    });
  }
  if (result.component === 'Layout') {
    result.component = Layout
  } else if (typeof result.component === 'string' && result.component.trim() !== '') {
    // console.log(result.component)
    result.component = getViews(result.component)
  }
  if (result.children.length === 0) {
    delete result.children;
  }
  delete result.icon;
  return result;
}


// 递归格式化菜单路由
function convertMenus(menus) {
  const result = [];
  menus.forEach((menu) => {
    const convertedMenu = convertMenu(menu);
    result.push(convertedMenu);
  });

  // Add 404 page redirect
  result.push({ path: '*', redirect: '/404', hidden: true });

  return result;
}


const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.routes = constantRoutes.concat(routes)
  }
}


const actions = {
  generateRoutes({ commit }) {
    return new Promise((resolve, reject) => {
      getRoles(state.token).then(response => {

        const { data } = response
        const accessedRoutes = convertMenus(data.routes)
        commit('SET_ROUTES', accessedRoutes)
        resolve(accessedRoutes)
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
