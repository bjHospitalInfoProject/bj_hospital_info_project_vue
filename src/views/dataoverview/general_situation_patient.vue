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
      <el-table-column align="center" label="病人ID">
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="姓名缩写">
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="出生日期">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="性别">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column> 
      <el-table-column align="center" label="名族">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column> 
      <el-table-column align="center" label="地区">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column> 
      <el-table-column align="center" label="住院手术次数">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column> 
      <el-table-column align="center" label="手术敢于情况">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column> 
      <el-table-column align="center" label="重建血管数">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
       <el-table-column align="center" label="介入手术次数">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column> 
      <el-table-column align="center" label="支架植入次数">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="开刀手术次数">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="桥血管(人工血管)数">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="桥血管(自体血管)数">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="桥血管(人工、自体序贯)数">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="杂交手术次数">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="ABO血型">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="Rh血型">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="随访电话1">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="随访电话2">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="随访情况">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="微信随访群">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="最近一次随访时间">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="总体评价">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="首发表现">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="首次表现时间(年-月)">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="首次确诊时间(年-月-日)">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="首次确诊医院">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="外院大动脉炎手术史">
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
