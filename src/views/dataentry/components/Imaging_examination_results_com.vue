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
            <el-form label-width="200px" :model="imageInfo">


                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="影像学检查结果ID：">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="imageInfo.name"></el-input>
                        </el-form-item>

                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="填报人：">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="imageInfo.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="填报时间：">
                            <el-date-picker v-model="imageInfo.name" style="width:200px" size="mini" type="date"
                                placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术前影像手段：">
                            <el-select :disabled="editVis" style="width:200px" size="mini" v-model="imageInfo.hospital"
                                multiple placeholder="请选择">
                                <el-option v-for="item in yingxiangOptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术前本院影像：">
                            <el-select :disabled="editVis" style="width:200px" size="mini" v-model="imageInfo.hospital"
                                multiple placeholder="请选择">
                                <el-option v-for="item in yingxiangOptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术后本院影像：">
                            <el-select :disabled="editVis" style="width:200px" size="mini" v-model="imageInfo.hospital"
                                multiple placeholder="请选择">
                                <el-option v-for="item in yingxiangOptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="影像学检查补充：">
                            <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="Numano影像分型：">
                            <el-select :disabled="editVis" style="width:200px" size="mini" v-model="imageInfo.hospital"
                                placeholder="请选择">
                                <el-option v-for="item in fenxingOptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="近3月新发/加重影像表现：">
                            <el-select :disabled="editVis" style="width:200px" size="mini" v-model="imageInfo.hospital"
                                placeholder="请选择">
                                <el-option v-for="item in biaoxianptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="">
                            <img style="width:90%" src="@/assets/images/Numano.png" alt="">
                        </el-form-item>
                    </el-col>

                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item class="custom" label="重度狭窄/闭塞血管好发部位(xx动脉-分叉起始段/中段/远段)：">
                            <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <el-divider content-position="left">头颈胸部上肢影像</el-divider>

            <el-form label-position="top" label-width="150px" :model="imageInfo">
                <el-row class="rowSelect">
                    <el-col :span="10">
                        <el-row class="left">
                            <el-col :offset="12" :span="12">
                                <el-form-item label="右侧大脑前动脉">
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>

                            <el-col :offset="12" :span="12">
                                <el-form-item label="右侧大脑中动脉">
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>

                            <el-col :span="12">
                                <el-form-item label="右侧大脑后动脉">
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="基底动脉">
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="右椎动脉">
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="头臂干/无名动脉">
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">

                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="右颅内动脉">
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">

                            </el-col>
                            <el-col :offset="12" :span="12">
                                <el-form-item label="右颈总动脉">
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>


                            <el-col :offset="12" :span="12">
                                <el-form-item label="右锁骨下动脉">
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :offset="12" :span="12">
                                <el-form-item label="右腋动脉">
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
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
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="左侧大脑中动脉">
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="左侧大脑后动脉">
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="左椎动脉">
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="左颈外动脉">
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="左颈内动脉">
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="左颈总动脉">
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="左锁骨下动脉">
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="左腋动脉">
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
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
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="冠状动脉">
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>

                                <el-form-item label="肺动脉">
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="胸降主动脉">
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>

                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>

                <div class="headInfo">
                    <div style="left: 28%;" class="labelRight">
                        <el-form-item label="颅内动脉">
                            <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div style="left: 60%;">
                        <el-form-item label="Willis环">
                            <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                                placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div style="left: 28%;top: 15%;" class="labelRight">
                        <el-form-item label="右颈内动脉">
                            <el-select :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div style="left: 13%;top: 15%;" class="labelRight">
                        <el-form-item label="右颈外动脉">
                            <el-select :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div style="left: 60%;top: 15%;" class="">
                        <el-form-item label="左颈内动脉">
                            <el-select :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div style="left: 75%;top: 15%;" class="">
                        <el-form-item label="左颈外动脉">
                            <el-select :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>

                    <div style="left: 20%;top: 30%;" class="labelRight">
                        <el-form-item label="右颈总动脉">
                            <el-select :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div style="left: 68%;top: 30%;" class="">
                        <el-form-item label="左颈总动脉">
                            <el-select :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>

                </div>
            </el-form>
            <el-divider content-position="left">腹部下肢影像</el-divider>

            <el-form label-position="top" label-width="150px" :model="imageInfo">
                <el-row class="rowSelect">
                    <el-col :span="10">
                        <el-row class="left">
                            <el-col :offset="12" :span="12">
                                <el-form-item label="右髂总动脉">
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>


                            <el-col :span="12">
                                <el-form-item label="肾下腹主动脉">
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>

                            <el-col :span="12">
                                <el-form-item label="右髂内动脉">
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="Riolan弓">
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>

                            <el-col :span="12">
                                <el-form-item label="右髂外动脉">
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="腹腔干">
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="右股动脉">
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>


                            <el-col :offset="12" :span="12">
                                <el-form-item label="右肾动脉">
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>

                        </el-row>
                    </el-col>
                    <el-col :span="4" style="text-align: center;">
                        <img style="width:90%" src="@/assets/images/fubuxiazhi.jpg" alt="">
                    </el-col>
                    <el-col :span="10">
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="左髂总动脉">
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="左髂内动脉">
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="左髂外动脉">
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="左股动脉">
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="左肾动脉">
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
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
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="肠系膜上动脉">
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="肠系膜下动脉">
                                    <el-select style="width:150px" :disabled="editVis" multiple size="mini"
                                        v-model="imageInfo.hospital" placeholder="请选择">
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
            biaoxianptions: [
                {
                    label: "无",
                    value: 0
                },
                {
                    label: "有",
                    value: 1
                }
            ],
            fenxingOptions: [
                {
                    label: "I型",
                    value: 1
                },
                {
                    label: "IIa型",
                    value: 2
                },
                {
                    label: "IIb型",
                    value: 3
                },
                {
                    label: "III型",
                    value: 4
                },
                {
                    label: "IV型",
                    value: 5
                },
                {
                    label: "V型",
                    value: 6
                }
            ],
            yingxiangOptions: [
                {
                    label: "无",
                    value: 0
                },
                {
                    label: "造影",
                    value: 1
                },
                {
                    label: "头部CTA",
                    value: 2
                },
                {
                    label: "胸部CTA",
                    value: 3
                },
                {
                    label: "主动脉CTA",
                    value: 4
                },
                {
                    label: "腹部CTA",
                    value: 5
                }, {
                    label: "盆腔CTA",
                    value: 6
                },
                {
                    label: "上肢CTA",
                    value: 7
                },
                {
                    label: "下肢CTA",
                    value: 8
                },
                {
                    label: "冠脉CTA",
                    value: 9
                },
                {
                    label: "TCD",
                    value: 10
                },
                {
                    label: "CTPA",
                    value: 11
                }, {
                    label: "颈动脉DUS",
                    value: 12
                },
                {
                    label: "上肢DUS",
                    value: 13
                },
                {
                    label: "主动脉DUS",
                    value: 14
                },
                {
                    label: "腹部大血管DUS",
                    value: 15
                },
                {
                    label: "肾动脉DUS",
                    value: 16
                },
                {
                    label: "下肢DUS",
                    value: 17
                }, {
                    label: "头部MRA",
                    value: 18
                },
                {
                    label: "颈部MRA",
                    value: 19
                },
                {
                    label: "胸部MRA",
                    value: 20
                },
                {
                    label: "腹部MRA",
                    value: 21
                },
                {
                    label: "下肢MRA",
                    value: 22
                },
                {
                    label: "PET-CT",
                    value: 23
                }
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

::v-deep .custom .el-form-item__label {
    line-height: 20px
}

.headInfo {
    background: url("../../../assets/images/headInfo.png") center center no-repeat;
    
    width: 100%;
    height: 50vh;
    position: relative;
    background-size: 20% 100%;

    ::v-deep .el-form-item__label {
        height: 20px;
        line-height: 20px;
    }

    >div {
        display: inline-block;
        position: absolute;
        width: 13%;
    }

    .labelRight {
        text-align: right;
    }
}
</style>