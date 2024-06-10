<template>
    <div class="dataentry">
        <dragDiv style="display: inline-block;" @change="widthChange">
            <div class="left-tree">
                <el-tree highlight-current ref="elTree" check-on-click-node :current-node-key="currentKey" :data="tree"
                    node-key="label" default-expand-all :expand-on-click-node="false" @node-click="handleNodeClick">
                    <div slot-scope="{ node, data }" :title="node.label"
                        :class="'custom-tree-node tree-node-' + node.data.zindex">
                        <el-input class="tree-input-change" size="mini" v-if="node.data.zindex == 8"
                            @change="treeInputChange(node)" v-model="addTreeText"></el-input>
                        <!-- @blur="treeInputChange(node)" -->
                        <p v-else class="custom-tree-node-text">{{ node.label }}</p>
                        <span style="float:right;">
                            <i @click.stop="addTree(node)"
                                :class="node.data.zindex == 2 ? 'tree-icon el-icon-circle-plus-outline' : ''"></i>
                            <span v-if="node.data.zindex == 2" class="badge">{{ node.data.children
            ? node.data.children.length :
            node.data.childrenCount }}</span>
                            <i @click.stop="delTree(node)"
                                :class="node.data.zindex == 3 ? 'tree-icon el-icon-delete' : ''"></i>
                        </span>
                    </div>
                </el-tree>
            </div>
        </dragDiv>
        <div class="rightBody" :style="{
            width: `calc(100% - ${dragDivWidth}px - 30px)`,
            marginLeft: '30px'
        }">
            <!-- <el-card class="box-card patientInfo">
                <div slot="header" class="clearfix">
                    <span>病人一般情况</span>
                    <el-button v-if="editVis == true" style="float: right;margin-top: 5px;" size="mini" type="success"
                        @click="editVis = false">编辑</el-button>
                    <el-button v-else style="float: right;margin-top: 5px;" size="mini" type="success"
                        @click="editVis = true">保存</el-button>
                </div>
                <div>
                    <el-form :inline="true" label-width="150px" :model="patientInfo">
                        <el-form-item label="姓名:">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="patientInfo.name"></el-input>
                        </el-form-item>
                        <el-form-item label="距离上次手术时间:">
                            <el-date-picker :disabled="editVis" style="width:200px" size="mini"
                                v-model="patientInfo.operativeTime" type="month" placeholder="选择月">
                            </el-date-picker>
                        </el-form-item>

                        <el-form-item label="既往就诊医院:">
                            <el-select :disabled="editVis" style="width:200px" size="mini"
                                v-model="patientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="住院号:">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="patientInfo.code"></el-input>
                        </el-form-item>
                        <el-form-item label="有无微信?:">
                            <el-checkbox :disabled="editVis" v-model="patientInfo.vchat"></el-checkbox>
                        </el-form-item>
                    </el-form>
                </div>
            </el-card> -->

            <!-- v-if="defaultSelectId == -1" -->
            <detailInfo class="box-card imageInfo" :detailInfo="detailInfo" :collapseShow="collapseShow"
                :patientInfo="patientInfo" />

            <InpatientInfo v-if="defaultSelectId == 1" class="box-card imageInfo" :InpatientInfo="InpatientInfo"
                :patientInfo="patientInfo" />
            <laboratoryInfo v-if="defaultSelectId == 2" class="box-card imageInfo" :laboratoryInfo="laboratoryInfo"
                :patientInfo="patientInfo" />

            <imageInfo v-if="defaultSelectId == 3" class="box-card imageInfo" :patientInfo="patientInfo"
                :imageInfo="imageInfo" />
            <diseaseInfo v-if="defaultSelectId == 4" class="box-card imageInfo" :diseaseInfo="diseaseInfo"
                :patientInfo="patientInfo" />
            <qualityInfo v-if="defaultSelectId == 5" class="box-card imageInfo" :qualityInfo="qualityInfo"
                :patientInfo="patientInfo" />


            <followInfo v-if="defaultSelectId == 6" class="box-card imageInfo" :followInfo="followInfo"
                :patientInfo="patientInfo" />

            <organizingparaffinInfo v-if="defaultSelectId == 7" class="box-card imageInfo"
                :organizingparaffinInfo="organizingparaffinInfo" :patientInfo="patientInfo" />

            <organizationalwhiteInfo v-if="defaultSelectId == 8" class="box-card imageInfo"
                :organizationalwhiteInfo="organizationalwhiteInfo" :patientInfo="patientInfo" />


            <HEInfo v-if="defaultSelectId == 9" class="box-card imageInfo" :HEInfo="HEInfo"
                :patientInfo="patientInfo" />
            <IHCInfo v-if="defaultSelectId == 10" class="box-card imageInfo" :IHCInfo="IHCInfo"
                :patientInfo="patientInfo" />
            <bloodInfo v-if="defaultSelectId == 11" class="box-card imageInfo" :bloodInfo="bloodInfo"
                :patientInfo="patientInfo" />

            <organizefrozenInfo v-if="defaultSelectId == 12" class="box-card imageInfo"
                :organizefrozenInfo="organizefrozenInfo" :patientInfo="patientInfo" />

            <IFInfo v-if="defaultSelectId == 13" class="box-card imageInfo" :IFInfo="IFInfo"
                :patientInfo="patientInfo" />
        </div>
    </div>
