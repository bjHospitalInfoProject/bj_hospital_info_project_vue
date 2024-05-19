<template>
  <div class="app-container">

    <div class="filter-container">
      <el-form :inline="true" :model="listQuery" class="demo-form-inline">
        <el-form-item label="姓名">
          <el-input v-model="listQuery.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="listQuery.phone"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getList">查询</el-button>
        </el-form-item>
      </el-form>
    </div>

    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="住院手术信息ID">
        <template slot-scope="{row}">
          <span>{{ row.hospitalSurgeryInfoId }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="填报人">
        <template slot-scope="{row}">
          <span>{{ row.reporter }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="填报日期">
        <template slot-scope="{row}">
          <span>{{ row.reportTime }}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column align="center" label="更新日期">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column> -->
      <el-table-column align="center" label="就诊医院">
        <template slot-scope="{row}">
          <span>{{ row.hospitalName }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="住院号">
        <template slot-scope="{row}">
          <span>{{ row.nursingHomeNumber }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="本院住院次数">
        <template slot-scope="{row}">
          <span>{{ row.hospitalizationNumber }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="入院日期">
        <template slot-scope="{row}">
          <span>{{ row.admissionDate }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="住院时长(天)">
        <template slot-scope="{row}">
          <span>{{ row.hospitalizationDuration }}</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="80">
        <template slot-scope="scope">
          <el-button type="text"  @click="getDetailInfoOption(scope.row)" size="small">详情</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total > 0" :total="total" :pageNo.sync="listQuery.pageNo" :pageSize.sync="listQuery.pageSize"
      @pagination="getList" />

    <el-drawer title="结果详情" size="50%" :visible.sync="drawer" direction="rtl">

      <el-form label-width="220px" :model="InpatientInfo" style="padding-right: 20px;padding-bottom: 20px">


        <el-divider content-position="left">基本信息</el-divider>

        <el-row>
          <el-col :span="12">
            <el-form-item label="就诊医院:">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.hospitalName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="住院号：">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.hospitalSurgeryInfoId"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="本院住院次数:">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.hospitalizationNumber"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="入院日期：">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.admissionDate"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="住院时长(天):">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.hospitalizationDuration"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="年龄">
              <el-input disabled="false" size="mini" style="width:150px" v-model="InpatientInfo.age"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="体重(kg)">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.weight"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="身高(cm)">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.height"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="BMI">
              <el-input disabled="false" size="mini" style="width:150px" v-model="InpatientInfo.bmi"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="学历">
              <el-input disabled="false" size="mini" style="width:150px"
                v-model="InpatientInfo.educationStr"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="职业">
              <el-input disabled="false" size="mini" style="width:150px"
                v-model="InpatientInfo.occupationStr"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="吸烟史：">
              <el-input disabled="false" size="mini" style="width:150px"
                v-model="InpatientInfo.smokingHistoryStr"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="婚姻状况：">
              <el-input disabled="false" size="mini" style="width:150px"
                v-model="InpatientInfo.maritalStatusStr"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="生育状况：">
              <el-select :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.fertilityStatusStr"
                placeholder="请选择">
                <el-option v-for="item in shengyuoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="月经情况：">
              <el-input disabled="false" size="mini" style="width:150px"
                v-model="InpatientInfo.menstrualStatusStr"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="个人信息补充:">
              <el-input :disabled="editVis" v-model="InpatientInfo.personalInfoSupplement" type="textarea" :rows="3"
                placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider content-position="left">既往史&并发症</el-divider>

        <el-row>
          <el-col :span="12">
            <el-form-item label="病程(年)">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.courseOfIllnessYears"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">

            <el-form-item label="并发结核病史">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.historyOfComplicatedTuberculosisStr"></el-input>

            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="并发其他风湿免疫系统疾病史">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.historyOfOtherRheumaticImmunologicalDiseasesStr"></el-input>

            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="大动脉炎手术史:">
              <el-input :disabled="editVis" type="textarea" v-model="InpatientInfo.historyOfAorticAneurysmSurgery"
                :rows="3" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <el-form-item label="结核病史详述:">
              <el-input :disabled="editVis" type="textarea" v-model="InpatientInfo.detailsOfTuberculosisHistory"
                :rows="3" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="其他风湿免疫系统疾病史详述:">
              <el-input :disabled="editVis" type="textarea"
                v-model="InpatientInfo.detailsOfOtherRheumaticImmunologicalDiseasesHistory" :rows="3"
                placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="并发糖尿病:">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.historyOfDiabetesStr"></el-input>

            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="并发高血压:">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.historyOfHypertensionStr"></el-input>

            </el-form-item>
          </el-col>

        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="并发心脏疾病:">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.historyOfHeartDiseaseStr"></el-input>

            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="并发心力衰竭NYHA分级">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.nyhaClassificationOfCongestiveHeartFailureStr"></el-input>

            </el-form-item>
          </el-col>
        </el-row>
        <el-row>

          <el-col :span="12">
            <el-form-item label="并发脑缺血">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.historyOfCerebralIschemiaStr"></el-input>

            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="并发左肾缺血">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.historyOfLeftRenalIschemiaStr"></el-input>

            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="并发右肾缺血">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.historyOfRightRenalIschemiaStr"></el-input>

            </el-form-item>
          </el-col>
          <el-col :span="12">

            <el-form-item label="并发慢性肾病分期">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.stagingOfChronicKidneyDiseaseStr"></el-input>

            </el-form-item>
          </el-col>

        </el-row>

        <el-row>
          <el-col :span="12">

            <el-form-item label="并发肺动脉高压">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.historyOfPulmonaryArterialHypertensionStr"></el-input>

            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item class="custom" label="并发视网膜病变Uyama_Asayama分类">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.uyamaAsayamaClassificationOfRetinalLesionsStr"></el-input>

            </el-form-item>
          </el-col>
        </el-row>
        <el-row>


          <el-col :span="12">
            <el-form-item label="并发贫血">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.anemiaStr"></el-input>

            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="并发高同型半胱氨酸血症">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.homocysteineemiaStr"></el-input>

            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="并发高脂血症">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.hyperlipidemiaStr"></el-input>

            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="其他病史补充:">
              <el-input :disabled="editVis" type="textarea" v-model="InpatientInfo.otherMedicalHistorySupplement"
                :rows="3" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="其他手术史:">
              <el-input :disabled="editVis" type="textarea" v-model="InpatientInfo.otherSurgicalHistory" :rows="3"
                placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-divider content-position="left">术前评估</el-divider>

        <el-row>
          <el-col :span="12">
            <el-form-item label="本次术前表现">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.currentSymptomsStr"></el-input>

            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="2011年中国指南临床分型">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.chineseGuidelines2011ClassificationStr"></el-input>

            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="术前病情详述(新发/复发/加重症状和体征-持续时间):">
              <el-input :disabled="editVis" type="textarea" v-model="InpatientInfo.detailedPreoperativeCondition"
                :rows="3" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="术前激素 (药名-剂量-频次-给药方式默认p.o.):">
              <el-input :disabled="editVis" type="textarea" v-model="InpatientInfo.preoperativeSteroids" :rows="3"
                placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="术前免疫抑制剂 (药名-剂量-频次-给药方式默认p.o.):">
              <el-input :disabled="editVis" type="textarea" v-model="InpatientInfo.preoperativeImmunosuppressants"
                :rows="3" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="术前生物制剂 (药名-剂量-频次-给药方式默认i.v.):">
              <el-input :disabled="editVis" type="textarea" v-model="InpatientInfo.preoperativeBiologics" :rows="3"
                placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="术前降压药 (药名-剂量-频次-给药方式默认p.o.)">
              <el-input :disabled="editVis" type="textarea" v-model="InpatientInfo.preoperativeAntihypertensives"
                :rows="3" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="术前降脂药 (药名-剂量-频次-给药方式默认p.o.)">
              <el-input :disabled="editVis" type="textarea" v-model="InpatientInfo.preoperativeLipidLoweringDrugs"
                :rows="3" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="术前抗栓药 (药名-剂量-频次-给药方式默认p.o.)">
              <el-input :disabled="editVis" type="textarea" v-model="InpatientInfo.preoperativeAnticoagulants" :rows="3"
                placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="术前用药补充 (药名-剂量-频次-给药方式默认p.o.)">
              <el-input :disabled="editVis" type="textarea" v-model="InpatientInfo.preoperativeMedicationSupplement"
                :rows="3" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="入院血压-收缩压(mmHg)">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.admissionBloodPressureSystolic"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="入院血压-舒张压(mmHg)">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.admissionBloodPressureDiastolic"></el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="入院心率(次/min)">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.admissionHeartRate"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="入院呼吸频率(次/min)">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.admissionRespiratoryRate"></el-input>

            </el-form-item>
          </el-col>

        </el-row>
        <el-row>

          <el-col :span="12">
            <el-form-item label="术前左室射血分数LVEF(%)">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.preoperativeLeftVentricularEjectionFraction"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="术前心电图结果">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.preoperativeEcgResultStr"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="术前四肢血压-收缩压(mmHg)(左上-右上-左下-右下)">
              <el-input :disabled="editVis" type="textarea" :rows="3"
                v-moedl="InpatientInfo.preoperativeFourLimbBloodPressureSystolic" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="术前四肢血压-舒张压(mmHg)(左上-右上-左下-右下)">
              <el-input :disabled="editVis" type="textarea" :rows="3"
                v-moedl="InpatientInfo.preoperativeFourLimbBloodPressureDiastolic" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="术前心脏超声结果">
              <el-input :disabled="editVis" type="textarea" :rows="3"
                v-moedl="InpatientInfo.preoperativeCardiacUltrasoundResult" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="术前胸片/胸部CT结果(默认胸片, CT要标明)">
              <el-input :disabled="editVis" type="textarea" :rows="3"
                v-moedl="InpatientInfo.preoperativeChestXrayCtResult" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <el-form-item label="术前肺功能">
              <el-input :disabled="editVis" type="textarea" :rows="3"
                v-moedl="InpatientInfo.preoperativePulmonaryFunction" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>

          <el-col :span="12">
            <el-form-item label="术前右侧ABI">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.preoperativeRightAbi"></el-input>

            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="术前左侧ABI">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.preoperativeLeftAbi"></el-input>

            </el-form-item>
          </el-col>


        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="术前总eGFR">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.preoperativeTotalEgfr"></el-input>

            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="术前右eGFR">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.preoperativeRightEgfr"></el-input>

            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="术前左eGFR">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.preoperativeLeftEgfr"></el-input>

            </el-form-item>
          </el-col>
        </el-row>


        <el-row>
          <el-col :span="24">
            <el-form-item label="术前其他评估补充">
              <el-input :disabled="editVis" type="textarea"
                v-moedl="InpatientInfo.preoperativeOtherAssessmentSupplement" :rows="3" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="术前实验室检验结果ID">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.preoperativeLabTestResultsId"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">

            <el-form-item label="术前影像学检查结果ID">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.preoperativeImagingTestResultsId"></el-input>
            </el-form-item>
          </el-col>


        </el-row>
        <el-row>
          <el-col :span="12">

            <el-form-item label="术前Numano影像分型">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.preoperativeNumanoImagingClassification"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="术前疾病活动性评分ID">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.preoperativeDiseaseActivityScoreId"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>


          <el-col :span="12">
            <el-form-item label="术前NIH活动性评分得分">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.preoperativeNihActivityScore"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="术前改良NIH活动性评分得分">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.preoperativeImprovedNihActivityScore"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>

          <el-col :span="12">
            <el-form-item label="术前ITAS 2010活动性评分得分">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.preoperativeItas2010ActivityScore"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="术前ITAS-A活动性评分得分">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.preoperativeItasAActivityScore"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="术前PGA活动性评价">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.preoperativePgaActivityEvaluationStr"></el-input>

            </el-form-item>
          </el-col>
        </el-row>


        <el-divider content-position="left">手术信息</el-divider>


        <el-row>

          <el-col :span="12">
            <el-form-item label="手术日期">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.surgeryDate"></el-input>

            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="麻醉方式">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.anesthesiaMethodStr"></el-input>
            </el-form-item>
          </el-col>


        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="术前ASA分级">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.preoperativeAsaClassificationStr"></el-input>

            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="麻醉效果">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.anesthesiaEffectStr"></el-input>

            </el-form-item>
          </el-col>
        </el-row>
        <el-row>

          <el-col :span="12">
            <el-form-item label="术者(主刀-一助-二助)">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.surgeon"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="手术形式">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.surgeryFormStr"></el-input>

            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="手术名称">
              <el-input :disabled="editVis" type="textarea" v-moedl="InpatientInfo.surgeryName" :rows="1"
                placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <el-form-item label="重建血管">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.vascularReconstructionStr"></el-input>

            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="球囊扩张说明(扩张部位-球囊品牌/型号-扩张次数-残余狭窄率)">
              <el-input :disabled="editVis" type="textarea" v-moedl="InpatientInfo.balloonDilationDescription" :rows="5"
                placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="支架植入说明(植入部位-支架品牌/型号-支架个数-残余狭窄率)">
              <el-input :disabled="editVis" type="textarea" v-moedl="InpatientInfo.stentImplantationDescription"
                :rows="5" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="血管搭桥说明(桥血管起-止部位-桥血管类型-桥血管品牌/型号(或来源)-桥血管个数-动脉阻断时间)">
              <el-input :disabled="editVis" type="textarea" v-moedl="InpatientInfo.vascularBridgingDescription"
                :rows="5" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="PUMCH外科分型">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.pumchSurgicalClassificationStr"></el-input>

            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="">
              <img style="width:200%" src="@/assets/images/PUMCH.png" alt="">
            </el-form-item>
          </el-col>

        </el-row>

        <rl-row>
          <el-col :span="24">

            <el-form-item label="手术测压情况">
              <el-input :disabled="editVis" type="textarea" v-moedl="InpatientInfo.intraoperativePressureSituation"
                :rows="5" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </rl-row>
        <rl-row>
          <el-col :span="24">

            <el-form-item label="手术内容补充">
              <el-input :disabled="editVis" type="textarea" v-moedl="InpatientInfo.surgicalContentSupplement" :rows="5"
                placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </rl-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="造影剂用量">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.contrastAgentVolume"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">

            <el-form-item label="手术时长(min)">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.surgeryDuration"></el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="术中出血量(ml)">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.intraoperativeBleedingVolume"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">

            <el-form-item label="自体血回输量(ml)">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.autologousBloodTransfusionVolume"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>

          <el-col :span="12">

            <el-form-item label="红细胞输注量(ml)">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.redBloodCellTransfusionVolume"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="血浆输注量(ml)">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.plasmaTransfusionVolume"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="术中并发症">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.intraoperativeComplicationsStr"></el-input>

            </el-form-item>
          </el-col>
        </el-row>

        <el-divider content-position="left">术后情况</el-divider>

        <el-row>
          <el-col :span="12">

            <el-form-item label="术后第1天VAS评分">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.postoperativeDay1VasScore"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">

            <el-form-item label="术后去向">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.postoperativeDestinationStr"></el-input>

            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">

            <el-form-item label="术后住院天数">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.postoperativeHospitalizationDays"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">

            <el-form-item label="术后ICU住院天数">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.postoperativeIcuHospitalizationDays"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">

            <el-form-item label="术晨血压-收缩压(mmHg)">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.postoperativeMorningBloodPressureSystolic"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">

            <el-form-item label="术晨血压-舒张压(mmHg)">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.postoperativeMorningBloodPressureDiastolic"></el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">

            <el-form-item label="术晚血压-收缩压(mmHg)">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.postoperativeEveningBloodPressureSystolic"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">

            <el-form-item label="术晚血压-舒张压(mmHg)">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.postoperativeEveningBloodPressureDiastolic"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>


          <el-col :span="12">

            <el-form-item label="术后1日血压-收缩压(mmHg)">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.postoperativeDay1BloodPressureSystolic"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">

            <el-form-item label="术后1日血压-舒张压(mmHg)">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.postoperativeDay1BloodPressureDiastolic"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">

            <el-form-item label="术后3日血压-收缩压(mmHg)">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.postoperativeDay3BloodPressureSystolic"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">

            <el-form-item label="术后3日血压-舒张压(mmHg)">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.postoperativeDay3BloodPressureDiastolic"></el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">

            <el-form-item label="术后7日血压-收缩压(mmHg)">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.postoperativeDay7BloodPressureSystolic"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">

            <el-form-item label="术后7日血压-舒张压(mmHg)">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.postoperativeDay7BloodPressureDiastolic"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">

            <el-form-item label="术后血压情况">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.postoperativeBloodPressureConditionStr"></el-input>

            </el-form-item>
          </el-col>

        </el-row>

        <el-row>
          <el-col :span="24">

            <el-form-item class="custom" label="术后血压管理方案 (药名-剂量-频次-给药方式)">
              <el-input :disabled="editVis" type="textarea"
                v-moedl="InpatientInfo.postoperativeBloodPressureManagementScheme" :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">

            <el-form-item label="呼吸机时长(h)">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.ventilatorDuration"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">

            <el-form-item label="有创压监测(d)">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.invasivePressureMonitoringDays"></el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">

            <el-form-item label="术后输红细胞(U)">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.postoperativeRedBloodCellTransfusionUnits"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">

            <el-form-item label="术后输血浆(ml)">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.postoperativePlasmaTransfusionVolume"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">

            <el-form-item label="术后甘露醇使用总量">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.totalMannitolUsageAfterOperation"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">

            <el-form-item class="custom" label="术后甘露醇用药方案(剂量-次数-天数)">
              <el-input :disabled="editVis" type="textarea" v-moedl="InpatientInfo.mannitolUsageSchemeAfterOperation"
                :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">

            <el-form-item class="custom" label="围手术期静脉激素替代天数">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.perioperativeSteroidReplacementDays"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">

            <el-form-item class="custom" label="术前静脉激素替代方案(药名-剂量-频次-时间)">
              <el-input :disabled="editVis" type="textarea" v-moedl="InpatientInfo.preoperativeSteroidReplacementScheme"
                :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>

          <el-col :span="24">

            <el-form-item class="custom" label="术中静脉激素替代方案(药名-剂量-频次-时间)">
              <el-input :disabled="editVis" type="textarea"
                v-moedl="InpatientInfo.intraoperativeSteroidReplacementScheme" :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="术后口服激素 (药名-剂量-频次)">
              <el-input :disabled="editVis" type="textarea" v-moedl="InpatientInfo.postoperativeOralSteroids" :rows="4"
                placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="术后免疫抑制剂 (药名-剂量-频次-给药方式默认p.o.)">
              <el-input :disabled="editVis" type="textarea" v-moedl="InpatientInfo.postoperativeImmunosuppressants"
                :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="术后生物制剂 (药名-剂量-频次-给药方式默认i.v.)">
              <el-input :disabled="editVis" type="textarea" v-moedl="InpatientInfo.postoperativeBiologics" :rows="4"
                placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="术后降脂药 (药名-剂量-频次-给药方式默认p.o.)">
              <el-input :disabled="editVis" type="textarea" v-moedl="InpatientInfo.postoperativeLipidLoweringDrugs"
                :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="术后抗栓药 (药名-剂量-频次-给药方式默认p.o.)">
              <el-input :disabled="editVis" type="textarea" v-moedl="InpatientInfo.postoperativeAntithromboticDrugs"
                :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="病理报告具体结果">
              <el-input :disabled="editVis" type="textarea" v-moedl="InpatientInfo.pathologicalReportSpecificResults"
                :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>

          <el-col :span="12">

            <el-form-item class="custom" label="术后-出院时靶血管情况">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.postoperativeTargetVesselConditionStr"></el-input>

            </el-form-item>
          </el-col>
        </el-row>


        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="出院激素 (药名-剂量-频次-给药方式默认p.o.)">
              <el-input :disabled="editVis" type="textarea" v-moedl="InpatientInfo.dischargeSteroids" :rows="4"
                placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="出院免疫抑制剂 (药名-剂量-频次-给药方式默认p.o.)">
              <el-input :disabled="editVis" type="textarea" v-moedl="InpatientInfo.dischargeImmunosuppressants"
                :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="出院生物制剂 (药名-剂量-频次-给药方式默认i.v.)">
              <el-input :disabled="editVis" type="textarea" v-moedl="InpatientInfo.dischargeBiologics" :rows="4"
                placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="出院降压药 (药名-剂量-频次-给药方式默认p.o.)">
              <el-input :disabled="editVis" type="textarea" v-moedl="InpatientInfo.dischargeAntihypertensiveDrugs"
                :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="出院降脂药 (药名-剂量-频次-给药方式默认p.o.)">
              <el-input :disabled="editVis" type="textarea" v-moedl="InpatientInfo.dischargeLipidLoweringDrugs"
                :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="出院抗栓药 (药名-剂量-频次-给药方式默认p.o.)">
              <el-input :disabled="editVis" type="textarea" v-moedl="InpatientInfo.dischargeAntithromboticDrugs"
                :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>


        <el-row>
          <el-col :span="12">

            <el-form-item label="术后30天内并发症">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.complicationsWithin30DaysAfterOperationStr"></el-input>

            </el-form-item>
          </el-col>

          <el-col :span="12">

            <el-form-item label="术后并发症发生日期">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.dateOfComplicationsAfterOperation"></el-input>

            </el-form-item>
          </el-col>

        </el-row>

        <el-row>
          <el-col :span="24">
            <el-form-item label="术后并发症详情">
              <el-input :disabled="editVis" type="textarea" v-moedl="InpatientInfo.detailsOfComplicationsAfterOperation"
                :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="非计划再干预手术">
              <el-input :disabled="editVis" type="textarea"
                v-moedl="InpatientInfo.unplannedReinterventionAfterOperation" :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="术后管理补充">
              <el-input :disabled="editVis" type="textarea" v-moedl="InpatientInfo.postoperativeManagementSupplement"
                :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-divider content-position="left">Barthel指数量表</el-divider>


        <el-row>
          <el-col :span="12">
            <el-form-item class="custom" label="术前生活质量健康评价ID">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.preoperativeQualityOfLifeHealthAssessmentId"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">

            <el-form-item class="custom" label="术后生活质量健康评价ID">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.postoperativeQualityOfLifeHealthAssessmentId"></el-input>
            </el-form-item>
          </el-col>


        </el-row>
        <el-row>
          <el-col :span="12">

            <el-form-item class="custom" label="术前Barthel指数量表得分(入院时)">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.preoperativeBarthelIndexScore"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">

            <el-form-item class="custom" label="术前Barthel指数量表-进食得分">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.preoperativeBarthelIndexEatingScore"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>


          <el-col :span="12">

            <el-form-item class="custom" label="术前Barthel指数量表-洗澡得分">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.preoperativeBarthelIndexBathingScore"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">

            <el-form-item class="custom" label="术前Barthel指数量表-修饰得分">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.preoperativeBarthelIndexDressingScore"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>

          <el-col :span="12">

            <el-form-item class="custom" label="术前Barthel指数量表-穿衣得分">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.preoperativeBarthelIndexToiletingScore"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">

            <el-form-item class="custom" label="术前Barthel指数量表-控制大便得分">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.preoperativeBarthelIndexBowelControlScore"></el-input>
            </el-form-item>
          </el-col>


        </el-row>
        <el-row>
        </el-row>
        <el-col :span="12">

          <el-form-item class="custom" label="术前Barthel指数量表-控制小便得分">
            <el-input :disabled="editVis" style="width:150px" size="mini"
              v-model="InpatientInfo.preoperativeBarthelIndexBladderControlScore"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">

          <el-form-item class="custom" label="术前Barthel指数量表-如厕得分">
            <el-input :disabled="editVis" style="width:150px" size="mini"
              v-model="InpatientInfo.preoperativeBarthelIndexToiletUseScore"></el-input>
          </el-form-item>
        </el-col>
        <el-row>


          <el-col :span="12">

            <el-form-item class="custom" label="术前Barthel指数量表-床椅转移得分">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.preoperativeBarthelIndexBedChairTransferScore"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">

            <el-form-item class="custom" label="术前Barthel指数量表-平地行走得分">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.preoperativeBarthelIndexWalkOnLevelSurfaceScore"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>

          <el-col :span="12">

            <el-form-item class="custom" label="术前Barthel指数量表-上下楼梯得分">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.preoperativeBarthelIndexGoingUpDownstairsScore"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">

            <el-form-item class="custom" label="术后Barthel指数量表得分(术后7天/出院时)">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.postoperativeBarthelIndexScore"></el-input>
            </el-form-item>
          </el-col>


        </el-row>
        <el-row>
          <el-col :span="12">

            <el-form-item class="custom" label="术后Barthel指数量表-进食得分">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.postoperativeBarthelIndexEatingScore"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">

            <el-form-item class="custom" label="术后Barthel指数量表-洗澡得分">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.postoperativeBarthelIndexBathingScore"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>


          <el-col :span="12">

            <el-form-item class="custom" label="术后Barthel指数量表-修饰得分">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.postoperativeBarthelIndexDressingScore">
              </el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">

            <el-form-item class="custom" label="术后Barthel指数量表-穿衣得分">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.postoperativeBarthelIndexToiletingScore"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>

          <el-col :span="12">

            <el-form-item class="custom" label="术后Barthel指数量表-控制大便得分">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.postoperativeBarthelIndexBowelControlScore">
              </el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">

            <el-form-item class="custom" label="术后Barthel指数量表-控制小便得分">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.postoperativeBarthelIndexBladderControlScore"></el-input>
            </el-form-item>
          </el-col>


        </el-row>
        <el-row>
          <el-col :span="12">

            <el-form-item class="custom" label="术后Barthel指数量表-如厕得分">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.postoperativeBarthelIndexToiletUseScore"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">

            <el-form-item class="custom" label="术后Barthel指数量表-床椅转移得分">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.postoperativeBarthelIndexBedChairTransferScore"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>


          <el-col :span="12">

            <el-form-item class="custom" label="术后Barthel指数量表-平地行走得分">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.postoperativeBarthelIndexWalkOnLevelSurfaceScore"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">

            <el-form-item class="custom" label="术后Barthel指数量表-上下楼梯得分">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.postoperativeBarthelIndexGoingUpDownstairsScore"></el-input>
            </el-form-item>
          </el-col>
        </el-row>


        <el-divider content-position="left">随访后补充</el-divider>

        <el-row>

          <el-col :span="12">

            <el-form-item label="术后症状复发时间">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.symptomRecurrenceTime"></el-input>

            </el-form-item>
          </el-col>
          <el-col :span="12">

            <el-form-item label="术后靶血管再狭窄时间">

              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.targetVesselRestenosisTime"></el-input>

            </el-form-item>
          </el-col>

          <el-col :span="12">

            <el-form-item label="术后再干预时间">

              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="InpatientInfo.reinterventionTime"></el-input>

            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">

            <el-form-item label="术后远期情况补充">
              <el-input :disabled="editVis" type="textarea" v-moedl="InpatientInfo.longTermConditionSupplement"
                :rows="3" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>



      </el-form>
    </el-drawer>
  </div>
</template>

<script>
import { getHospitalSurgeryPageInfo } from '@/api/dataquery'
import Pagination from '@/components/Pagination'
import { mapGetters } from 'vuex'


export default {
  name: 'InlineEditTable',
  components: { Pagination },
  data() {
    return {
      list: null,
      listLoading: true,
      total: 0,
      listQuery: {
        pageNo: 1,
        pageSize: 10,
        name: "",
        phone: "",
        centerId: ''
      },
      drawer: false,
      InpatientInfo: {},
      editVis: true
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getDetailInfoOption(row) {
      this.drawer = true;
      this.InpatientInfo = { ...row }
    },
    async getList() {
      this.listLoading = true
      this.listQuery.centerId = this.centerId
      const { data } = await getHospitalSurgeryPageInfo(this.listQuery)
      const items = data.data
      this.total = data.totalCount
      this.list = items.map(v => {
        return v
      })
      this.listLoading = false
    },
    getLabelFromValue(options, value) {
      for (let i = 0; i < options.length; i++) {
        if (options[i].value === value) {
          return options[i].label;
        }
      }
      // 如果没有找到匹配的值，则返回空字符串或者其他你觉得合适的值
      return "";
    }
  },
  computed: {
    ...mapGetters([
      'centerId'
    ])
  }
}
</script>

<style scoped>
.filter-container {
  margin-bottom: 30px;

  .filter-item {
    margin-left: 20px;
  }
}

::v-deep .custom .el-form-item__label {
  line-height: 20px
}

.el-form-item {
  margin-bottom: 5px;
}
</style>
