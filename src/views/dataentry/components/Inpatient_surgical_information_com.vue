<template>
    <el-card class="box-card InpatientInfo">
        <div slot="header" class="clearfix">
            <span>住院手术信息</span>
            <el-button v-if="editVis == true" style="float: right;margin-top: 5px;" size="mini" type="success"
                @click="editVis = false">编辑</el-button>
            <el-button v-else style="float: right;margin-top: 5px;" size="mini" type="success"
                @click="editVis = true">保存</el-button>

        </div>
        <div>
            <el-form label-width="200px" :model="InpatientInfo">

                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="就诊医院:">
                            <el-select :disabled="editVis" style="width:200px" size="mini"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>

                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="住院号：">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="InpatientInfo.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="本院住院次数:">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="InpatientInfo.name"></el-input>
                        </el-form-item>
                    </el-col>

                </el-row>

                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="入院日期：">
                            <el-date-picker v-model="InpatientInfo.name" style="width:200px" size="mini" type="date"
                                placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="住院时长(天):">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="InpatientInfo.name"></el-input>
                        </el-form-item>

                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="年龄">
                            <el-input disabled="false" size="mini" style="width:200px"
                                v-model="InpatientInfo.name"></el-input>
                        </el-form-item>
                    </el-col>

                </el-row>
                <el-row>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="体重(kg)">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="InpatientInfo.name"></el-input>

                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="身高(cm)">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="InpatientInfo.name"></el-input>

                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="BMI">
                            <el-input disabled="false" size="mini" style="width:200px"
                                v-model="InpatientInfo.name"></el-input>
                        </el-form-item>

                    </el-col>

                </el-row>
                <el-row>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="学历">
                            <el-select :disabled="editVis" style="width:200px" size="mini"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="职业">
                            <el-select :disabled="editVis" style="width:200px" size="mini"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="吸烟史：">
                            <el-input :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.name"></el-input>
                        </el-form-item>

                    </el-col>

                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="婚姻状况：">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="InpatientInfo.name"></el-input>

                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="生育状况：">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="InpatientInfo.name"></el-input>

                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="月经情况：">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="InpatientInfo.name"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="24">
                        <el-form-item label="个人信息补充:">
                            <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="病程(年)">
                            <el-select :disabled="editVis" style="width:200px" size="mini"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="并发结核病史">
                            <el-select :disabled="editVis" style="width:200px" size="mini"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col> 
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="并发其他风湿免疫系统疾病史">
                            <el-select :disabled="editVis" style="width:200px" size="mini"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="大动脉炎手术史:">
                            <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="24">
                        <el-form-item label="结核病史详述:">
                            <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="其他风湿免疫系统疾病史详述:">
                            <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="并发糖尿病:">
                            <el-select :disabled="editVis" style="width:200px" size="mini"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="并发高血压:">
                            <el-select :disabled="editVis" style="width:200px" size="mini"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="并发心脏疾病:">
                            <el-select :disabled="editVis" style="width:200px" size="mini"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="8">
                        <el-form-item label="并发心力衰竭NYHA分级">
                            <el-select :disabled="editVis" style="width:200px" size="mini"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="并发脑缺血">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="并发左肾缺血">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="并发右肾缺血">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="并发慢性肾病分期">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="并发肺动脉高压">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="并发视网膜病变Uyama_Asayama 分类">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="并发贫血">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="并发高同型半胱氨酸血症">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="并发高脂血症">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="本次术前表现">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="2011年中国指南临床分型">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="其他病史补充:">
                            <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="其他手术史:">
                            <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="术前病情详述(新发/复发/加重症状和体征-持续时间):">
                            <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="术前激素 (药名-剂量-频次-给药方式默认p.o.):">
                            <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="术前免疫抑制剂 (药名-剂量-频次-给药方式默认p.o.):">
                            <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="术前生物制剂 (药名-剂量-频次-给药方式默认i.v.):">
                            <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="术前降压药 (药名-剂量-频次-给药方式默认p.o.)">
                            <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="术前降脂药 (药名-剂量-频次-给药方式默认p.o.)">
                            <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="术前抗栓药 (药名-剂量-频次-给药方式默认p.o.)">
                            <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="术前用药补充 (药名-剂量-频次-给药方式默认p.o.)">
                            <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="入院血压-收缩压(mmHg)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="入院血压-舒张压(mmHg)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="入院心率(次/min)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="入院呼吸频率(次/min)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术前左室射血分数LVEF(%)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术前心电图结果">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                </el-row>

                <el-row>
                    <el-col :span="24">
                        <el-form-item label="术前四肢血压-收缩压(mmHg)(左上-右上-左下-右下)">
                            <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="术前四肢血压-舒张压(mmHg)(左上-右上-左下-右下)">
                            <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="术前心脏超声结果">
                            <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="术前胸片/胸部CT结果(默认胸片, CT要标明)">
                            <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="24">
                        <el-form-item label="术前肺功能">
                            <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>

                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术前右侧ABI">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术前左侧ABI">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术前总eGFR">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>

                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术前右eGFR">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术前左eGFR">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>


                <el-row>
                    <el-col :span="24">
                        <el-form-item label="术前其他评估补充">
                            <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术前实验室检验结果ID">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术前影像学检查结果ID">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术前Numano影像分型">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>

                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术前疾病活动性评分ID">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术前NIH活动性评分得分">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术前改良NIH活动性评分得分">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>

                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术前ITAS 2010活动性评分得分">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术前ITAS-A活动性评分得分">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术前PGA活动性评价">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>

                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="手术日期">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="麻醉方式">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术前ASA分级">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>

                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="麻醉效果">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="术者(主刀-一助-二助)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="手术形式">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="手术名称">
                            <el-input :disabled="editVis" type="textarea" :rows="1" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="24">
                        <el-form-item label="重建血管">
                            <el-select :disabled="editVis" size="mini" v-model="InpatientInfo.hospital"
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
                        <el-form-item label="球囊扩张说明(扩张部位-球囊品牌/型号-扩张次数-残余狭窄率)">
                            <el-input :disabled="editVis" type="textarea" :rows="5" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="支架植入说明(植入部位-支架品牌/型号-支架个数-残余狭窄率)">
                            <el-input :disabled="editVis" type="textarea" :rows="5" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="血管搭桥说明(桥血管起-止部位-桥血管类型-桥血管品牌/型号(或来源)-桥血管个数-动脉阻断时间)">
                            <el-input :disabled="editVis" type="textarea" :rows="5" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="PUMCH外科分型">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="手术测压情况">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="手术内容补充">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="造影剂用量">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="手术时长(min)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术中出血量(ml)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="自体血回输量(ml)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="红细胞输注量(ml)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="血浆输注量(ml)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术中并发症">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后第1天VAS评分">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后去向">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后住院天数">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后ICU住院天数">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术晨血压-收缩压(mmHg)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术晨血压-舒张压(mmHg)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术晚血压-收缩压(mmHg)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术晚血压-舒张压(mmHg)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后1日血压-收缩压(mmHg)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后1日血压-舒张压(mmHg)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后3日血压-收缩压(mmHg)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后3日血压-舒张压(mmHg)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后7日血压-收缩压(mmHg)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后7日血压-舒张压(mmHg)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后血压情况">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后血压管理方案 (药名-剂量-频次-给药方式)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="呼吸机时长(h)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="有创压监测(d)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后输红细胞(U)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后输血浆(ml)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后甘露醇使用总量">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后甘露醇用药方案(剂量-次数-天数)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="围手术期静脉激素替代天数">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术前静脉激素替代方案(药名-剂量-频次-时间)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术中静脉激素替代方案(药名-剂量-频次-时间)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术中静脉激素替代方案(药名-剂量-频次-时间后">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后口服激素 (药名-剂量-频次)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后免疫抑制剂 (药名-剂量-频次-给药方式默认p.o.)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后生物制剂 (药名-剂量-频次-给药方式默认i.v.)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后降脂药 (药名-剂量-频次-给药方式默认p.o.)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后抗栓药 (药名-剂量-频次-给药方式默认p.o.)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="病理报告具体结果">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后-出院时靶血管情况">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="出院激素 (药名-剂量-频次-给药方式默认p.o.)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="出院免疫抑制剂 (药名-剂量-频次-给药方式默认p.o.)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="出院生物制剂 (药名-剂量-频次-给药方式默认i.v.)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="出院降压药 (药名-剂量-频次-给药方式默认p.o.)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="出院降脂药 (药名-剂量-频次-给药方式默认p.o.)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="出院抗栓药 (药名-剂量-频次-给药方式默认p.o.)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后30天内并发症">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后并发症发生日期">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后并发症详情">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="非计划再干预手术">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后管理补充">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术前生活质量健康评价ID">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后生活质量健康评价ID">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术前Barthel指数量表得分(入院时)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术前Barthel指数量表-进食得分">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术前Barthel指数量表-洗澡得分">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术前Barthel指数量表-修饰得分">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术前Barthel指数量表-穿衣得分">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术前Barthel指数量表-控制大便得分">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术前Barthel指数量表-控制小便得分">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术前Barthel指数量表-如厕得分">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术前Barthel指数量表-床椅转移得分">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术前Barthel指数量表-平地行走得分">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术前Barthel指数量表-上下楼梯得分">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后Barthel指数量表得分(术后7天/出院时)">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后Barthel指数量表-进食得分">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后Barthel指数量表-洗澡得分">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后Barthel指数量表-修饰得分">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后Barthel指数量表-穿衣得分">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后Barthel指数量表-控制大便得分">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后Barthel指数量表-控制小便得分">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后Barthel指数量表-如厕得分">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后Barthel指数量表-床椅转移得分">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后Barthel指数量表-平地行走得分">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后Barthel指数量表-上下楼梯得分">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后症状复发时间">
                            <el-select :disabled="editVis" size="mini" style="width:200px"
                                v-model="InpatientInfo.hospital" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后靶血管再狭窄时间">

                            <el-date-picker v-model="InpatientInfo.hospital" type="date" placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后再干预时间">

                            <el-date-picker v-model="InpatientInfo.hospital" type="date" placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="术后远期情况补充">

                            <el-date-picker v-model="InpatientInfo.hospital" type="date" placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">

                        <el-form-item label="术后远期情况补充">
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
        InpatientInfo: Object
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