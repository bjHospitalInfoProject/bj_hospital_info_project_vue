<template>
    <el-card class="box-card patientInfo">
        <div slot="header" class="clearfix">
            <span>血液冻存样本</span>
            <el-button v-if="editVis == true" style="float: right;margin-top: 5px;" size="mini" type="success"
                @click="editVis = false">编辑</el-button>
            <el-button v-else style="float: right;margin-top: 5px;" size="mini" type="success"
                @click="saveOptionsApi()">保存</el-button>

        </div>
        <div>
            <el-form label-width="150px" :model="bloodInfo">
                <el-row>
                    <el-col :span="12" :lg="12" :xl="8">
                        <el-form-item label="血液冻存样本ID:">
                            <el-input :disabled="true" style="width:200px" size="mini"
                                v-model="bloodInfo.bloodSampleId"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" :lg="12" :xl="8">
                        <el-form-item label="血液样本采集时间:">
                            <el-date-picker v-model="bloodInfo.collectionTime" style="width:200px" size="mini"
                                type="date" placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12" :lg="12" :xl="8">
                        <el-form-item label="目前血浆样本管数:">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="bloodInfo.plasmaTubeCount"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" :lg="12" :xl="8">
                        <el-form-item label="目前白膜层样本管数:">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="bloodInfo.membraneTubeCount"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="已有实验结果:">
                            <el-input :disabled="editVis" v-model="bloodInfo.experimentResults" type="textarea"
                                :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12" :lg="12" :xl="8">
                        <el-form-item label="当前保存位置:">
                            <el-select :disabled="editVis" style="width:200px" size="mini"
                                v-model="bloodInfo.storageLocation" placeholder="请选择">
                                <el-option v-for="item in saveOptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" :lg="12" :xl="8">
                        <el-form-item label="来源住院手术信息ID:">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="bloodInfo.surgeryInfoId"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="备注:">
                            <el-input :disabled="editVis" v-model="bloodInfo.notes" type="textarea" :rows="4"
                                placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>

        </div>
    </el-card>
</template>

<script>

import { addOrUpdateBloodSample } from '@/api/dataentry'
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            options: [],
            saveOptions: [
                {
                    label: "北京医院样本库",
                    value: 1
                },
                {
                    label: "实验公司",
                    value: 2
                },
                {
                    label: "合作单位",
                    value: 3
                },
                {
                    label: "其他",
                    value: 4
                }
            ],
            editVis: true
        }
    },
    props: {
        patientInfo: Object,
        bloodInfo: Object
    },
    methods: {
        async saveOptionsApi() {
            this.bloodInfo.centerId = this.centerId
            this.bloodInfo.patientCode = this.patientInfo.code
            const { data } = await addOrUpdateBloodSample(this.bloodInfo)
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
</style>