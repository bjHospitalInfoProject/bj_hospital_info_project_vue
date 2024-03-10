
const asyncRoutes = [
  {
    path: '/dataoverview',
    component: 'Layout',
    redirect: 'noRedirect',
    name: 'Dataoverview',
    meta: { title: '数据总览', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'general_situation_patient',
        name: 'general_situation_patient',
        component: 'dataoverview/general_situation_patient',
        meta: { title: '病人一般情况表', icon: 'table' }
      },
      {
        path: 'Inpatient_surgical_information',
        name: 'Inpatient_surgical_information',
        component: 'dataoverview/Inpatient_surgical_information',
        meta: { title: '住院手术信息', icon: 'table' }
      },
      {
        path: 'Imaging_examination_results',
        name: 'Imaging_examination_results',
        component: 'dataoverview/Imaging_examination_results',
        meta: { title: '影像学检查结果', icon: 'table' }
      },
      {
        path: 'laboratory_test_results',
        name: 'laboratory_test_results',
        component: 'dataoverview/laboratory_test_results',
        meta: { title: '实验室检验结果', icon: 'table' }
      },
      {
        path: 'follow_up_information',
        name: 'follow_up_information',
        component: 'dataoverview/follow_up_information',
        meta: { title: '随访信息', icon: 'table' }
      },
      {
        path: 'disease_activity_core',
        name: 'disease_activity_core',
        component: 'dataoverview/disease_activity_core',
        meta: { title: '疾病活动性评分', icon: 'table' }
      },
      {
        path: 'quality_life_health_evaluation',
        name: 'quality_life_health_evaluation',
        component: 'dataoverview/quality_life_health_evaluation',
        meta: { title: '生活质量健康评价', icon: 'table' }
      },
      {
        path: 'organize_frozen_samples',
        name: 'organize_frozen_samples',
        component: 'dataoverview/organize_frozen_samples',
        meta: { title: '组织冻存样本', icon: 'table' }
      },
      {
        path: 'blood_cryopreserved_samples',
        name: 'blood_cryopreserved_samples',
        component: 'dataoverview/blood_cryopreserved_samples',
        meta: { title: '血液冻存样本', icon: 'table' }
      },
      {
        path: 'IF_stained_sections',
        name: 'IF_stained_sections',
        component: 'dataoverview/IF_stained_sections',
        meta: { title: 'IF染色切片', icon: 'table' }
      },
      {
        path: 'IHC_stained_sections',
        name: 'IHC_stained_sections',
        component: 'dataoverview/IHC_stained_sections',
        meta: { title: 'IHC染色切片', icon: 'table' }
      },
      {
        path: 'HE_stained_sections',
        name: 'HE_stained_sections',
        component: 'dataoverview/HE_stained_sections',
        meta: { title: 'HE染色切片', icon: 'table' }
      },
      {
        path: 'organizational_white_patches',
        name: 'organizational_white_patches',
        component: 'dataoverview/organizational_white_patches',
        meta: { title: '组织白片', icon: 'table' }
      },
      {
        path: 'organizing_paraffin_blocks',
        name: 'organizing_paraffin_blocks',
        component: 'dataoverview/organizing_paraffin_blocks',
        meta: { title: '组织石蜡块', icon: 'table' }
      }
    ]
  },
  {
    path: '/dataentry',
    component: 'Layout',
    children: [
      {
        path: 'indexlist',
        name: 'Dataentry',
        component: 'dataentry/indexlist',
        meta: { title: '数据录入', icon: 'datainsert' }
      }
    ]
  },
  {
    path: '/inportexport',
    component: 'Layout',
    redirect: 'noRedirect',
    name: 'Importexport',
    meta: { title: '导入导出', icon: 'importexport' },
    children: [
      {
        path: 'import',
        name: 'Import',
        component: 'inportexport/import',
        meta: { title: '数据导入', icon: 'table' }
      },
      {
        path: 'export',
        name: 'Export',
        component: 'inportexport/export',
        meta: { title: '数据导出', icon: 'table' }
      }
    ]
  },
  {
    redirect: 'noRedirect',
    name: 'Permission',
    path: '/permission',
    component: 'Layout',
    meta: { title: '权限设置', icon: 'quanxianshezhi' },
    children: [
      {
        path: 'center',
        name: 'Center',
        component: 'permission/center',
        meta: { title: '中心医生', icon: 'doctor' }
      },
      {
        path: 'group',
        name: 'Group',
        component: 'permission/group',
        meta: { title: '小组管理', icon: 'group' }
      }
    ]
  },
  {
    path: '/notification',
    component: 'Layout',
    children: [
      {
        path: 'index',
        name: 'Notification',
        component: 'notification/index',
        meta: { title: '审批通知', icon: 'message' }
      }
    ]
  },
  {
    path: '/doctor',
    component: 'Layout',
    children: [
      {
        path: 'index',
        name: 'Doctor',
        component: 'doctor/index',
        meta: { title: '所有医生', icon: 'doctor' }
      }
    ]
  },
  {
    path: '/center',
    component: 'Layout',
    children: [
      {
        path: 'index',
        name: 'Center',
        component: 'center/index',
        meta: { title: '中心管理', icon: 'center' }
      }
    ]
  },
  {
    path: '/user',
    component: 'Layout',
    hidden: true,
    meta: { title: '个人信息' },
    children: [
      {
        path: 'usercenter',
        name: 'user',
        breadcrumb: true,
        component: 'user/usercenter'
      }
    ]
  },
  {
    path: '/dataentry/',
    component: 'Layout',
    hidden: true,
    meta: { title: '详情信息' },
    children: [
      {
        path: 'index',
        name: 'dataentryDetail',
        breadcrumb: true,
        component: 'dataentry/index'
      }
    ]
  }
]

module.exports = {
  asyncRoutes
}