</template>

<script>
import imageInfo from "./components/Imaging_examination_results_com.vue"
import detailInfo from "./components/detail_info_com.vue"
import laboratoryInfo from "./components/laboratory_test_results_com.vue"
import InpatientInfo from "./components/Inpatient_surgical_information_com.vue"
import followInfo from "./components/follow_up_information_com.vue"
import diseaseInfo from "./components/disease_activity_core_com.vue"
import bloodInfo from "./components/blood_cryopreserved_samples_com.vue"
import HEInfo from "./components/HE_stained_sections_com.vue"
import IHCInfo from "./components/IHC_stained_sections_com.vue"
import IFInfo from "./components/IF_stained_sections_com.vue"
import organizationalwhiteInfo from "./components/organizational_white_patches_com.vue"
import organizefrozenInfo from "./components/organize_frozen_samples_com.vue"
import organizingparaffinInfo from "./components/organizing_paraffin_blocks_com.vue"
import qualityInfo from "./components/quality_life_health_evaluation_com.vue"
import dragDiv from "./components/dragDiv.vue"


import { mapGetters } from 'vuex'
import {
    getBloodSamplePageInfoList, getIFInfoList, getIHCInfoList, getHEInfoList, getPatientPageInfoList,
    getOrganizeSamplePageInfoList, getImagingExamPageInfoList, getHealthQualityPageInfoList, getTissueParaffinPageInfo, getTissueSlidePageInfoInfo
    , getHospitalSurgeryPageInfo, getLabTestResultPageInfo, getDiseaseActivityScorePageInfo, getFollowUpPageInfo
} from '@/api/dataquery'
import {
    queryUserDataEntryPermission,
    deleteIfSlice, deleteIhcSlice, deleteHeSlice, deleteBloodSample, deleteOrganizeSample,
    deleteImagingExam, deleteHealthQuality, deleteTissueParaffin, deleteTissueSlide, deleteHospitalSurgery
    , deleteLabTestResult, deleteDiseaseActivityScore, deletefollowUp
} from '@/api/dataentry'
import { title } from "@/settings"

