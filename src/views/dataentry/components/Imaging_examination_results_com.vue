<template>
    <el-card class="box-card patientInfo">
        <div slot="header" class="clearfix">
            <span>影像学检查 - 2024-01-01-name</span>
            <el-button v-if="editVis == true" style="float: right;margin-top: 5px;" size="mini" type="success"
                @click="editVis = false">编辑</el-button>
            <el-button v-else style="float: right;margin-top: 5px;" size="mini" type="success"
                @click="editVis = true">保存</el-button>

        </div>
        <div>
            <el-form label-width="150px" :model="imageInfo">
                <el-row>
                    <el-col :lg="24" :xl="8">
                        <el-form-item label="影像手段:">
                            <el-input :disabled="editVis" multiple style="width:200px" size="mini"
                                v-model="patientInfo.name"></el-input>
                        </el-form-item>

                        <el-form-item label="本院影像:">
                            <el-select :disabled="editVis" multiple style="width:200px" size="mini"
                                v-model="patientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="16">
                        <el-form-item label="影像补充:" style="width: 100%;">
                            <el-input :disabled="editVis" multiple type="textarea" size="mini"
                                v-model="patientInfo.name"></el-input>
                        </el-form-item>

                    </el-col>
                </el-row>


            </el-form>
            <el-form label-position="top" label-width="150px" :model="imageInfo">
                <el-row class="rowSelect">
                    <el-col :span="10">
                        <el-row class="left">
                            <el-col :offset="12" :span="12">
                                <el-form-item label="右侧大脑前动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>

                            <el-col :offset="12" :span="12">
                                <el-form-item label="右侧大脑中动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="Willis环">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="右侧大脑后动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="基底动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="右椎动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="头臂干/无名动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="左颈外动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="右颅内动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="右颈内动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :offset="12" :span="12">
                                <el-form-item label="右颈总动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>


                            <el-col :offset="12" :span="12">
                                <el-form-item label="右锁骨下动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :offset="12" :span="12">
                                <el-form-item label="右腋动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>

                        </el-row>
                    </el-col>
                    <el-col :span="4" style="text-align: center;margin-top: 100px;">
                        <img style="width:90%" src="@/assets/images/headInfo.png" alt="">
                    </el-col>
                    <el-col :span="10">
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="左侧大脑前动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="左侧大脑中动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="左侧大脑后动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="左椎动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="左颈外动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="左颈内动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="左颈总动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="左锁骨下动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="左腋动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
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

                                <el-form-item label=" ">
                                    <br>
                                </el-form-item>
                                <el-form-item label="升主动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="冠状动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>

                                <el-form-item label="肺动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="胸降主动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
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
            <el-divider><i class="el-icon-mobile-phone"></i></el-divider>

            <el-form label-position="top" label-width="150px" :model="imageInfo">
                <el-row class="rowSelect">
                    <el-col :span="10">
                        <el-row class="left">
                            <el-col :offset="12" :span="12">
                                <el-form-item label="右髂总动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>


                            <el-col :span="12">
                                <el-form-item label="肾下腹主动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>

                            <el-col :span="12">
                                <el-form-item label="右髂内动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="Riolan弓">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>

                            <el-col :span="12">
                                <el-form-item label="右髂外动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="腹腔干">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="右股动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>


                            <el-col :offset="12" :span="12">
                                <el-form-item label="右肾动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
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
                                <el-form-item label="左髂总动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="左髂内动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="左髂外动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="左股动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="左肾动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
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

                                <el-form-item label="肾上腹主动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="肠系膜上动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="肠系膜下动脉">
                                    <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                        placeholder="请选择">
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

<script>
export default {
    data() {
        return {
            options: [
                { label: '未记录', value: 0 },
                { label: '正常', value: 1 },
                { label: '轻微狭窄(0-30%)', value: 2 },
                { label: '轻度狭窄(31-50%)', value: 3 },
                { label: '中度狭窄(51-70%)', value: 4 },
                { label: '重度狭窄(71-99%)', value: 5 },
                { label: '闭塞(100%)', value: 6 },
                { label: '扩张', value: 7 },
                { label: '动脉瘤', value: 8 },
                { label: '血栓形成', value: 9 },
                { label: '管壁增厚', value: 10 },
                { label: '纤细', value: 11 },
                { label: '斑块', value: 12 },
                { label: '狭窄后改变', value: 13 }
            ],
            editVis: true
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