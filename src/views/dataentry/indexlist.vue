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
        <el-form-item>
          <el-button type="success" @click="goToCreateInfoOption()">新增</el-button>
        </el-form-item>
      </el-form>

    </div>
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="ID">
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="姓名">
        <template slot-scope="{row}">
          <span>{{ row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="手机号">
        <template slot-scope="{row}">
          <span>{{ row.phone }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="手术次数">
        <template slot-scope="{row}">
          <span>{{ row.surgeriesCount }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="随访次数">
        <template slot-scope="{row}">
          <span>{{ row.followUpCount }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="样本库">
        <template slot-scope="{row}">
          <span>{{ row.sampleCount }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="实验室检验结果">
        <template slot-scope="{row}">
          <span>{{ row.labResultCount }}</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="80">
        <template slot-scope="scope">
          <el-button type="text" @click="goToDetailInfoOption(scope.row)" size="small">详情</el-button>
        </template>
      </el-table-column>

    </el-table>

    <pagination v-show="total > 0" :total="total" :pageNo.sync="listQuery.pageNo" :limit.pageSize="listQuery.pageSize"
      @pagination="getList" />

  </div>
</template>

<script>
import { getPatientStaticPageInfo } from '@/api/dataquery'
import Pagination from '@/components/Pagination'
import { mapGetters } from 'vuex'


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
      const { data } = await getPatientStaticPageInfo(this.listQuery)
      const items = data.data
      this.total = data.totalCount
      this.list = items.map(v => {
        return v
      })
      this.listLoading = false
    },
    goToDetailInfoOption(row) {
      console.log(row)
      this.$router.push({ path: '/dataentry/index', query: { code: row.patientCode } })
    },
    goToCreateInfoOption() {
      this.$router.push({ path: '/dataentry/index' })
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
