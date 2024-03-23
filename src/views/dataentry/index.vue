<template>
    <div class="dataentry">
        <el-row class="rows" :gutter="20">
            <el-col :lg="7" :xl="5">
                <div class="left-tree">
                    <el-tree :data="tree" node-key="label" default-expand-all :expand-on-click-node="false"
                        @node-click="handleNodeClick">
                        <div slot-scope="{ node, data }" :title="node.label"
                            :class="'custom-tree-node tree-node-' + node.data.zindex">
                            <el-input class="tree-input-change" size="mini" v-if="node.data.zindex == 8"
                                @change="treeInputChange(node)" v-model="addTreeText"></el-input>
                            <!-- @blur="treeInputChange(node)" -->
                            <p v-else class="custom-tree-node-text">{{ node.label }}</p>
                            <span style="float:right;margin-right:30px">
                                <i @click="addTree(node)"
                                    :class="node.data.zindex == 2 ? 'tree-icon el-icon-circle-plus-outline' : ''"></i>
                                <span v-if="node.data.zindex == 2" class="badge">{{ node.data.children.length }}</span>
                                <i @click="delTree(node)"
                                    :class="node.data.zindex == 3 ? 'tree-icon el-icon-delete' : ''"></i>
                            </span>
                        </div>
                    </el-tree>
                </div>
            </el-col>
            <el-col :lg="17" :xl="19" style="overflow: auto;">
                <el-card class="box-card patientInfo">
                    <div slot="header" class="clearfix">
                        <span>病人一般情况</span>
                        <el-button v-if="editVis == true" style="float: right;margin-top: 5px;" size="mini"
                            type="success" @click="editVis = false">编辑</el-button>
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
                </el-card>

                <detailInfo v-if="defaultSelectId == -1" class="box-card imageInfo" :detailInfo="detailInfo" />

                <InpatientInfo v-if="defaultSelectId == 1" class="box-card imageInfo"
                    :InpatientInfo="InpatientInfo" />
                <laboratoryInfo v-if="defaultSelectId == 2" class="box-card imageInfo"
                    :laboratoryInfo="laboratoryInfo" />

                <imageInfo v-if="defaultSelectId == 3" class="box-card imageInfo" :patientInfo="patientInfo"
                    :imageInfo="imageInfo" />
                <diseaseInfo v-if="defaultSelectId == 4" class="box-card imageInfo" :diseaseInfo="diseaseInfo" />
                <qualityInfo v-if="defaultSelectId == 5" class="box-card imageInfo" :qualityInfo="qualityInfo" />


                <followInfo v-if="defaultSelectId == 6" class="box-card imageInfo" :followInfo="followInfo" />

                <organizingparaffinInfo v-if="defaultSelectId == 7" class="box-card imageInfo"
                    :organizingparaffinInfo="organizingparaffinInfo" />

                <organizationalwhiteInfo v-if="defaultSelectId == 8" class="box-card imageInfo"
                    :organizationalwhiteInfo="organizationalwhiteInfo" />


                <HEInfo v-if="defaultSelectId == 9" class="box-card imageInfo" :HEInfo="HEInfo" />
                <IHCInfo v-if="defaultSelectId == 10" class="box-card imageInfo" :IHCInfo="IHCInfo" />
                <bloodInfo v-if="defaultSelectId == 11" class="box-card imageInfo" :bloodInfo="bloodInfo" />

                <organizefrozenInfo v-if="defaultSelectId == 12" class="box-card imageInfo"
                    :organizefrozenInfo="organizefrozenInfo" />

                <IFInfo v-if="defaultSelectId == 13" class="box-card imageInfo" :IFInfo="IFInfo" />



            </el-col>
        </el-row>
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



