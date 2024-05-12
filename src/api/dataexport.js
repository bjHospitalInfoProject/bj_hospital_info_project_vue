import request from '@/utils/request'


//根据小组查询可以导出那些表
export function getTableList(data) {
  return request({
    url: '/export/queryCanExport',
    method: 'get',
    params:data
  })
}
//获取导出的文件信息
export function getExportFiles(data) {
  return request({
    url: '/user/deleteUser',
    method: 'post',
    data
  })
}


