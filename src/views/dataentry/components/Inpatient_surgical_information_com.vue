<template>
    <el-card class="box-card InpatientInfo">
        <div slot="header" class="clearfix">
            <span>住院手术信息</span>
            <el-button v-if="editVis == true" style="float: right;margin-top: 5px;" size="mini" type="success"
                @click="editVis = false">编辑</el-button>
            <el-button v-else style="float: right;margin-top: 5px;" size="mini" type="success"
                @click="saveOptionsApi()">保存</el-button>

        </div>
        <div>
            <el-form label-width="220px" :model="InpatientInfo">
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="住院手术信息ID:">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.hospitalSurgeryInfoId"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="填报人:">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.reporter"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="填报日期:">
                            <el-date-picker :disabled="editVis" v-model="InpatientInfo.reportTime" style="width:220px"
                                size="mini" type="date" placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="更新日期">
                            <el-date-picker :disabled="editVis" v-model="InpatientInfo.name" style="width:220px"
                                size="mini" type="date" placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-divider content-position="left">基本信息</el-divider>

                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="就诊医院:">
                            <el-select :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.hospitalName" placeholder="请选择">
                                <el-option v-for="item in yiyuanoptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>

                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="住院号：">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.hospitalSurgeryInfoId"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="本院住院次数:">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.hospitalizationNumber"></el-input>
                        </el-form-item>
                    </el-col>

                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="入院日期：">
                            <el-date-picker :disabled="editVis" v-model="InpatientInfo.admissionDate"
                                style="width:220px" size="mini" type="date" placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="住院时长(天):">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.hospitalizationDuration"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="年龄">
                            <el-input disabled="false" size="mini" style="width:220px"
                                v-model="InpatientInfo.age"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="体重(kg)">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.weight"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="身高(cm)">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.height"></el-input>

                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="BMI">
                            <el-input disabled="false" size="mini" style="width:220px"
                                v-model="InpatientInfo.bmi"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="学历">
                            <el-select :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.education" placeholder="请选择">
                                <el-option v-for="item in xueliptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="职业">
                            <el-select :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.occupation" placeholder="请选择">
                                <el-option v-for="item in zhiyeoptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="吸烟史：">
                            <el-select :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.smokingHistory" placeholder="请选择">
                                <el-option v-for="item in smokeoptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>

                    </el-col>

                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="婚姻状况：">
                            <el-select :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.maritalStatus" placeholder="请选择">
                                <el-option v-for="item in hunyinoptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="生育状况：">
                            <el-select :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.fertilityStatus" placeholder="请选择">
                                <el-option v-for="item in shengyuoptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="月经情况：">
                            <el-select :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.menstrualStatus" placeholder="请选择">
                                <el-option v-for="item in yuejingoptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="24">
                        <el-form-item label="个人信息补充:">
                            <el-input :disabled="editVis" type="textarea" v-mdel="InpatientInfo.personalInfoSupplement"
                                :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-divider content-position="left">既往史&并发症</el-divider>

                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="病程(年)">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.courseOfIllnessYears"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="并发结核病史">
                            <el-select :disabled="editVis" style="width:220px" size="mini" multiple
                                v-model="InpatientInfo.historyOfComplicatedTuberculosis" placeholder="请选择">
                                <el-option v-for="item in jieheoptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="并发其他风湿免疫系统疾病史">
                            <el-select :disabled="editVis" style="width:220px" size="mini" multiple
                                v-model="InpatientInfo.historyOfOtherRheumaticImmunologicalDiseasesList"
                                placeholder="请选择">
                                <el-option v-for="item in fengshioptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="大动脉炎手术史:">
                            <el-input :disabled="editVis" v-model="InpatientInfo.historyOfAorticAneurysmSurgery"
                                type="textarea" :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="24">
                        <el-form-item label="结核病史详述:">
                            <el-input :disabled="editVis" type="textarea"
                                v-model="InpatientInfo.detailsOfTuberculosisHistory" :rows="3" placeholder="请输入内容">
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
                    <el-col :span="8">
                        <el-form-item label="并发糖尿病:">
                            <el-select :disabled="editVis" style="width:220px" size="mini" multiple
                                v-model="InpatientInfo.historyOfDiabetesList" placeholder="请选择">
                                <el-option v-for="item in tangniaobingoptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="并发高血压:">
                            <el-select :disabled="editVis" style="width:220px" size="mini" multiple
                                v-model="InpatientInfo.historyOfHypertensionList" placeholder="请选择">
                                <el-option v-for="item in gaoxueyaoptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="并发心脏疾病:">
                            <el-select :disabled="editVis" style="width:220px" size="mini" multiple
                                v-model="InpatientInfo.historyOfHeartDiseaseList" placeholder="请选择">
                                <el-option v-for="item in xinzangoptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="8">
                        <el-form-item label="并发心力衰竭NYHA分级">
                            <el-select :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.nyhaClassificationOfCongestiveHeartFailure" placeholder="请选择">
                                <el-option v-for="item in xinlioptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="并发脑缺血">
                            <el-select :disabled="editVis" size="mini" style="width:220px" multiple
                                v-model="InpatientInfo.historyOfCerebralIschemiaList" placeholder="请选择">
                                <el-option v-for="item in naoquexueoptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="并发左肾缺血">
                            <el-select :disabled="editVis" size="mini" style="width:220px" multiple
                                v-model="InpatientInfo.historyOfLeftRenalIschemiaList" placeholder="请选择">
                                <el-option v-for="item in shenoptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="并发右肾缺血">
                            <el-select :disabled="editVis" size="mini" style="width:220px" multiple
                                v-model="InpatientInfo.historyOfRightRenalIschemiaList" placeholder="请选择">
                                <el-option v-for="item in shenoptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="并发慢性肾病分期">
                            <el-select :disabled="editVis" size="mini" style="width:220px"
                                v-model="InpatientInfo.stagingOfChronicKidneyDisease" placeholder="请选择">
                                <el-option v-for="item in manxingshenoptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="并发肺动脉高压">
                            <el-select :disabled="editVis" size="mini" style="width:220px"
                                v-model="InpatientInfo.historyOfPulmonaryArterialHypertension" placeholder="请选择">
                                <el-option v-for="item in feidongmaioptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="并发视网膜病变Uyama_Asayama分类">
                            <el-select :disabled="editVis" size="mini" style="width:220px"
                                v-model="InpatientInfo.uyamaAsayamaClassificationOfRetinalLesions" placeholder="请选择">
                                <el-option v-for="item in shiwangmooptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="并发贫血">
                            <el-select :disabled="editVis" size="mini" style="width:220px"
                                v-model="InpatientInfo.anemia" placeholder="请选择">
                                <el-option v-for="item in pinxueoptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="并发高同型半胱氨酸血症">
                            <el-select :disabled="editVis" size="mini" style="width:220px"
                                v-model="InpatientInfo.homocysteineemia" placeholder="请选择">
                                <el-option v-for="item in tongxingbanoptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="并发高脂血症">
                            <el-select :disabled="editVis" size="mini" style="width:220px" multiple
                                v-model="InpatientInfo.hyperlipidemiaList" placeholder="请选择">
                                <el-option v-for="item in gaoxuezhioptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="其他病史补充:">
                            <el-input :disabled="editVis" v-model="InpatientInfo.otherMedicalHistorySupplement"
                                type="textarea" :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="其他手术史:">
                            <el-input :disabled="editVis" v-model="InpatientInfo.otherSurgicalHistory" type="textarea"
                                :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-divider content-position="left">术前评估</el-divider>

                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="本次术前表现">
                            <el-select :disabled="editVis" size="mini" style="width:220px" multiple
                                v-model="InpatientInfo.currentSymptomsList" placeholder="请选择">
                                <el-option v-for="item in shuqianbiaoxianoptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="2011年中国指南临床分型">
                            <el-select :disabled="editVis" size="mini" style="width:220px"
                                v-model="InpatientInfo.chineseGuidelines2011Classification" placeholder="请选择">
                                <el-option v-for="item in linhchuangfenxingoptions" :key="item.value"
                                    :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="术前病情详述(新发/复发/加重症状和体征-持续时间):">
                            <el-input :disabled="editVis" type="textarea"
                                v-model="InpatientInfo.detailedPreoperativeCondition" :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="术前激素 (药名-剂量-频次-给药方式默认p.o.):">
                            <el-input :disabled="editVis" type="textarea" v-model="InpatientInfo.preoperativeSteroids"
                                :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="术前免疫抑制剂 (药名-剂量-频次-给药方式默认p.o.):">
                            <el-input :disabled="editVis" type="textarea"
                                v-model="InpatientInfo.preoperativeImmunosuppressants" :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="术前生物制剂 (药名-剂量-频次-给药方式默认i.v.):">
                            <el-input :disabled="editVis" type="textarea" v-model="InpatientInfo.preoperativeBiologics"
                                :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="术前降压药 (药名-剂量-频次-给药方式默认p.o.)">
                            <el-input :disabled="editVis" type="textarea"
                                v-model="InpatientInfo.preoperativeAntihypertensives" :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="术前降脂药 (药名-剂量-频次-给药方式默认p.o.)">
                            <el-input :disabled="editVis" type="textarea"
                                v-model="InpatientInfo.preoperativeLipidLoweringDrugs" :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="术前抗栓药 (药名-剂量-频次-给药方式默认p.o.)">
                            <el-input :disabled="editVis" type="textarea"
                                v-model="InpatientInfo.preoperativeAnticoagulants" :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="术前用药补充 (药名-剂量-频次-给药方式默认p.o.)">
                            <el-input :disabled="editVis" type="textarea"
                                v-model="InpatientInfo.preoperativeMedicationSupplement" :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="入院血压-收缩压(mmHg)">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.admissionBloodPressureSystolic"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="入院血压-舒张压(mmHg)">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.admissionBloodPressureDiastolic"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="入院心率(次/min)">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.admissionHeartRate"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="入院呼吸频率(次/min)">
                            <el-select :disabled="editVis" size="mini" style="width:220px"
                                v-model="InpatientInfo.admissionRespiratoryRate" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术前左室射血分数LVEF(%)">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.preoperativeLeftVentricularEjectionFraction"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术前心电图结果">
                            <el-select :disabled="editVis" size="mini" style="width:220px" multiple
                                v-model="InpatientInfo.preoperativeEcgResultList" placeholder="请选择">
                                <el-option v-for="item in xindiantuoptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                </el-row>

                <el-row>
                    <el-col :span="24">
                        <el-form-item label="术前四肢血压-收缩压(mmHg)(左上-右上-左下-右下)">
                            <el-input :disabled="editVis" type="textarea"
                                v-model="InpatientInfo.preoperativeFourLimbBloodPressureSystolic" :rows="3"
                                placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="术前四肢血压-舒张压(mmHg)(左上-右上-左下-右下)">
                            <el-input :disabled="editVis" type="textarea"
                                v-model="InpatientInfo.preoperativeFourLimbBloodPressureDiastolic" :rows="3"
                                placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="术前心脏超声结果">
                            <el-input :disabled="editVis" type="textarea"
                                v-model="InpatientInfo.preoperativeCardiacUltrasoundResult" :rows="3"
                                placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="术前胸片/胸部CT结果(默认胸片, CT要标明)">
                            <el-input :disabled="editVis" type="textarea"
                                v-model="InpatientInfo.preoperativeChestXrayCtResult" :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="24">
                        <el-form-item label="术前肺功能">
                            <el-input :disabled="editVis" type="textarea"
                                v-model="InpatientInfo.preoperativePulmonaryFunction" :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>

                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术前右侧ABI">
                            <el-select :disabled="editVis" size="mini" style="width:220px"
                                v-model="InpatientInfo.preoperativeRightAbi" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术前左侧ABI">
                            <el-select :disabled="editVis" size="mini" style="width:220px"
                                v-model="InpatientInfo.preoperativeLeftAbi" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术前总eGFR">
                            <el-select :disabled="editVis" size="mini" style="width:220px"
                                v-model="InpatientInfo.preoperativeTotalEgfr" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>

                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术前右eGFR">
                            <el-select :disabled="editVis" size="mini" style="width:220px"
                                v-model="InpatientInfo.preoperativeRightEgfr" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术前左eGFR">
                            <el-select :disabled="editVis" size="mini" style="width:220px"
                                v-model="InpatientInfo.preoperativeLeftEgfr" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>


                <el-row>
                    <el-col :span="24">
                        <el-form-item label="术前其他评估补充">
                            <el-input :disabled="editVis" v-model="InpatientInfo.preoperativeOtherAssessmentSupplement"
                                type="textarea" :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术前实验室检验结果ID">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.preoperativeLabTestResultsId"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术前影像学检查结果ID">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.preoperativeImagingTestResultsId"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术前Numano影像分型">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.preoperativeNumanoImagingClassification"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>

                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术前疾病活动性评分ID">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.preoperativeDiseaseActivityScoreId"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术前NIH活动性评分得分">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.preoperativeNihActivityScore"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术前改良NIH活动性评分得分">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.preoperativeImprovedNihActivityScore"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>

                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术前ITAS 2010活动性评分得分">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.preoperativeItas2010ActivityScore"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术前ITAS-A活动性评分得分">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.preoperativeItasAActivityScore"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术前PGA活动性评价">
                            <el-select :disabled="editVis" size="mini" style="width:220px"
                                v-model="InpatientInfo.preoperativePgaActivityEvaluation" placeholder="请选择">
                                <el-option v-for="item in GPAoptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>


                <el-divider content-position="left">手术信息</el-divider>


                <el-row>

                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="手术日期">
                            <el-date-picker :disabled="editVis" v-model="InpatientInfo.surgeryDate" style="width:220px"
                                size="mini" type="date" placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="麻醉方式">
                            <el-select :disabled="editVis" size="mini" style="width:220px"
                                v-model="InpatientInfo.anesthesiaMethod" placeholder="请选择">
                                <el-option v-for="item in mazuifangshioptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术前ASA分级">
                            <el-select :disabled="editVis" size="mini" style="width:220px"
                                v-model="InpatientInfo.preoperativeAsaClassification" placeholder="请选择">
                                <el-option v-for="item in ASAoptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>

                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="麻醉效果">
                            <el-select :disabled="editVis" size="mini" style="width:220px"
                                v-model="InpatientInfo.anesthesiaEffect" placeholder="请选择">
                                <el-option v-for="item in mazuixiaoguooptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术者(主刀-一助-二助)">
                            <el-input :disabled="editVis" style="width:150px" size="mini"
                                v-model="InpatientInfo.surgeon"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="手术形式">
                            <el-select :disabled="editVis" size="mini" style="width:220px" multiple
                                v-model="InpatientInfo.surgeryFormList" placeholder="请选择">
                                <el-option v-for="item in shoushuxingshioptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="手术名称">
                            <el-input :disabled="editVis" v-model="InpatientInfo.surgeryName" type="textarea" :rows="1"
                                placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="24">
                        <el-form-item label="重建血管">
                            <el-select :disabled="editVis" size="mini"
                                v-model="InpatientInfo.vascularReconstructionList" multiple placeholder="请选择">
                                <el-option v-for="item in chongjianxueguanoptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="24">
                        <el-form-item label="球囊扩张说明(扩张部位-球囊品牌/型号-扩张次数-残余狭窄率)">
                            <el-input :disabled="editVis" v-model="InpatientInfo.balloonDilationDescription"
                                type="textarea" :rows="5" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="支架植入说明(植入部位-支架品牌/型号-支架个数-残余狭窄率)">
                            <el-input :disabled="editVis" v-model="InpatientInfo.stentImplantationDescription"
                                type="textarea" :rows="5" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="血管搭桥说明(桥血管起-止部位-桥血管类型-桥血管品牌/型号(或来源)-桥血管个数-动脉阻断时间)">
                            <el-input :disabled="editVis" v-model="InpatientInfo.vascularBridgingDescription"
                                type="textarea" :rows="5" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="PUMCH外科分型">
                            <el-select :disabled="editVis" size="mini" style="width:220px"
                                v-model="InpatientInfo.pumchSurgicalClassification" placeholder="请选择">
                                <el-option v-for="item in PUMCHoptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="">
                            <img style="width:300%" src="@/assets/images/PUMCH.png" alt="">
                        </el-form-item>
                    </el-col>

                </el-row>

                <rl-row>
                    <el-col :span="24">

                        <el-form-item label="手术测压情况">
                            <el-input :disabled="editVis" v-model="InpatientInfo.intraoperativePressureSituation"
                                type="textarea" :rows="5" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </rl-row>
                <rl-row>
                    <el-col :span="24">

                        <el-form-item label="手术内容补充">
                            <el-input :disabled="editVis" v-model="InpatientInfo.surgicalContentSupplement"
                                type="textarea" :rows="5" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </rl-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="造影剂用量">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.contrastAgentVolume"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="手术时长(min)">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.surgeryDuration"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术中出血量(ml)">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.intraoperativeBleedingVolume"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="自体血回输量(ml)">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.autologousBloodTransfusionVolume"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="红细胞输注量(ml)">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.redBloodCellTransfusionVolume"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="血浆输注量(ml)">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.plasmaTransfusionVolume"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术中并发症">
                            <el-select :disabled="editVis" size="mini" style="width:220px" multiple
                                v-model="InpatientInfo.intraoperativeComplicationsList" placeholder="请选择">
                                <el-option v-for="item in shuzhongbingfaoptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-divider content-position="left">术后情况</el-divider>

                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后第1天VAS评分">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.postoperativeDay1VasScore"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后去向">
                            <el-select :disabled="editVis" size="mini" style="width:220px"
                                v-model="InpatientInfo.postoperativeDestination" placeholder="请选择">
                                <el-option v-for="item in shuhouquxiangoptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后住院天数">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.postoperativeHospitalizationDays"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后ICU住院天数">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.postoperativeIcuHospitalizationDays"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术晨血压-收缩压(mmHg)">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.postoperativeMorningBloodPressureSystolic"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术晨血压-舒张压(mmHg)">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.postoperativeMorningBloodPressureDiastolic"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术晚血压-收缩压(mmHg)">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.postoperativeEveningBloodPressureSystolic"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术晚血压-舒张压(mmHg)">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.postoperativeEveningBloodPressureDiastolic"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后1日血压-收缩压(mmHg)">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.postoperativeDay1BloodPressureSystolic"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后1日血压-舒张压(mmHg)">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.postoperativeDay1BloodPressureDiastolic"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后3日血压-收缩压(mmHg)">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.postoperativeDay3BloodPressureDiastolic"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后3日血压-舒张压(mmHg)">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.postoperativeDay3BloodPressureSystolic"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后7日血压-收缩压(mmHg)">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.postoperativeDay7BloodPressureSystolic"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后7日血压-舒张压(mmHg)">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.postoperativeDay7BloodPressureDiastolic"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后血压情况">
                            <el-select :disabled="editVis" size="mini" style="width:220px" multiple
                                v-model="InpatientInfo.postoperativeBloodPressureConditionList" placeholder="请选择">
                                <el-option v-for="item in shuhouxueyaoptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                </el-row>

                <el-row>
                    <el-col :span="24">

                        <el-form-item label="术后血压管理方案 (药名-剂量-频次-给药方式)">
                            <el-input :disabled="editVis" type="textarea"
                                v-model="InpatientInfo.postoperativeBloodPressureManagementScheme" :rows="4"
                                placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="呼吸机时长(h)">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.ventilatorDuration"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="有创压监测(d)">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.invasivePressureMonitoringDays"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后输红细胞(U)">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.postoperativeRedBloodCellTransfusionUnits"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后输血浆(ml)">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.postoperativePlasmaTransfusionVolume"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后甘露醇使用总量">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.totalMannitolUsageAfterOperation"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="24">

                        <el-form-item label="术后甘露醇用药方案(剂量-次数-天数)">
                            <el-input :disabled="editVis" v-model="InpatientInfo.mannitolUsageSchemeAfterOperation"
                                type="textarea" :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="围手术期静脉激素替代天数">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.perioperativeSteroidReplacementDays"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="24">

                        <el-form-item label="术前静脉激素替代方案(药名-剂量-频次-时间)">
                            <el-input :disabled="editVis" type="textarea"
                                v-model="InpatientInfo.preoperativeSteroidReplacementScheme" :rows="4"
                                placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>

                    <el-col :span="24">

                        <el-form-item label="术中静脉激素替代方案(药名-剂量-频次-时间)">
                            <el-input :disabled="editVis" v-model="InpatientInfo.intraoperativeSteroidReplacementScheme"
                                type="textarea" :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="术后口服激素 (药名-剂量-频次)">
                            <el-input :disabled="editVis" type="textarea"
                                v-model="InpatientInfo.postoperativeOralSteroids" :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="术后免疫抑制剂 (药名-剂量-频次-给药方式默认p.o.)">
                            <el-input :disabled="editVis" type="textarea"
                                v-model="InpatientInfo.postoperativeImmunosuppressants" :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="术后生物制剂 (药名-剂量-频次-给药方式默认i.v.)">
                            <el-input :disabled="editVis" type="textarea" v-model="InpatientInfo.postoperativeBiologics"
                                :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="术后降脂药 (药名-剂量-频次-给药方式默认p.o.)">
                            <el-input :disabled="editVis" type="textarea"
                                v-model="InpatientInfo.postoperativeLipidLoweringDrugs" :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="术后抗栓药 (药名-剂量-频次-给药方式默认p.o.)">
                            <el-input :disabled="editVis" type="textarea"
                                v-model="InpatientInfo.postoperativeAntithromboticDrugs" :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="病理报告具体结果">
                            <el-input :disabled="editVis" type="textarea"
                                v-model="InpatientInfo.pathologicalReportSpecificResults" :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后-出院时靶血管情况">
                            <el-select :disabled="editVis" size="mini" style="width:220px"
                                v-model="InpatientInfo.postoperativeTargetVesselCondition" placeholder="请选择">
                                <el-option v-for="item in baxueguanoptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>


                <el-row>
                    <el-col :span="24">
                        <el-form-item label="出院激素 (药名-剂量-频次-给药方式默认p.o.)">
                            <el-input :disabled="editVis" v-model="InpatientInfo.dischargeSteroids" type="textarea"
                                :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="出院免疫抑制剂 (药名-剂量-频次-给药方式默认p.o.)">
                            <el-input :disabled="editVis" v-model="InpatientInfo.dischargeImmunosuppressants"
                                type="textarea" :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="出院生物制剂 (药名-剂量-频次-给药方式默认i.v.)">
                            <el-input :disabled="editVis" v-model="InpatientInfo.dischargeBiologics" type="textarea"
                                :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="出院降压药 (药名-剂量-频次-给药方式默认p.o.)">
                            <el-input :disabled="editVis" v-model="InpatientInfo.dischargeAntihypertensiveDrugs"
                                type="textarea" :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="出院降脂药 (药名-剂量-频次-给药方式默认p.o.)">
                            <el-input :disabled="editVis" v-model="InpatientInfo.dischargeLipidLoweringDrugs"
                                type="textarea" :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="出院抗栓药 (药名-剂量-频次-给药方式默认p.o.)">
                            <el-input :disabled="editVis" v-model="InpatientInfo.dischargeAntithromboticDrugs"
                                type="textarea" :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>


                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后30天内并发症">
                            <el-select :disabled="editVis" size="mini" style="width:220px" multiple
                                v-model="InpatientInfo.complicationsWithin30DaysAfterOperationList" placeholder="请选择">
                                <el-option v-for="item in shuhoubingfaoptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后并发症发生日期">
                            <el-date-picker v-model="InpatientInfo.dateOfComplicationsAfterOperation"
                                style="width:220px" size="mini" type="date" placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>

                </el-row>

                <el-row>
                    <el-col :span="24">
                        <el-form-item label="术后并发症详情">
                            <el-input :disabled="editVis" v-model="InpatientInfo.detailsOfComplicationsAfterOperation"
                                type="textarea" :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="非计划再干预手术">
                            <el-input :disabled="editVis" v-model="InpatientInfo.unplannedReinterventionAfterOperation"
                                type="textarea" :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="术后管理补充">
                            <el-input :disabled="editVis" v-model="InpatientInfo.postoperativeManagementSupplement"
                                type="textarea" :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-divider content-position="left">Barthel指数量表</el-divider>


                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术前生活质量健康评价ID">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.preoperativeQualityOfLifeHealthAssessmentId"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后生活质量健康评价ID">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.postoperativeQualityOfLifeHealthAssessmentId"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术前Barthel指数量表得分(入院时)">
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.preoperativeBarthelIndexScore"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item>
                            <template #label>
                                <span class="labelTitle">
                                    术前Barthel指数量表-
                                    <br>
                                    进食得分
                                </span>
                            </template>
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.preoperativeBarthelIndexEatingScore"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item>
                            <template #label>
                                <span class="labelTitle">
                                    术前Barthel指数量表-
                                    <br>
                                    洗澡得分
                                </span>
                            </template>
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.preoperativeBarthelIndexBathingScore"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item>
                            <template #label>
                                <span class="labelTitle">
                                    术前Barthel指数量表-
                                    <br>
                                    修饰得分
                                </span>
                            </template>
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.preoperativeBarthelIndexDressingScore"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item>
                            <template #label>
                                <span class="labelTitle">
                                    术前Barthel指数量表-
                                    <br>
                                    穿衣得分
                                </span>
                            </template>
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.preoperativeBarthelIndexToiletingScore"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item>
                            <template #label>
                                <span class="labelTitle">
                                    术前Barthel指数量表-
                                    <br>
                                    控制大便得分
                                </span>
                            </template>
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.preoperativeBarthelIndexBowelControlScore"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item>
                            <template #label>
                                <span class="labelTitle">
                                    术前Barthel指数量表-
                                    <br>
                                    控制小便得分
                                </span>
                            </template>
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.preoperativeBarthelIndexBladderControlScore"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item>
                            <template #label>
                                <span class="labelTitle">
                                    术前Barthel指数量表-
                                    <br>
                                    如厕得分
                                </span>
                            </template>
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.preoperativeBarthelIndexToiletUseScore"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item>
                            <template #label>
                                <span class="labelTitle">
                                    术前Barthel指数量表-
                                    <br>
                                    床椅转移得分
                                </span>
                            </template>
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.preoperativeBarthelIndexBedChairTransferScore"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item>
                            <template #label>
                                <span class="labelTitle">
                                    术前Barthel指数量表-
                                    <br>
                                    平地行走得分
                                </span>
                            </template>
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.preoperativeBarthelIndexWalkOnLevelSurfaceScore"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item>
                            <template #label>
                                <span class="labelTitle">
                                    术前Barthel指数量表-
                                    <br>
                                    上下楼梯得分
                                </span>
                            </template>
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.preoperativeBarthelIndexGoingUpDownstairsScore"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="">
                            <template #label>
                                <span class="labelTitle">
                                    术后Barthel指数量表得分
                                    <br>
                                    (术后7天/出院时)
                                </span>
                            </template>
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.postoperativeBarthelIndexScore"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item>
                            <template #label>
                                <span class="labelTitle">
                                    术后Barthel指数量表-
                                    <br>
                                    进食得分
                                </span>
                            </template>
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.postoperativeBarthelIndexEatingScore"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item>
                            <template #label>
                                <span class="labelTitle">
                                    术后Barthel指数量表-
                                    <br>
                                    洗澡得分
                                </span>
                            </template>
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.postoperativeBarthelIndexBathingScore"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item>
                            <template #label>
                                <span class="labelTitle">
                                    术后Barthel指数量表-
                                    <br>
                                    修饰得分
                                </span>
                            </template>
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.postoperativeBarthelIndexDressingScore">
                            </el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item>
                            <template #label>
                                <span class="labelTitle">
                                    术后Barthel指数量表-
                                    <br>
                                    穿衣得分
                                </span>
                            </template>
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.postoperativeBarthelIndexToiletingScore"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item>
                            <template #label>
                                <span class="labelTitle">
                                    术后Barthel指数量表-
                                    <br>
                                    控制大便得分
                                </span>
                            </template>
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.postoperativeBarthelIndexBowelControlScore">
                            </el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item>
                            <template #label>
                                <span class="labelTitle">
                                    术后Barthel指数量表-
                                    <br>
                                    控制小便得分
                                </span>
                            </template>
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.postoperativeBarthelIndexBladderControlScore"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item>
                            <template #label>
                                <span class="labelTitle">
                                    术后Barthel指数量表-
                                    <br>
                                    如厕得分
                                </span>
                            </template>
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.postoperativeBarthelIndexToiletUseScore"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item>
                            <template #label>
                                <span class="labelTitle">
                                    术后Barthel指数量表-
                                    <br>
                                    床椅转移得分
                                </span>
                            </template>
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.postoperativeBarthelIndexBedChairTransferScore"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item>
                            <template #label>
                                <span class="labelTitle">
                                    术后Barthel指数量表-
                                    <br>
                                    平地行走得分
                                </span>
                            </template>
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.postoperativeBarthelIndexWalkOnLevelSurfaceScore"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item>
                            <template #label>
                                <span class="labelTitle">
                                    术后Barthel指数量表-
                                    <br>
                                    上下楼梯得分
                                </span>
                            </template>
                            <el-input :disabled="editVis" style="width:220px" size="mini"
                                v-model="InpatientInfo.postoperativeBarthelIndexGoingUpDownstairsScore"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-divider content-position="left">随访后补充</el-divider>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术后症状复发时间">
                            <el-date-picker :disabled="editVis" v-model="InpatientInfo.symptomRecurrenceTime"
                                style="width:220px" size="mini" type="date" placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术后靶血管再狭窄时间">
                            <el-date-picker :disabled="editVis" v-model="InpatientInfo.targetVesselRestenosisTime"
                                style="width:220px" size="mini" type="date" placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术后再干预时间">
                            <el-date-picker :disabled="editVis" v-model="InpatientInfo.reinterventionTime"
                                style="width:220px" size="mini" type="date" placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="术后远期情况补充">
                            <el-input :disabled="editVis" v-model="InpatientInfo.longTermConditionSupplement"
                                type="textarea" :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
    </el-card>
