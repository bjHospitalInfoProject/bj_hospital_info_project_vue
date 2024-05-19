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
      <el-table-column align="center" label="病人ID">
        <template slot-scope="{row}">
          <span>{{ row.patientCode }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="姓名缩写">
        <template slot-scope="{row}">
          <span>{{ row.nameInitials }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="出生日期">
        <template slot-scope="{row}">
          <span>{{ formatBirth(row.birth) }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="性别">
        <template slot-scope="{row}">
          <span>{{ row.genderStr }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="民族">
        <template slot-scope="{row}">
          <span>{{ row.ethnicityStr }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="地区">
        <template slot-scope="{row}">
          <span v-if="row.country || row.city">
            <span>{{ row.country }}</span>
            <span v-if="row.country && row.city">/</span>
            <span>{{ row.city }}</span>
            <span v-if="row.country || row.city">/</span>
          </span>
          <span>{{ row.district }}</span>

        </template>
      </el-table-column>

      <el-table-column fixed="right" label="操作" width="80">
        <template slot-scope="scope">
          <el-button type="text" @click="getDetailInfoOption(scope.row)" size="small">详情</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total > 0" :total="total" :pageNo.sync="listQuery.pageNo" :pageSize.sync="listQuery.pageSize"
      @pagination="getList" />

    <el-drawer title="详情信息" size="50%" :visible.sync="drawer" direction="rtl">

      <el-form label-width="200px" :model="detailInfo" style="padding-right: 20px;">

        <el-row>
          <el-col :span="12">
            <el-form-item label="出生日期：">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="truncatedGenderStr"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="性别：">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="detailInfo.genderStr"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="民族：">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="detailInfo.ethnicityStr"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="地区：">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="combinedValue"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="手术干预情况：">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="detailInfo.surgicalInterventionStr"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="重建血管数：">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="detailInfo.vascularReconstructionCount"></el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="介入手术次数：">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="detailInfo.interventionSurgeryCount"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="支架植入次数：">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="detailInfo.stentImplantationCount"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="开刀手术次数：">
              <el-input :disabled="editVis" size="mini" style="width:150px"
                v-model="detailInfo.surgicalCount"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="桥血管(人工血管)数：">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="detailInfo.artificialBloodVesselCount"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="桥血管(自体血管)数：">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="detailInfo.autologousBloodVesselCount"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="桥血管(人工、自体序贯)数：">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="detailInfo.bloodVesselCount"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="杂交手术次数：">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="detailInfo.hybridSurgeryCount"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="ABO血型：">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="detailInfo.aboBloodTypeStr"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="Rh血型：">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="detailInfo.rhBloodTypeStr"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="随访电话1：">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="detailInfo.followUpPhone1"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="随访电话2:">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="detailInfo.followUpPhone2"></el-input>
            </el-form-item>

          </el-col>
          <el-col :span="12">
            <el-form-item label="随访情况：">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="detailInfo.followUpStatusStr"></el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="微信随访群：">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="detailInfo.wechatFollowUpGroupStr"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="首发表现：">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="detailInfo.initialSymptomsStr"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="首次表现时间:">
              <el-input :disabled="editVis" type="textarea" v-model="detailInfo.initialSymptomsDate" :rows="3"
                placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="首次确诊时间:">
              <el-input :disabled="editVis" type="textarea" v-model="detailInfo.initialDiagnosisDate" :rows="3"
                placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="首次确诊医院:">
              <el-input :disabled="editVis" type="textarea" v-model="detailInfo.initialDiagnosisHospital" :rows="3"
                placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="总体评价：">
              <el-input :disabled="editVis" type="textarea" v-model="detailInfo.overallEvaluation" :rows="3"
                placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-drawer>
  </div>
</template>

<script>

import { getPatientPageInfoList } from '@/api/dataquery'
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
      detailInfo: {},
      editVis: true
    }
  },
  created() {
    this.getList()
  },
  methods: {
    formatBirth(birth) {
      // 假设 birth 是一个字符串，如 "1990-01-01"
      if (birth) {
        // 使用 substring() 方法截取年份部分
        return birth.substring(0, 10); // 返回 "1990"
      } else {
        return '';
      }
    },
    combirthValue() {
      // 当读取combinedValue时，返回拼接后的字符串

      return this.detailInfo.birth.substring(0, 10)

    },
    getDetailInfoOption(row) {
      this.drawer = true;
      this.detailInfo = { ...row }
    },
    async getList() {
      this.listLoading = true
      this.listQuery.centerId = this.centerId
      const { data } = await getPatientPageInfoList(this.listQuery)
      const items = data.data
      this.total = data.totalCount
      this.list = items.map(v => {
        return v
      })
      this.listLoading = false
    },
    getLabelFromValue(options, value) {
      for (let i = 0; i < options.length; i++) {
        if (options[i].value === value) {
          return options[i].label;
        }
      }
      // 如果没有找到匹配的值，则返回空字符串或者其他你觉得合适的值
      return "";
    }
  },
  computed: {
    ...mapGetters([
      'centerId'
    ]),
    combinedValue: {
      // 当读取combinedValue时，返回拼接后的字符串
      get() {
        return this.detailInfo.country + this.detailInfo.city + this.detailInfo.district
      },
    },
    truncatedGenderStr() {
      // 截取 detailInfo.genderStr 的前150个字符
      if (this.detailInfo && typeof this.detailInfo.birth === 'string') {
        // 截取 detailInfo.genderStr 的前150个字符
        return this.detailInfo.birth.slice(0, 10);
      } else {
        return '';
      }
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

.el-form-item {
  margin-bottom: 5px;
}
</style>
