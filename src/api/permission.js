import { param2Obj } from '@/utils'
import request from '@/utils/request'

//登录权限
export function getRouteInfoRoles(params) {
  return request({
    url: '/user/queryUserPermission',
    method: 'get',
    params: params
  })
}

//获取中心所有医生列表
export function getCenterDoctorList(data) {
  return request({
    url: '/user/queryUserListByCenterId',
    method: 'post',
    data
  })
}

//删除用户和中心的关系
export function delCenterToDoctorInfo(data) {
  return request({
    url: '/user/deleteUserCenterRelation',
    method: 'post',
    data
  })
}

//更新用户所在小组
export function updateDoctorGroupInfo(data) {
  return request({
    url: '/user/changeUserGroup',
    method: 'post',
    data
  })
}

//获取当前模板所有的权限列表
export function getTempletePermissionInfo(params) {
  return request({
    url: '/permission/queryAllDataPermission',
    method: 'get',
    params: params
  })
}



