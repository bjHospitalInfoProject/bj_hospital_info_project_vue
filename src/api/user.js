import request from '@/utils/request'

//用户登录
export function login(data) {
  return request({
    url: '/user/authLogin',
    method: 'post',
    data
  })
}
//用户注册
export function register(data) {
  return request({
    url: '/user/memberRegister',
    method: 'post',
    data
  })
}

//获取个人信息
export function getInfo(token) {
  return request({
    url: '/user/loginUserDetail',
    method: 'get',
    params: { token }
  })
}
//退出登录
export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
//获取模板信息列表
export function getTempleteIdInfo() {
  return request({
    url: '/template/queryAllTemplate',
    method: 'get',
  })
}
//根据模板 id 获取中心 id
export function getCenterIdInfo(params) {
  return request({
    url: '/center/queryCenterByTemplateId',
    method: 'get',
    params
  })
}

//获取验证码
export function getVerifyCodeInfo(params) {
  return request({
    url: '/user/sendVerifyCode',
    method: 'get',
    params
  })
}

//用户注册
export function forgetPassword(data) {
  return request({
    url: '/user/forgotPassword2Update',
    method: 'post',
    data
  })
}


//用户换绑手机号
export function updatePhoneInfo(data) {
  return request({
    url: '/user/changeUsername',
    method: 'post',
    data
  })
}

//更改用户所在的小组信息
export function updateDoctorGroupInfo(data) {
  return request({
    url: '/user/changeUserGroup',
    method: 'post',
    data
  })
}

//更改用户所在的小组信息
export function refreshTokenInfo() {
  return request({
    url: '/user/refreshToken',
    method: 'get',
  })
}