export default {
    mounted() {
        this.getPermissionsInfo()
        let userId = this.$route.query.code;
        if (userId) {
            this.patientInfo.code = userId
            this.getPaintDetalInfo()
        }
    },
    created() {
        let userId = this.patientInfo.code;
        console.log(this.$refs.dragDiv?.defaultWidth)
        this.code = userId;
        console.log('用户ID----:', userId);
    },
    watch: {
        // $route(to, from) {
        //     console.log(from.query.code);//从哪来
        //     console.log(to.query.code);//到哪去
        // },
        patientInfo: {
            handler: function (newVal, oldVal) {
                // 这里可以执行你需要的任何操作
                console.log('Object changed!');
                console.log(this.patientInfo)
            },
            deep: true // 确保深度监听
        }
    },
    data() {
        return {
            tree: [],
            addTreeText: '',
            patientInfo: {
                code: ''
            },
            editVis: true,
            options: [],
            imageInfo: {
            },
            qualityInfo: {
            },
            detailInfo: {
            },
            laboratoryInfo: {
            },
            bloodInfo: {
            },
            InpatientInfo: {
            },
            followInfo: {
            },
            diseaseInfo: {
            },
            HEInfo: {
            },
            IHCInfo: {
            },
            IFInfo: {
            },
            organizationalwhiteInfo: {
            },
            organizefrozenInfo: {
            },
            organizingparaffinInfo: {
            },
            defaultSelectId: -1,
            dragDivWidth: 240,
            currentKey: "病人一般情况",
            collapseShow: true
        };
    },
    computed: {
    },
    components: {
        imageInfo, detailInfo, diseaseInfo, HEInfo, IHCInfo, IFInfo, organizefrozenInfo,
        laboratoryInfo, InpatientInfo, bloodInfo, followInfo, organizationalwhiteInfo,
        organizingparaffinInfo, qualityInfo, dragDiv
    },
    methods: {
        async handleNodeClick(node) {
            //这里可以使用ajax请求后台，获取组织树的数据，转成json数组格式返回,result为返回的值
            //this.data=result.data;
            console.log("111")

            console.log(node)

            if (node.zindex == 3) {
                console.log(node)
                this.defaultSelectId = node.parentId;
                this.collapseShow = false

                if (node.parentId == 1) {
                    if (node.detailId) {
                        const { data } = await getHospitalSurgeryPageInfo({
                            pageNo: 1,
                            pageSize: 1,
                            name: "",
                            phone: "",
                            hospitalSurgeryInfoId: node.detailId,
                            patientCode: this.patientInfo.code,
                            centerId: this.centerId
                        });
                        console.log(data)
                        this.InpatientInfo = data.data[0];
                    } else {
                        this.InpatientInfo = {}
                    }
                } else if (node.parentId == 2) {
                    if (node.detailId) {
                        const { data } = await getLabTestResultPageInfo({
                            pageNo: 1,
                            pageSize: 1,
                            name: "",
                            phone: "",
                            labTestResultId: node.detailId,
                            patientCode: this.patientInfo.code,
                            centerId: this.centerId
                        });
                        console.log(data)
                        this.laboratoryInfo = data.data[0];
                    } else {
                        this.laboratoryInfo = {}
                    }
                } else if (node.parentId == 3) {
                    if (node.detailId) {
                        const { data } = await getImagingExamPageInfoList({
                            pageNo: 1,
                            pageSize: 1,
                            name: "",
                            phone: "",
                            imagingExamResultId: node.detailId,
                            patientCode: this.patientInfo.code,
                            centerId: this.centerId
                        });
                        console.log(data)
                        this.imageInfo = data.data[0];
                    } else {
                        this.imageInfo = {}
                    }
                } else if (node.parentId == 4) {
                    if (node.detailId) {
                        const { data } = await getDiseaseActivityScorePageInfo({
                            pageNo: 1,
                            pageSize: 1,
                            name: "",
                            phone: "",
                            diseaseActivityScoreId: node.detailId,
                            patientCode: this.patientInfo.code,
                            centerId: this.centerId
                        });
                        console.log(data)
                        this.diseaseInfo = data.data[0];
                    } else {
                        this.diseaseInfo = {}
                    }
                } else if (node.parentId == 5) {
                    if (node.detailId) {
                        const { data } = await getHealthQualityPageInfoList({
                            pageNo: 1,
                            pageSize: 1,
                            name: "",
                            phone: "",
                            healthQualityEvaluationId: node.detailId,
                            patientCode: this.patientInfo.code,
                            centerId: this.centerId
                        });
                        console.log(data)
                        this.qualityInfo = data.data[0];
                    } else {
                        this.qualityInfo = {}
                    }
                } else if (node.parentId == 6) {
                    if (node.detailId) {
                        const { data } = await getFollowUpPageInfo({
                            pageNo: 1,
                            pageSize: 1,
                            name: "",
                            phone: "",
                            followUpInfoId: node.detailId,
                            patientCode: this.patientInfo.code,
                            centerId: this.centerId
                        });
                        console.log(data)
                        this.followInfo = data.data[0];
                    } else {
                        this.followInfo = {}
                    }
                } else if (node.parentId == 7) {
                    if (node.detailId) {
                        const { data } = await getTissueParaffinPageInfo({
                            pageNo: 1,
                            pageSize: 1,
                            name: "",
                            phone: "",
                            tissueParaffinBlockId: node.detailId,
                            patientCode: this.patientInfo.code,
                            centerId: this.centerId
                        });
                        console.log(data)
                        this.organizingparaffinInfo = data.data[0];
                    } else {
                        this.organizingparaffinInfo = {}
                    }
                } else if (node.parentId == 8) {
                    if (node.detailId) {
                        const { data } = await getTissueSlidePageInfoInfo({
                            pageNo: 1,
                            pageSize: 1,
                            name: "",
                            phone: "",
                            tissueSlideId: node.detailId,
                            patientCode: this.patientInfo.code,
                            centerId: this.centerId
                        });
                        console.log(data)
                        this.organizationalwhiteInfo = data.data[0];
                    } else {
                        this.organizationalwhiteInfo = {}
                    }
                } else if (node.parentId == 9) {
                    if (node.detailId) {
                        const { data } = await getHEInfoList({
                            pageNo: 1,
                            pageSize: 1,
                            name: "",
                            phone: "",
                            heStainingSliceId: node.detailId,
                            patientCode: this.patientInfo.code,
                            centerId: this.centerId
                        });
                        console.log(data)
                        this.HEInfo = data.data[0];
                    } else {
                        this.HEInfo = {}
                    }
                } else if (node.parentId == 10) {
                    if (node.detailId) {
                        const { data } = await getIHCInfoList({
                            pageNo: 1,
                            pageSize: 1,
                            name: "",
                            phone: "",
                            ihcStainingSliceId: node.detailId,
                            patientCode: this.patientInfo.code,
                            centerId: this.centerId
                        });
                        console.log(data)
                        this.IHCInfo = data.data[0];
                    } else {
                        this.IHCInfo = {}
                    }
                } else if (node.parentId == 11) {
                    if (node.detailId) {
                        const { data } = await getBloodSamplePageInfoList({
                            pageNo: 1,
                            pageSize: 1,
                            name: "",
                            phone: "",
                            bloodSampleId: node.detailId,
                            patientCode: this.patientInfo.code,
                            centerId: this.centerId
                        });
                        console.log(data)
                        this.bloodInfo = data.data[0];
                    } else {
                        this.bloodInfo = {}
                    }
                } else if (node.parentId == 12) {
                    if (node.detailId) {
                        const { data } = await getOrganizeSamplePageInfoList({
                            pageNo: 1,
                            pageSize: 1,
                            name: "",
                            phone: "",
                            organizeSampleId: node.detailId,
                            patientCode: this.patientInfo.code,
                            centerId: this.centerId
                        });
                        console.log(data)
                        this.organizefrozenInfo = data.data[0];
                    } else {
                        this.organizefrozenInfo = {}
                    }
                } else if (node.parentId == 13) {
                    if (node.detailId) {
                        const { data } = await getIFInfoList({
                            pageNo: 1,
                            pageSize: 1,
                            name: "",
                            phone: "",
                            ifStainingSliceId: node.detailId,
                            patientCode: this.patientInfo.code,
                            centerId: this.centerId
                        });
                        console.log(data)
                        this.IFInfo = data.data[0];
                    } else {
                        this.IFInfo = {}
                    }
                }

            }
            if (node.zindex == 0) {
                this.checkNode()
            }
            if (node.zindex == 2) {
                if (!this.patientInfo.code) {
                    this.$message({
                        type: 'error',
                        message: '请先创建病人基本信息!'
                    });
                    return;
                }
                // console.log(node)
                if (node.id == 1) {
                    this.$set(node, 'children', []);
                    const { data } = await getHospitalSurgeryPageInfo({
                        pageNo: 1,
                        pageSize: 1000,
                        patientCode: this.patientInfo.code,
                        centerId: this.centerId
                    });
                    console.log(data)
                    if (data.data.size == 0) {
                        return
                    }
                    // 循环遍历血样信息列表，并将每一项添加到当前节点的children数组中
                    data.data.forEach(obj => {
                        console.log(obj);
                        const newLabResult = {
                            label: node.label + ' - ' + obj.createTime, // 使用血样信息的某些属性作为label
                            zindex: 3,
                            id: obj.id,
                            detailId: obj.hospitalSurgeryInfoId,
                            parentId: node.id // 这里可能需要根据您的数据结构进行调整
                        };
                        // 将新的实验室检验结果对象添加到当前节点的children数组中
                        if (!node.children) {
                            // 如果当前节点没有children数组，创建一个新数组
                            this.$set(node, 'children', []);
                        }
                        node.children.push(newLabResult);
                    });
                } else if (node.id == 2) {
                    this.$set(node, 'children', []);
                    const { data } = await getLabTestResultPageInfo({
                        pageNo: 1,
                        pageSize: 1000,
                        patientCode: this.patientInfo.code,
                        centerId: this.centerId
                    });
                    // 循环遍历血样信息列表，并将每一项添加到当前节点的children数组中
                    data.data.forEach(obj => {
                        console.log(obj);
                        const newLabResult = {
                            label: node.label + ' - ' + obj.createTime, // 使用血样信息的某些属性作为label
                            zindex: 3,
                            id: obj.id,
                            detailId: obj.labTestResultId,
                            parentId: node.id // 这里可能需要根据您的数据结构进行调整
                        };
                        // 将新的实验室检验结果对象添加到当前节点的children数组中
                        if (!node.children) {
                            // 如果当前节点没有children数组，创建一个新数组
                            this.$set(node, 'children', []);
                        }
                        node.children.push(newLabResult);
                    });
                } else if (node.id == 3) {
                    this.$set(node, 'children', []);
                    const { data } = await getImagingExamPageInfoList({
                        pageNo: 1,
                        pageSize: 1000,
                        patientCode: this.patientInfo.code,
                        centerId: this.centerId
                    });
                    // 循环遍历血样信息列表，并将每一项添加到当前节点的children数组中
                    data.data.forEach(obj => {
                        console.log(obj);
                        const newLabResult = {
                            label: node.label + ' - ' + obj.createTime, // 使用血样信息的某些属性作为label
                            zindex: 3,
                            id: obj.id,
                            detailId: obj.imagingExamResultId,
                            parentId: node.id // 这里可能需要根据您的数据结构进行调整
                        };
                        // 将新的实验室检验结果对象添加到当前节点的children数组中
                        if (!node.children) {
                            // 如果当前节点没有children数组，创建一个新数组
                            this.$set(node, 'children', []);
                        }
                        node.children.push(newLabResult);
                    });
                } else if (node.id == 4) {
                    this.$set(node, 'children', []);
                    const { data } = await getDiseaseActivityScorePageInfo({
                        pageNo: 1,
                        pageSize: 1000,
                        patientCode: this.patientInfo.code,
                        centerId: this.centerId
                    });
                    // 循环遍历血样信息列表，并将每一项添加到当前节点的children数组中
                    data.data.forEach(obj => {
                        console.log(obj);
                        const newLabResult = {
                            label: node.label + ' - ' + obj.createTime, // 使用血样信息的某些属性作为label
                            zindex: 3,
                            id: obj.id,
                            detailId: obj.diseaseActivityScoreId,
                            parentId: node.id // 这里可能需要根据您的数据结构进行调整
                        };
                        // 将新的实验室检验结果对象添加到当前节点的children数组中
                        if (!node.children) {
                            // 如果当前节点没有children数组，创建一个新数组
                            this.$set(node, 'children', []);
                        }
                        node.children.push(newLabResult);
                    });
                } else if (node.id == 5) {
                    this.$set(node, 'children', []);
                    const { data } = await getHealthQualityPageInfoList({
                        pageNo: 1,
                        pageSize: 1000,
                        patientCode: this.patientInfo.code,
                        centerId: this.centerId
                    });
                    // 循环遍历血样信息列表，并将每一项添加到当前节点的children数组中
                    data.data.forEach(obj => {
                        console.log(obj);
                        const newLabResult = {
                            label: node.label + ' - ' + obj.createTime, // 使用血样信息的某些属性作为label
                            zindex: 3,
                            id: obj.id,
                            detailId: obj.healthQualityEvaluationId,
                            parentId: node.id // 这里可能需要根据您的数据结构进行调整
                        };
                        // 将新的实验室检验结果对象添加到当前节点的children数组中
                        if (!node.children) {
                            console.log(111111)
                            // 如果当前节点没有children数组，创建一个新数组
                            this.$set(node, 'children', []);
                        }
                        node.children.push(newLabResult);
                    });

                    this.$forceUpdate()

                    console.log(node.children)
                } else if (node.id == 6) {
                    this.$set(node, 'children', []);
                    const { data } = await getFollowUpPageInfo({
                        pageNo: 1,
                        pageSize: 1000,
                        patientCode: this.patientInfo.code,
                        centerId: this.centerId
                    });
                    // 循环遍历血样信息列表，并将每一项添加到当前节点的children数组中
                    data.data.forEach(obj => {
                        console.log(obj);
                        const newLabResult = {
                            label: node.label + ' - ' + obj.createTime, // 使用血样信息的某些属性作为label
                            zindex: 3,
                            id: obj.id,
                            detailId: obj.followUpInfoId,
                            parentId: node.id // 这里可能需要根据您的数据结构进行调整
                        };
                        // 将新的实验室检验结果对象添加到当前节点的children数组中
                        if (!node.children) {
                            // 如果当前节点没有children数组，创建一个新数组
                            this.$set(node, 'children', []);
                        }
                        node.children.push(newLabResult);
                    });
                } else if (node.id == 7) {
                    this.$set(node, 'children', []);
                    const { data } = await getTissueParaffinPageInfo({
                        pageNo: 1,
                        pageSize: 1000,
                        patientCode: this.patientInfo.code,
                        centerId: this.centerId
                    });
                    // 循环遍历血样信息列表，并将每一项添加到当前节点的children数组中
                    data.data.forEach(obj => {
                        console.log(obj);
                        const newLabResult = {
                            label: node.label + ' - ' + obj.createTime, // 使用血样信息的某些属性作为label
                            zindex: 3,
                            id: obj.id,
                            detailId: obj.tissueParaffinBlockId,
                            parentId: node.id // 这里可能需要根据您的数据结构进行调整
                        };
                        // 将新的实验室检验结果对象添加到当前节点的children数组中
                        if (!node.children) {
                            // 如果当前节点没有children数组，创建一个新数组
                            this.$set(node, 'children', []);
                        }
                        node.children.push(newLabResult);
                    });
                } else if (node.id == 8) {
                    this.$set(node, 'children', []);
                    const { data } = await getTissueSlidePageInfoInfo({
                        pageNo: 1,
                        pageSize: 1000,
                        patientCode: this.patientInfo.code,
                        centerId: this.centerId
                    });
                    // 循环遍历血样信息列表，并将每一项添加到当前节点的children数组中
                    data.data.forEach(obj => {
                        console.log(obj);
                        const newLabResult = {
                            label: node.label + ' - ' + obj.createTime, // 使用血样信息的某些属性作为label
                            zindex: 3,
                            id: obj.id,
                            detailId: obj.tissueSlideId,
                            parentId: node.id // 这里可能需要根据您的数据结构进行调整
                        };
                        // 将新的实验室检验结果对象添加到当前节点的children数组中
                        if (!node.children) {
                            // 如果当前节点没有children数组，创建一个新数组
                            this.$set(node, 'children', []);
                        }
                        node.children.push(newLabResult);
                    });
                } else if (node.id == 9) {
                    this.$set(node, 'children', []);
                    const { data } = await getHEInfoList({
                        pageNo: 1,
                        pageSize: 1000,
                        patientCode: this.patientInfo.code,
                        centerId: this.centerId
                    });
                    // 循环遍历血样信息列表，并将每一项添加到当前节点的children数组中
                    data.data.forEach(obj => {
                        console.log(obj);
                        const newLabResult = {
                            label: node.label + ' - ' + obj.createTime, // 使用血样信息的某些属性作为label
                            zindex: 3,
                            id: obj.id,
                            detailId: obj.heStainingSliceId,
                            parentId: node.id // 这里可能需要根据您的数据结构进行调整
                        };
                        // 将新的实验室检验结果对象添加到当前节点的children数组中
                        if (!node.children) {
                            // 如果当前节点没有children数组，创建一个新数组
                            this.$set(node, 'children', []);
                        }
                        node.children.push(newLabResult);
                    });
                } else if (node.id == 10) {
                    this.$set(node, 'children', []);
                    const { data } = await getIHCInfoList({
                        pageNo: 1,
                        pageSize: 1000,
                        patientCode: this.patientInfo.code,
                        centerId: this.centerId
                    });
                    // 循环遍历血样信息列表，并将每一项添加到当前节点的children数组中
                    data.data.forEach(obj => {
                        console.log(obj);
                        const newLabResult = {
                            label: node.label + ' - ' + obj.createTime, // 使用血样信息的某些属性作为label
                            zindex: 3,
                            id: obj.id,
                            detailId: obj.ihcStainingSliceId,
                            parentId: node.id // 这里可能需要根据您的数据结构进行调整
                        };
                        // 将新的实验室检验结果对象添加到当前节点的children数组中
                        if (!node.children) {
                            // 如果当前节点没有children数组，创建一个新数组
                            this.$set(node, 'children', []);
                        }
                        node.children.push(newLabResult);
                    });
                } else if (node.id == 11) {
                    this.$set(node, 'children', []);
                    const { data } = await getBloodSamplePageInfoList({
                        pageNo: 1,
                        pageSize: 1000,
                        patientCode: this.patientInfo.code,
                        centerId: this.centerId
                    });
                    // 循环遍历血样信息列表，并将每一项添加到当前节点的children数组中
                    data.data.forEach(obj => {
                        console.log(obj);
                        const newLabResult = {
                            label: node.label + ' - ' + obj.createTime, // 使用血样信息的某些属性作为label
                            zindex: 3,
                            id: obj.id,
                            detailId: obj.bloodSampleId,
                            parentId: node.id // 这里可能需要根据您的数据结构进行调整
                        };
                        // 将新的实验室检验结果对象添加到当前节点的children数组中
                        if (!node.children) {
                            // 如果当前节点没有children数组，创建一个新数组
                            this.$set(node, 'children', []);
                        }
                        node.children.push(newLabResult);
                    });
                } else if (node.id == 12) {
                    this.$set(node, 'children', []);
                    const { data } = await getOrganizeSamplePageInfoList({
                        pageNo: 1,
                        pageSize: 1000,
                        patientCode: this.patientInfo.code,
                        centerId: this.centerId
                    });
                    // 循环遍历血样信息列表，并将每一项添加到当前节点的children数组中
                    data.data.forEach(obj => {
                        console.log(obj);
                        const newLabResult = {
                            label: node.label + ' - ' + obj.createTime, // 使用血样信息的某些属性作为label
                            zindex: 3,
                            id: obj.id,
                            detailId: obj.organizeSampleId,
                            parentId: node.id // 这里可能需要根据您的数据结构进行调整
                        };
                        // 将新的实验室检验结果对象添加到当前节点的children数组中
                        if (!node.children) {
                            // 如果当前节点没有children数组，创建一个新数组
                            this.$set(node, 'children', []);
                        }
                        node.children.push(newLabResult);
                    });
                } else if (node.id == 13) {
                    this.$set(node, 'children', []);
                    const { data } = await getIFInfoList({
                        pageNo: 1,
                        pageSize: 1000,
                        patientCode: this.patientInfo.code,
                        centerId: this.centerId
                    });
                    // 循环遍历血样信息列表，并将每一项添加到当前节点的children数组中
                    data.data.forEach(obj => {
                        console.log(obj);
                        const newLabResult = {
                            label: node.label + ' - ' + obj.createTime, // 使用血样信息的某些属性作为label
                            zindex: 3,
                            id: obj.id,
                            detailId: obj.ifStainingSliceId,
                            parentId: node.id // 这里可能需要根据您的数据结构进行调整
                        };
                        // 将新的实验室检验结果对象添加到当前节点的children数组中
                        if (!node.children) {
                            // 如果当前节点没有children数组，创建一个新数组
                            this.$set(node, 'children', []);
                        }
                        node.children.push(newLabResult);
                    });
                } else {
                    // this.$set(node, 'children', []);
                    // const { data } = await getBloodSamplePageInfoList({
                    //     pageNo: 1,
                    //     pageSize: 1000,
                    //     name: "",
                    //     phone: "",
                    //patientCode: this.patientInfo.code,
                    //     centerId: this.centerId
                    // });
                    // // 循环遍历血样信息列表，并将每一项添加到当前节点的children数组中
                    // data.data.forEach(obj => {
                    //     console.log(obj);
                    //     const newLabResult = {
                    //         label: node.label + ' - ' + obj.createTime, // 使用血样信息的某些属性作为label
                    //         zindex: 3,
                    //         id: obj.id,
                    //         parentId: node.id // 这里可能需要根据您的数据结构进行调整
                    //     };
                    //     // 将新的实验室检验结果对象添加到当前节点的children数组中
                    //     if (!node.children) {
                    //         // 如果当前节点没有children数组，创建一个新数组
                    //         this.$set(node, 'children', []);
                    //     }
                    //     node.children.push(newLabResult);
                    // });
                }
            }

        },
        // 选中最外层节点
        checkNode() {
            this.defaultSelectId = -1
            this.collapseShow = true
        },
        addTree(node) {
            console.log(this.patientInfo.code)
            console.log(node)

            this.handleNodeClick(node.data)
            if (!this.patientInfo.code) {
                this.$message({
                    type: 'error',
                    message: '请先创建病人基本信息!'
                });
                return;
            }
            let str = node.label + ' - ' + this.getDate();
            // node.data.children.push({
            //     label: 'test',
            //     zindex: 8
            // })
            // this.addTreeText = 
            console.log(node.data.id)
            if (!node.data.children) {
                this.$set(node.data, 'children', []);

            } else {
                console.log(node.data.children.length)
                if (node.data.children.length != 0) {
                    console.log(node.data.children[node.data.children.length - 1].detailId)
                    if (!node.data.children[node.data.children.length - 1].detailId) {
                        this.$message({
                            type: 'error',
                            message: '请先提交为保存的信息!'
                        });
                        return;
                    }
                }

            }

            node.data.children.push({
                label: str,
                zindex: 3,
                parentId: node.data.id
            })

            this.imageInfo = {}
            this.qualityInfo = {}
            this.laboratoryInfo = {}
            this.bloodInfo = {}
            this.InpatientInfo = {}
            this.followInfo = {}
            this.diseaseInfo = {}
            this.HEInfo = {}
            this.IHCInfo = {}
            this.IFInfo = {}
            this.organizationalwhiteInfo = {}
            this.organizefrozenInfo = {}
            this.organizingparaffinInfo = {}

            this.$nextTick(() => {
                this.$refs.elTree.setCurrentKey(str, true);
                this.collapseShow = false
                this.defaultSelectId = node.data.id
            })
        },
        getDate() {
            const date = new Date();
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const strDate = date.getDate().toString().padStart(2, '0');
            const starHours = date.getHours().toString().padStart(2, '0');
            const starMinutes = date.getMinutes().toString().padStart(2, '0');
            const starSeconds = date.getSeconds().toString().padStart(2, '0');
            let format = `${date.getFullYear()}-${month}-${strDate} 
                        ${starHours}:${starMinutes}:${starSeconds}`;
            return format
        },
        async delTree(node) {
            console.log(node)
            if (node.data.detailId) {
                console.log("2222")
                if (node.data.parentId == 1) {
                    console.log(node.data.detailId)
                    const { data } = await deleteHospitalSurgery({
                        hospitalSurgeryInfoId: node.data.detailId,
                        centerId: this.centerId
                    });
                    if (!data) {
                        return
                    }
                } else if (node.data.parentId == 2) {
                    console.log(node.data.detailId)
                    const { data } = await deleteLabTestResult({
                        labTestResultId: node.data.detailId,
                        centerId: this.centerId
                    });
                    if (!data) {
                        return
                    }
                } else if (node.data.parentId == 3) {
                    console.log(node.data.detailId)
                    const { data } = await deleteImagingExam({
                        imagingExamResultId: node.data.detailId,
                        centerId: this.centerId
                    });
                    if (!data) {
                        return
                    }
                } else if (node.data.parentId == 4) {
                    console.log(node.data.detailId)
                    const { data } = await deleteDiseaseActivityScore({
                        diseaseActivityScoreId: node.data.detailId,
                        centerId: this.centerId
                    });
                    if (!data) {
                        return
                    }
                } else if (node.data.parentId == 5) {
                    console.log(node.data.detailId)
                    const { data } = await deleteHealthQuality({
                        healthQualityEvaluationId: node.data.detailId,
                        centerId: this.centerId
                    });
                    if (!data) {
                        return
                    }
                } else if (node.data.parentId == 6) {
                    console.log(node.data.detailId)
                    const { data } = await deletefollowUp({
                        followUpInfoId: node.data.detailId,
                        centerId: this.centerId
                    });
                    if (!data) {
                        return
                    }
                } else if (node.data.parentId == 7) {
                    console.log(node.data.detailId)
                    const { data } = await deleteTissueParaffin({
                        tissueParaffinBlockId: node.data.detailId,
                        centerId: this.centerId
                    });
                    if (!data) {
                        return
                    }
                } else if (node.data.parentId == 8) {
                    console.log(node.data.detailId)
                    const { data } = await deleteTissueSlide({
                        tissueSlideId: node.data.detailId,
                        centerId: this.centerId
                    });
                    if (!data) {
                        return
                    }
                } else if (node.data.parentId == 9) {
                    console.log(node.data.detailId)
                    const { data } = await deleteHeSlice({
                        heStainingSliceId: node.data.detailId,
                        centerId: this.centerId
                    });
                    if (!data) {
                        return
                    }
                } else if (node.data.parentId == 10) {
                    console.log(node.data.detailId)
                    const { data } = await deleteIhcSlice({
                        ihcStainingSliceId: node.data.detailId,
                        centerId: this.centerId
                    });
                    if (!data) {
                        return
                    }
                } else if (node.data.parentId == 11) {
                    console.log(node.data.detailId)
                    const { data } = await deleteBloodSample({
                        bloodSampleId: node.data.detailId,
                        centerId: this.centerId
                    });
                    if (!data) {
                        return
                    }
                } else if (node.data.parentId == 12) {
                    console.log(node.data.detailId)
                    const { data } = await deleteOrganizeSample({
                        organizeSampleId: node.data.detailId,
                        centerId: this.centerId
                    });
                    if (!data) {
                        return
                    }
                } else if (node.data.parentId == 13) {
                    console.log(node.data.detailId)
                    const { data } = await deleteIfSlice({
                        ifStainingSliceId: node.data.detailId,
                        centerId: this.centerId
                    });
                    if (!data) {
                        return
                    }
                }
            }
            // 递归找到这个元素，在数组中移除
            const groupEach = (arr, key) => {
                let newData = []
                arr?.map((es, index) => {
                    if (es.label != key) {
                        newData.push(es)
                    }
                    es.children = groupEach(es.children, key)
                })
                return newData
            }
            this.tree = groupEach(this.tree, node.data.label)

            this.checkNode()
            this.$forceUpdate()
        },

        treeInputChange(node) {
            node.data.label = this.addTreeText;
            node.data.zindex = 3
        },
        widthChange(width) {
            this.dragDivWidth = width;
        },
        async getPermissionsInfo() {
            const { data } = await queryUserDataEntryPermission({
                templateId: this.templateId, groupId: this.groupId, centerId: this.centerId,
                patientCode: this.$route.query.code
            })
            this.tree = data
        },
        async getPaintDetalInfo() {
            const { data } = await getPatientPageInfoList({
                pageNo: 1,
                pageSize: 1,
                name: "",
                phone: "",
                patientCode: this.patientInfo.code,
                centerId: this.centerId
            });
            console.log(data)
            this.detailInfo = data.data[0];
            this.detailInfo.birth_place = [this.detailInfo.country, this.detailInfo.city, this.detailInfo.district]
        }

    },
    computed: {
        ...mapGetters([
            'templateId',
            'groupId',
            'centerId'
        ])
    }
};
</script>

