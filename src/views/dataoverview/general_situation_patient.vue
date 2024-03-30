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

      <el-table-column fixed="right" label="操作" width="80">
        <template slot-scope="scope">
          <el-button type="text" @click="getDetailInfoOption" size="small">详情</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total > 0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit"
      @pagination="getList" />

    <el-drawer title="详情信息" size="50%" :visible.sync="drawer" direction="rtl">

      <el-form label-width="200px" :model="detailInfo" style="padding-right: 20px;">

        <el-row>
          <el-col :span="12">
            <el-form-item label="出生日期：">
              <el-date-picker v-model="detailInfo.name" style="width:150px" size="mini" type="date" placeholder="选择日期">
              </el-date-picker>
            </el-form-item>

          </el-col>
          <el-col :span="12">
            <el-form-item label="性别：">
              <el-select :disabled="editVis" style="width:150px" size="mini" v-model="detailInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in sexOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>

        </el-row>

        <el-row>

          <el-col :span="12">
            <el-form-item label="民族：">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="detailInfo.name"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="地区：">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="detailInfo.name"></el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="手术干预情况：">
              <el-select :disabled="editVis" style="width:150px" size="mini" v-model="detailInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in ganyuoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>

          </el-col>
          <el-col :span="12">

            <el-form-item label="重建血管数：">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="detailInfo.name"></el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>

          <el-col :span="12">

            <el-form-item label="介入手术次数：">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="detailInfo.name"></el-input>

            </el-form-item>
          </el-col>
          <el-col :span="12">

            <el-form-item label="支架植入次数：">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="detailInfo.name"></el-input>

            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="开刀手术次数：">
              <el-input :disabled="editVis" size="mini" style="width:150px" v-model="detailInfo.name"></el-input>
            </el-form-item>

          </el-col>

          <el-col :span="12">

            <el-form-item label="桥血管(人工血管)数：">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="detailInfo.name"></el-input>

            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">

            <el-form-item label="桥血管(自体血管)数：">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="detailInfo.name"></el-input>

            </el-form-item>
          </el-col>
          <el-col :span="12">

            <el-form-item label="桥血管(人工、自体序贯)数：">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="detailInfo.name"></el-input>

            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="杂交手术次数：">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="detailInfo.name"></el-input>

            </el-form-item>

          </el-col>
          <el-col :span="12">

            <el-form-item label="ABO血型：">
              <el-select :disabled="editVis" size="mini" style="width:150px" v-model="detailInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in ABOOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>


        </el-row>
        <el-row>

          <el-col :span="12">

            <el-form-item label="Rh血型：">
              <el-select :disabled="editVis" size="mini" style="width:150px" v-model="detailInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in RHoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">

            <el-form-item label="随访电话1：">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="detailInfo.name"></el-input>

            </el-form-item>
          </el-col>

        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="随访电话2:">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="detailInfo.name"></el-input>

            </el-form-item>

          </el-col>
          <el-col :span="12">

            <el-form-item label="随访情况：">
              <el-select :disabled="editVis" size="mini" style="width:150px" v-model="detailInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in suifangoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">

            <el-form-item label="微信随访群：">
              <el-select :disabled="editVis" size="mini" style="width:150px" v-model="detailInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in WXsuifangoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="12">

            <el-form-item label="首发表现：">
              <el-select :disabled="editVis" size="mini" style="width:150px" v-model="detailInfo.hospital" multiple
                filterable allow-create placeholder="请选择">
                <el-option v-for="item in firstoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="首次表现时间:">
              <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="首次确诊时间:">
              <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="首次确诊医院:">
              <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="总体评价：">
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
        limit: 10,
        user: "",
        tel: "",
        centerCode: 1001
      },
      drawer: false,
      detailInfo: {
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
.el-form-item{
  margin-bottom: 5px;
}
</style>
