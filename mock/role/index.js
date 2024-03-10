const Mock = require('mockjs')
const { deepClone } = require('../utils')
const { asyncRoutes } = require('./routes.js')

const routes = deepClone([...asyncRoutes])

const roles =
{
  key: 'admin',
  name: 'admin',
  description: 'Super Administrator. Have access to view all pages.',
  routes: routes
}


module.exports = [
  // mock get all roles form server
  {
    url: '/vue-element-admin/roles',
    type: 'get',
    response: _ => {
      return {
        code: 0,
        data: roles
      }
    }
  }
]
