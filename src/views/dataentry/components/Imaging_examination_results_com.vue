<template>
    <el-card class="box-card patientInfo">
        <div slot="header" class="clearfix">
            <span>影像学检查 - 2024-01-01-name</span>
            <el-button v-if="editVis == true" style="float: right;margin-top: 5px;" size="mini" type="success" @click="editVis = false">编辑</el-button>
            <el-button v-else style="float: right;margin-top: 5px;" size="mini" type="success" @click="editVis = true">保存</el-button>

        </div>
        <div>
            <el-form label-width="150px" :model="imageInfo">
                <el-row>
                    <el-col :lg="24" :xl="8">
                        <el-form-item label="影像手段:">
                            <el-input :disabled="editVis" style="width:200px" size="mini" v-model="patientInfo.name"></el-input>
                        </el-form-item>

                        <el-form-item label="本院影像:">
                            <el-select :disabled="editVis" style="width:200px" size="mini" v-model="patientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="16">
                        <el-form-item label="影像补充:" style="width: 100%;">
                            <el-input :disabled="editVis" type="textarea" size="mini" v-model="patientInfo.name"></el-input>
                        </el-form-item>

                    </el-col>
                </el-row>


            </el-form>
            <el-form label-position="top" label-width="150px" :model="imageInfo">
                <el-row class="rowSelect">
                    <el-col :span="10">
                        <el-row class="left">
                            <el-col :offset="12" :span="12">
                                <el-form-item label="颅内动脉">
                                    <el-select  :disabled="editVis" size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="右颅内动脉">
                                    <el-select  :disabled="editVis" size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="右颅外动脉">
                                    <el-select  :disabled="editVis" size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col  :span="12">
                                <el-form-item label="右颅总动脉">
                                    <el-select  :disabled="editVis" size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col  :span="12">
                                <el-form-item label="右颅总动脉">
                                    <el-select  :disabled="editVis" size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="右颅总动脉">
                                    <el-select  :disabled="editVis" size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="右颅总动脉">
                                    <el-select  :disabled="editVis" size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col  :span="12">
                                <el-form-item label="右颅总动脉">
                                    <el-select  :disabled="editVis" size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col  :span="12">
                                <el-form-item label="右颅总动脉">
                                    <el-select  :disabled="editVis" size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col  :span="12">
                                <el-form-item label="右颅总动脉">
                                    <el-select  :disabled="editVis" size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col  :span="12">
                                <el-form-item label="右椎动脉">
                                    <el-select  :disabled="editVis" size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col  :span="12">
                                <el-form-item label="右锁骨下动脉">
                                    <el-select  :disabled="editVis" size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col  :span="12">
                                <el-form-item label="头臂干">
                                    <el-select  :disabled="editVis" size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="4" style="text-align: center;">
                        <img style="width:90%" src="@/assets/images/headInfo.png" alt="">
                    </el-col>
                    <el-col :span="10">
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="willis环">
                                    <el-select  :disabled="editVis" size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="左颅外动脉">
                                    <el-select  :disabled="editVis" size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="左颅总动脉">
                                    <el-select  :disabled="editVis" size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="左椎动脉">
                                    <el-select  :disabled="editVis" size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="左锁骨下动脉">
                                    <el-select  :disabled="editVis" size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="头臂干">
                                    <el-select  :disabled="editVis" size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="左腋动脉">
                                    <el-select  :disabled="editVis" size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label=" ">
                                    <br>
                                </el-form-item>
                               
                                <el-form-item label="左颅内动脉">
                                    <el-select  :disabled="editVis" size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="左颅内动脉">
                                    <el-select  :disabled="editVis" size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="左颅内动脉">
                                    <el-select  :disabled="editVis" size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="左颅内动脉">
                                    <el-select  :disabled="editVis" size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="左颅内动脉">
                                    <el-select  :disabled="editVis" size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="左颅内动脉">
                                    <el-select  :disabled="editVis" size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </el-form>
        </div>
    </el-card>
</template>

<script >
export default {
    data() {
        return {
            options: [],
            editVis:true
        }
    },
    props: {
        patientInfo: Object,
        imageInfo: Object
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