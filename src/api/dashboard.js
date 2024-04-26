import request from '@/utils/request'


//外科手术按照月份统计
export function getSurgicalOperationMonthCount(data) {
  return request({
    url: '/arteritis/dataStatic/surgicalOperationMonthCount',
    method: 'get',
    params: data
  })
}
//数据大屏数据统计
export function getScreen(data) {
  return request({
    url: '/arteritis/dataStatic/screen',
    method: 'get',
    params: data
  })
}
//病例省份统计
export function getProvinceCount(data) {
  return request({
    url: '/arteritis/dataStatic/provinceCount',
    method: 'get',
    params: data
  })
}
