import request from '@/utils/request'


//If染色切片分页查询
export function getIFInfoList(data) {
  return request({
    url: '/arteritis/ifSlice/ifSlicePageInfo',
    method: 'post',
    data
  })
}


//If染色切片分页查询
export function getIHCInfoList(data) {
  return request({
    url: '/arteritis/ihcSlice/ihcSlicePageInfo',
    method: 'post',
    data
  })
}

//HE染色切片分页查询
export function getHEInfoList(data) {
  return request({
    url: '/arteritis/heSlice/heSlicePageInfo',
    method: 'post',
    data
  })
}

//血液冻存样本分页查询
export function getBloodSamplePageInfoList(data) {
  return request({
    url: '/arteritis/bloodSample/bloodSamplePageInfo',
    method: 'post',
    data
  })
}


//组织冻存样本分页查询
export function getOrganizeSamplePageInfoList(data) {
  return request({
    url: '/arteritis/organizeSample/organizeSamplePageInfo',
    method: 'post',
    data
  })
}


//病人一般情况
export function getPatientPageInfoList(data) {
  return request({
    url: '/arteritis/patient/patientPageInfo',
    method: 'post',
    data
  })
}

//影像学检查结果
export function getImagingExamPageInfoList(data) {
  return request({
    url: '/arteritis/imagingExam/imagingExamPageInfo',
    method: 'post',
    data
  })
}
//生活质量健康评价分页查询
export function getHealthQualityPageInfoList(data) {
  return request({
    url: '/arteritis/healthQuality/healthQualityPageInfo',
    method: 'post',
    data
  })
}

//组织石蜡块分页查询
export function getTissueParaffinPageInfo(data) {
  return request({
    url: '/arteritis/tissueParaffin/tissueParaffinPageInfo',
    method: 'post',
    data
  })
}


//组织白片分页查询
export function getTissueSlidePageInfoInfo(data) {
  return request({
    url: '/arteritis/tissueSlide/tissueSlidePageInfo',
    method: 'post',
    data
  })
}


//住院手术信息分页查询
export function getHospitalSurgeryPageInfo(data) {
  return request({
    url: '/arteritis/hospitalSurgery/hospitalSurgeryPageInfo',
    method: 'post',
    data
  })
}

//实验室检查结果分页查询
export function getLabTestResultPageInfo(data) {
  return request({
    url: '/arteritis/labTestResult/labTestResultPageInfo',
    method: 'post',
    data
  })
}

//疾病活动性评分分页查询

export function getDiseaseActivityScorePageInfo(data) {
  return request({
    url: '/arteritis/diseaseActivityScore/diseaseActivityScorePageInfo',
    method: 'post',
    data
  })
}

//随访信息
export function getFollowUpPageInfo(data) {
  return request({
    url: '/arteritis/followUp/followUpPageInfo',
    method: 'post',
    data
  })
}

//病人一般情况统计分页查询
export function getPatientStaticPageInfo(data) {
  return request({
    url: '/arteritis/patient/patientStaticPageInfo',
    method: 'post',
    data
  })
}