import request from '@/utils/request'


//If染色切片新增或修改
export function addOrUpdateIfSlice(data) {
  return request({
    url: '/arteritis/ifSlice/addOrUpdateIfSlice',
    method: 'post',
    data
  })
}


//IHC染色切片新增或修改
export function addOrUpdateIhcSlice(data) {
  return request({
    url: '/arteritis/ihcSlice/addOrUpdateIhcSlice',
    method: 'post',
    data
  })
}

//HE染色切片新增或修改
export function addOrUpdateHeSlice(data) {
  return request({
    url: '/arteritis/heSlice/addOrUpdateHeSlice',
    method: 'post',
    data
  })
}

//血液冻存样本新增或修改
export function addOrUpdateBloodSample(data) {
  return request({
    url: '/arteritis/bloodSample/addOrUpdateBloodSample',
    method: 'post',
    data
  })
}


//组织东存样本新增或修改
export function addOrUpdateOrganizeSample(data) {
  return request({
    url: '/arteritis/organizeSample/addOrUpdateOrganizeSample',
    method: 'post',
    data
  })
}


//病人一般情况新增或修改
export function addOrUpdatePatientPageInfo(data) {
  return request({
    url: '/arteritis/patient/addOrUpdatePatientPageInfo',
    method: 'post',
    data
  })
}

//影像学检查新增或修改
export function addOrUpdateImagingExam(data) {
  return request({
    url: '/arteritis/imagingExam/addOrUpdateImagingExam',
    method: 'post',
    data
  })
}
//生活质量健康评价新增或修改
export function addOrUpdateHealthQuality(data) {
  return request({
    url: '/arteritis/healthQuality/addOrUpdateHealthQuality',
    method: 'post',
    data
  })
}

//组织石蜡块新增或修改
export function addOrUpdateTissueParaffin(data) {
  return request({
    url: '/arteritis/tissueParaffin/addOrUpdateTissueParaffin',
    method: 'post',
    data
  })
}


//组织白片新增或修改
export function addOrUpdateTissueSlide(data) {
  return request({
    url: '/arteritis/tissueSlide/addOrUpdateTissueSlide',
    method: 'post',
    data
  })
}


//住院手术信息新增或修改
export function addOrUpdateHospitalSurgery(data) {
  return request({
    url: '/arteritis/hospitalSurgery/addOrUpdateHospitalSurgery',
    method: 'post',
    data
  })
}

//实验室检查结果新增或修改
export function addOrUpdateLabTestResult(data) {
  return request({
    url: '/arteritis/labTestResult/addOrUpdateLabTestResult',
    method: 'post',
    data
  })
}

//疾病活动性评分新增或修改
export function addOrUpdateDiseaseActivityScore(data) {
  return request({
    url: '/arteritis/diseaseActivityScore/addOrUpdateDiseaseActivityScore',
    method: 'post',
    data
  })
}

//随访信息新增或修改
export function addOrUpdatefollowUp(data) {
  return request({
    url: '/arteritis/followUp/addOrUpdatefollowUp',
    method: 'post',
    data
  })
}

//数据录入的权限接口

export function queryUserDataEntryPermission(data) {
  return request({
    url: '/user/queryUserDataEntryPermission',
    method: 'get',
    params: data
  })
}