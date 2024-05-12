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
                            <span v-if="node.data.zindex == 2" class="badge">{{ node.data.children.length }}</span>
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


export default {
    mounted() {
        let userId = this.$route.query.code;
        console.log(this.$refs.dragDiv?.defaultWidth)
        console.log('用户ID----:', userId);
        this.currentKey = this.tree[0].label
    },
    created() {
        let userId = this.$route.query.code;
        console.log(this.$refs.dragDiv?.defaultWidth)
        this.code = userId;
        console.log('用户ID----:', userId);
    },
    data() {
        return {
            tree: [{
                label: '病人一般情况',
                zindex: 0,
                id: 0,
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
                            label: '实验室检验结果-2024-01-01',
                            zindex: 3,
                            parentId: 2

                        }],
                    },
                    {
                        label: '影像学检查结果',
                        zindex: 2,
                        id: 3,
                        children: [{
                            label: '影像学检查结果-2024-01-01',
                            zindex: 3,
                            parentId: 3

                        }],
                    },
                    {
                        label: '疾病活动性评分',
                        zindex: 2,
                        id: 4,
                        children: [{
                            label: '疾病活动性评分-2024-01-01',
                            zindex: 3,
                            parentId: 4

                        }],
                    },
                    {
                        label: '质量健康评价',
                        zindex: 2,
                        id: 5,
                        children: [{
                            label: '质量健康评价-2024-01-01',
                            zindex: 3,
                            parentId: 5
                        }],
                    },
                    {
                        label: '随访信息',
                        zindex: 2,
                        id: 6,
                        children: [{
                            label: '随访信息-2024-01-01',
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
                            label: '组织石蜡块-2024-01-01',
                            zindex: 3,
                            parentId: 7
                        }],
                    }, {
                        label: '组织白片',
                        zindex: 2,
                        id: 8,
                        children: [{
                            label: '组织白片-2024-01-01',
                            zindex: 3,
                            parentId: 8
                        }],
                    },
                    {
                        label: 'HE染色切片',
                        zindex: 2,
                        id: 9,
                        children: [{
                            label: 'HE染色切片-2024-01-01',
                            zindex: 3,
                            parentId: 9
                        }],
                    },
                    {
                        label: 'IHC染色切片',
                        zindex: 2,
                        id: 10,
                        children: [{
                            label: 'IHC染色切片-2024-01-01',
                            zindex: 3,
                            parentId: 10
                        }],
                    },
                    {
                        label: 'IF染色切片',
                        zindex: 2,
                        id: 13,
                        children: [{
                            label: 'IF染色切片-2024-01-01',
                            zindex: 3,
                            parentId: 13
                        }],
                    },
                    {
                        label: '血液冻存样本',
                        zindex: 2,
                        id: 11,
                        children: [{
                            label: '血液冻存样本-2024-01-01',
                            zindex: 3,
                            parentId: 11
                        }],
                    },
                    {
                        label: '组织冻存样本',
                        zindex: 2,
                        id: 12,
                        children: [{
                            label: '组织冻存样本-2024-01-01',
                            zindex: 3,
                            parentId: 12
                        }],
                    }]
                }]
            }],
            addTreeText: '',
            patientInfo: {
                code: this.$route.query.code
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
        handleNodeClick(data) {
            //这里可以使用ajax请求后台，获取组织树的数据，转成json数组格式返回,result为返回的值
            //this.data=result.data;
            if (data.zindex == 3) {
                this.defaultSelectId = data.parentId;
                this.collapseShow = false
            }
            if (data.zindex == 0) {
                this.checkNode()
            }
        },
        // 选中最外层节点
        checkNode() {
            this.defaultSelectId = -1
            this.collapseShow = true
        },
        addTree(node) {
            let str = node.label + ' - ' + this.getDate();
            // node.data.children.push({
            //     label: 'test',
            //     zindex: 8
            // })
            // this.addTreeText = 

            node.data.children.push({
                label: str,
                zindex: 3,
                parentId: node.data.id
            })
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