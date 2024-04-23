<template>
  <div class="app-container">

    <div class="filter-container">
      <el-form :inline="true" :model="listQuery" class="demo-form-inline">
        <el-form-item label="姓名">
          <el-input v-model="listQuery.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="listQuery.phone"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getList">查询</el-button>
        </el-form-item>
      </el-form>

    </div>

    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="结果ID">
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="填报人">
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="填报时间">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="检验医院">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="检验日期">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="就诊方式">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="备注信息">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>

      <el-table-column fixed="right" label="操作" width="80">
        <template slot-scope="scope">
          <el-button type="text" @click="getDetailInfoOption" size="small">详情</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total > 0" :total="total" :pageNo.sync="listQuery.pageNo" :pageSize.sync="listQuery.pageSize"
      @pagination="getList" />


    <el-drawer title="结果详情" size="40%" :visible.sync="drawer" direction="rtl" :before-close="handleClose">


      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="炎症因子" name="first">
          <el-row>

            <el-col :span="7">
              <div>
                红细胞沉降率(ESR,mm/h)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                C-反应蛋白(CRP,mg/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>

            <el-col :span="7">
              <div>
                超敏CRP (HsCRP,mg/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                IL-1β (pg/mL)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                IL-2 (pg/mL)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                IL-4 (pg/mL)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                IL-5 (pg/mL)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                IL-6 (pg/mL)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>

          <el-row>

            <el-col :span="7">
              <div>
                IL-8 (pg/mL)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                IL-10 (pg/mL)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>

            <el-col :span="7">
              <div>
                IL-12p70 (pg/mL)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                IL-17 (pg/mL)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>

            <el-col :span="7">
              <div>
                肿瘤坏死因子-α (TNF-α,pg/mL)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                α-干扰素 (IFN-α,pg/mL)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>

            <el-col :span="7">
              <div>
                γ-干扰素 (IFN-γ,pg/mL)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                血清淀粉样蛋白A (SAA,mg/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                降钙素原(PCT,ng/ml)： </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                铁蛋白(FER,ng/ml)： </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                转铁蛋白(TRF,mg/ml)： </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                补体C3 (g/L)： </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                补体C4 (g/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                补体CH50 (g/L)： </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                补体C1q (mg/L)： </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                IgG (g/L)： </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                IgA (g/L)： </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                IgM (g/L)： </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                IgE (IU/mL)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                类风湿因子（RF）：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                抗链球菌溶血素“O”（ASO）：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                阳性抗体：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>

        </el-tab-pane>
        <el-tab-pane label="血常规" name="second">
          <el-row>
            <el-col :span="7">
              <div>
                白细胞(WBC,10^9/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                红细胞(RBC,10^12/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="7">
              <div>
                血红蛋白(HGB,g/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                红细胞压积(HCT,%)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                平均红细胞体积(MCV,fL)： </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                平均红细胞血红蛋白量(MCH,pg)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                平均红细胞血红蛋白浓度(MCHC,g/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                红细胞分布宽度CV(RDW-CV,%)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                红细胞分布宽度SD(RDW-SD,fL)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                血小板计数(PLT,10^9/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                血小板平均体积(MPV,fL)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                血小板分布宽度(PDW,%)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                嗜酸性细胞计数(ESO.,10^9/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                嗜碱性细胞计数(BASO.,10^9/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                中性粒细胞计数(NEUT.,10^9/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                淋巴细胞计数(LYMPH.,10^9/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                单核细胞计数(MONO.,10^9/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>

          </el-row>
        </el-tab-pane>
        <el-tab-pane label="血生化" name="third">

          <el-row>
            <el-col :span="7">
              <div>
                总蛋白(TP,g/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                前白蛋白(PA,mg/dL)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                白蛋白(ALB,g/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                球蛋白(g/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                谷丙转氨酶(ALT,U/L)： </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                谷草转氨酶(AST,U/L)： </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                碱性磷酸酶(ALP,U/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                γ--谷氨酰基转移酶(GGT,U/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                同型半胱氨酸(HCY,umol/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                肌酐（umol/L）： </div>

            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                肾小球滤过率(CKD-EPI)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                尿酸(umol/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                空腹血糖（mmol/L）：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                尿素（mmol/L）：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                肌酸激酶(CK,U/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                乳酸脱氢酶(LDH,U/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                α-羟丁酸脱氢酶(HBDH,U/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                钙(Ca,mmol/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                磷(P,mmol/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                镁(Mg,mmol/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                总胆固醇(TC,mmol/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                甘油三酯(TG,mmol/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                低密度脂蛋白胆固醇(LDL-C,mmol/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                高密度脂蛋白胆固醇(HDL-C,mmol/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                脂蛋白(a)(LP(a),mg/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                载脂蛋白A1(APO-A1,g/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                载脂蛋白B(APO-B,g/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                D-3羟丁酸(D-3H,mmol/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                游离脂肪酸(NFFA,mmol/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                小而密低密度脂蛋白胆固醇(SLDL,mmol/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                极低密度脂蛋白胆固醇(VLDL,mmol/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                视黄醇结合蛋白(RBP,mg/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                BNP (pg/mL)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                NT-proBNP (pg/ml)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                肌钙蛋白T (TNT,ng/ml)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                超敏肌钙蛋白（Hs-cTn）：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                肌酸激酶同工酶 (CK-MB,ng/ml)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                肌红蛋白(MYO,ng/mL)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>


        </el-tab-pane>
        <el-tab-pane label="凝血指标" name="fourth">
          <el-row>
            <el-col :span="7">
              <div>
                D-二聚体(ng/ml)：

              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                凝血酶原时间(PT,s)： </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                凝血酶原活动度(%)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                凝血酶原时间国际标准化比值(INR)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                纤维蛋白原(FIB,g/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                活化部分凝血活酶时间(APTT,s)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                凝血酶时间(TT,s)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                蛋白C活性(%)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                蛋白S活性(%)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                抗凝血酶Ⅲ(AT-Ⅲ)活性(%)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>

        </el-tab-pane>
        <el-tab-pane label="内分泌检测" name="five">

          <el-row>
            <el-col :span="7">
              <div>
                基础血管紧张素Ⅱ(pg/ml)：

              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                基础肾素(pg/ml)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                基础醛固酮(pg/ml)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                基础 醛固酮/肾素：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                激发血管紧张素Ⅱ(pg/ml)： </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                激发肾素(pg/ml)；
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                激发醛固酮(pg/ml)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                激发 醛固酮/肾素：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                左肾动脉取血-基础血管紧张素Ⅱ(pg/ml)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                左肾动脉取血-基础肾素(pg/ml)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                左肾动脉取血-基础醛固酮(pg/ml)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                左肾动脉取血-基础 醛固酮/肾素：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                右肾动脉取血-基础血管紧张素Ⅱ(pg/ml)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                右肾动脉取血-基础肾素(pg/ml) </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                右肾动脉取血-基础醛固酮(pg/ml)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                右肾动脉取血-基础 醛固酮/肾素：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                肾上腹主动脉取血-基础血管紧张素Ⅱ(pg/ml)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                肾上腹主动脉取血-基础肾素(pg/ml)；
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                肾上腹主动脉取血-基础醛固酮(pg/ml)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                肾上腹主动脉取血-基础 醛固酮/肾素：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                肾下腹主动脉取血-基础血管紧张素Ⅱ(pg/ml)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                肾下腹主动脉取血-基础肾素(pg/ml)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                肾下腹主动脉取血-基础醛固酮(pg/ml)；
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                肾下腹主动脉取血-基础 醛固酮/肾素：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                卵泡刺激素(FSH,mIU/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                促黄体生成素(LH,mIU/L)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                雌二醇(E2,pg/mL)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                泌乳素(PRL,ng/mL)；
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <div>
                孕酮(P,ng/mL)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" plain size="mini">0.56</el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <div>
                睾酮(T,ng/mL)：
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button type="info" size="mini" plain>1.45</el-button>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="结核检测" name="six">

          <el-row>
            <el-col :span="5">
              <div class="centerInfo">
                结核抗体快速卡试验：
              </div>
            </el-col>
            <el-col :span="19">
              <div>
                <el-input disabled="true" type="textarea" :rows="3">
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="5">
              <div class="centerInfo">
                结核抗38kd蛋白抗体：
              </div>
            </el-col>
            <el-col :span="19">
              <div>
                <el-input disabled="true" type="textarea" :rows="3">
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="5">
              <div class="centerInfo">
                结核抗16kd蛋白抗体：
              </div>
            </el-col>
            <el-col :span="19">
              <div>
                <el-input disabled="true" type="textarea" :rows="3">
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="5">
              <div class="centerInfo">
                结核抗LAM抗体：
              </div>
            </el-col>
            <el-col :span="19">
              <div>
                <el-input disabled="true" type="textarea" :rows="3">
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="5">
              <div class="centerInfo">
                淋巴细胞培养+干扰素A(SF/10^6M)：
              </div>
            </el-col>
            <el-col :span="19">
              <div>
                <el-input disabled="true" type="textarea" :rows="3">
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="5">
              <div class="centerInfo">
                淋巴细胞培养+干扰素B(SF/10^6M)：
              </div>
            </el-col>
            <el-col :span="19">
              <div>
                <el-input disabled="true" type="textarea" :rows="3">
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="5">
              <div class="centerInfo">
                结核杆菌γ-干扰素实验（T-N）(pg/ml)：
              </div>
            </el-col>
            <el-col :span="19">
              <div>
                <el-input disabled="true" type="textarea" :rows="3">
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="5">
              <div class="centerInfo">
                结核杆菌γ-干扰素实验（P-N）(pg/ml)：
              </div>
            </el-col>
            <el-col :span="19">
              <div>
                <el-input disabled="true" type="textarea" :rows="3">
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="5">
              <div class="centerInfo">
                结核分枝杆菌特异性细胞免疫反应监测（QFT）：
              </div>
            </el-col>
            <el-col :span="19">
              <div>
                <el-input disabled="true" type="textarea" :rows="3">
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="5">
              <div class="centerInfo">
                结核分枝杆菌核酸荧光检测：
              </div>
            </el-col>
            <el-col :span="19">
              <div>
                <el-input disabled="true" type="textarea" :rows="3">
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="5">
              <div class="centerInfo">
                抗酸杆菌涂片：
              </div>
            </el-col>
            <el-col :span="19">
              <div>
                <el-input disabled="true" type="textarea" :rows="3">
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="5">
              <div class="centerInfo">
                抗酸杆菌培养：
              </div>
            </el-col>
            <el-col :span="19">
              <div>
                <el-input disabled="true" type="textarea" :rows="3">
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="5">
              <div class="centerInfo">
                结核菌素(PPD)试验：
              </div>
            </el-col>
            <el-col :span="19">
              <div>
                <el-input disabled="true" type="textarea" :rows="3">
                </el-input>
              </div>
            </el-col>
          </el-row>

        </el-tab-pane>
        <el-tab-pane label="肿瘤标志物" name="s">
          <el-row>
            <el-col :span="5">
              <div class="centerInfo">
                癌胚抗原(CEA, ng/mL)：
              </div>
            </el-col>
            <el-col :span="19">
              <div>
                <el-input disabled="true" type="textarea" :rows="3">
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="5">
              <div class="centerInfo">
                甲胎蛋白(AFP, ng/mL)：
              </div>
            </el-col>
            <el-col :span="19">
              <div>
                <el-input disabled="true" type="textarea" :rows="3">
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="5">
              <div class="centerInfo">
                糖类抗原125 (CA125, U/mL)：
              </div>
            </el-col>
            <el-col :span="19">
              <div>
                <el-input disabled="true" type="textarea" :rows="3">
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="5">
              <div class="centerInfo">
                糖类抗原15-3 (CA15-3, U/mL)：
              </div>
            </el-col>
            <el-col :span="19">
              <div>
                <el-input disabled="true" type="textarea" :rows="3">
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="5">
              <div class="centerInfo">
                糖类抗原19-9 (CA19-9, U/mL)：
              </div>
            </el-col>
            <el-col :span="19">
              <div>
                <el-input disabled="true" type="textarea" :rows="3">
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="5">
              <div class="centerInfo">
                糖类抗原72-4 (CA72-4, U/mL)：
              </div>
            </el-col>
            <el-col :span="19">
              <div>
                <el-input disabled="true" type="textarea" :rows="3">
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="5">
              <div class="centerInfo">
                糖类抗原24-2 (CA24-2, U/mL)：
              </div>
            </el-col>
            <el-col :span="19">
              <div>
                <el-input disabled="true" type="textarea" :rows="3">
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="5">
              <div class="centerInfo">
                糖类抗原50 (CA50, U/mL)：
              </div>
            </el-col>
            <el-col :span="19">
              <div>
                <el-input disabled="true" type="textarea" :rows="3">
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="5">
              <div class="centerInfo">
                前列腺特异抗原 (PSA, ng/mL)：
              </div>
            </el-col>
            <el-col :span="19">
              <div>
                <el-input disabled="true" type="textarea" :rows="3">
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="5">
              <div class="centerInfo">
                鳞状细胞癌抗原 (SCC, ng/mL)：
              </div>
            </el-col>
            <el-col :span="19">
              <div>
                <el-input disabled="true" type="textarea" :rows="3">
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="5">
              <div class="centerInfo">
                细胞角蛋白19片段 (CYFRA 21-1, ng/mL)：
              </div>
            </el-col>
            <el-col :span="19">
              <div>
                <el-input disabled="true" type="textarea" :rows="3">
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="5">
              <div class="centerInfo">
                胃泌素释放肽前体 (ProGRP, pg/mL)：
              </div>
            </el-col>
            <el-col :span="19">
              <div>
                <el-input disabled="true" type="textarea" :rows="3">
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="5">
              <div class="centerInfo">
                神经元特异性烯醇化酶(NSE, ng/mL)：
              </div>
            </el-col>
            <el-col :span="19">
              <div>
                <el-input disabled="true" type="textarea" :rows="3">
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="5">
              <div class="centerInfo">
                核基质蛋白-22 (NMP-22, kU/mL)：
              </div>
            </el-col>
            <el-col :span="19">
              <div>
                <el-input disabled="true" type="textarea" :rows="3">
                </el-input>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>


      </el-tabs>
    </el-drawer>

  </div>
</template>

<script>
import { fetchList } from '@/api/article'
import { getIFInfoList } from '@/api/dataquery'
import Pagination from '@/components/Pagination'
import { mapGetters } from 'vuex'

export default {
  name: 'InlineEditTable',
  components: { Pagination },
  data() {
    return {
      list: null,
      listLoading: true,
      total: 0,
      listQuery: {
        pageNo: 1,
        pageSize: 10,
        name: "",
        phone: "",
        centerId: ''
      },
      drawer: false,

    }
  },
  created() {
    this.getList()
  },
  methods: {
    getDetailInfoOption() {
      this.drawer = true;
    },
    async getList() {
      this.listLoading = true
      this.listQuery.centerId = this.centerId
      const { data } = await getIFInfoList(this.listQuery)
      const items = data.data
      this.total = data.totalCount
      this.list = items.map(v => {
        return v
      })
      this.listLoading = false
    }
  },
  computed: {
    ...mapGetters([
      'centerId'
    ])
  }
}
</script>

<style scoped>
.filter-container {
  margin-bottom: 30px;

  .filter-item {
    margin-left: 20px;
  }
}

::v-deep .el-drawer__body {
  margin-left: 20px;
}

.el-row {
  margin-right: 20px;
  margin-bottom: 15px;
}

.centerInfo {
  margin-top: 10px;
}
</style>
