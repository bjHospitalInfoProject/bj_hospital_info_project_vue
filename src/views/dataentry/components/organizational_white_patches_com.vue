<template>
    <el-card class="box-card patientInfo">
        <div slot="header" class="clearfix">
            <span>组织白片</span>
            <el-button v-if="editVis == true" style="float: right;margin-top: 5px;" size="mini" type="success"
                @click="editVis = false">编辑</el-button>
            <el-button v-else style="float: right;margin-top: 5px;" size="mini" type="success"
                @click="saveOptionsApi()">保存</el-button>

        </div>
        <div>
            <el-form label-width="200px" :model="organizationalwhiteInfo">
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="组织石白片ID:">
                            <el-input :disabled="true" style="width:200px" size="mini"
                                v-model="organizationalwhiteInfo.tissueSlideId"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="白片编号:">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="organizationalwhiteInfo.slideNumber"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="目前白片张数:">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="organizationalwhiteInfo.slideCount"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="组织性质:">
                            <el-select :disabled="editVis" style="width:200px" size="mini"
                                v-model="organizationalwhiteInfo.tissueProperty" placeholder="请选择">
                                <el-option v-for="item in orgOptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="来源组织石蜡块ID:">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="organizationalwhiteInfo.tissueParaffinBlockId"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="来源住院手术信息ID:">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="organizationalwhiteInfo.surgeryInfoId"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="组织来源 (x动脉/周围x组织):">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="organizationalwhiteInfo.tissueSource"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="24">
                        <el-form-item label="备注:">
                            <el-input :disabled="editVis" v-model="organizationalwhiteInfo.notes" type="textarea"
                                :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="出借情况:">
                            <el-input :disabled="editVis" v-model="organizationalwhiteInfo.lendingStatus"
                                type="textarea" :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
    </el-card>
</template>

<script>

import { addOrUpdateTissueSlide } from '@/api/dataentry'
import { mapGetters } from 'vuex'


export default {
    data() {
        return {
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
            ], editVis: true
        }
    },
    props: {
        patientInfo: Object,
        organizationalwhiteInfo: Object
    },
    methods: {
        async saveOptionsApi() {
            this.organizationalwhiteInfo.centerId = this.centerId
            this.organizationalwhiteInfo.patientCode = this.patientInfo.code

            const { data } = await addOrUpdateTissueSlide(this.organizationalwhiteInfo)
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