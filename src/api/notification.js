import request from '@/utils/request'


//获取注册的审批列表
export function getNotificationList(data) {
  return request({
    url: '/user/listUserApply',
    method: 'post',
    data
  })
}
//审批通知信息
export function applyNotificationInfo(data) {
  return request({
    url: '/user/approvalRegister',
    method: 'post',
    data
  })
}
