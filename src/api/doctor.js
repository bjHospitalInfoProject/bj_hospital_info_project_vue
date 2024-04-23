import request from '@/utils/request'


//获取所有医生列表
export function getDoctorList(data) {
  return request({
    url: '/user/listAllUser',
    method: 'post',
    data
  })
}
//删除医生
export function delDoctorInfo(data) {
  return request({
    url: '/user/deleteUser',
    method: 'post',
    data
  })
}
//更新医生权限信息
export function updateDoctorInfo(data) {
  return request({
    url: '/user/updateUserCenterCorrelation',
    method: 'post',
    data
  })
}


