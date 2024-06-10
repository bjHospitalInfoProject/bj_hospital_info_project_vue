<template>
    <el-card class="box-card patientInfo">
        <div slot="header" class="clearfix">
            <span>组织石蜡块</span>
            <el-button v-if="editVis == true" style="float: right;margin-top: 5px;" size="mini" type="success"
                @click="editVis = false">编辑</el-button>
            <el-button v-else style="float: right;margin-top: 5px;" size="mini" type="success"
                @click="saveOptionsApi()">保存</el-button>

        </div>
        <div>
            <div>
                <el-form label-width="200px" :model="organizingparaffinInfo">
                    <el-row>
                        <el-col :span="8" :lg="12" :xl="8">
                            <el-form-item label="组织石蜡块ID:">
                                <el-input :disabled="true" style="width:200px" size="mini"
                                    v-model="organizingparaffinInfo.tissueParaffinBlockId"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8" :lg="12" :xl="8">
                            <el-form-item label="目前有无蜡块:">
                                <el-select :disabled="editVis" style="width:200px" size="mini"
                                    v-model="organizingparaffinInfo.hasBlock" placeholder="请选择">
                                    <el-option v-for="item in Options" :key="item.value" :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8" :lg="12" :xl="8">
                            <el-form-item label="石蜡块编号:">
                                <el-input :disabled="editVis" style="width:200px" size="mini"
                                    v-model="organizingparaffinInfo.blockNumber"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8" :lg="12" :xl="8">
                            <el-form-item label="是否已切白片:">
                                <el-select :disabled="editVis" style="width:200px" size="mini"
                                    v-model="organizingparaffinInfo.hasSlide" placeholder="请选择">
                                    <el-option v-for="item in Options" :key="item.value" :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8" :lg="12" :xl="8">
                            <el-form-item label="包埋时间:">
                                <el-date-picker :disabled="editVis" v-model="organizingparaffinInfo.embeddingTime"
                                    style="width:200px" size="mini" type="date" placeholder="选择日期">
                                </el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8" :lg="12" :xl="8">
                            <el-form-item label="当前保存位置:">
                                <el-select :disabled="editVis" style="width:200px" size="mini"
                                    v-model="organizingparaffinInfo.storageLocation" placeholder="请选择">
                                    <el-option v-for="item in saveOptions" :key="item.value" :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8" :lg="12" :xl="8">
                            <el-form-item label="组织来源 (x动脉/周围x组织):">
                                <el-input :disabled="editVis" style="width:200px" size="mini"
                                    v-model="organizingparaffinInfo.tissueSource"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8" :lg="12" :xl="8">
                            <el-form-item label="组织性质:">
                                <el-select :disabled="editVis" style="width:200px" size="mini"
                                    v-model="organizingparaffinInfo.tissueProperty" placeholder="请选择">
                                    <el-option v-for="item in orgOptions" :key="item.value" :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8" :lg="12" :xl="8">
                            <el-form-item label="来源住院手术信息ID:">
                                <el-input :disabled="editVis" style="width:200px" size="mini"
                                    v-model="organizingparaffinInfo.surgeryInfoId"></el-input>
                            </el-form-item>
                        </el-col>

                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <el-form-item label="备注:">
                                <el-input :disabled="editVis" v-model="organizingparaffinInfo.notes" type="textarea"
                                    :rows="4" placeholder="请输入内容">
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
        </div>
    </el-card>
</template>

<script>


import { addOrUpdateTissueParaffin } from '@/api/dataentry'
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            Options: [
                {
                    label: "无",
                    value: 0
                },
                {
                    label: "有",
                    value: 1
                }
            ],
            orgOptions: [
                {
                    label: "无",
                    value: 0
                },
                {
                    label: "病变",
                    value: 1
                },
                {
                    label: "相对健康",
                    value: 2
                },
                {
                    label: "健康",
                    value: 3
                },
                {
                    label: "NA",
                    value: 4
                }
            ],
            saveOptions: [
                {
                    label: "科室样本柜",
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
        organizingparaffinInfo: Object
    },
    methods: {
        async saveOptionsApi() {
            this.organizingparaffinInfo.centerId = this.centerId
            this.organizingparaffinInfo.patientCode = this.patientInfo.code

            const { data } = await addOrUpdateTissueParaffin(this.organizingparaffinInfo)
            console.log(data)
            if (data) {
                this.editVis = true
                this.$parent.organizingparaffinInfo = data
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