<style lang="less" scoped>
.dataentry {
    padding: 10px;

    .rows {
        height: calc(100vh - 70px);
        margin: 0 !important;

        >div {
            height: 100%;
        }
    }

    .left-tree {
        box-shadow: 0 0 15px 5px rgba(217, 217, 217, .5);
        height: 100%;
        overflow: auto;
        padding: 5px;

        >div {
            color: #333;
            background-color: transparent !important;
        }
    }

    .el-card__header {
        height: 30px;
    }
}
</style>

<style lang="less">
.tree-node-3 {
    .custom-tree-node-text {
        background-color: rgb(205, 197, 197) !important;
        padding: 0 5px;
    }
}

.tree-node-1 {
    .custom-tree-node-text {
        font-weight: 600;
    }
}

.tree-node-2 {
    .custom-tree-node-text {
        font-weight: 500;
        font-style: oblique
    }
}

.custom-tree-node {
    /* float: right; */
    width: 100%;
    // line-height: 27px;
    font-size: 12px;
    overflow: hidden;
    // margin-top: 5px;
    // height: 18px;
    // padding: 2px 0;

    .tree-input-change,
    .tree-input-change input {
        height: 25px;
        line-height: 25px;
        width: 80%;
        padding: 0 2px;
    }

    &-text {
        max-width: 80%;
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis; //溢出用省略号显示
        white-space: nowrap; //溢出不换行
        margin: 0;
        line-height: 18px;
    }

    .tree-icon {
        font-size: 15px;
        margin: 0 3px;
    }

    .hide {
        display: none;
    }

    .badge {
        background: #409eff;
        color: #fff;
        border-radius: 50%;
        width: 15px;
        text-align: center;
        line-height: 15px;
        height: 15px;
        display: inline-block;
        vertical-align: text-top;
        margin-top: -2px;
    }

}

.box-card {
    .el-card__header {
        height: 40px;
        line-height: 40px;
        padding: 0px 10px;
    }

    .el-form-item__label {
        font-weight: 500 !important;
    }

    .el-form-item {
        margin-bottom: 10px;
    }
}

.patientInfo {
    min-height: 20%;
}

.imageInfo {
    // min-height: calc(80% - 10px);
    margin-top: 10px;

    .rowSelect {
        .el-form-item__label {
            height: 20px;
            line-height: 20px;
        }

        .left .el-form-item {
            text-align: right;
        }
    }

}

.rightBody {
    display: inline-block;
    float: right;
    height: calc(100vh - 70px);
    overflow: auto;
}
</style>