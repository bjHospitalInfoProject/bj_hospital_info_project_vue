<template>
  <div class="app-container">

    <div class="filter-container">
      <el-form :inline="true" :model="listQuery" class="demo-form-inline">
        <el-form-item label="姓名">
          <el-input v-model="listQuery.user"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="listQuery.tel"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getList">查询</el-button>
        </el-form-item>
      </el-form>

    </div>

    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="疾病活动性评分ID">
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
      <el-table-column align="center" label="评分时期">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="NIH活动性评分得分">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="ITAS 2010活动性评分得分">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="ITAS-A活动性评分得分">
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

    <el-drawer title="评分详情" size="40%" :visible.sync="drawer" direction="rtl">



      <el-divider content-position="left">NIH活动性评分(3个月内新发/加重)</el-divider>

      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            NIH活动性评分得分:
          </div>
        </el-col>
        <el-col :span="5">
          <el-input :disabled="true" style="width:150px" size="mini" v-model="diseaseInfo.name"></el-input>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            1. 系统性症状：发热、骨骼、肌肉症状）:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无"></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            2. 血管缺血或炎症的特点：跛行、脉搏减弱、无脉、血管杂音、血管疼痛（颈痛）、血压不对称:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            3. ESR 升高（≥20mm/1h）:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            4. 血管影像学表现（CTA、MRA、超声、PET/CT、DSA等检查）:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-divider content-position="left">NIH活动性评分(3个月内新发/加重)</el-divider>

      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            NIH活动性评分得分:
          </div>
        </el-col>
        <el-col :span="5">
          <el-input :disabled="true" style="width:150px" size="mini" v-model="diseaseInfo.name"></el-input>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            1. 系统性症状：发热、骨骼、肌肉症状）:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无"></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            2. 血管缺血或炎症的特点：跛行、脉搏减弱、无脉、血管杂音、血管疼痛（颈痛）、血压不对称：
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            3. ESR 升高（≥20mm/1h）或 CRP升高（≥50mg/L）:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            4. 血管影像学表现（CTA、MRA、超声、PET/CT、DSA等检查）:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>

      <el-divider content-position="left">ITAS 2010活动性评分(3个月内新发/加重)</el-divider>

      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            ITAS 2010活动性评分得分:
          </div>
        </el-col>
        <el-col :span="5">
          <el-input :disabled="true" style="width:150px" size="mini" v-model="diseaseInfo.name"></el-input>
        </el-col>
      </el-row>

      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            ITAS-A活动性评分得分:
          </div>
        </el-col>
        <el-col :span="5">
          <el-input :disabled="true" style="width:150px" size="mini" v-model="diseaseInfo.name"></el-input>
        </el-col>
      </el-row>

      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            01. 乏力/体重下降＞2kg:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            02. 肌痛/关节痛/关节炎:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            03. 头痛:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            04. 眩晕/头痛:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            05. 晕厥:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            06. 癫痫(非高血压性):
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            07. 脑卒中:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +2"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            08. 高血压-舒张压＞90mmHg:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            09. 高血压-收缩压>140 mmHg:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            10. 颈动脉疼痛:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            11. 主动脉瓣关闭不全:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            12. 心肌梗死/心绞痛:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            13. 心肌病/心功能不全:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>

      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            14. 严重腹痛:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            15. 流产:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            16. 血管杂音:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +2"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            16.01 右颈动脉:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            16.02 左颈动脉:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            16.03 右锁骨下动脉:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            16.04左锁骨下动脉:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>

      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            16.05 右肾动脉:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            16.06 左肾动脉:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            17. 脉搏不对称:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +2"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            17.01 血压不对称:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            18. 脉搏消失:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +2"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            18.01 右颈动脉:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            18.02 左颈动脉:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            18.03 右锁骨下动脉:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            18.04 左锁骨下动脉:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            18.05 右肱动脉:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            18.06 左肱动脉:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            18.07 右桡动脉:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            18.08 左桡动脉:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            18.09 右股动脉:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            18.10 左股动脉:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            18.11 右腘动脉:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            18.12 左腘动脉:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            18.13 右胫后动脉:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            18.14 左胫后动脉:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            18.15 右足背动脉:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            18.16 左足背动脉:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            19. 肢体运动障碍:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +2"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            19.1 上肢:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            19.2 下肢:
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            20. ESR (mm/h):
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="custom">
        <el-col :offset="1" :span="14">
          <div>
            21. CRP (mg/L):
          </div>
        </el-col>
        <el-col :span="5">
          <el-radio-group v-model="diseaseInfo.resource">
            <el-radio label="有 +1"></el-radio>
            <el-radio label="无 "></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>

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
      list: null,
      drawer: false,
      activeName: 'first',
      listLoading: true,
      total: 0,
      diseaseInfo: {
        name: '2',
        resource: '1'
      },
      listQuery: {
        page: 1,
        limit: 10,
        user: "",
        tel: "",
        centerCode: 1001
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getDetailInfoOption() {
      this.drawer = true;
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
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

  margin-bottom: 15px;
}
</style>
