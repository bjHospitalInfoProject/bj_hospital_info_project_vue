<template>
  <div class="app-container">

    <div class="filter-container">
      <!-- <el-input v-model="listQuery.name" placeholder="姓名" style="width: 200px;" @keyup.enter.native="handleFilter" />
      <el-input v-model="listQuery.tel" placeholder="手机号" style="width: 200px;" class="filter-item"
        @keyup.enter.native="handleFilter" />

      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        搜索
      </el-button> -->

      <el-form :inline="true" :model="listQuery" class="demo-form-inline">
        <el-form-item label="姓名">
          <el-input v-model="listQuery.user"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="listQuery.tel"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>

    </div>

    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="姓名">
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="所在小组">
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="手机号">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="上次登录时间">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>

      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">移动小组</el-button>
          <el-button type="text" @click="deleteoption" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total > 0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit"
      @pagination="getList" />


    <el-dialog title="移动小组" :visible.sync="dialogvis" width="50%">
      <div class="dialogBdoy">
        <el-row :gutter="20">
          <el-col :span="11">
            <el-form label-width="0" :model="addGroupForm">

              <div style="display: flex; justify-content: left; align-items: center;">
                <span style="color: rgb(43, 86, 226);">目前小组</span>
              </div>
              <el-form-item style="margin: 0px 0;width:100%;" label="">
                <el-input style="width: 100%;" size="mini" v-model="addGroupForm.name"></el-input>
              </el-form-item>

              <el-form-item style="margin-top: 20px;">
                <el-table size="mini" :data="authlist" border fit highlight-current-row style="width: 100%">
                  <el-table-column align="center" label="模版名称">
                    <template slot-scope="{row}">
                      <span>{{ row.name }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" width="80" label="预览">
                    <template slot-scope="{row}">
                      <el-checkbox disabled :checked="row.preview == 1"></el-checkbox>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" width="80" label="编辑">
                    <template slot-scope="{row}">
                      <el-checkbox disabled :checked="row.edit == 1"></el-checkbox>

                    </template>
                  </el-table-column>
                  <el-table-column align="center" width="80" label="删除">
                    <template slot-scope="{row}">
                      <el-checkbox disabled :checked="row.del == 1"></el-checkbox>
                    </template>
                  </el-table-column>
                </el-table>
              </el-form-item>

            </el-form>


          </el-col>

          <el-col :span="2" style="display: flex; align-items: center; justify-content: center; height: 300px">
            <img style="width:90%" src="@/assets/images/jiantou.png" alt="">
          </el-col>
          <el-col :span="11">
            <el-form label-width="0px" :model="addGroupForm">

              <div style="display: flex; justify-content: left; align-items: center;">
                <span style="color: rgb(43, 226, 110);font-weight: 1000;">目标小组</span>
              </div>
              <el-form-item style="margin: 0px 0;width:100%;" label="">
                <el-input style="width: 100%;" size="mini" v-model="addGroupForm.name"></el-input>
              </el-form-item>

              <el-form-item style="margin-top: 20px;">
                <el-table size="mini" :data="authlist" border fit highlight-current-row style="width: 100%">
                  <el-table-column align="center" label="模版名称">
                    <template slot-scope="{row}">
                      <span>{{ row.name }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" width="80" label="预览">
                    <template slot-scope="{row}">
                      <el-checkbox disabled :checked="row.preview == 1"></el-checkbox>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" width="80" label="编辑">
                    <template slot-scope="{row}">
                      <el-checkbox disabled :checked="row.edit == 1"></el-checkbox>

                    </template>
                  </el-table-column>
                  <el-table-column align="center" width="80" label="删除">
                    <template slot-scope="{row}">
                      <el-checkbox disabled :checked="row.del == 1"></el-checkbox>
                    </template>
                  </el-table-column>
                </el-table>
              </el-form-item>

            </el-form>


          </el-col>
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="dialogvis = false">取 消</el-button>
        <el-button size="small" type="primary" @click="dialogvis = false">保 存</el-button>
      </span>
    </el-dialog>

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
      addGroupForm: {},
      dialogvis: false,
      authlist: [
        {
          name: '手术信息 | 模板名',
          // auth:['preview','edit','del'],
          preview: 1,
          edit: 1,
          del: 0
        },
        {
          name: '影像学检查 | 模版名',
          // auth:['preview','edit','del'],
          preview: 1,
          edit: 1,
          del: 1
        }, {
          name: '随访记录 | 模板名',
          // auth:['preview','edit','del'],
          preview: 0,
          edit: 0,
          del: 0
        }
        , {
          name: '血样本 | 模板名',
          // auth:['preview','edit','del'],
          preview: 1,
          edit: 0,
          del: 0
        }
        , {
          name: '冷冻组织 | 模板名',
          // auth:['preview','edit','del'],
          preview: 1,
          edit: 1,
          del: 1
        }
      ]
    }
  },
  created() {
    this.getList()
  },
  methods: {
    deleteoption() {
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {

      });
    },
    onSubmit() {
      console.log('submit!');
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
    //更换小组的点击
    handleClick(row) {
      this.dialogvis = true;
      console.log(row)
    }
  }
}
</script>

<style scoped>
.filter-container {
  margin-bottom: 10px;

  .filter-item {
    margin-left: 20px;
  }
}
</style>
