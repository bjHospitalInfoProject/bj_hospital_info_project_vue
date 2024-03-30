<template>
  <div class="app-container">

    <div class="filter-container">
      <el-input v-model="listQuery.name" placeholder="姓名" style="width: 150px;" @keyup.enter.native="handleFilter" />

      <el-input v-model="listQuery.tel" placeholder="手机号" style="width: 150px;" class="filter-item"
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
      <el-table-column fixed="right" label="操作" width="80">
        <template slot-scope="scope">
          <el-button type="text" @click="getDetailInfoOption" size="small">详情</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total > 0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit"
      @pagination="getList" />
    <el-drawer title="结果详情" size="50%" :visible.sync="drawer" direction="rtl">

      <el-form label-width="220px" :model="InpatientInfo" style="padding-right: 20px;padding-bottom: 20px">


        <el-divider content-position="left">基本信息</el-divider>

        <el-row>
          <el-col :span="12">
            <el-form-item label="就诊医院:">
              <el-select :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in yiyuanoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>

          </el-col>
          <el-col :span="12">
            <el-form-item label="住院号：">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="本院住院次数:">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="入院日期：">
              <el-date-picker v-model="InpatientInfo.name" style="width:150px" size="mini" type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>

          <el-col :span="12">
            <el-form-item label="住院时长(天):">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="年龄">
              <el-input disabled="false" size="mini" style="width:150px" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="体重(kg)">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="身高(cm)">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>

            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="BMI">
              <el-input disabled="false" size="mini" style="width:150px" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">

            <el-form-item label="学历">
              <el-select :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in xueliptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>


          <el-col :span="12">

            <el-form-item label="职业">
              <el-select :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in zhiyeoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="吸烟史：">
              <el-select :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in smokeoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>

          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="婚姻状况：">
              <el-select :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in hunyinoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="生育状况：">
              <el-select :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in shengyuoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="月经情况：">
              <el-select :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in yuejingoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
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
        <el-divider content-position="left">既往史&并发症</el-divider>

        <el-row>
          <el-col :span="12">
            <el-form-item label="病程(年)">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">

            <el-form-item label="并发结核病史">
              <el-select :disabled="editVis" style="width:150px" size="mini" multiple v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in jieheoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="并发其他风湿免疫系统疾病史">
              <el-select :disabled="editVis" style="width:150px" size="mini" multiple v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in fengshioptions" :key="item.value" :label="item.label" :value="item.value">
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
          <el-col :span="12">
            <el-form-item label="并发糖尿病:">
              <el-select :disabled="editVis" style="width:150px" size="mini" multiple v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in tangniaobingoptions" :key="item.value" :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="并发高血压:">
              <el-select :disabled="editVis" style="width:150px" size="mini" multiple v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in gaoxueyaoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>

        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="并发心脏疾病:">
              <el-select :disabled="editVis" style="width:150px" size="mini" multiple v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in xinzangoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="并发心力衰竭NYHA分级">
              <el-select :disabled="editVis" style="width:150px" size="mini" multiple v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in xinlioptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>

          <el-col :span="12">
            <el-form-item label="并发脑缺血">
              <el-select :disabled="editVis" size="mini" style="width:150px" multiple v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in naoquexueoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="并发左肾缺血">
              <el-select :disabled="editVis" size="mini" style="width:150px" multiple v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in shenoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="并发右肾缺血">
              <el-select :disabled="editVis" size="mini" style="width:150px" multiple v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in shenoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">

            <el-form-item label="并发慢性肾病分期">
              <el-select :disabled="editVis" size="mini" style="width:150px" v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in manxingshenoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>

        </el-row>

        <el-row>
          <el-col :span="12">

            <el-form-item label="并发肺动脉高压">
              <el-select :disabled="editVis" size="mini" style="width:150px" v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in feidongmaioptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item class="custom" label="并发视网膜病变Uyama_Asayama分类">
              <el-select :disabled="editVis" size="mini" style="width:150px" v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in shiwangmooptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>


          <el-col :span="12">
            <el-form-item label="并发贫血">
              <el-select :disabled="editVis" size="mini" style="width:150px" v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in pinxueoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="并发高同型半胱氨酸血症">
              <el-select :disabled="editVis" size="mini" style="width:150px" v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in tongxingbanoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="并发高脂血症">
              <el-select :disabled="editVis" size="mini" style="width:150px" multiple v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in gaoxuezhioptions" :key="item.value" :label="item.label" :value="item.value">
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

        <el-divider content-position="left">术前评估</el-divider>

        <el-row>
          <el-col :span="12">
            <el-form-item label="本次术前表现">
              <el-select :disabled="editVis" size="mini" style="width:150px" multiple v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in shuqianbiaoxianoptions" :key="item.value" :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="2011年中国指南临床分型">
              <el-select :disabled="editVis" size="mini" style="width:150px" v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in linhchuangfenxingoptions" :key="item.value" :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="术前病情详述(新发/复发/加重症状和体征-持续时间):">
              <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="术前激素 (药名-剂量-频次-给药方式默认p.o.):">
              <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="术前免疫抑制剂 (药名-剂量-频次-给药方式默认p.o.):">
              <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="术前生物制剂 (药名-剂量-频次-给药方式默认i.v.):">
              <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="术前降压药 (药名-剂量-频次-给药方式默认p.o.)">
              <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="术前降脂药 (药名-剂量-频次-给药方式默认p.o.)">
              <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="术前抗栓药 (药名-剂量-频次-给药方式默认p.o.)">
              <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="术前用药补充 (药名-剂量-频次-给药方式默认p.o.)">
              <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="入院血压-收缩压(mmHg)">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="入院血压-舒张压(mmHg)">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="入院心率(次/min)">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="入院呼吸频率(次/min)">
              <el-select :disabled="editVis" size="mini" style="width:150px" v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>

          <el-col :span="12">
            <el-form-item label="术前左室射血分数LVEF(%)">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="术前心电图结果">
              <el-select :disabled="editVis" size="mini" style="width:150px" multiple v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in xindiantuoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>

        </el-row>

        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="术前四肢血压-收缩压(mmHg)(左上-右上-左下-右下)">
              <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="术前四肢血压-舒张压(mmHg)(左上-右上-左下-右下)">
              <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="术前心脏超声结果">
              <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="术前胸片/胸部CT结果(默认胸片, CT要标明)">
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

          <el-col :span="12">
            <el-form-item label="术前右侧ABI">
              <el-select :disabled="editVis" size="mini" style="width:150px" v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="术前左侧ABI">
              <el-select :disabled="editVis" size="mini" style="width:150px" v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>


        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="术前总eGFR">
              <el-select :disabled="editVis" size="mini" style="width:150px" v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="术前右eGFR">
              <el-select :disabled="editVis" size="mini" style="width:150px" v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="术前左eGFR">
              <el-select :disabled="editVis" size="mini" style="width:150px" v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
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
          <el-col :span="12">
            <el-form-item label="术前实验室检验结果ID">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">

            <el-form-item label="术前影像学检查结果ID">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>


        </el-row>
        <el-row>
          <el-col :span="12">

            <el-form-item label="术前Numano影像分型">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="术前疾病活动性评分ID">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>


          <el-col :span="12">
            <el-form-item label="术前NIH活动性评分得分">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="术前改良NIH活动性评分得分">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>

          <el-col :span="12">
            <el-form-item label="术前ITAS 2010活动性评分得分">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="术前ITAS-A活动性评分得分">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="术前PGA活动性评价">
              <el-select :disabled="editVis" size="mini" style="width:150px" v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in GPAoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>


        <el-divider content-position="left">手术信息</el-divider>


        <el-row>

          <el-col :span="12">
            <el-form-item label="手术日期">
              <el-date-picker v-model="InpatientInfo.name" style="width:150px" size="mini" type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="麻醉方式">
              <el-select :disabled="editVis" size="mini" style="width:150px" v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in mazuifangshioptions" :key="item.value" :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>


        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="术前ASA分级">
              <el-select :disabled="editVis" size="mini" style="width:150px" v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in ASAoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="麻醉效果">
              <el-select :disabled="editVis" size="mini" style="width:150px" v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in mazuixiaoguooptions" :key="item.value" :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>

          <el-col :span="12">
            <el-form-item label="术者(主刀-一助-二助)">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="手术形式">
              <el-select :disabled="editVis" size="mini" style="width:150px" multiple v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in shoushuxingshioptions" :key="item.value" :label="item.label"
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
              <el-select :disabled="editVis" size="mini" v-model="InpatientInfo.hospital" multiple placeholder="请选择">
                <el-option v-for="item in chongjianxueguanoptions" :key="item.value" :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="球囊扩张说明(扩张部位-球囊品牌/型号-扩张次数-残余狭窄率)">
              <el-input :disabled="editVis" type="textarea" :rows="5" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="支架植入说明(植入部位-支架品牌/型号-支架个数-残余狭窄率)">
              <el-input :disabled="editVis" type="textarea" :rows="5" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="血管搭桥说明(桥血管起-止部位-桥血管类型-桥血管品牌/型号(或来源)-桥血管个数-动脉阻断时间)">
              <el-input :disabled="editVis" type="textarea" :rows="5" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="PUMCH外科分型">
              <el-select :disabled="editVis" size="mini" style="width:150px" v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in PUMCHoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="">
              <img style="width:200%" src="@/assets/images/PUMCH.png" alt="">
            </el-form-item>
          </el-col>

        </el-row>

        <rl-row>
          <el-col :span="24">

            <el-form-item label="手术测压情况">
              <el-input :disabled="editVis" type="textarea" :rows="5" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </rl-row>
        <rl-row>
          <el-col :span="24">

            <el-form-item label="手术内容补充">
              <el-input :disabled="editVis" type="textarea" :rows="5" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </rl-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="造影剂用量">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">

            <el-form-item label="手术时长(min)">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="术中出血量(ml)">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">

            <el-form-item label="自体血回输量(ml)">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>

          <el-col :span="12">

            <el-form-item label="红细胞输注量(ml)">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="血浆输注量(ml)">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="术中并发症">
              <el-select :disabled="editVis" size="mini" style="width:150px" multiple v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in shuzhongbingfaoptions" :key="item.value" :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-divider content-position="left">术后情况</el-divider>

        <el-row>
          <el-col :span="12">

            <el-form-item label="术后第1天VAS评分">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">

            <el-form-item label="术后去向">
              <el-select :disabled="editVis" size="mini" style="width:150px" v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in shuhouquxiangoptions" :key="item.value" :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">

            <el-form-item label="术后住院天数">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">

            <el-form-item label="术后ICU住院天数">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">

            <el-form-item label="术晨血压-收缩压(mmHg)">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">

            <el-form-item label="术晨血压-舒张压(mmHg)">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">

            <el-form-item label="术晚血压-收缩压(mmHg)">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">

            <el-form-item label="术晚血压-舒张压(mmHg)">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>


          <el-col :span="12">

            <el-form-item label="术后1日血压-收缩压(mmHg)">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">

            <el-form-item label="术后1日血压-舒张压(mmHg)">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">

            <el-form-item label="术后3日血压-收缩压(mmHg)">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">

            <el-form-item label="术后3日血压-舒张压(mmHg)">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">

            <el-form-item label="术后7日血压-收缩压(mmHg)">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">

            <el-form-item label="术后7日血压-舒张压(mmHg)">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">

            <el-form-item label="术后血压情况">
              <el-select :disabled="editVis" size="mini" style="width:150px" multiple v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in shuhouxueyaoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>

        </el-row>

        <el-row>
          <el-col :span="24">

            <el-form-item class="custom" label="术后血压管理方案 (药名-剂量-频次-给药方式)">
              <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">

            <el-form-item label="呼吸机时长(h)">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">

            <el-form-item label="有创压监测(d)">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">

            <el-form-item label="术后输红细胞(U)">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">

            <el-form-item label="术后输血浆(ml)">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">

            <el-form-item label="术后甘露醇使用总量">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">

            <el-form-item class="custom" label="术后甘露醇用药方案(剂量-次数-天数)">
              <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">

            <el-form-item class="custom" label="围手术期静脉激素替代天数">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">

            <el-form-item class="custom" label="术前静脉激素替代方案(药名-剂量-频次-时间)">
              <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>

          <el-col :span="24">

            <el-form-item class="custom" label="术中静脉激素替代方案(药名-剂量-频次-时间)">
              <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="术后口服激素 (药名-剂量-频次)">
              <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="术后免疫抑制剂 (药名-剂量-频次-给药方式默认p.o.)">
              <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="术后生物制剂 (药名-剂量-频次-给药方式默认i.v.)">
              <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="术后降脂药 (药名-剂量-频次-给药方式默认p.o.)">
              <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="术后抗栓药 (药名-剂量-频次-给药方式默认p.o.)">
              <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="病理报告具体结果">
              <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>

          <el-col :span="12">

            <el-form-item class="custom" label="术后-出院时靶血管情况">
              <el-select :disabled="editVis" size="mini" style="width:150px" v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in baxueguanoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>


        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="出院激素 (药名-剂量-频次-给药方式默认p.o.)">
              <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="出院免疫抑制剂 (药名-剂量-频次-给药方式默认p.o.)">
              <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="出院生物制剂 (药名-剂量-频次-给药方式默认i.v.)">
              <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="出院降压药 (药名-剂量-频次-给药方式默认p.o.)">
              <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="出院降脂药 (药名-剂量-频次-给药方式默认p.o.)">
              <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="出院抗栓药 (药名-剂量-频次-给药方式默认p.o.)">
              <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>


        <el-row>
          <el-col :span="12">

            <el-form-item label="术后30天内并发症">
              <el-select :disabled="editVis" size="mini" style="width:150px" multiple v-model="InpatientInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in shuhoubingfaoptions" :key="item.value" :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="12">

            <el-form-item label="术后并发症发生日期">
              <el-date-picker v-model="InpatientInfo.name" style="width:150px" size="mini" type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-col>

        </el-row>

        <el-row>
          <el-col :span="24">
            <el-form-item label="术后并发症详情">
              <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="非计划再干预手术">
              <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="术后管理补充">
              <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-divider content-position="left">Barthel指数量表</el-divider>


        <el-row>
          <el-col :span="12">
            <el-form-item class="custom" label="术前生活质量健康评价ID">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">

            <el-form-item class="custom" label="术后生活质量健康评价ID">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>


        </el-row>
        <el-row>
          <el-col :span="12">

            <el-form-item class="custom" label="术前Barthel指数量表得分(入院时)">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">

            <el-form-item class="custom" label="术前Barthel指数量表-进食得分">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>


          <el-col :span="12">

            <el-form-item class="custom" label="术前Barthel指数量表-洗澡得分">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">

            <el-form-item class="custom" label="术前Barthel指数量表-修饰得分">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>

          <el-col :span="12">

            <el-form-item class="custom" label="术前Barthel指数量表-穿衣得分">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">

            <el-form-item class="custom" label="术前Barthel指数量表-控制大便得分">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>


        </el-row>
        <el-row>
        </el-row>
        <el-col :span="12">

          <el-form-item class="custom" label="术前Barthel指数量表-控制小便得分">
            <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">

          <el-form-item class="custom" label="术前Barthel指数量表-如厕得分">
            <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
          </el-form-item>
        </el-col>
        <el-row>


          <el-col :span="12">

            <el-form-item class="custom" label="术前Barthel指数量表-床椅转移得分">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">

            <el-form-item class="custom" label="术前Barthel指数量表-平地行走得分">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>

          <el-col :span="12">

            <el-form-item class="custom" label="术前Barthel指数量表-上下楼梯得分">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">

            <el-form-item class="custom" label="术后Barthel指数量表得分(术后7天/出院时)">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>


        </el-row>
        <el-row>
          <el-col :span="12">

            <el-form-item class="custom" label="术后Barthel指数量表-进食得分">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">

            <el-form-item class="custom" label="术后Barthel指数量表-洗澡得分">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>


          <el-col :span="12">

            <el-form-item class="custom" label="术后Barthel指数量表-修饰得分">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name">
              </el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">

            <el-form-item class="custom" label="术后Barthel指数量表-穿衣得分">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>

          <el-col :span="12">

            <el-form-item class="custom" label="术后Barthel指数量表-控制大便得分">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name">
              </el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">

            <el-form-item class="custom" label="术后Barthel指数量表-控制小便得分">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>


        </el-row>
        <el-row>
          <el-col :span="12">

            <el-form-item class="custom" label="术后Barthel指数量表-如厕得分">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">

            <el-form-item class="custom" label="术后Barthel指数量表-床椅转移得分">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>


          <el-col :span="12">

            <el-form-item class="custom" label="术后Barthel指数量表-平地行走得分">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">

            <el-form-item class="custom" label="术后Barthel指数量表-上下楼梯得分">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="InpatientInfo.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>


        <el-divider content-position="left">随访后补充</el-divider>

        <el-row>

          <el-col :span="12">

            <el-form-item label="术后症状复发时间">
              <el-date-picker v-model="InpatientInfo.name" style="width:150px" size="mini" type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">

            <el-form-item label="术后靶血管再狭窄时间">

              <el-date-picker v-model="InpatientInfo.name" style="width:150px" size="mini" type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-col>

          <el-col :span="12">

            <el-form-item label="术后再干预时间">

              <el-date-picker v-model="InpatientInfo.name" style="width:150px" size="mini" type="date"
                placeholder="选择日期">
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
      listLoading: true,
      total: 0,
      listQuery: {
        page: 1,
        limit: 10
      },
      drawer: false,
      InpatientInfo: {
        name: '2',
        hospital: '1'
      },
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

::v-deep .custom .el-form-item__label {
  line-height: 20px
}

.el-form-item {
  margin-bottom: 5px;
}
</style>
