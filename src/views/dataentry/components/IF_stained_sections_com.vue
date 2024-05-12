<template>
    <el-card class="box-card patientInfo">
        <div slot="header" class="clearfix">
            <span>IF染色切片</span>
            <el-button v-if="editVis == true" style="float: right;margin-top: 5px;" size="mini" type="success"
                @click="editVis = false">编辑</el-button>
            <el-button v-else style="float: right;margin-top: 5px;" size="mini" type="success"
                @click="saveOptionsApi()">保存</el-button>

        </div>
        <div>
            <el-form label-width="200px" :model="IFInfo">
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="IF染色ID:">
                            <el-input :disabled="true" style="width:200px" size="mini"
                                v-model="IFInfo.ifStainingSliceId"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="目前有无IF染色切片:">
                            <el-select :disabled="editVis" style="width:200px" size="mini" v-model="IFInfo.hasSlice"
                                placeholder="请选择">
                                <el-option v-for="item in Options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="IF染色切片编号:">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="IFInfo.sliceNumber"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="IF染色切片扫描图像:">
                            <el-select :disabled="editVis" style="width:200px" size="mini" v-model="IFInfo.hasImage"
                                placeholder="请选择">
                                <el-option v-for="item in Options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="IF染色时间:">
                            <el-date-picker v-model="IFInfo.stainingTime" style="width:200px" size="mini" type="date"
                                placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>

                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="IF染色目的蛋白-颜色:">
                            <el-input :disabled="editVis" style="width:100%" size="mini"
                                v-model="IFInfo.targetProteinColor"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>


                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="组织性质:">
                            <el-select :disabled="editVis" style="width:200px" size="mini"
                                v-model="IFInfo.tissueProperty" placeholder="请选择">
                                <el-option v-for="item in orgOptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="组织来源 (x动脉/周围x组织):">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="IFInfo.tissueSource"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="当前保存位置:">
                            <el-select :disabled="editVis" style="width:200px" size="mini"
                                v-model="IFInfo.storageLocation" placeholder="请选择">
                                <el-option v-for="item in saveOptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="来源组织石蜡块ID:">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="IFInfo.tissueParaffinBlockId"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="来源住院手术信息ID:">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="IFInfo.surgeryInfoId"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="IF染色结果描述:">
                            <el-input :disabled="editVis" v-model="IFInfo.resultDescription" type="textarea" :rows="4"
                                placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="备注:">
                            <el-input :disabled="editVis" v-model="IFInfo.notes" type="textarea" :rows="4"
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

import { addOrUpdateIfSlice } from '@/api/dataentry'
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
                    label: "信息缺失",
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
        IFInfo: Object
    },
    methods: {
        async saveOptionsApi() {
            this.IFInfo.centerId = this.centerId
            this.IFInfo.patientCode = this.patientInfo.code

            const { data } = await addOrUpdateIfSlice(this.IFInfo)
            console.log(data)
            this.editVis = true
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