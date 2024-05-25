<template>
    <el-card class="box-card diseaseInfo">
        <div slot="header" class="clearfix">
            <span>疾病活动性评分</span>
            <el-button v-if="editVis == true" style="float: right;margin-top: 5px;" size="mini" type="success"
                @click="editVis = false">编辑</el-button>
            <el-button v-else style="float: right;margin-top: 5px;" size="mini" type="success"
                @click="saveOptionsApi()">保存</el-button>

        </div>
        <div>
            <el-form label-width="200px" :model="diseaseInfo">
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="疾病活动性评分ID:">
                            <el-input :disabled="true" style="width:200px" size="mini"
                                v-model="diseaseInfo.diseaseActivityScoreId"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="填报人:">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="diseaseInfo.reporter"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="填报时间:">
                            <el-date-picker :disabled="editVis" v-model="diseaseInfo.reportTime" style="width:200px"
                                size="mini" type="date" placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="评分时期:">
                            <el-select :disabled="editVis" style="width:200px" size="mini"
                                v-model="diseaseInfo.evaluationPeriod" placeholder="请选择">
                                <el-option v-for="item in Options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-divider content-position="left">NIH活动性评分(3个月内新发/加重)</el-divider>

                <el-row class="custom">
                    <el-col :offset="3" :span="14">
                        <div>
                            改良NIH活动性评分得分:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-input :disabled="true" style="width:150px" size="mini" v-model="nihScore1"></el-input>
                        <!-- v-model="diseaseInfo.nihScore1" -->
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="3" :span="14">
                        <div>
                            1. 系统性症状：发热、骨骼、肌肉症状）:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.systemicSymptoms1">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="3" :span="14">
                        <div>
                            2. 血管缺血或炎症的特点：跛行、脉搏减弱、无脉、血管杂音、血管疼痛（颈痛）、血压不对称:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.vascularCharacteristics1" @change="getInfo">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="3" :span="14">
                        <div>
                            3. ESR 升高（≥20mm/1h）:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.esrElevated1">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="3" :span="14">
                        <div>
                            4. 血管影像学表现（CTA、MRA、超声、PET/CT、DSA等检查）:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.vascularImaging1">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>

                <el-divider content-position="left">NIH活动性评分(3个月内新发/加重)</el-divider>

                <el-row class="custom">
                    <el-col :offset="3" :span="14">
                        <div>
                            NIH活动性评分得分:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-input :disabled="true" style="width:150px" size="mini"
                            v-model="nihScore2"></el-input>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="3" :span="14">
                        <div>
                            1. 系统性症状：发热、骨骼、肌肉症状）:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.systemicSymptoms2">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="3" :span="14">
                        <div>
                            2. 血管缺血或炎症的特点：跛行、脉搏减弱、无脉、血管杂音、血管疼痛（颈痛）、血压不对称：
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.vascularCharacteristics2">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="3" :span="14">
                        <div>
                            3. ESR 升高（≥20mm/1h）或 CRP升高（≥50mg/L）:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.esrElevated2">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="3" :span="14">
                        <div>
                            4. 血管影像学表现（CTA、MRA、超声、PET/CT、DSA等检查）:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.vascularImaging2">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>



                <el-divider content-position="left">ITAS 2010活动性评分(3个月内新发/加重)</el-divider>

                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            ITAS 2010活动性评分得分:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-input :disabled="true" style="width:150px" size="mini"
                            v-model="itasScore19"></el-input>
                    </el-col>
                </el-row>

                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            ITAS-A活动性评分得分:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-input :disabled="true" style="width:150px" size="mini"
                            v-model="itasScore"></el-input>
                    </el-col>
                </el-row>

                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            01. 乏力/体重下降＞2kg:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.fatigueWeightLoss">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            02. 肌痛/关节痛/关节炎:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.muscleJointPain">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            03. 头痛:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.headache">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            04. 眩晕/头痛:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.dizzinessHeadache">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            05. 晕厥:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.syncope">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            06. 癫痫(非高血压性):
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.seizure">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            07. 脑卒中:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.stroke">
                            <el-radio :disabled="editVis" :label="1">有 +2</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            08. 高血压-舒张压＞90mmHg:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.hypertensionDiastolic">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            09. 高血压-收缩压>140 mmHg:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.hypertensionSystolic">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            10. 颈动脉疼痛:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.carotidArteryPain">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            11. 主动脉瓣关闭不全:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.aorticValveInsufficiency">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            12. 心肌梗死/心绞痛:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.miAngina">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            13. 心肌病/心功能不全:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.cardiomyopathy">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>

                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            14. 严重腹痛:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.severeAbdominalPain">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            15. 流产:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.miscarriage">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            16. 血管杂音:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.vascularMurmur">
                            <el-radio :disabled="editVis" :label="1">有 +2</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            16.01 右颈动脉:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.vascularMurmurRightCarotid">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            16.02 左颈动脉:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.vascularMurmurLeftCarotid">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            16.03 右锁骨下动脉:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.vascularMurmurRightSubclavian">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            16.04左锁骨下动脉:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.vascularMurmurLeftSubclavian">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>

                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            16.05 右肾动脉:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.vascularMurmurRightRenal">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            16.06 左肾动脉:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.vascularMurmurLeftRenal">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            17. 脉搏不对称:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.pulseAsymmetry">
                            <el-radio :disabled="editVis" :label="1">有 +2</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            17.01 血压不对称:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.bloodPressureAsymmetry">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            18. 脉搏消失:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.pulseDisappearance">
                            <el-radio :disabled="editVis" :label="1">有 +2</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            18.01 右颈动脉:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.pulseDisappearanceRightCarotid">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            18.02 左颈动脉:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.pulseDisappearanceLeftCarotid">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            18.03 右锁骨下动脉:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.pulseDisappearanceRightSubclavian">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            18.04 左锁骨下动脉:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.pulseDisappearanceLeftSubclavian">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            18.05 右肱动脉:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.pulseDisappearanceRightBrachial">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            18.06 左肱动脉:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.pulseDisappearanceLeftBrachial">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            18.07 右桡动脉:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.pulseDisappearanceRightRadial">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            18.08 左桡动脉:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.pulseDisappearanceLeftRadial">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            18.09 右股动脉:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.pulseDisappearanceRightFemoral">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            18.10 左股动脉:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.pulseDisappearanceLeftFemoral">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            18.11 右腘动脉:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.pulseDisappearanceRightPopliteal">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            18.12 左腘动脉:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.pulseDisappearanceLeftPopliteal">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            18.13 右胫后动脉:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.pulseDisappearanceRightPosteriorTibial">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            18.14 左胫后动脉:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.pulseDisappearanceLeftPosteriorTibial">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            18.15 右足背动脉:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.pulseDisappearanceRightDorsalisPedal">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            18.16 左足背动脉:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.pulseDisappearanceLeftDorsalisPedal">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            19. 肢体运动障碍:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.limbMovementDisorder">
                            <el-radio :disabled="editVis" :label="1">有 +2</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            19.1 上肢:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.limbMovementDisorderUpper">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            19.2 下肢:
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.limbMovementDisorderLower">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            20. ESR (mm/h):
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.esrScore">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row class="custom">
                    <el-col :offset="1" :span="14">
                        <div>
                            21. CRP (mg/L):
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <el-radio-group v-model="diseaseInfo.crpScore">
                            <el-radio :disabled="editVis" :label="1">有 +1</el-radio>
                            <el-radio :disabled="editVis" :label="0">无</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-row>

            </el-form>
        </div>
    </el-card>
