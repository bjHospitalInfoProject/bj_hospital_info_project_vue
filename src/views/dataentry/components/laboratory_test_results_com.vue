<template>
    <el-card class="box-card laboratoryInfo">
        <div slot="header" class="clearfix">
            <span>实验室检验结果</span>
            <el-button v-if="editVis == true" style="float: right;margin-top: 5px;" size="mini" type="success"
                @click="editVis = false">编辑</el-button>
            <el-button v-else style="float: right;margin-top: 5px;" size="mini" type="success"
                @click="saveOptionsApi()">保存</el-button>

        </div>
        <div>
            <el-form label-width="150px" :model="laboratoryInfo">
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="实验室检验结果ID：">
                            <el-input :disabled="true" style="width:200px" size="mini"
                                v-model="laboratoryInfo.labTestResultId"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="填报人：">
                            <el-input :disabled="editVis" style="width:200px" size="mini"
                                v-model="laboratoryInfo.reporter"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="填报时间：">
                            <el-date-picker :disabled="editVis" v-model="laboratoryInfo.reportTime" style="width:200px"
                                size="mini" type="date" placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>

                </el-row>
                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="检验日期：">
                            <el-date-picker :disabled="editVis" v-model="laboratoryInfo.testDate" style="width:200px"
                                size="mini" type="date" placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>

                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="检验时期：">
                            <el-select :disabled="editVis" style="width:200px" size="mini"
                                v-model="laboratoryInfo.testPeriod" placeholder="请选择">
                                <el-option v-for="item in jianyanoptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="就诊方式：">
                            <el-select :disabled="editVis" style="width:200px" size="mini"
                                v-model="laboratoryInfo.treatmentMode" placeholder="请选择">
                                <el-option v-for="item in jiuzhenoptions" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="检验医院:">
                            <el-input :disabled="editVis" type="textarea" v-model="laboratoryInfo.testHospital"
                                :rows="2" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="备注:">
                            <el-input :disabled="editVis" type="textarea" v-model="laboratoryInfo.remark" :rows="3"
                                placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <el-form label-width="300px" :model="laboratoryInfo">



                <el-divider content-position="left">炎症因子</el-divider>

                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="红细胞沉降率(ESR,mm/h)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.esr"></el-input>
                        </el-form-item>
                        <el-form-item label="C-反应蛋白(CRP,mg/L)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.crp"></el-input>
                        </el-form-item>
                        <el-form-item label="IL-1β (pg/mL)：">
                            <el-input :disabled="editVis" size="mini" style="width:100px"
                                v-model="laboratoryInfo.il1b"></el-input>
                        </el-form-item>
                        <el-form-item label="IL-2 (pg/mL)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.il2"></el-input>
                        </el-form-item>
                        <el-form-item label="IL-4 (pg/mL)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.il4"></el-input>
                        </el-form-item>
                        <el-form-item label="IL-5 (pg/mL)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.il5"></el-input>
                        </el-form-item>
                        <el-form-item label="IL-6 (pg/mL)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.il6"></el-input>
                        </el-form-item>
                        <el-form-item label="IL-8 (pg/mL)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.il8"></el-input>
                        </el-form-item>
                        <el-form-item label="IL-10 (pg/mL)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.il10"></el-input>
                        </el-form-item>
                        <el-form-item label="IL-12p70 (pg/mL)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.il12p70"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="IL-17 (pg/mL):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.il17"></el-input>
                        </el-form-item>
                        <el-form-item label="肿瘤坏死因子-α(TNF-α,pg/mL)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.tnfAlpha"></el-input>
                        </el-form-item>
                        <el-form-item label="α-干扰素(IFN-α,pg/mL)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.ifnAlpha"></el-input>
                        </el-form-item>
                        <el-form-item label="γ-干扰素(IFN-γ,pg/mL):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.ifnGamma"></el-input>
                        </el-form-item>
                        <el-form-item label="血清淀粉样蛋白A (SAA,mg/L):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.saa"></el-input>
                        </el-form-item>
                        <el-form-item label="降钙素原(PCT,ng/ml)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.pct"></el-input>
                        </el-form-item>
                        <el-form-item label="铁蛋白(FER,ng/ml):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.fer"></el-input>
                        </el-form-item>
                        <el-form-item label="转铁蛋白(TRF,mg/ml):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.trf"></el-input>
                        </el-form-item>
                        <el-form-item label="补体C3 (g/L)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.c3"></el-input>
                        </el-form-item>
                        <el-form-item label="补体C4 (g/L):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.c4"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="补体CH50 (g/L):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.ch50"></el-input>
                        </el-form-item>
                        <el-form-item label="补体C1q (mg/L)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.c1q"></el-input>
                        </el-form-item>
                        <el-form-item label="IgG (g/L):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.igG"></el-input>
                        </el-form-item>
                        <el-form-item label="IgA (g/L):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.igA"></el-input>
                        </el-form-item>
                        <el-form-item label="IgM (g/L)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.igM"></el-input>
                        </el-form-item>
                        <el-form-item label="IgE (IU/mL):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.igE"></el-input>
                        </el-form-item>
                        <el-form-item label="类风湿因子（RF）:">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.rf"></el-input>
                        </el-form-item>
                        <el-form-item label="抗链球菌溶血素“O”（ASO）：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.aso"></el-input>
                        </el-form-item>
                        <el-form-item label="阳性抗体:">
                            <el-input :disabled="editVis" style="width:calc(100% - 20px)" size="mini"
                                v-model="laboratoryInfo.positiveAntibody"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-divider content-position="left">血常规</el-divider>

                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="wbc(WBC,10^9/L)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.wbc"></el-input>
                        </el-form-item>
                        <el-form-item label="红细胞(RBC,10^12/L):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.rbc"></el-input>
                        </el-form-item>
                        <el-form-item label="血红蛋白(HGB,g/L):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.hgb"></el-input>
                        </el-form-item>

                        <el-form-item label="红细胞压积(HCT,%)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.hct"></el-input>
                        </el-form-item>


                        <el-form-item label="平均红细胞体积(MCV,fL):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.mcv"></el-input>
                        </el-form-item>


                        <el-form-item label="平均红细胞血红蛋白量(MCH,pg):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.mch"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="平均红细胞血红蛋白浓度(MCHC,g/L)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.mchc"></el-input>
                        </el-form-item>


                        <el-form-item label="红细胞分布宽度CV(RDW-CV,%):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.rdwCv"></el-input>
                        </el-form-item>


                        <el-form-item label="红细胞分布宽度SD(RDW-SD,fL):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.rdwSd"></el-input>
                        </el-form-item>




                        <el-form-item label="血小板计数(PLT,10^9/L)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.plt"></el-input>
                        </el-form-item>


                        <el-form-item label="血小板平均体积(MPV,fL):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.mpv"></el-input>
                        </el-form-item>


                        <el-form-item label="血小板分布宽度(PDW,%):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.pdw"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="嗜酸性细胞计数(ESO.,10^9/L)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.eso"></el-input>
                        </el-form-item>
                        <el-form-item label="嗜碱性细胞计数(BASO.,10^9/L):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.baso"></el-input>
                        </el-form-item>
                        <el-form-item label="中性粒细胞计数(NEUT.,10^9/L):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.neut"></el-input>
                        </el-form-item>
                        <el-form-item label="淋巴细胞计数(LYMPH.,10^9/L)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.lymph"></el-input>
                        </el-form-item>


                        <el-form-item label="单核细胞计数(MONO.,10^9/L):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.mono"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-divider content-position="left">血生化</el-divider>

                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">


                        <el-form-item label="总蛋白(TP,g/L)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.tp"></el-input>
                        </el-form-item>


                        <el-form-item label="前白蛋白(PA,mg/dL):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.pa"></el-input>
                        </el-form-item>


                        <el-form-item label="白蛋白(ALB,g/L):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.alb"></el-input>
                        </el-form-item>




                        <el-form-item label="球蛋白(g/L)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.globulin"></el-input>
                        </el-form-item>


                        <el-form-item label="谷丙转氨酶(ALT,U/L):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.alt"></el-input>
                        </el-form-item>


                        <el-form-item label="谷草转氨酶(AST,U/L):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.ast"></el-input>
                        </el-form-item>




                        <el-form-item label="碱性磷酸酶(ALP,U/L)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.alp"></el-input>
                        </el-form-item>


                        <el-form-item label="γ--谷氨酰基转移酶(GGT,U/L):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.ggt"></el-input>
                        </el-form-item>


                        <el-form-item label="同型半胱氨酸(HCY,umol/L):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.hcy"></el-input>
                        </el-form-item>




                        <el-form-item label="肌酐（umol/L）：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.creatinine"></el-input>
                        </el-form-item>


                        <el-form-item label="肾小球滤过率(CKD-EPI):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.ckdEpi"></el-input>
                        </el-form-item>
                        <el-form-item label="尿酸(umol/L):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.uricAcid"></el-input>
                        </el-form-item>




                        <el-form-item label="空腹血糖（mmol/L）：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.fastingGlucose"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="尿素（mmol/L）:">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.urea"></el-input>
                        </el-form-item>


                        <el-form-item label="肌酸激酶(CK,U/L):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.ck"></el-input>
                        </el-form-item>




                        <el-form-item label="乳酸脱氢酶(LDH,U/L)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.ldh"></el-input>
                        </el-form-item>


                        <el-form-item label="α-羟丁酸脱氢酶(HBDH,U/L):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.hbdh"></el-input>
                        </el-form-item>


                        <el-form-item label="钙(Ca,mmol/L):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.ca"></el-input>
                        </el-form-item>




                        <el-form-item label="磷(P,mmol/L)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.p"></el-input>
                        </el-form-item>


                        <el-form-item label="镁(Mg,mmol/L):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.mg"></el-input>
                        </el-form-item>


                        <el-form-item label="总胆固醇(TC,mmol/L):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.tc"></el-input>
                        </el-form-item>




                        <el-form-item label="甘油三酯(TG,mmol/L)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.tg"></el-input>
                        </el-form-item>


                        <el-form-item label="低密度脂蛋白胆固醇(LDL-C,mmol/L):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.ldlC"></el-input>
                        </el-form-item>


                        <el-form-item label="高密度脂蛋白胆固醇(HDL-C,mmol/L):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.hdlC"></el-input>
                        </el-form-item>




                        <el-form-item label="脂蛋白(a)(LP(a),mg/L)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.lpA"></el-input>
                        </el-form-item>


                        <el-form-item label="载脂蛋白A1(APO-A1,g/L):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.apoA1"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">

                        <el-form-item label="载脂蛋白B(APO-B,g/L):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.apoB"></el-input>
                        </el-form-item>




                        <el-form-item label="D-3羟丁酸(D-3H,mmol/L)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.d3h"></el-input>
                        </el-form-item>


                        <el-form-item label="游离脂肪酸(NFFA,mmol/L):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.nffa"></el-input>
                        </el-form-item>


                        <el-form-item label="小而密低密度脂蛋白胆固醇(SLDL,mmol/L):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.sldl"></el-input>
                        </el-form-item>




                        <el-form-item label="极低密度脂蛋白胆固醇(VLDL,mmol/L)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.vldl"></el-input>
                        </el-form-item>


                        <el-form-item label="视黄醇结合蛋白(RBP,mg/L):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.rbp"></el-input>
                        </el-form-item>

                        <el-form-item label="BNP (pg/mL):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.bnp"></el-input>
                        </el-form-item>
                        <el-form-item label="NT-proBNP (pg/ml)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.ntProbnp"></el-input>
                        </el-form-item>
                        <el-form-item label="肌钙蛋白T (TNT,ng/ml):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.cTNT"></el-input>
                        </el-form-item>
                        <el-form-item label="肌钙蛋白I (cTNI,ng/ml)">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.cTNI"></el-input>
                        </el-form-item>
                        <el-form-item label="超敏肌钙蛋白（Hs-cTn）:">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.hsCtn"></el-input>
                        </el-form-item>
                        <el-form-item label="肌酸激酶同工酶 (CK-MB,ng/ml)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.ckMb"></el-input>
                        </el-form-item>


                        <el-form-item label="肌红蛋白(MYO,ng/mL):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.myo"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>


                <el-divider content-position="left">凝血指标</el-divider>

                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="D-二聚体(ng/ml)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.dDimer"></el-input>
                        </el-form-item>


                        <el-form-item label="凝血酶原时间(PT,s):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.pt"></el-input>
                        </el-form-item>


                        <el-form-item label="凝血酶原活动度(%):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.ptActivity"></el-input>
                        </el-form-item>
                        <el-form-item label="凝血酶原时间国际标准化比值(INR)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.inr"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="纤维蛋白原(FIB,g/L):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.fib"></el-input>
                        </el-form-item>
                        <el-form-item label="活化部分凝血活酶时间(APTT,s):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.aptt"></el-input>
                        </el-form-item>
                        <el-form-item label="凝血酶时间(TT,s)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.tt"></el-input>
                        </el-form-item>

                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="蛋白C活性(%):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.proteinCActivity"></el-input>
                        </el-form-item>


                        <el-form-item label="蛋白S活性(%):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.proteinSActivity"></el-input>
                        </el-form-item>
                        <el-form-item label="抗凝血酶Ⅲ(AT-Ⅲ)活性(%)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.antithrombinIiiActivity"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>



                <el-divider content-position="left">内分泌检测</el-divider>

                <el-row>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="基础血管紧张素Ⅱ(pg/ml)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.baselineAngiotensinIi"></el-input>
                        </el-form-item>


                        <el-form-item label="基础肾素(pg/ml):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.baselineRenin"></el-input>
                        </el-form-item>


                        <el-form-item label="基础醛固酮(pg/ml):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.baselineAldosterone"></el-input>
                        </el-form-item>




                        <el-form-item label="基础 醛固酮/肾素：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.baselineAldosteroneReninRatio"></el-input>
                        </el-form-item>


                        <el-form-item label="激发血管紧张素Ⅱ(pg/ml):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.stimulatedAngiotensinIi"></el-input>
                        </el-form-item>


                        <el-form-item label="激发肾素(pg/ml):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.stimulatedRenin"></el-input>
                        </el-form-item>




                        <el-form-item label="激发醛固酮(pg/ml)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.stimulatedAldosterone"></el-input>
                        </el-form-item>


                        <el-form-item label="激发 醛固酮/肾素:">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.stimulatedAldosteroneReninRatio"></el-input>
                        </el-form-item>


                        <el-form-item label="左肾动脉取血-基础血管紧张素Ⅱ(pg/ml):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.leftRenalArteryAngiotensinIi"></el-input>
                        </el-form-item>




                        <el-form-item label="左肾动脉取血-基础肾素(pg/ml)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.leftRenalArteryRenin"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="左肾动脉取血-基础醛固酮(pg/ml):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.leftRenalArteryAldosterone"></el-input>
                        </el-form-item>


                        <el-form-item label="左肾动脉取血-基础 醛固酮/肾素:">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.leftRenalArteryAldosteroneReninRatio"></el-input>
                        </el-form-item>




                        <el-form-item label="右肾动脉取血-基础血管紧张素Ⅱ(pg/ml)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.rightRenalArteryAngiotensinIi"></el-input>
                        </el-form-item>


                        <el-form-item label="右肾动脉取血-基础肾素(pg/ml):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.rightRenalArteryRenin"></el-input>
                        </el-form-item>


                        <el-form-item label="右肾动脉取血-基础醛固酮(pg/ml):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.rightRenalArteryAldosterone"></el-input>
                        </el-form-item>




                        <el-form-item label="右肾动脉取血-基础 醛固酮/肾素：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.rightRenalArteryAldosteroneReninRatio"></el-input>
                        </el-form-item>


                        <el-form-item label="肾上腹主动脉取血-基础血管紧张素Ⅱ(pg/ml):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.suprarenalAortaAngiotensinIi"></el-input>
                        </el-form-item>


                        <el-form-item label="肾上腹主动脉取血-基础肾素(pg/ml):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.suprarenalAortaRenin"></el-input>
                        </el-form-item>




                        <el-form-item label="肾上腹主动脉取血-基础醛固酮(pg/ml)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.suprarenalAortaAldosterone"></el-input>
                        </el-form-item>


                        <el-form-item label="肾上腹主动脉取血-醛固酮/肾素:">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.suprarenalAortaAldosteroneReninRatio"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :lg="12" :xl="8">
                        <el-form-item label="肾下腹主动脉取血-基础血管紧张素Ⅱ(pg/ml):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.infrarenalAortaAngiotensinIi"></el-input>
                        </el-form-item>

                        <el-form-item label="肾下腹主动脉取血-基础肾素(pg/ml)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.infrarenalAortaRenin"></el-input>
                        </el-form-item>


                        <el-form-item label="肾下腹主动脉取血-基础醛固酮(pg/ml):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.infrarenalAortaAldosterone"></el-input>
                        </el-form-item>


                        <el-form-item label="肾下腹主动脉取血-基础 醛固酮/肾素:">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.infrarenalAortaAldosteroneReninRatio"></el-input>
                        </el-form-item>
                        <el-form-item label="卵泡刺激素(FSH,mIU/L)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.fsh"></el-input>
                        </el-form-item>


                        <el-form-item label="促黄体生成素(LH,mIU/L):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.lh"></el-input>
                        </el-form-item>
                        <el-form-item label="雌二醇(E2,pg/mL):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.e2"></el-input>
                        </el-form-item>
                        <el-form-item label="泌乳素(PRL,ng/mL)：">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.prl"></el-input>
                        </el-form-item>
                        <el-form-item label="孕酮(P,ng/mL):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.progesterone"></el-input>
                        </el-form-item>
                        <el-form-item label="睾酮(T,ng/mL):">
                            <el-input :disabled="editVis" style="width:100px" size="mini"
                                v-model="laboratoryInfo.testosterone"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>


                <el-divider content-position="left">结核检测</el-divider>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="结核抗体快速卡试验:">
                            <el-input :disabled="editVis" type="textarea"
                                v-model="laboratoryInfo.tuberculosisAntibodyRapidCardTest" :rows="2"
                                placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="12">
                        <el-form-item label="结核抗38kd蛋白抗体:">
                            <el-input :disabled="editVis" type="textarea"
                                v-model="laboratoryInfo.tuberculosisAntibody38kdProtein" :rows="2" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="结核抗16kd蛋白抗体:">
                            <el-input :disabled="editVis" type="textarea"
                                v-model="laboratoryInfo.tuberculosisAntibody16kdProtein" :rows="2" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="结核抗LAM抗体:">
                            <el-input :disabled="editVis" type="textarea"
                                v-model="laboratoryInfo.tuberculosisAntibodyLam" :rows="2" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="淋巴细胞培养+干扰素A(SF/10^6M):">
                            <el-input :disabled="editVis" type="textarea"
                                v-model="laboratoryInfo.lymphocyteCultureInterferonA" :rows="2" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="淋巴细胞培养+干扰素B(SF/10^6M):">
                            <el-input :disabled="editVis" type="textarea"
                                v-model="laboratoryInfo.lymphocyteCultureInterferonB" :rows="2" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="结核杆菌γ-干扰素实验（T-N）(pg/ml):">
                            <el-input :disabled="editVis" type="textarea"
                                v-model="laboratoryInfo.tuberculosisGammaInterferonExperimentTN" :rows="2"
                                placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="结核杆菌γ-干扰素实验（P-N）(pg/ml):">
                            <el-input :disabled="editVis" type="textarea"
                                v-model="laboratoryInfo.tuberculosisGammaInterferonExperimentPN" :rows="2"
                                placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="结核分枝杆菌特异性细胞免疫反应监测（QFT）:">
                            <el-input :disabled="editVis" type="textarea"
                                v-model="laboratoryInfo.tuberculosisSpecificCellImmunityReactionMonitoringQft" :rows="2"
                                placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="结核分枝杆菌核酸荧光检测:">
                            <el-input :disabled="editVis" type="textarea"
                                v-model="laboratoryInfo.tuberculosisBacillusNucleicAcidFluorescenceDetection" :rows="2"
                                placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="抗酸杆菌涂片:">
                            <el-input :disabled="editVis" type="textarea" v-model="laboratoryInfo.acidFastBacillusSmear"
                                :rows="2" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="抗酸杆菌培养:">
                            <el-input :disabled="editVis" type="textarea"
                                v-model="laboratoryInfo.acidFastBacillusCulture" :rows="2" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="结核菌素(PPD)试验:">
                            <el-input :disabled="editVis" type="textarea"
                                v-model="laboratoryInfo.tuberculosisSkinTestPpd" :rows="2" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>



                <el-divider content-position="left">肿瘤标志物</el-divider>

                <el-row>
                    <el-col :span="12">
                        <el-form-item label="癌胚抗原(CEA, ng/mL):">
                            <el-input :disabled="editVis" type="textarea" :rows="2"
                                v-model="laboratoryInfo.carcinoembryonicAntigen" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="甲胎蛋白(AFP, ng/mL):">
                            <el-input :disabled="editVis" type="textarea" :rows="2"
                                v-model="laboratoryInfo.alphaFetoprotein" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="糖类抗原125  (CA125, U/mL):">
                            <el-input :disabled="editVis" type="textarea" :rows="2"
                                v-model="laboratoryInfo.carbohydrateAntigen125" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="糖类抗原15-3 (CA15-3, U/mL):">
                            <el-input :disabled="editVis" type="textarea" :rows="2"
                                v-model="laboratoryInfo.carbohydrateAntigen153" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="12">
                        <el-form-item label="糖类抗原19-9 (CA19-9, U/mL):">
                            <el-input :disabled="editVis" type="textarea" :rows="2"
                                v-model="laboratoryInfo.carbohydrateAntigen199" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="糖类抗原72-4 (CA72-4, U/mL):">
                            <el-input :disabled="editVis" type="textarea" :rows="2"
                                v-model="laboratoryInfo.carbohydrateAntigen724" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="糖类抗原24-2 (CA24-2, U/mL):">
                            <el-input :disabled="editVis" type="textarea" :rows="2"
                                v-model="laboratoryInfo.carbohydrateAntigen242" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="糖类抗原50 (CA50, U/mL):">
                            <el-input :disabled="editVis" type="textarea" :rows="2"
                                v-model="laboratoryInfo.carbohydrateAntigen50" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="前列腺特异抗原 (PSA, ng/mL):">
                            <el-input :disabled="editVis" type="textarea" :rows="2"
                                v-model="laboratoryInfo.prostateSpecificAntigen" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="鳞状细胞癌抗原 (SCC, ng/mL):">
                            <el-input :disabled="editVis" type="textarea" :rows="2"
                                v-model="laboratoryInfo.squamousCellCarcinomaAntigen" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="细胞角蛋白19片段 (CYFRA 21-1, ng/mL):">
                            <el-input :disabled="editVis" type="textarea" :rows="2"
                                v-model="laboratoryInfo.cytokeratin19Fragment" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="胃泌素释放肽前体 (ProGRP, pg/mL):">
                            <el-input :disabled="editVis" type="textarea" :rows="2"
                                v-model="laboratoryInfo.gastrinReleasingPeptidePrecursor" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="神经元特异性烯醇化酶(NSE, ng/mL):">
                            <el-input :disabled="editVis" type="textarea" :rows="2"
                                v-model="laboratoryInfo.neuronSpecificEnolase" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="核基质蛋白-22 (NMP-22, kU/mL):">
                            <el-input :disabled="editVis" type="textarea" :rows="2"
                                v-model="laboratoryInfo.nuclearMatrixProtein22" placeholder="请输入内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>


            </el-form>
        </div>
    </el-card>
</template>

<script>

import { addOrUpdateLabTestResult } from '@/api/dataentry'
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            jianyanoptions: [
                {
                    label: "术前",
                    value: 1
                },
                {
                    label: "术后",
                    value: 2
                },
                {
                    label: "随访",
                    value: 3
                },
                {
                    label: "其他",
                    value: 4
                }
            ],
            jiuzhenoptions: [
                {
                    label: "住院",
                    value: 1
                },
                {
                    label: "门诊",
                    value: 2
                },
                {
                    label: "体检",
                    value: 3
                },
                {
                    label: "其他",
                    value: 4
                }
            ],
            editVis: true
        }
    },
    props: {
        patientInfo: Object,
        laboratoryInfo: Object
    },
    methods: {
        async saveOptionsApi() {
            this.laboratoryInfo.centerId = this.centerId
            this.laboratoryInfo.patientCode = this.patientInfo.code

            const { data } = await addOrUpdateLabTestResult(this.laboratoryInfo)
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
</style>