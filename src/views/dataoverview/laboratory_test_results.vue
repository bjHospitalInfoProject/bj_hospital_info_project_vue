<template>
  <div class="app-container">

    <div class="filter-container">
      <el-input v-model="listQuery.name" placeholder="姓名" style="width: 200px;" @keyup.enter.native="handleFilter" />

      <el-input v-model="listQuery.tel" placeholder="手机号" style="width: 200px;" class="filter-item"
        @keyup.enter.native="handleFilter" />

      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        搜索
      </el-button>

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

    <pagination v-show="total > 0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit"
      @pagination="getList" />

    <el-drawer title="结果详情" size="40%" :visible.sync="drawer" :direction="rtl" :before-close="handleClose">


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


        </el-tab-pane>
        <el-tab-pane label="肿瘤标志物" name="s">定时任务补偿</el-tab-pane>


      </el-tabs>
    </el-drawer>

  </div>
</template>

<script>
import { fetchList } from '@/api/article'
import Pagination from '@/components/Pagination'


export default {
  name: 'InlineEditTable',
  components: { Pagination },

  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      drawer: false,
      list: null,
      listLoading: true,
      total: 0,
      listQuery: {
        page: 1,
        limit: 10
      },
      formInline: {
        user: '',
        region: ''
      },
      activeName: 'first'

    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      this.listLoading = true
      const { data } = await fetchList(this.listQuery)
      const items = data.items
      this.total = data.total
      this.list = items.map(v => {
        this.$set(v, 'edit', false) // https://vuejs.org/v2/guide/reactivity.html
        v.originalTitle = v.title //  will be used when user click the cancel botton
        return v
      })
      this.listLoading = false
    },
    cancelEdit(row) {
      row.title = row.originalTitle
      row.edit = false
      this.$message({
        message: 'The title has been restored to the original value',
        type: 'warning'
      })
    },
    confirmEdit(row) {
      row.edit = false
      row.originalTitle = row.title
      this.$message({
        message: 'The title has been edited',
        type: 'success'
      })
    },
    getDetailInfoOption() {
      this.drawer = true;
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
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
