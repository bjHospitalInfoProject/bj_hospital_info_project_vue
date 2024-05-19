<template>
    <el-card class="box-card patientInfo">
        <div slot="header" class="clearfix">
            <span>影像学检查结果</span>
            <el-button v-if="editVis == true" style="float: right;margin-top: 5px;" size="mini" type="success"
                @click="editVis = false">编辑</el-button>
            <el-button v-else style="float: right;margin-top: 5px;" size="mini" type="success"
                @click="saveOptionsApi()">保存</el-button>

        </div>
        <div>
            <el-form label-width="200px" :model="imageInfo">


                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="影像学检查结果ID：">
                            <el-input :disabled="true" style="width:200px" size="mini"
                                v-model="imageInfo.imagingExamResultId"></el-input>
                        </el-form-item>

                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="填报人：">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="imageInfo.reporter"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="填报时间：">
                            <el-date-picker :disabled="editVis" v-model="imageInfo.reportTime" style="width:200px"
                                size="mini" type="date" placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术前影像手段：">
                            <el-select :disabled="editVis" style="width:200px" size="mini"
                                v-model="imageInfo.preImagingMethodsList" multiple placeholder="请选择">
                                <el-option v-for="item in yingxiangOptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术前本院影像：">
                            <el-select :disabled="editVis" style="width:200px" size="mini"
                                v-model="imageInfo.preHospitalImagingList" multiple placeholder="请选择">
                                <el-option v-for="item in yingxiangOptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术后本院影像：">
                            <el-select :disabled="editVis" style="width:200px" size="mini"
                                v-model="imageInfo.postHospitalImagingList" multiple placeholder="请选择">
                                <el-option v-for="item in yingxiangOptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="Numano影像分型：">
                            <el-select :disabled="editVis" style="width:200px" size="mini"
                                v-model="imageInfo.numanoClassification" placeholder="请选择">
                                <el-option v-for="item in fenxingOptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="近3月新发/加重影像表现：">
                            <el-select :disabled="editVis" style="width:200px" size="mini"
                                v-model="imageInfo.recentChanges" placeholder="请选择">
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
                        <el-form-item label="影像学检查补充：">
                            <el-input :disabled="editVis" type="textarea" v-model="imageInfo.additionalImaging"
                                :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item class="custom" label="重度狭窄/闭塞血管好发部位(xx动脉-分叉起始段/中段/远段)：">
                            <el-input :disabled="editVis" type="textarea" v-model="imageInfo.severeNarrowingLocation"
                                :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <el-divider content-position="left">头颈胸部上肢影像</el-divider>

            <el-form label-position="top" label-width="150px" :model="imageInfo">

                <div class="headInfo">
                    <div style="left: 28%;" class="labelRight">
                        <el-form-item label="颅内动脉">
                            <el-select collapse-tags :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.intracranialArteriesList" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div style="left: 60%;">
                        <el-form-item label="Willis环">
                            <el-select collapse-tags :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.willisRingList" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div style="left: 28%;top: 15%;" class="labelRight">
                        <el-form-item label="右颈内动脉">
                            <el-select collapse-tags :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.rightInternalCarotidArteryList" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div style="left: 13%;top: 15%;" class="labelRight">
                        <el-form-item label="右颈外动脉">
                            <el-select collapse-tags :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.rightExternalCarotidArteryList" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div style="left: 60%;top: 15%;" class="">
                        <el-form-item label="左颈内动脉">
                            <el-select collapse-tags :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.leftInternalCarotidArteryList" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div style="left: 75%;top: 15%;" class="">
                        <el-form-item label="左颈外动脉">
                            <el-select collapse-tags :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.leftExternalCarotidArteryList" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>

                    <div style="left: 20%;top: 30%;" class="labelRight">
                        <el-form-item label="右颈总动脉">
                            <el-select collapse-tags :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.rightCommonCarotidArteryList" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div style="left: 68%;top: 30%;" class="">
                        <el-form-item label="左颈总动脉">
                            <el-select collapse-tags :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.leftCommonCarotidArteryList" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>

                    <div style="left: 28%;top: 45%;" class="labelRight">
                        <el-form-item label="右椎动脉">
                            <el-select collapse-tags :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.rightVertebralArteryList" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>

                    <div style="left: 60%;top: 45%;" class="">
                        <el-form-item label="左椎动脉">
                            <el-select collapse-tags :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.leftVertebralArteryList" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div style="left: 18%;top: 55%;" class="labelRight">
                        <el-form-item label="右腋动脉">
                            <el-select collapse-tags :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.rightAxillaryArteryList" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div style="left: 31%;top: 55%;" class="labelRight">
                        <el-form-item label="右锁骨下动脉">
                            <el-select collapse-tags :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.rightSubclavianArteryList" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>

                    <div style="left: 57%;top: 55%;" class="">
                        <el-form-item label="左锁骨下动脉">
                            <el-select collapse-tags :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.leftSubclavianArteryList" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div style="left: 70%;top: 55%;" class="">
                        <el-form-item label="左腋动脉">
                            <el-select collapse-tags :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.leftAxillaryArteryList" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>

                    <div style="left: 33.5%;top: 65%;" class="labelRight">
                        <el-form-item label="头臂干">
                            <el-select collapse-tags :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div style="left: 55%;top: 65%;" class="">
                        <el-form-item label="主动脉弓">
                            <el-select collapse-tags :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.aorticArchList" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div style="left: 35%;top: 75%;" class="labelRight">
                        <el-form-item label="升主动脉">
                            <el-select collapse-tags :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.ascendingAortaList" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div style="left: 54%;top: 75%;" class="">
                        <el-form-item label="胸降主动脉">
                            <el-select collapse-tags :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.descendingAortaList" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>

                    <div style="left: 37%;top: 85%;" class="labelRight">
                        <el-form-item label="肺动脉">
                            <el-select collapse-tags :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.pulmonaryArteryList" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div style="left: 52%;top: 85%;" class="">
                        <el-form-item label="冠状动脉">
                            <el-select collapse-tags :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.coronaryArteriesList" placeholder="请选择">
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
                <!-- <el-row class="rowSelect">
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
                </el-row> -->

                <div class="fubuxiazhi">
                    <div class="" style="right:33%;top:0">
                        <el-form-item label="肾上腹主动脉">
                            <el-select collapse-tags :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.suprarenalAbdominalAortaList" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div class="labelRight" style="left:34%;top:10%">
                        <el-form-item label="腹腔干">
                            <el-select collapse-tags :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.celiacTrunkList" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div class="" style="right:34%;top:17%">
                        <el-form-item label="左肾动脉">
                            <el-select collapse-tags :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.leftRenalArteryList" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div class="labelRight" style="left:34%;top:25%">
                        <el-form-item label="右肾动脉">
                            <el-select collapse-tags :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.rightRenalArteryList" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>

                    <div class="" style="right:35%;top:30%">
                        <el-form-item label="肠系膜上动脉">
                            <el-select collapse-tags :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.superiorMesentericArteryList" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>

                    <div class="" style="right:35%;top:43%">
                        <el-form-item label="肠系膜下动脉">
                            <el-select collapse-tags :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.inferiorMesentericArteryList" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div class="labelRight" style="left:35%;top:38%">
                        <el-form-item label="肾下腹主动脉">
                            <el-select collapse-tags :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.infrarenalAbdominalAortaList" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div class="labelRight" style="left:33%;top:55%">
                        <el-form-item label="右髂总动脉">
                            <el-select collapse-tags :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.rightIliacArteryList" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>


                    <div class="" style="right:33%;top:53%">
                        <el-form-item label="左髂总动脉">
                            <el-select collapse-tags :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.leftIliacArteryList" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>

                    <div class="labelRight" style="left:30%;top:70%">
                        <el-form-item label="右髂外动脉">
                            <el-select collapse-tags :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.rightExternalIliacArteryList" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>


                    <div class="" style="right:30%;top:68%">
                        <el-form-item label="左髂外动脉">
                            <el-select collapse-tags :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.leftExternalIliacArteryList" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>

                    <div class="labelRight" style="left:36.5%;top:93%">
                        <el-form-item label="右髂内动脉">
                            <el-select collapse-tags :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.rightInternalIliacArteryList" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>


                    <div class="" style="right:36.5%;top:93%">
                        <el-form-item label="左髂内动脉">
                            <el-select collapse-tags :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.leftInternalIliacArteryList" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div class="labelRight" style="left:30%;top:85%">
                        <el-form-item label="右股动脉">
                            <el-select collapse-tags :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.rightFemoralArteryList" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>


                    <div class="" style="right:30%;top:85%">
                        <el-form-item label="左股动脉">
                            <el-select collapse-tags :disabled="editVis" multiple size="mini"
                                v-model="imageInfo.leftFemoralArteryList" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>

                </div>
            </el-form>

        </div>
    </el-card>
</template>

<script>


import { addOrUpdateImagingExam } from '@/api/dataentry'
import { mapGetters } from 'vuex'


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
    },
    methods: {
        async saveOptionsApi() {
            this.imageInfo.centerId = this.centerId
            this.imageInfo.patientCode = this.patientInfo.code
            const { data } = await addOrUpdateImagingExam(this.imageInfo)
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

::v-deep .custom .el-form-item__label {
    line-height: 20px
}

.headInfo,
.fubuxiazhi {
    background: url("../../../assets/images/headInfo.png") center top no-repeat;
    // background-position:center -20%;
    width: 100%;
    height: 60vh;
    position: relative;
    background-size: 16% 85%;

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

.fubuxiazhi {
    background: url("../../../assets/images/fubuxiazhi.jpg") center top no-repeat;
    height: 50vh;
    background-size: 16% 90%;
    background-position: center 3vh;
}
</style>