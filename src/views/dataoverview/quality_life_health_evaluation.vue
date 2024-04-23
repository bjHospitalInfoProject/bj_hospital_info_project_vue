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
      <el-table-column align="center" label="生活质量健康评价ID">
        <template slot-scope="{row}">
          <span>{{ row.healthQualityEvaluationId }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="填报人">
        <template slot-scope="{row}">
          <span>{{ row.reporter }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="填报时间">
        <template slot-scope="{row}">
          <span>{{ row.reportDate }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="评价日期">
        <template slot-scope="{row}">
          <span>{{ row.evaluationDate }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="EQ-5D量表得分">
        <template slot-scope="{row}">
          <span>{{ row.eq5dScore }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="EQ-5D量表评价时间">
        <template slot-scope="{row}">
          <span>{{ row.eq5dEvaluationDate }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="SF-36量表得分">
        <template slot-scope="{row}">
          <span>{{ row.sf36Score }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="SF-36量表评价时间">
        <template slot-scope="{row}">
          <span>{{ row.sf36EvaluationDate }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="焦虑自评量表(SAS)得分">
        <template slot-scope="{row}">
          <span>{{ row.sasScore }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="焦虑自评量表(SAS)评价时间">
        <template slot-scope="{row}">
          <span>{{ row.sasEvaluationDate }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="抑郁自评量表(SDS)得分">
        <template slot-scope="{row}">
          <span>{{ row.sdsScore }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="抑郁自评量表(SDS)评价时间">
        <template slot-scope="{row}">
          <span>{{ row.sdsEvaluationDate }}</span>
        </template>
      </el-table-column>

    </el-table>

    <pagination v-show="total > 0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit"
      @pagination="getList" />

  </div>
</template>

<script>

import { getHealthQualityPageInfoList } from '@/api/dataquery'
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
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      this.listLoading = true
      this.listQuery.centerId = this.centerId
      const { data } = await getHealthQualityPageInfoList(this.listQuery)
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
</style>
