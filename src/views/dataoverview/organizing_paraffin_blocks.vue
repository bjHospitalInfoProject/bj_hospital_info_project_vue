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
      <el-table-column align="center" label="组织石蜡块ID">
        <template slot-scope="{row}">
          <span>{{ row.tissueParaffinBlockId }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="目前有无蜡块">
        <template slot-scope="{row}">
          <span>{{ getLabelFromValue(Options, row.hasBlock) }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="石蜡块编号">
        <template slot-scope="{row}">
          <span>{{ row.blockNumber }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="是否已切白片">
        <template slot-scope="{row}">
          <span>{{ getLabelFromValue(Options, row.hasSlide) }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="包埋时间">
        <template slot-scope="{row}">
          <span>{{ row.embeddingTime }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="组织性质">
        <template slot-scope="{row}">
          <span>{{ getLabelFromValue(orgOptions, row.tissueProperty) }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="组织来源 (x动脉/周围x组织)">
        <template slot-scope="{row}">
          <span>{{ row.tissueSource }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="来源住院手术信息ID">
        <template slot-scope="{row}">
          <span>{{ row.surgeryInfoId }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="当前保存位置">
        <template slot-scope="{row}">
          <span>{{ getLabelFromValue(saveOptions, row.storageLocation) }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="备注">
        <template slot-scope="{row}">
          <span>{{ row.notes }}</span>
        </template>
      </el-table-column>

    </el-table>

    <pagination v-show="total > 0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit"
      @pagination="getList" />

  </div>
</template>

<script>
import { getTissueParaffinPageInfo } from '@/api/dataquery'
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
      Options: [
        {
          label: "无",
          value: 0
        },
        {
          label: "有",
          value: 1
        }
      ],
      orgOptions: [
        {
          label: "无",
          value: 0
        },
        {
          label: "病变",
          value: 1
        },
        {
          label: "相对健康",
          value: 2
        },
        {
          label: "健康",
          value: 3
        },
        {
          label: "NA",
          value: 4
        }
      ],
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
      const { data } = await getTissueParaffinPageInfo(this.listQuery)
      console.log(data)
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
