const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  username: state => state.user.username,
  centerId: state => state.user.centerId,
  templateId: state => state.user.templateId,
  permission_routes: state => state.permission.routes,
  groupId: state => state.user.groupId,
  groupName: state => state.user.groupName,
  centerName: state => state.user.centerName,
  nickName: state => state.user.nickName,
  templateName: state => state.user.templateName,
  userId: state => state.user.userId,
}
export default getters
