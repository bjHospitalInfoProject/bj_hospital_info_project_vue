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
      <el-table-column align="center" label="组织冻存样本ID">
        <template slot-scope="{row}">
          <span>{{ row.organizeSampleId }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="组织样本采集时间">
        <template slot-scope="{row}">
          <span>{{ row.collectionTime }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="采集备注">
        <template slot-scope="{row}">
          <span>{{ row.collectionRemark }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="目前组织单纯冻存冻存样本总管数">
        <template slot-scope="{row}">
          <span>{{ row.tissueSamplesCount }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="目前闭塞段单纯冻存样本管数">
        <template slot-scope="{row}">
          <span>{{ row.blockedSamplesCount }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="目前搭桥段单纯冻存样本管数">
        <template slot-scope="{row}">
          <span>{{ row.bridgeSamplesCount }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="目前血管周围脂肪组织单纯冻存样本管数">
        <template slot-scope="{row}">
          <span>{{ row.perivascularFatCount }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="目前血管周围淋巴结单纯冻存样本管数">
        <template slot-scope="{row}">
          <span>{{ row.perivascularLymphCount }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="目前其他组织单纯冻存样本管数">
        <template slot-scope="{row}">
          <span>{{ row.otherTissueCount }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="目前组织RNAlater冻存冻存样本总管数">
        <template slot-scope="{row}">
          <span>{{ row.rnalaterCount }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="目前闭塞段RNAlater冻存样本管数">
        <template slot-scope="{row}">
          <span>{{ row.blockedRnalaterCount }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="目前搭桥段RNAlater冻存样本管数">
        <template slot-scope="{row}">
          <span>{{ row.bridgeRnalaterCount }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="目前血管周围脂肪组织RNAlater冻存样本管数">
        <template slot-scope="{row}">
          <span>{{ row.perivascularFatRnalaterCount }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="目前血管周围淋巴结RNAlater冻存样本管数">
        <template slot-scope="{row}">
          <span>{{ row.perivascularLymphRnalaterCount }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="目前其他组织RNAlater冻存样本管数">
        <template slot-scope="{row}">
          <span>{{ row.otherTissueRnalaterCount }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="其他样本补充">
        <template slot-scope="{row}">
          <span>{{ row.additionalSamples }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="已有实验结果">
        <template slot-scope="{row}">
          <span>{{ row.experimentResults }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="当前保存位置">
        <template slot-scope="{row}">
          <span>{{ getLabelFromValue(saveOptions, row.storageLocation) }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="来源住院手术信息ID">
        <template slot-scope="{row}">
          <span>{{ row.surgeryInfoId }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="备注">
        <template slot-scope="{row}">
          <span>{{ row.remarks }}</span>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total > 0" :total="total" :pageNo.sync="listQuery.pageNo" :pageSize.sync="listQuery.pageSize"
      @pagination="getList" />

  </div>
</template>

<script>
import { getOrganizeSamplePageInfoList } from '@/api/dataquery'
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
      saveOptions: [
        {
          label: "科室样本柜",
          value: 1
        },
        {
          label: "实验公司",
          value: 2
        },
        {
          label: "合作单位",
          value: 3
        },
        {
          label: "其他",
          value: 4
        }
      ],
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      this.listLoading = true
      this.listQuery.centerId = this.centerId
      const { data } = await getOrganizeSamplePageInfoList(this.listQuery)
      const items = data.data
      this.total = data.totalCount
      this.list = items.map(v => {
        return v
      })
      this.listLoading = false
    }, getLabelFromValue(options, value) {
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
</style>
