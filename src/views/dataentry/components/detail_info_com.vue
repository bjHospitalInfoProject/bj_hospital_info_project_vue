<template>
    <el-collapse :value="collapseShow ? '1' : '0'" class="box-card detailInfo" accordion @change="activeCollChange">
        <el-collapse-item name="1">
            <template slot="title">
                <div slot="header" class="clearfix">
                    <span>病人详情信息</span>
                    <el-button :disabled="!collapseShow" v-if="editVis == true" style="float: right;margin-top: 5px;"
                        size="mini" type="success" @click.stop="editVis = false">编辑</el-button>
                    <el-button v-else style="float: right;margin-top: 5px;" size="mini" type="success"
                        @click.stop="saveOptions()">保存</el-button>
                </div>
            </template>
            <div>
                <el-form label-width="200px" :model="detailInfo">

                    <el-row>
                        <el-col :span="8" :lg="12" :xl="8">
                            <el-form-item label="病人ID：">
                                <el-input :disabled="true" style="width:200px" size="mini"
                                    v-model="detailInfo.patientCode"></el-input>
                            </el-form-item>

                        </el-col>

                        <el-col :span="8" :lg="12" :xl="8">
                            <el-form-item label="住院号">
                                <el-input :disabled="true" style="width:200px" size="mini"
                                    v-model="detailInfo.code"></el-input>
                            </el-form-item>

                        </el-col>
                        <el-col :span="8" :lg="12" :xl="8">
                            <el-form-item label="入组医院">
                                <el-select :disabled="editVis" style="width:200px" size="mini"
                                    v-model="detailInfo.joiningHospitalNum" placeholder="请选择">
                                    <el-option v-for="item in yiyuanOptions" :key="item.value" :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>


                        <el-col :span="8" :lg="12" :xl="8">
                            <el-form-item label="姓名：">
                                <el-input :disabled="editVis" style="width:200px" size="mini"
                                    v-model="detailInfo.name"></el-input>
                            </el-form-item>

                        </el-col>

                        <el-col :span="8" :lg="12" :xl="8">
                            <el-form-item label="距离上次手术时间：">
                                <el-input :disabled="editVis" style="width:200px" size="mini"
                                    v-model="detailInfo.operativeTime"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="8" :lg="12" :xl="8">
                            <el-form-item label="出生日期：">
                                <el-date-picker v-model="detailInfo.birth" :disabled="editVis" style="width:200px"
                                    size="mini" type="date" placeholder="选择日期">
                                </el-date-picker>
                            </el-form-item>

                        </el-col>
                        <el-col :span="8" :lg="12" :xl="8">
                            <el-form-item label="性别：">
                                <el-select :disabled="editVis" style="width:200px" size="mini"
                                    v-model="detailInfo.gender" placeholder="请选择">
                                    <el-option v-for="item in sexOptions" :key="item.value" :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8" :lg="12" :xl="8">
                            <el-form-item label="民族：">
                                <el-input :disabled="editVis" style="width:200px" size="mini"
                                    v-model="detailInfo.ethnicityStr"></el-input>
                            </el-form-item>
                        </el-col>

                    </el-row>

                    <el-row>
                        <el-col :span="8" :lg="12" :xl="8">
                            <el-form-item label="地区：">
                                <el-cascader :disabled="editVis" style="width:200px" size="mini" @change="handleChange"
                                    v-model="detailInfo.birth_place" :options="pcaTextArr" />

                            </el-form-item>
                        </el-col>
                        <el-col :span="8" :lg="12" :xl="8">
                            <el-form-item label="手术干预情况：">
                                <el-select :disabled="editVis" style="width:200px" size="mini"
                                    v-model="detailInfo.surgicalIntervention" placeholder="请选择">
                                    <el-option v-for="item in ganyuoptions" :key="item.value" :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>

                        </el-col>
                        <el-col :span="8" :lg="12" :xl="8">

                            <el-form-item label="重建血管数：">
                                <el-input :disabled="editVis" style="width:200px" size="mini"
                                    v-model="detailInfo.vascularReconstructionCount"></el-input>
                            </el-form-item>
                        </el-col>

                    </el-row>
                    <el-row>

                        <el-col :span="8" :lg="12" :xl="8">

                            <el-form-item label="介入手术次数：">
                                <el-input :disabled="editVis" style="width:200px" size="mini"
                                    v-model="detailInfo.interventionSurgeryCount"></el-input>

                            </el-form-item>
                        </el-col>
                        <el-col :span="8" :lg="12" :xl="8">

                            <el-form-item label="支架植入次数：">
                                <el-input :disabled="editVis" style="width:200px" size="mini"
                                    v-model="detailInfo.stentImplantationCount"></el-input>

                            </el-form-item>
                        </el-col>
                        <el-col :span="8" :lg="12" :xl="8">
                            <el-form-item label="开刀手术次数：">
                                <el-input :disabled="editVis" size="mini" style="width:200px"
                                    v-model="detailInfo.surgicalCount"></el-input>
                            </el-form-item>

                        </el-col>

                    </el-row>
                    <el-row>
                        <el-col :span="8" :lg="12" :xl="8">

                            <el-form-item label="桥血管(人工血管)数：">
                                <el-input :disabled="editVis" style="width:200px" size="mini"
                                    v-model="detailInfo.artificialBloodVesselCount"></el-input>

                            </el-form-item>
                        </el-col>
                        <el-col :span="8" :lg="12" :xl="8">

                            <el-form-item label="桥血管(自体血管)数：">
                                <el-input :disabled="editVis" style="width:200px" size="mini"
                                    v-model="detailInfo.autologousBloodVesselCount"></el-input>

                            </el-form-item>
                        </el-col>
                        <el-col :span="8" :lg="12" :xl="8">

                            <el-form-item label="桥血管(人工、自体序贯)数：">
                                <el-input :disabled="editVis" style="width:200px" size="mini"
                                    v-model="detailInfo.bloodVesselCount"></el-input>

                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8" :lg="12" :xl="8">
                            <el-form-item label="杂交手术次数：">
                                <el-input :disabled="editVis" style="width:200px" size="mini"
                                    v-model="detailInfo.hybridSurgeryCount"></el-input>

                            </el-form-item>

                        </el-col>
                        <el-col :span="8" :lg="12" :xl="8">

                            <el-form-item label="ABO血型：">
                                <el-select :disabled="editVis" size="mini" style="width:200px"
                                    v-model="detailInfo.aboBloodType" placeholder="请选择">
                                    <el-option v-for="item in ABOOptions" :key="item.value" :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8" :lg="12" :xl="8">

                            <el-form-item label="Rh血型：">
                                <el-select :disabled="editVis" size="mini" style="width:200px"
                                    v-model="detailInfo.rhBloodType" placeholder="请选择">
                                    <el-option v-for="item in RHoptions" :key="item.value" :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>

                    </el-row>
                    <el-row>
                        <el-col :span="8" :lg="12" :xl="8">

                            <el-form-item label="随访电话1：">
                                <el-input :disabled="editVis" style="width:200px" size="mini"
                                    v-model="detailInfo.followUpPhone1"></el-input>

                            </el-form-item>
                        </el-col>
                        <el-col :span="8" :lg="12" :xl="8">
                            <el-form-item label="随访电话2:">
                                <el-input :disabled="editVis" style="width:200px" size="mini"
                                    v-model="detailInfo.followUpPhone2"></el-input>

                            </el-form-item>

                        </el-col>
                        <el-col :span="8" :lg="12" :xl="8">

                            <el-form-item label="随访情况：">
                                <el-select :disabled="editVis" size="mini" style="width:200px"
                                    v-model="detailInfo.followUpStatus" placeholder="请选择">
                                    <el-option v-for="item in suifangoptions" :key="item.value" :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>

                    </el-row>

                    <el-row>
                        <el-col :span="8" :lg="12" :xl="8">

                            <el-form-item label="微信随访群：">
                                <el-select :disabled="editVis" size="mini" style="width:200px"
                                    v-model="detailInfo.wechatFollowUpGroup" placeholder="请选择">
                                    <el-option v-for="item in WXsuifangoptions" :key="item.value" :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>

                        <el-col :span="8" :lg="12" :xl="8">

                            <el-form-item label="首发表现：">
                                <el-select :disabled="editVis" size="mini" style="width:200px"
                                    v-model="detailInfo.initialSymptomList" multiple filterable allow-create
                                    placeholder="请选择">
                                    <el-option v-for="item in firstoptions" :key="item.value" :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>


                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <el-form-item label="首次表现时间:">
                                <el-input :disabled="editVis" v-model="detailInfo.initialSymptomsDate" type="textarea"
                                    :rows="3" placeholder="请输入内容">
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <el-form-item label="首次确诊时间:">
                                <el-input :disabled="editVis" v-model="detailInfo.initialDiagnosisDate" type="textarea"
                                    :rows="3" placeholder="请输入内容">
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <el-form-item label="首次确诊医院:">
                                <el-input :disabled="editVis" v-model="detailInfo.initialDiagnosisHospital"
                                    type="textarea" :rows="3" placeholder="请输入内容">
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <el-form-item label="总体评价：">
                                <el-input :disabled="editVis" v-model="detailInfo.overallEvaluation" type="textarea"
                                    :rows="3" placeholder="请输入内容">
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
        </el-collapse-item>
    </el-collapse>