</template>

<script>

import { addOrUpdateHospitalSurgery } from '@/api/dataentry'
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            options: [],
            yiyuanoptions: [
                {
                    label: "北京医院",
                    value: 1
                },
                {
                    label: "协和医院",
                    value: 2
                },
                {
                    label: "其他",
                    value: 3
                }
            ],
            smokeoptions: [
                {
                    label: "不吸烟",
                    value: 0
                },
                {
                    label: "当前吸烟",
                    value: 1
                },
                {
                    label: "既往吸烟",
                    value: 2
                },
                {
                    label: "NA",
                    value: 3
                }
            ],
            hunyinoptions: [
                {
                    label: "未婚",
                    value: 0
                },
                {
                    label: "已婚",
                    value: 1
                },
                {
                    label: "离异",
                    value: 2
                },
                {
                    label: "丧偶",
                    value: 3
                },
                {
                    label: "NA",
                    value: 4
                }
            ],
            shengyuoptions: [
                {
                    label: "未育",
                    value: 0
                },
                {
                    label: "1子女",
                    value: 1
                },
                {
                    label: "2子女",
                    value: 2
                },
                {
                    label: "3子女",
                    value: 3
                }, {
                    label: ">3子女",
                    value: 4
                },
                {
                    label: "有子女数量不详",
                    value: 5
                },
                {
                    label: "NA",
                    value: 6
                }
            ],
            yuejingoptions: [
                {
                    label: "NA",
                    value: 0
                },
                {
                    label: "规律",
                    value: 1
                },
                {
                    label: "不规律",
                    value: 2
                },
                {
                    label: "绝经",
                    value: 3
                }
                ,
                {
                    label: "不适用",
                    value: 4
                }
            ],
            jieheoptions: [
                {
                    label: "无",
                    value: 0
                },
                {
                    label: "肺结核",
                    value: 1
                },
                {
                    label: "骨关节结核",
                    value: 2
                },
                {
                    label: "泌尿系结核",
                    value: 3
                }
                ,
                {
                    label: "肠结核",
                    value: 4
                },
                {
                    label: "既往感染",
                    value: 5
                },
                {
                    label: "现存感染",
                    value: 6
                },
                {
                    label: "其他结核",
                    value: 7
                },
                {
                    label: "可疑肺结核",
                    value: 8
                }
            ],
            fengshioptions: [
                {
                    label: "无",
                    value: 0
                },
                {
                    label: "白塞病",
                    value: 1
                },
                {
                    label: "银屑病",
                    value: 2
                },
                {
                    label: "抗磷脂抗体综合征",
                    value: 3
                }
                ,
                {
                    label: "桥本氏甲状腺炎",
                    value: 4
                },
                {
                    label: "其他",
                    value: 5
                }
            ],
            tangniaobingoptions: [
                {
                    label: "无",
                    value: 0
                },
                {
                    label: "T1DM",
                    value: 1
                },
                {
                    label: "T2DM",
                    value: 2
                },
                {
                    label: "妊娠期糖尿病(GDM);",
                    value: 3
                },
                {
                    label: "特殊类型糖尿病",
                    value: 4
                },
                {
                    label: "有但类型不详",
                    value: 5
                }
            ],
            gaoxueyaoptions: [
                {
                    label: "无",
                    value: 0
                },
                {
                    label: "高血压1级",
                    value: 1
                },
                {
                    label: "高血压2级",
                    value: 2
                },
                {
                    label: "高血压3级",
                    value: 3
                }
                ,
                {
                    label: "有但严重程度不详",
                    value: 4
                }
            ],
            xinzangoptions: [
                {
                    label: "无",
                    value: 0
                },
                {
                    label: "瓣膜关闭不全",
                    value: 1
                },
                {
                    label: "心绞痛",
                    value: 2
                },
                {
                    label: "心肌梗死",
                    value: 3
                }
                ,
                {
                    label: "心肌病",
                    value: 4
                },
                {
                    label: "心功能不全",
                    value: 5
                }
            ],
            xinlioptions: [
                {
                    label: "无",
                    value: 0
                },
                {
                    label: "I级",
                    value: 1
                },
                {
                    label: "II级",
                    value: 2
                },
                {
                    label: "III级",
                    value: 3
                },
                {
                    label: "IV级",
                    value: 4
                },
                {
                    label: "有但分级不详",
                    value: 5
                }
            ],
            naoquexueoptions: [
                {
                    label: "无",
                    value: 0
                },
                {
                    label: "眩晕/头晕",
                    value: 1
                },
                {
                    label: "TIA",
                    value: 2
                },
                {
                    label: "癫痫(非高血压性)",
                    value: 3
                }
                ,
                {
                    label: "脑卒中",
                    value: 4
                },
                {
                    label: "其他",
                    value: 5
                }
            ],
            shenoptions: [
                {
                    label: "无",
                    value: 0
                },
                {
                    label: "灌注减低",
                    value: 1
                },
                {
                    label: "萎缩",
                    value: 2
                },
                {
                    label: "无功能",
                    value: 3
                },
                {
                    label: "缺如",
                    value: 4
                },
                {
                    label: "有但严重程度不详",
                    value: 5
                }
            ],
            manxingshenoptions: [
                {
                    label: "无",
                    value: 0
                },
                {
                    label: "期 [GFR正常(≥90mL/min/1.73m2)伴持续性白蛋白尿或已知结构或遗传性肾脏病]",
                    value: 1
                },
                {
                    label: "2期[GFR在60～89mL/min•1.73m2]",
                    value: 2
                },
                {
                    label: "3a期 [GFR在45～59mL/min•1.73m2]",
                    value: 3
                }
                ,
                {
                    label: "3b期 [GFR在30～44mL/min•1.73m2]",
                    value: 4
                },
                {
                    label: "4期 [GFR在15～29mL/min•1.73m2];",
                    value: 5
                },
                {
                    label: "5期 [GFR<15mL/min•1.73m2]",
                    value: 6
                }
            ],
            feidongmaioptions: [
                {
                    label: "无",
                    value: 0
                },
                {
                    label: "轻度[肺动脉收缩压在30-40mmHg]",
                    value: 1
                },
                {
                    label: "中度[40-70mmHg]",
                    value: 2
                },
                {
                    label: "重度[≥70mmHg",
                    value: 3
                }
                ,
                {
                    label: "有但严重程度不详",
                    value: 4
                }
            ],
            shiwangmooptions: [
                {
                    label: "无",
                    value: 0
                },
                {
                    label: "第1阶段[视网膜血管扩张]",
                    value: 1
                },
                {
                    label: "第2阶段 [毛细血管微动脉瘤形成]",
                    value: 2
                },
                {
                    label: "第3阶段 [视网膜动静脉吻合支形成]",
                    value: 3
                }
                ,
                {
                    label: "第4阶段 [其他并发症，如瞳孔扩大、虹膜萎缩、内障、增殖性视网膜病变和继发性视网膜脱离]",
                    value: 4
                }
            ],
            pinxueoptions: [
                {
                    label: "无",
                    value: 0
                },
                {
                    label: "轻度",
                    value: 1
                },
                {
                    label: "中度",
                    value: 2
                },
                {
                    label: "重度",
                    value: 3
                }
                ,
                {
                    label: "极重度",
                    value: 4
                }
            ],
            tongxingbanoptions: [
                {
                    label: "无",
                    value: 0
                },
                {
                    label: "轻度[15～30 µmol/L]",
                    value: 1
                },
                {
                    label: "中度[30～100 µmol/L]",
                    value: 2
                },
                {
                    label: "重度[> 100 µmol/L]",
                    value: 3
                }
                ,
                {
                    label: "有但严重程度不详",
                    value: 4
                }
            ],
            gaoxuezhioptions: [
                {
                    label: "无",
                    value: 0
                },
                {
                    label: "高胆固醇血症",
                    value: 1
                },
                {
                    label: "高甘油三酯血症",
                    value: 2
                },
                {
                    label: "低高密度脂蛋白血症",
                    value: 3
                },
                {
                    label: "高低密度脂蛋白血症",
                    value: 4
                }
            ],
            shuqianbiaoxianoptions: [
                {
                    label: "NA",
                    value: 0
                },
                {
                    label: "发热",
                    value: 1
                },
                {
                    label: "全身乏力",
                    value: 2
                },
                {
                    label: "肌痛",
                    value: 3
                },
                {
                    label: "抽搐",
                    value: 4
                },
                {
                    label: "血压升高",
                    value: 5
                },
                {
                    label: "脉弱",
                    value: 6
                },
                {
                    label: "无脉",
                    value: 7
                },
                {
                    label: "头晕",
                    value: 8
                }, {
                    label: "晕厥",
                    value: 9

                }, {
                    label: "头痛",
                    value: 10

                }, {
                    label: "视物模糊",
                    value: 11

                }, {
                    label: "视力下降",
                    value: 12

                }, {
                    label: "黒矇",
                    value: 13

                }, {
                    label: "颈痛",
                    value: 14

                }, {
                    label: "TIA",
                    value: 15

                }, {
                    label: "癫痫",
                    value: 16

                }, {
                    label: "脑卒中",
                    value: 17

                }, {
                    label: "胸闷",
                    value: 18

                }, {
                    label: "心绞痛",
                    value: 19

                }, {
                    label: "心肌梗死",
                    value: 20

                }, {
                    label: "心悸",
                    value: 21

                }, {
                    label: "喘息",
                    value: 22

                }, {
                    label: "咳嗽",
                    value: 23
                }, {
                    label: "咯血",
                    value: 24
                }, {
                    label: "端坐呼吸",
                    value: 25
                }, {
                    label: "心脏杂音",
                    value: 26
                }, {
                    label: "腹痛",
                    value: 27
                }, {
                    label: "上肢跛行",
                    value: 28
                }, {
                    label: "下肢跛行",
                    value: 29
                }, {
                    label: "肾功能减退",
                    value: 30
                }, {
                    label: "面部疼痛",
                    value: 31
                }, {
                    label: "面部水肿",
                    value: 32
                }, {
                    label: "下肢水肿",
                    value: 33
                },
                {
                    label: "下肢发冷无汗",
                    value: 34
                }
            ],

            linhchuangfenxingoptions: [

                {
                    label: "I型 [头臂动脉型]",
                    value: 1
                },
                {
                    label: "II型 [胸-腹主动脉型]",
                    value: 2
                },
                {
                    label: "III型 [广泛型]",
                    value: 3
                },
                {
                    label: "IV型 [肺动脉型]",
                    value: 4
                }
            ],
            xindiantuoptions: [
                {
                    label: "NA",
                    value: 0
                },
                {
                    label: "正常",
                    value: 1
                },
                {
                    label: "窦率",
                    value: 2
                },
                {
                    label: "窦不齐",
                    value: 3
                },
                {
                    label: "窦缓",
                    value: 4
                },
                {
                    label: "窦速",
                    value: 5
                },
                {
                    label: "房早",
                    value: 6
                },
                {
                    label: "室早",
                    value: 7
                }
                ,
                {
                    label: "房颤",
                    value: 8
                },
                {
                    label: "房室传导阻滞",
                    value: 9
                },
                {
                    label: "左束支阻滞",
                    value: 10
                },
                {
                    label: "右束支阻滞",
                    value: 11
                }
                ,
                {
                    label: "左室高电压",
                    value: 12
                },
                {
                    label: "ST-T改变",
                    value: 13
                },
                {
                    label: "其他",
                    value: 14
                }
            ],
            GPAoptions: [
                {
                    label: "NA",
                    value: 0
                },
                {
                    label: "非活动期",
                    value: 1
                },
                {
                    label: "活动期",
                    value: 2
                }
            ],
            mazuifangshioptions: [
                {
                    label: "NA",
                    value: 0
                },
                {
                    label: "局麻",
                    value: 1
                },
                {
                    label: "全麻",
                    value: 2
                },
                {
                    label: "静脉全麻",
                    value: 3
                }

            ],
            ASAoptions: [
                {
                    label: "NA",
                    value: 0
                },
                {
                    label: "I级",
                    value: 1
                },
                {
                    label: "II级",
                    value: 2
                },
                {
                    label: "III级",
                    value: 3
                }
                ,
                {
                    label: "IV级",
                    value: 4
                },
                {
                    label: "V即",
                    value: 5
                }
            ],
            mazuixiaoguooptions: [
                {
                    label: "NA",
                    value: 0
                },
                {
                    label: "优",
                    value: 1
                },
                {
                    label: "良",
                    value: 2
                },
                {
                    label: "差",
                    value: 3
                }
            ],
            shoushuxingshioptions: [
                {
                    label: "无操作",
                    value: 0
                },
                {
                    label: "造影",
                    value: 1
                },
                {
                    label: "主动脉测压",
                    value: 2
                },
                {
                    label: "球囊扩张",
                    value: 3
                }
                ,
                {
                    label: "支架植入",
                    value: 4
                },
                {
                    label: "搭桥",
                    value: 5
                },
                {
                    label: "内膜剥脱",
                    value: 6
                },
                {
                    label: "取栓",
                    value: 7
                },
                {
                    label: "杂交",
                    value: 8
                }
                ,
                {
                    label: "肾静脉取血",
                    value: 9
                },
                {
                    label: "其他",
                    value: 10
                }
            ],
            chongjianxueguanoptions: [
                {
                    label: "无",
                    value: 0
                },
                {
                    label: "左颈内动脉",
                    value: 1
                },
                {
                    label: "右颈内动脉",
                    value: 2
                },
                {
                    label: "左颈外动脉",
                    value: 3
                }
                ,
                {
                    label: "右颈外动脉",
                    value: 4
                }, {
                    label: "左颈总动脉",
                    value: 5
                },
                {
                    label: "右颈总动脉",
                    value: 6
                },
                {
                    label: "左椎动脉",
                    value: 7
                },
                {
                    label: "右椎动脉",
                    value: 8
                }
                ,
                {
                    label: "左锁骨下动脉",
                    value: 9
                }, {
                    label: "右锁骨下动脉",
                    value: 10
                },
                {
                    label: "头臂干（无名动脉）",
                    value: 11
                },
                {
                    label: "胸主动脉",
                    value: 12
                },
                {
                    label: "腹主动脉",
                    value: 13
                }
                ,
                {
                    label: "腹腔干",
                    value: 14
                },
                {
                    label: "肠系膜上动脉",
                    value: 15
                },
                {
                    label: "肠系膜下动脉",
                    value: 16
                },
                {
                    label: "左肾动脉",
                    value: 17
                },
                {
                    label: "右肾动脉",
                    value: 18
                }
                ,
                {
                    label: "左髂总动脉",
                    value: 19
                }, {
                    label: "右髂总动脉",
                    value: 20
                },
                {
                    label: "左髂内动脉",
                    value: 21
                },
                {
                    label: "右髂内动脉",
                    value: 22
                },
                {
                    label: "左髂外动脉",
                    value: 23
                }
                ,
                {
                    label: "右髂外动脉",
                    value: 24
                }, {
                    label: "左股动脉",
                    value: 25
                },
                {
                    label: "右股动脉",
                    value: 26
                },
                {
                    label: "其他",
                    value: 27
                }
            ],
            PUMCHoptions: [
                {
                    label: "I型[头臂血管重建型]",
                    value: 1
                },
                {
                    label: "II型[主肾血管重建型]",
                    value: 2
                },
                {
                    label: "III型[全身血管重建型]",
                    value: 3
                },
                {
                    label: "IV型[动脉瘤型]",
                    value: 4
                }
                ,
                {
                    label: "V型[心肺血管受累型]",
                    value: 5
                }
            ],
            shuzhongbingfaoptions: [
                {
                    label: "无",
                    value: 0
                },
                {
                    label: "脑缺血",
                    value: 1
                },
                {
                    label: "脑出血",
                    value: 2
                },
                {
                    label: "心肌梗死",
                    value: 3
                }
                ,
                {
                    label: "失血性休克",
                    value: 4
                },
                {
                    label: "死亡",
                    value: 5
                }
                ,
                {
                    label: "其他",
                    value: 6
                }
            ],
            shuhouquxiangoptions: [
                {
                    label: "NA",
                    value: 0
                },
                {
                    label: "ICU",
                    value: 1
                },
                {
                    label: "病房",
                    value: 2
                },
                {
                    label: "病房再转ICU",
                    value: 3
                }
            ],
            shuhouxueyaoptions: [
                {
                    label: "NA",
                    value: 0
                },
                {
                    label: "正常",
                    value: 1
                },
                {
                    label: "高血压",
                    value: 2
                },
                {
                    label: "低血压",
                    value: 3
                }
                ,
                {
                    label: "均有（波动）",
                    value: 4
                }
            ],
            baxueguanoptions: [
                {
                    label: "未检查",
                    value: 0
                },
                {
                    label: "通畅",
                    value: 1
                },
                {
                    label: "狭窄",
                    value: 2
                },
                {
                    label: "闭塞",
                    value: 3
                }
                ,
                {
                    label: "血栓形成",
                    value: 4
                }, {
                    label: "扩张",
                    value: 5
                },
                {
                    label: "动脉瘤",
                    value: 6
                },
                {
                    label: "夹层",
                    value: 7
                },
                {
                    label: "内漏",
                    value: 8
                }
                ,
                {
                    label: "其他",
                    value: 9
                }
            ],
            shuhoubingfaoptions: [
                {
                    label: "无",
                    value: 0
                },
                {
                    label: "TIA",
                    value: 1
                },
                {
                    label: "缺血性脑梗",
                    value: 2
                },
                {
                    label: "脑出血",
                    value: 3
                },
                {
                    label: "过度灌注",
                    value: 4
                },
                {
                    label: "颅神经损伤",
                    value: 5
                },
                {
                    label: "心肌损伤",
                    value: 6
                },
                {
                    label: "心肌梗死",
                    value: 7
                },
                {
                    label: "淋巴瘘",
                    value: 8
                },
                {
                    label: "伤口愈合不良",
                    value: 9
                },
                {
                    label: "伤口感染",
                    value: 10
                },
                {
                    label: "全身感染",
                    value: 11
                },
                {
                    label: "血肿",
                    value: 12
                },
                {
                    label: "其他部位出血",
                    value: 13
                },
                {
                    label: "再狭窄/血栓形成",
                    value: 14
                },
                {
                    label: "VTE",
                    value: 15
                },
                {
                    label: "截瘫",
                    value: 16
                },
                {
                    label: "恶性心律不齐",
                    value: 17
                },
                {
                    label: "急性肾损伤",
                    value: 18
                },
                {
                    label: "死亡",
                    value: 19
                },
                {
                    label: "其他",
                    value: 20
                },
                {
                    label: "NA",
                    value: 21
                }
            ],
            xueliptions: [
                {
                    label: "NA",
                    value: 0
                },
                {
                    label: "小学",
                    value: 1
                },
                {
                    label: "初中",
                    value: 2
                },
                {
                    label: "高中",
                    value: 3
                }
                ,
                {
                    label: "中专",
                    value: 4
                },
                {
                    label: "大专",
                    value: 5
                },
                {
                    label: "本科",
                    value: 6
                },
                {
                    label: "硕士",
                    value: 7
                },
                {
                    label: "博士",
                    value: 8
                }
            ],
            zhiyeoptions: [
                {
                    label: "NA",
                    value: 0
                },
                {
                    label: "学生",
                    value: 1
                },
                {
                    label: "农民",
                    value: 2
                },
                {
                    label: "自由职业者",
                    value: 3
                }
                ,
                {
                    label: "管理人员",
                    value: 4
                },
                {
                    label: "专业技术人员",
                    value: 5
                },
                {
                    label: "普通职员",
                    value: 6
                },
                {
                    label: "其他劳动者",
                    value: 7
                },
                {
                    label: "退休",
                    value: 8
                },
                {
                    label: "无业",
                    value: 9
                }
            ],
            editVis: true
        }
    },
    props: {
        patientInfo: Object,
        InpatientInfo: Object
    },
    methods: {
        async saveOptionsApi() {
            this.InpatientInfo.centerId = this.centerId
            this.InpatientInfo.patientCode = this.patientInfo.code
            const { data } = await addOrUpdateHospitalSurgery(this.InpatientInfo)
            console.log(data)
            if (data) {
                this.editVis = true
            }
        },
    },
    computed: {
        ...mapGetters([
            'centerId'
        ])
    }
}
</script>



<style scoped lang="less">
.rowSelect {
    .el-form-item__label {
        height: 20px;
        line-height: 20px;
    }

    .left .el-form-item {
        text-align: right;
    }
}

.el-row {
    margin-bottom: 5px;
}

.labelTitle {
    line-height: 20px;
    display: inline-block
}
</style>