export default {
    mounted() {
        let userId = this.$route.query.name;
        console.log('用户ID----:', userId); // 输出：用户ID: 123
    },
    data() {
        return {
            tree: [{
                label: '病人一般情况 : 张三',
                zindex: 0,
                children: [{
                    label: '病例信息库',
                    zindex: 1,
                    children: [{
                        label: '住院手术信息',
                        zindex: 2,
                        id: 1,
                        children: [{
                            label: '手术信息-2024-01-01',
                            zindex: 3,
                            parentId: 1
                        }],
                    }, {
                        label: '实验室检验结果',
                        zindex: 2,
                        id: 2,
                        children: [{
                            label: '手术信息-2024-01-01',
                            zindex: 3,
                            parentId: 2

                        }],
                    },
                    {
                        label: '影像学检查结果',
                        zindex: 2,
                        id: 3,
                        children: [{
                            label: '手术信息-2024-01-01',
                            zindex: 3,
                            parentId: 3

                        }],
                    },
                    {
                        label: '疾病活动性评分',
                        zindex: 2,
                        id: 4,
                        children: [{
                            label: '手术信息-2024-01-01',
                            zindex: 3,
                            parentId: 4

                        }],
                    },
                    {
                        label: '质量健康评价',
                        zindex: 2,
                        id: 5,
                        children: [{
                            label: '手术信息-2024-01-01',
                            zindex: 3,
                            parentId: 5
                        }],
                    },
                    {
                        label: '随访信息',
                        zindex: 2,
                        id: 6,
                        children: [{
                            label: '手术信息-2024-01-01',
                            zindex: 3,
                            parentId: 6
                        }],
                    }]
                },
                {
                    label: '生物样本库',
                    zindex: 1,
                    children: [{
                        label: '组织石蜡块',
                        zindex: 2,
                        id: 7,
                        children: [{
                            label: '手术信息-2024-01-01',
                            zindex: 3,
                            parentId: 7
                        }],
                    }, {
                        label: '组织白片',
                        zindex: 2,
                        id: 8,
                        children: [{
                            label: '手术信息-2024-01-01',
                            zindex: 3,
                            parentId: 8
                        }],
                    },
                    {
                        label: 'HE染色切片',
                        zindex: 2,
                        id: 9,
                        children: [{
                            label: '手术信息-2024-01-01',
                            zindex: 3,
                            parentId: 9
                        }],
                    },
                    {
                        label: 'IHC染色切片',
                        zindex: 2,
                        id: 10,
                        children: [{
                            label: '手术信息-2024-01-01',
                            zindex: 3,
                            parentId: 10
                        }],
                    },
                    {
                        label: 'IF染色切片',
                        zindex: 2,
                        id: 13,
                        children: [{
                            label: '手术信息-2024-01-01',
                            zindex: 3,
                            parentId: 13
                        }],
                    },
                    {
                        label: '血液冻存样本',
                        zindex: 2,
                        id: 11,
                        children: [{
                            label: '手术信息-2024-01-01',
                            zindex: 3,
                            parentId: 11
                        }],
                    },
                    {
                        label: '组织冻存样本',
                        zindex: 2,
                        id: 12,
                        children: [{
                            label: '手术信息-2024-01-01',
                            zindex: 3,
                            parentId: 12
                        }],
                    }]
                }]
            }],
            addTreeText: '',
            patientInfo: {
                name: '',
                operativeTime: '',
                vchat: false,
                hospital: '',
                code: ''
            },
            editVis: true,
            options: [],
            imageInfo: {
                name: '',
                operativeTime: '',
                vchat: false,
                hospital: '',
                code: ''
            },
            qualityInfo: {
                name: '',
                operativeTime: '',
                vchat: false,
                hospital: '',
                code: ''
            },
            detailInfo: {
                name: '',
                operativeTime: '',
                vchat: false,
                hospital: '',
                code: ''
            },
            laboratoryInfo: {
                name: '',
                operativeTime: '',
                vchat: false,
                hospital: '',
                code: ''
            },
            bloodInfo: {
                name: '',
                operativeTime: '',
                vchat: false,
                hospital: '',
                code: ''
            },
            InpatientInfo: {
                name: '',
                operativeTime: '',
                vchat: false,
                hospital: '',
                code: ''
            },
            followInfo: {
                name: '',
                operativeTime: '',
                vchat: false,
                hospital: '',
                code: ''
            },
            diseaseInfo: {
                name: '',
                operativeTime: '',
                vchat: false,
                hospital: '',
                code: ''
            },
            HEInfo: {
                name: '',
                operativeTime: '',
                vchat: false,
                hospital: '',
                code: ''
            },
            IHCInfo: {
                name: '',
                operativeTime: '',
                vchat: false,
                hospital: '',
                code: ''
            },
            IFInfo: {
                name: '',
                operativeTime: '',
                vchat: false,
                hospital: '',
                code: ''
            },
            organizationalwhiteInfo: {
                name: '',
                operativeTime: '',
                vchat: false,
                hospital: '',
                code: ''
            },
            organizefrozenInfo: {
                name: '',
                operativeTime: '',
                vchat: false,
                hospital: '',
                code: ''
            },
            organizingparaffinInfo: {
                name: '',
                operativeTime: '',
                vchat: false,
                hospital: '',
                code: ''
            },
            defaultSelectId: -1,
        };
    },
    components: {
        imageInfo, detailInfo, diseaseInfo, HEInfo, IHCInfo, IFInfo, organizefrozenInfo,
        laboratoryInfo, InpatientInfo, bloodInfo, followInfo, organizationalwhiteInfo,
        organizingparaffinInfo, qualityInfo
    },
    methods: {
        handleNodeClick(data) {
            //这里可以使用ajax请求后台，获取组织树的数据，转成json数组格式返回,result为返回的值
            //this.data=result.data;
            console.log(data);

            if (data.zindex == 3) {

                this.defaultSelectId = data.parentId
            }
            if (data.zindex == 0) {
                this.defaultSelectId = -1
            }
        },

        addTree(node) {
            node.data.children.push({
                label: 'test',
                zindex: 8
            })
            this.addTreeText = ""
        },
        delTree(node) {
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
            this.$forceUpdate()
        },

        treeInputChange(node) {
            node.data.label = this.addTreeText;
            node.data.zindex = 3
        }

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
        // background-color: rgba(217, 217, 217, 1);
        // border: 1px solid rgba(217, 217, 217, 1);
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
    min-height: calc(80% - 10px);
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
</style>