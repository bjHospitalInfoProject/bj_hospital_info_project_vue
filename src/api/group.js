import request from '@/utils/request'



//获取中心所有的小组列表
export function getCenterGroupList(data) {
  return request({
    url: '/group/queryGroupByCenterId',
    method: 'get',
    params:data
  })
}


//获取小组详情信息
export function getGroupDetailInfo(data) {
  return request({
    url: '/group/queryGroupDetail',
    method: 'get',
    params:data
  })
}

//创建小组
export function createGroupInfo(data) {
  return request({
    url: '/group/createGroup',
    method: 'post',
    data
  })
}

//删除小组
export function delGroupInfo(data) {
  return request({
    url: '/group/deleteGroup',
    method: 'get',
    params: data
  })
}

//更新小组
export function updateGroupInfo(data) {
  return request({
    url: '/group/editGroup',
    method: 'post',
    data
  })
}


