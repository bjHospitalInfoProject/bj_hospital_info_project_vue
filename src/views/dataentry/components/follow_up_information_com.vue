<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>随访信息</span>
            <el-button v-if="editVis == true" style="float: right;margin-top: 5px;" size="mini" type="success"
                @click="editVis = false">编辑</el-button>
            <el-button v-else style="float: right;margin-top: 5px;" size="mini" type="success"
                @click="editVis = true">保存</el-button>

        </div>
        <div>
            <el-form label-width="200px" :model="followInfo">
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="随访信息ID:">
                            <el-input :disabled="editVis" style="width:150px" size="mini"
                                v-model="followInfo.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="填报人:">
                            <el-input :disabled="editVis" style="width:150px" size="mini"
                                v-model="followInfo.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="填报时间:">
                            <el-date-picker v-model="followInfo.name" style="width:150px" size="mini" type="date"
                                placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="随访人:">
                            <el-select :disabled="editVis" size="mini" style="width:200px" v-model="followInfo.hospital"
                                 filterable allow-create placeholder="请选择">
                                <el-option v-for="item in suifangrenoptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="随访方式:">
                            <el-select :disabled="editVis" size="mini" style="width:200px" v-model="followInfo.hospital"
                                 filterable allow-create placeholder="请选择">
                                <el-option v-for="item in suifangfangshioptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="随访日期:">
                            <el-date-picker v-model="followInfo.name" style="width:150px" size="mini" type="date"
                                placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术后时长(月):">
                            <el-input :disabled="editVis" style="width:150px" size="mini"
                                v-model="followInfo.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="当前表现：">
                            <el-select :disabled="editVis" size="mini" style="width:200px" v-model="followInfo.hospital"
                                multiple placeholder="请选择">
                                <el-option v-for="item in firstoptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="年龄(岁):">
                            <el-input :disabled="editVis" style="width:150px" size="mini"
                                v-model="followInfo.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="身高(cm):">
                            <el-input :disabled="editVis" style="width:150px" size="mini"
                                v-model="followInfo.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="体重(kg):">
                            <el-input :disabled="editVis" style="width:150px" size="mini"
                                v-model="followInfo.name"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="病情变化补充:">
                            <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item class="custom" label="脑相关不良事件情况（脑梗、脑出血等）:">
                            <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item class="custom" label="心血管不良事件情况（心梗、心衰等）:">
                            <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="结核病情:">
                            <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="激素 (药名-剂量-频次-给药方式默认p.o.):">
                            <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="免疫抑制剂 (药名-剂量-频次-给药方式默认p.o.):">
                            <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="生物制剂 (药名-剂量-频次-给药方式默认i.v.):">
                            <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="降压药 (药名-剂量-频次-给药方式默认p.o.):">
                            <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="降脂药 (药名-剂量-频次-给药方式默认p.o.):">
                            <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="抗栓药 (药名-剂量-频次-给药方式默认p.o.):">
                            <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="用药补充:">
                            <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="手术干预:">
                            <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="随访实验室检验结果ID:">
                            <el-input :disabled="editVis" style="width:150px" size="mini"
                                v-model="followInfo.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="红细胞沉降率(ESR,mm/h):">
                            <el-input :disabled="editVis" style="width:150px" size="mini"
                                v-model="followInfo.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="C-反应蛋白(CRP,mg/L):">
                            <el-input :disabled="editVis" style="width:150px" size="mini"
                                v-model="followInfo.name"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="IL-6 (pg/mL):">
                            <el-input :disabled="editVis" style="width:150px" size="mini"
                                v-model="followInfo.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item >
                            <template #label>
                                <span class="labelTitle">
                                    肿瘤坏死因子-α 
                                    <br>
                                    (TNF-α,pg/mL):
                                </span>
                            </template>
                            <el-input :disabled="editVis" style="width:150px" size="mini"
                                v-model="followInfo.name"></el-input>
                        </el-form-item>
                    </el-col>
                    
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="影像检查时间:">
                            <el-date-picker v-model="followInfo.name" style="width:200px" size="mini" type="date"
                                placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="影像手段:">
                            <el-select :disabled="editVis" size="mini" style="width:200px" v-model="followInfo.hospital"
                                multiple placeholder="请选择">
                                <el-option v-for="item in yingxiangtoptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="靶血管情况:">
                            <el-select :disabled="editVis" size="mini" style="width:200px" v-model="followInfo.hospital"
                                multiple placeholder="请选择">
                                <el-option v-for="item in baxuetoptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="具体影像结果(靶血管/新发/加重):">
                            <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="随访PGA活动性评价:">
                            <el-select :disabled="editVis" size="mini" style="width:200px" v-model="followInfo.hospital"
                                placeholder="请选择">
                                <el-option v-for="item in GPAOptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="本次随访疾病活动性评分ID:">
                            <el-input :disabled="editVis" style="width:150px" size="mini"
                                v-model="followInfo.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="本次随访生活质量健康评价ID:">
                            <el-input :disabled="editVis" style="width:150px" size="mini"
                                v-model="followInfo.name"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="其他评价补充:">
                            <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="随访补充:">
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
            suifangrenoptions: [
                {
                    label: "李拥军",
                    value: 1
                },
                {
                    label: "李晓璐",
                    value: 2
                }, {
                    label: "高尚",
                    value: 3
                },
                {
                    label: "其他",
                    value: 4
                }
            ],
            suifangfangshioptions: [
                {
                    label: "NA",
                    value: 0
                },
                {
                    label: "微信",
                    value: 1
                }, {
                    label: "电话",
                    value: 2
                },
                {
                    label: "门诊",
                    value: 3
                }, {
                    label: "再入院",
                    value: 4
                },
                {
                    label: "其他",
                    vvalue: 5
                }
            ],

            firstoptions: [
                {
                    label: "NA",
                    value: 0
                },
                {
                    label: "发热",
                    value: 1
                },
                {
                    label: "全身乏力",
                    value: 2
                },
                {
                    label: "肌痛",
                    value: 3
                },
                {
                    label: "抽搐",
                    value: 4
                },
                {
                    label: "血压升高",
                    value: 5
                },
                {
                    label: "脉弱",
                    value: 6
                },
                {
                    label: "无脉",
                    value: 7
                },
                {
                    label: "头晕",
                    value: 8
                }, {
                    label: "晕厥",
                    value: 9

                }, {
                    label: "头痛",
                    value: 10

                }, {
                    label: "视物模糊",
                    value: 11

                }, {
                    label: "视力下降",
                    value: 12

                }, {
                    label: "黒矇",
                    value: 13

                }, {
                    label: "颈痛",
                    value: 14

                }, {
                    label: "TIA",
                    value: 15

                }, {
                    label: "癫痫",
                    value: 16

                }, {
                    label: "脑卒中",
                    value: 17

                }, {
                    label: "胸闷",
                    value: 18

                }, {
                    label: "心绞痛",
                    value: 19

                }, {
                    label: "心肌梗死",
                    value: 20

                }, {
                    label: "心悸",
                    value: 21

                }, {
                    label: "喘息",
                    value: 22

                }, {
                    label: "咳嗽",
                    value: 23
                }, {
                    label: "咯血",
                    value: 24
                }, {
                    label: "端坐呼吸",
                    value: 25
                }, {
                    label: "心脏杂音",
                    value: 26
                }, {
                    label: "腹痛",
                    value: 27
                }, {
                    label: "上肢跛行",
                    value: 28
                }, {
                    label: "下肢跛行",
                    value: 29
                }, {
                    label: "肾功能减退",
                    value: 30
                }, {
                    label: "面部疼痛",
                    value: 31
                }, {
                    label: "面部水肿",
                    value: 32
                }, {
                    label: "下肢水肿",
                    value: 33
                },
                {
                    label: "下肢发冷无汗",
                    value: 34
                }
            ],
            yingxiangtoptions: [
                {
                    label: "无",
                    value: 0
                },
                {
                    label: "造影",
                    value: 1
                },
                {
                    label: "头颈CTA",
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
                    label: "腹部CTA;",
                    value: 5
                },
                {
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
                }, {
                    label: "冠脉CTA",
                    value: 9

                }, {
                    label: "TCD",
                    value: 10

                }, {
                    label: "CTPA",
                    value: 11

                }, {
                    label: "颈动脉DUS",
                    value: 12

                }, {
                    label: "上肢DUS",
                    value: 13

                }, {
                    label: "主动脉DUS",
                    value: 14

                }, {
                    label: "腹部大血管DUS",
                    value: 15

                }, {
                    label: "肾动脉DUS",
                    value: 16

                }, {
                    label: "下肢DUS",
                    value: 17

                }, {
                    label: "头部MRA",
                    value: 18

                }, {
                    label: "颈部MRA",
                    value: 19

                }, {
                    label: "胸部MRA",
                    value: 20

                }, {
                    label: "腹部MRA",
                    value: 21

                }, {
                    label: "下肢MRA",
                    value: 22

                }, {
                    label: "PET-CT",
                    value: 23
                }
            ],
            baxuetoptions: [
                {
                    label: "无",
                    value: 0
                },
                {
                    label: "通畅",
                    value: 1
                }, {
                    label: "再狭窄",
                    value: 2
                },
                {
                    label: "闭塞",
                    value: 3
                }
                , {
                    label: "血栓形成",
                    value: 4
                },
                {
                    label: "扩张",
                    value: 5
                }, {
                    label: "动脉瘤",
                    value: 6
                },
                {
                    label: "夹层",
                    value: 7
                },
                {
                    label: "未知",
                    value: 8
                }],

            GPAOptions: [
                {
                    label: "NA",
                    value: 0
                },
                {
                    label: "非活动期",
                    value: 1
                }, {
                    label: "活动期",
                    value: 2
                }
            ],
            editVis: true
        }
    },
    props: {
        followInfo: Object
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
.labelTitle{
    line-height: 20px;
    display: inline-block
}
</style>