</template>

<script>
import {
    provinceAndCityData,
    pcTextArr,
    regionData,
    pcaTextArr,
    codeToText,
} from "element-china-area-data";
import { addOrUpdatePatientPageInfo } from '@/api/dataentry'
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            provinceAndCityData,
            pcaTextArr,
            pcTextArr,
            regionData,
            codeToText,
            options: [],
            sexOptions: [
                {
                    label: "男",
                    value: 1
                }, {
                    label: "女",
                    value: 2
                }],
            yiyuanOptions: [
                {
                    label: "北京医院",
                    value: 1
                }, {
                    label: "山西一个大学附属第二医院",
                    value: 2
                }],
            ganyuoptions: [
                {
                    label: "NA",
                    value: 0
                }, {
                    label: "未手术",
                    value: 1
                }, {
                    label: "仅造影",
                    value: 2
                }, {
                    label: "单一部位单次干预",
                    value: 3
                }, {
                    label: "同一部位多次干预",
                    value: 4
                }, {
                    label: "多部位同期干预",
                    value: 5
                }, {
                    label: "其他复杂情况",
                    value: 6
                }],
            ABOOptions: [
                {
                    label: "NA",
                    value: 0
                }, {
                    label: "A型",
                    value: 1
                },
                {
                    label: "B型",
                    value: 2
                },
                {
                    label: "O型",
                    value: 3

                },
                {
                    label: "AB型",
                    value: 4

                }],
            RHoptions: [
                {
                    label: "NA",
                    value: 0

                },
                {
                    label: "RH阳性",
                    value: 1

                }, {
                    label: "RH阴性",
                    value: 2

                }],
            WXsuifangoptions: [
                {
                    label: "无微信",
                    value: 0

                },
                {
                    label: "有微信",
                    value: 1

                }, {
                    label: "已入群",
                    value: 3

                }, {
                    label: "拒加微信",
                    value: 4

                }],
            suifangoptions: [
                {
                    label: "无随访",
                    value: 0

                },
                {
                    label: "有随访",
                    value: 1
                },
                {
                    label: "失访",
                    value: 2

                },
                {
                    label: "死亡",
                    value: 3
                },
                {
                    label: "其他",
                    value: 4

                }],

            firstoptions: [

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
            editVis: true
        }
    },
    methods: {
        async saveOptions() {
            this.detailInfo.centerId = this.centerId
            this.detailInfo.patientCode = this.patientInfo.code
            const { data } = await addOrUpdatePatientPageInfo(this.detailInfo)
            console.log(data)
            if (data) {
                this.editVis = true
            }
            // this.$router.push({ path: '/dataentry/index', query: { code: "2222" } })
            // console.log(this.$route.query.code)
            this.$parent.patientInfo.code = data.patientCode
        },
        handleChange(value) {
            // console.log(value)
            console.log(value[0])
            console.log(value[1])
            console.log(value[2])

            this.detailInfo.country = value[0]
            this.detailInfo.city = value[1]
            this.detailInfo.district = value[2]

        },
        activeCollChange(e) {
            if (e == '1') {
                this.$parent.collapseShow = true
            } else {
                this.$parent.collapseShow = false

            }
        }
    },
    props: {
        patientInfo: Object,
        detailInfo: Object,
        collapseShow: Boolean
    },

    computed: {
        ...mapGetters([
            'centerId'
        ])
    }
}
</script>

<style scoped lang="less">
.detailInfo {
    border-left: 1px solid #EBEEF5;
    border-right: 1px solid #EBEEF5;
    position: relative;

    .clearfix {
        padding: 0 10px;
        padding-left: 30px;
        width: 100%;
        line-height: 40px;
        font-size: 16px;
    }
}


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

::v-deep .el-collapse-item__arrow {
    // display: none;
    position: absolute;
    margin-left: 8px;
}
</style>

<style></style>