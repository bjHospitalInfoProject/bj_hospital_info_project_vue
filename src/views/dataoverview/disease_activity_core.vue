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


      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="NIH活动性评分得分" name="first">
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

        <el-tab-pane label="ITAS 2010活动性评分得分" name="six">

          <el-row>
            <el-col :span="5">
              <div>
                结核抗体快速卡试验：
              </div>
            </el-col>
            <el-col :span="19">
              <div>
                <el-input :disabled="true" type="textarea" :rows="3" placeholder="请输入内容">
                </el-input>

              </div>
            </el-col>
          </el-row>

        </el-tab-pane>
        <el-tab-pane label="ITAS-A活动性评分得分" name="s">定时任务补偿</el-tab-pane>


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
      list: null,
      drawer: false,
      activeName: 'first',
      listLoading: true,
      total: 0,
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
