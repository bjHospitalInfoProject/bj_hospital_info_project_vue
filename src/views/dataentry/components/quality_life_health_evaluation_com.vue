<template>
    <el-card class="box-card patientInfo">
        <div slot="header" class="clearfix">
            <span>生活质量健康评价</span>
            <el-button v-if="editVis == true" style="float: right;margin-top: 5px;" size="mini" type="success"
                @click="editVis = false">编辑</el-button>
            <el-button v-else style="float: right;margin-top: 5px;" size="mini" type="success"
                @click="saveOptionsApi()">保存</el-button>

        </div>
        <div>
            <el-form label-width="200px" :model="qualityInfo">

                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="生活质量健康评价ID:">
                            <el-input :disabled="true" style="width:200px" size="mini"
                                v-model="qualityInfo.healthQualityEvaluationId"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="填报人:">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="qualityInfo.reporter"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="填报时间:">
                            <el-date-picker :disabled="editVis" v-model="qualityInfo.reportDate" style="width:200px"
                                size="mini" type="date" placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="评价日期:">
                            <el-date-picker :disabled="editVis" v-model="qualityInfo.evaluationDate" style="width:200px"
                                size="mini" type="date" placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="EQ-5D量表得分:">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="qualityInfo.eq5dScore"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="EQ-5D量表评价时间:">
                            <el-date-picker :disabled="editVis" v-model="qualityInfo.eq5dEvaluationDate"
                                style="width:200px" size="mini" type="date" placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="SF-36量表得分:">

                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="qualityInfo.sf36Score"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="SF-36量表评价时间:">
                            <el-date-picker :disabled="editVis" v-model="qualityInfo.sf36EvaluationDate"
                                style="width:200px" size="mini" type="date" placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="焦虑自评量表(SAS)得分:">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="qualityInfo.sasScore"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="焦虑自评量表(SAS)评价时间:">
                            <el-date-picker :disabled="editVis" v-model="qualityInfo.sasEvaluationDate"
                                style="width:200px" size="mini" type="date" placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="抑郁自评量表(SDS)得分:">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="qualityInfo.sdsScore"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="抑郁自评量表(SDS)评价时间:">
                            <el-date-picker :disabled="editVis" v-model="qualityInfo.sdsEvaluationDate"
                                style="width:200px" size="mini" type="date" placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>

        </div>
    </el-card>
</template>

<script>


import { addOrUpdateHealthQuality } from '@/api/dataentry'
import { mapGetters } from 'vuex'


export default {
    data() {
        return {
            options: [],
            editVis: true
        }
    },
    props: {
        patientInfo: Object,
        qualityInfo: Object
    },
    methods: {
        async saveOptionsApi() {
            this.qualityInfo.centerId = this.centerId
            this.qualityInfo.patientCode = this.patientInfo.code
            const { data } = await addOrUpdateHealthQuality(this.qualityInfo)
            console.log(data)
            if (data) {
                this.editVis = true
                this.$parent.qualityInfo = data

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
</style>