</template>

<script>


import { addOrUpdateDiseaseActivityScore } from '@/api/dataentry'
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            Options: [
                {
                    label: "术前",
                    value: 1
                },
                {
                    label: "术后",
                    value: 2
                },
                {
                    label: "随访",
                    value: 3
                }, {
                    label: "其他",
                    value: 4
                }
            ],
            editVis: true
        }
    },
    props: {
        diseaseInfo: Object,
        patientInfo: Object,

    },

    methods: {
        async saveOptionsApi() {
            this.diseaseInfo.centerId = this.centerId
            this.diseaseInfo.patientCode = this.patientInfo.code
            const { data } = await addOrUpdateDiseaseActivityScore(this.diseaseInfo)
            console.log(data)
            if (data) {
                this.editVis = true
                this.$parent.diseaseInfo = data
            }
        },

        getInfo(value) {
        }
    },
    computed: {
        ...mapGetters([
            'centerId'
        ]),
        nihScore1() {
            return (this.diseaseInfo.systemicSymptoms1
                + this.diseaseInfo.vascularCharacteristics1
                + this.diseaseInfo.esrElevated1
                + this.diseaseInfo.vascularImaging1) || 0
        },
        nihScore2() {
            return (this.diseaseInfo.systemicSymptoms2
                + this.diseaseInfo.vascularCharacteristics2
                + this.diseaseInfo.esrElevated2
                + this.diseaseInfo.vascularImaging2) || 0
        },
        itasScore() {
            return (
                this.diseaseInfo.fatigueWeightLoss
                + this.diseaseInfo.muscleJointPain
                + this.diseaseInfo.headache
                + this.diseaseInfo.dizzinessHeadache
                + this.diseaseInfo.syncope
                + this.diseaseInfo.seizure
                + this.diseaseInfo.stroke
                + this.diseaseInfo.hypertensionDiastolic
                + this.diseaseInfo.hypertensionSystolic
                + this.diseaseInfo.carotidArteryPain
                + this.diseaseInfo.aorticValveInsufficiency
                + this.diseaseInfo.miAngina
                + this.diseaseInfo.cardiomyopathy
                + this.diseaseInfo.severeAbdominalPain
                + this.diseaseInfo.miscarriage
                + this.diseaseInfo.vascularMurmur
                + this.diseaseInfo.vascularMurmurRightCarotid
                + this.diseaseInfo.vascularMurmurLeftCarotid
                + this.diseaseInfo.vascularMurmurRightSubclavian
                + this.diseaseInfo.vascularMurmurLeftSubclavian
                + this.diseaseInfo.vascularMurmurRightRenal
                + this.diseaseInfo.vascularMurmurLeftRenal
                + this.diseaseInfo.pulseAsymmetry
                + this.diseaseInfo.bloodPressureAsymmetry
                + this.diseaseInfo.pulseDisappearance
                + this.diseaseInfo.pulseDisappearanceRightCarotid
                + this.diseaseInfo.pulseDisappearanceLeftCarotid
                + this.diseaseInfo.pulseDisappearanceRightSubclavian
                + this.diseaseInfo.pulseDisappearanceLeftSubclavian
                + this.diseaseInfo.pulseDisappearanceRightBrachial
                + this.diseaseInfo.pulseDisappearanceLeftBrachial
                + this.diseaseInfo.pulseDisappearanceRightRadial
                + this.diseaseInfo.pulseDisappearanceLeftRadial
                + this.diseaseInfo.pulseDisappearanceRightFemoral
                + this.diseaseInfo.pulseDisappearanceLeftFemoral
                + this.diseaseInfo.pulseDisappearanceRightPopliteal
                + this.diseaseInfo.pulseDisappearanceLeftPopliteal
                + this.diseaseInfo.pulseDisappearanceRightPosteriorTibial
                + this.diseaseInfo.pulseDisappearanceLeftPosteriorTibial
                + this.diseaseInfo.pulseDisappearanceRightDorsalisPedal
                + this.diseaseInfo.pulseDisappearanceLeftDorsalisPedal
                + this.diseaseInfo.limbMovementDisorder
                + this.diseaseInfo.limbMovementDisorderUpper
                + this.diseaseInfo.limbMovementDisorderLower
                + this.diseaseInfo.esrScore
                + this.diseaseInfo.crpScore
            ) || 0
        },
        itasScore19() {
            return (
                this.diseaseInfo.fatigueWeightLoss
                + this.diseaseInfo.muscleJointPain
                + this.diseaseInfo.headache
                + this.diseaseInfo.dizzinessHeadache
                + this.diseaseInfo.syncope
                + this.diseaseInfo.seizure
                + this.diseaseInfo.stroke
                + this.diseaseInfo.hypertensionDiastolic
                + this.diseaseInfo.hypertensionSystolic
                + this.diseaseInfo.carotidArteryPain
                + this.diseaseInfo.aorticValveInsufficiency
                + this.diseaseInfo.miAngina
                + this.diseaseInfo.cardiomyopathy
                + this.diseaseInfo.severeAbdominalPain
                + this.diseaseInfo.miscarriage
                + this.diseaseInfo.vascularMurmur
                + this.diseaseInfo.vascularMurmurRightCarotid
                + this.diseaseInfo.vascularMurmurLeftCarotid
                + this.diseaseInfo.vascularMurmurRightSubclavian
                + this.diseaseInfo.vascularMurmurLeftSubclavian
                + this.diseaseInfo.vascularMurmurRightRenal
                + this.diseaseInfo.vascularMurmurLeftRenal
                + this.diseaseInfo.pulseAsymmetry
                + this.diseaseInfo.bloodPressureAsymmetry
                + this.diseaseInfo.pulseDisappearance
                + this.diseaseInfo.pulseDisappearanceRightCarotid
                + this.diseaseInfo.pulseDisappearanceLeftCarotid
                + this.diseaseInfo.pulseDisappearanceRightSubclavian
                + this.diseaseInfo.pulseDisappearanceLeftSubclavian
                + this.diseaseInfo.pulseDisappearanceRightBrachial
                + this.diseaseInfo.pulseDisappearanceLeftBrachial
                + this.diseaseInfo.pulseDisappearanceRightRadial
                + this.diseaseInfo.pulseDisappearanceLeftRadial
                + this.diseaseInfo.pulseDisappearanceRightFemoral
                + this.diseaseInfo.pulseDisappearanceLeftFemoral
                + this.diseaseInfo.pulseDisappearanceRightPopliteal
                + this.diseaseInfo.pulseDisappearanceLeftPopliteal
                + this.diseaseInfo.pulseDisappearanceRightPosteriorTibial
                + this.diseaseInfo.pulseDisappearanceLeftPosteriorTibial
                + this.diseaseInfo.pulseDisappearanceRightDorsalisPedal
                + this.diseaseInfo.pulseDisappearanceLeftDorsalisPedal
                + this.diseaseInfo.limbMovementDisorder
                + this.diseaseInfo.limbMovementDisorderUpper
                + this.diseaseInfo.limbMovementDisorderLower
            ) || 0
        },
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

::v-deep .custom {
    margin-bottom: 25px;
}
</style>