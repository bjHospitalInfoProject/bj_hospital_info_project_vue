import request from '@/utils/request'

//查询模板对应的中心列表
export function getCenterListInfo(params) {
  return request({
    url: '/center/queryCenterByTemplateId',
    method: 'get',
    params: params
  })
}
//获取当前模板对应的统计信息
export function getCenterTotalInfo(params) {
  return request({
    url: '/template/queryStaticByTemplate',
    method: 'get',
    params: params
  })
}

//创建中心
export function createCenterInfo(data) {
  return request({
    url: '/center/createCenter',
    method: 'post',
    data
  })
}

//修改中心
export function updateCenterInfo(data) {
  return request({
    url: '/center/updateCenter',
    method: 'post',
    data
  })
}