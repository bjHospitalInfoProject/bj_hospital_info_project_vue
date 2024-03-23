<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>组织冻存样本</span>
            <el-button v-if="editVis == true" style="float: right;margin-top: 5px;" size="mini" type="success"
                @click="editVis = false">编辑</el-button>
            <el-button v-else style="float: right;margin-top: 5px;" size="mini" type="success"
                @click="editVis = true">保存</el-button>

        </div>
        <div>
            <el-form label-width="300px" :model="organizefrozenInfo">
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="组织冻存样本ID:">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="organizefrozenInfo.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="组织样本采集时间:">
                            <el-date-picker v-model="organizefrozenInfo.name" style="width:200px" size="mini"
                                type="date" placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="采集备注:">
                            <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="目前组织单纯冻存冻存样本总管数:">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="organizefrozenInfo.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="目前闭塞段单纯冻存样本管数:">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="organizefrozenInfo.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="目前搭桥段单纯冻存样本管数:">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="organizefrozenInfo.name"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="目前血管周围脂肪组织单纯冻存样本管数:">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="organizefrozenInfo.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="目前血管周围淋巴结单纯冻存样本管数:">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="organizefrozenInfo.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="目前其他组织单纯冻存样本管数:">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="organizefrozenInfo.name"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="目前组织RNAlater冻存冻存样本总管数:">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="organizefrozenInfo.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="目前闭塞段RNAlater冻存样本管数:">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="organizefrozenInfo.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="目前搭桥段RNAlater冻存样本管数:">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="organizefrozenInfo.name"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="目前血管周围脂肪组织RNAlater冻存样本管数:">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="organizefrozenInfo.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="目前血管周围淋巴结RNAlater冻存样本管数:">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="organizefrozenInfo.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="目前其他组织RNAlater冻存样本管数:">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="organizefrozenInfo.name"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="其他样本补充:">
                            <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="已有实验结果:">
                            <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="当前保存位置:">
                            <el-select :disabled="editVis" style="width:200px" size="mini"
                                v-model="organizefrozenInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in saveOptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="来源住院手术信息ID:">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="organizefrozenInfo.name"></el-input>
                        </el-form-item>
                    </el-col>

                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="备注:">
                            <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>

        </div>
    </el-card>
</template>

<script>
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
        organizefrozenInfo: Object
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