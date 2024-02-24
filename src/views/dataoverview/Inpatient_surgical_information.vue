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
      <el-table-column align="center" label="住院手术信息ID">
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="填报人">
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="填报日期">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="更新日期">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column> 
      <el-table-column align="center" label="就诊医院">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column> 
      <el-table-column align="center" label="住院号">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column> 
      <el-table-column align="center" label="本院住院次数">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column> 
      <el-table-column align="center" label="入院日期">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column> 
      <el-table-column align="center" label="住院时长(天)">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
       <el-table-column align="center" label="年龄(岁)">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column> 
      <el-table-column align="center" label="体重(kg)">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="身高(cm)">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="BMI">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="学历">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="职业">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="吸烟史">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="婚姻状况">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="生育状况">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="月经情况">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="个人信息补充">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="病程(年)">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="大动脉炎手术史">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="并发结核病史">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="结核病史详述">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="并发其他风湿免疫系统疾病史">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="其他风湿免疫系统疾病史详述">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="并发糖尿病">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="并发高血压">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="并发心脏疾病">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="并发心力衰竭NYHA分级">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="并发脑缺血">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="并发左肾缺血">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="并发右肾缺血">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="并发慢性肾病分期">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="并发肺动脉高压">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="并发视网膜病变Uyama_Asayama 分类">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="并发贫血">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="并发高同型半胱氨酸血症">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="并发高脂血症">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="其他病史补充">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="其他手术史">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="本次术前表现">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="术前病情详述(新发/复发/加重症状和体征-持续时间)">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="2011年中国指南临床分型">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前激素 (药名-剂量-频次-给药方式默认p.o.)">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前免疫抑制剂 (药名-剂量-频次-给药方式默认p.o.)">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前生物制剂 (药名-剂量-频次-给药方式默认i.v.)">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前降压药 (药名-剂量-频次-给药方式默认p.o.)">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前降脂药 (药名-剂量-频次-给药方式默认p.o.)">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前抗栓药 (药名-剂量-频次-给药方式默认p.o.)">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前用药补充 (药名-剂量-频次-给药方式默认p.o.)">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="入院血压-收缩压(mmHg)">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="入院血压-舒张压(mmHg)">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="入院心率(次/min)">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="入院呼吸频率(次/min)">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前四肢血压-收缩压(mmHg)(左上-右上-左下-右下)">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前四肢血压-舒张压(mmHg)(左上-右上-左下-右下)">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前左室射血分数LVEF(%)">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前心脏超声结果">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前心电图结果">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前胸片/胸部CT结果(默认胸片, CT要标明)">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="术前右侧ABI">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前左侧ABI">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前总eGFR">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前右eGFR">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前左eGFR">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前其他评估补充">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前实验室检验结果ID">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前影像学检查结果ID">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前Numano影像分型">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前疾病活动性评分ID">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前NIH活动性评分得分">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前改良NIH活动性评分得分">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前ITAS 2010活动性评分得分">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前ITAS-A活动性评分得分">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前PGA活动性评价">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="手术日期">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="麻醉方式">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前ASA分级">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="麻醉效果">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术者(主刀-一助-二助)">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="手术名称">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="手术形式">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="重建血管">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="球囊扩张说明(扩张部位-球囊品牌/型号-扩张次数-残余狭窄率)">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="支架植入说明(植入部位-支架品牌/型号-支架个数-残余狭窄率)">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="血管搭桥说明(桥血管起-止部位-桥血管类型-桥血管品牌/型号(或来源)-桥血管个数-动脉阻断时间)">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="PUMCH外科分型">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="PUMCH外科分型">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前肺功能">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total > 0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit"
      @pagination="getList" />

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
      listLoading: true,
      total: 0,
      listQuery: {
        page: 1,
        limit: 10
      }
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
</style>
