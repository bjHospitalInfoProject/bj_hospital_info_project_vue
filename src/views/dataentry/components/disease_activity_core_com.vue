<template>
    <el-card class="box-card diseaseInfo">
        <div slot="header" class="clearfix">
            <span>疾病活动性评分</span>
            <el-button v-if="editVis == true" style="float: right;margin-top: 5px;" size="mini" type="success"
                @click="editVis = false">编辑</el-button>
            <el-button v-else style="float: right;margin-top: 5px;" size="mini" type="success"
                @click="editVis = true">保存</el-button>

        </div>
        <div>
            <el-form label-width="200px" :model="diseaseInfo">

                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="出生日期：">
                            <el-select :disabled="editVis" style="width:200px" size="mini" v-model="diseaseInfo.hospital"
                                placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>

                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="性别：">
                            <el-select :disabled="editVis" style="width:200px" size="mini" v-model="diseaseInfo.hospital"
                                placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="民族：">
                            <el-select :disabled="editVis" style="width:200px" size="mini" v-model="diseaseInfo.hospital"
                                placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                </el-row>

                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="地区：">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="diseaseInfo.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="手术干预情况：">
                            <el-select :disabled="editVis" style="width:200px" size="mini" v-model="diseaseInfo.hospital"
                                placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>

                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="重建血管数：">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="diseaseInfo.name"></el-input>
                        </el-form-item>
                    </el-col>

                </el-row>
                <el-row>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="介入手术次数：">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="diseaseInfo.name"></el-input>

                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="支架植入次数：">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="diseaseInfo.name"></el-input>

                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="开刀手术次数：">
                            <el-input :disabled="editVis" size="mini" style="width:200px"
                                v-model="diseaseInfo.name"></el-input>
                        </el-form-item>

                    </el-col>

                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="桥血管(人工血管)数：">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="diseaseInfo.name"></el-input>

                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="桥血管(自体血管)数：">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="diseaseInfo.name"></el-input>

                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="桥血管(人工、自体序贯)数：">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="diseaseInfo.name"></el-input>

                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="杂交手术次数：">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="diseaseInfo.name"></el-input>

                        </el-form-item>

                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="ABO血型：">
                            <el-select :disabled="editVis" size="mini" style="width:200px" v-model="diseaseInfo.hospital"
                                placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="Rh血型：">
                            <el-select :disabled="editVis" size="mini" style="width:200px" v-model="diseaseInfo.hospital"
                                placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
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
                                v-model="diseaseInfo.name"></el-input>

                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="随访电话2:">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="diseaseInfo.name"></el-input>

                        </el-form-item>

                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="随访情况：">
                            <el-select :disabled="editVis" size="mini" style="width:200px" v-model="diseaseInfo.hospital"
                                placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                </el-row>

                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="微信随访群：">
                            <el-select :disabled="editVis" size="mini" style="width:200px" v-model="diseaseInfo.hospital"
                                placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="首发表现：">
                            <el-select :disabled="editVis" size="mini" style="width:200px" v-model="diseaseInfo.hospital"
                                placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="首次表现时间:">
                            <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="首次确诊时间:">
                            <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="首次确诊医院:">
                            <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="总体评价：">
                            <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
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
            editVis: true
        }
    },
    props: {
        diseaseInfo: Object
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
</style>