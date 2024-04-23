<template>
  <div class="app-container">


    <div class="filter-container">
      <el-form :inline="true" :model="listQuery" class="demo-form-inline">
        <el-form-item label="姓名">
          <el-input v-model="listQuery.nickname"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="listQuery.username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getList">查询</el-button>
        </el-form-item>
      </el-form>

    </div>

    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="姓名">
        <template slot-scope="{row}">
          <span>{{ row.nickname }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="手机号">
        <template slot-scope="{row}">
          <span>{{ row.username }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="机构">
        <template slot-scope="{row}">
          <span>{{ row.remark }}</span>
        </template>
      </el-table-column>

      <el-table-column label="申请时间">
        <template slot-scope="{row}">

          <span>{{ row.createTime }}</span>
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" label="模板-中心信息">
        <template slot-scope="{row}">

          <div v-for="template in row.sysUserTemplateCenterDto" :key="template.templateId">
            <!-- 内部再遍历每个模板中的 sysCenters 数组 -->
            <div v-for="center in template.sysCenters" :key="center.centerId">
              <el-tag :type="row.status" style="margin-top: 5px;" size="mini">
                {{ template.templateName + '/' + center.centerName }}
              </el-tag>
            </div>
          </div>

        </template>
      </el-table-column>

      <el-table-column label="处理意见">
        <template slot-scope="{row}">

          <span>{{ row.handingOpinions }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="操作" width="300px">
        <template slot-scope="scope">

          <div v-if="scope.row.status == 0">

            <el-button type="success" round size="mini" @click="openAgreeDialogOption(scope.row)">同意</el-button>
            <el-button type="danger" round size="mini" @click="disagreeOption(scope.row)">拒绝</el-button>
          </div>

          <div v-else>
            <div v-if="scope.row.status == 1"><el-tag type="success">已同意</el-tag></div>
            <div v-else><el-tag type="danger">已拒绝</el-tag></div>
          </div>
        </template>


      </el-table-column>
    </el-table>

    <pagination v-show="total > 0" :total="total" :pageNo.sync="listQuery.pageNo" :pageSize.sync="listQuery.pageSize"
      @pagination="getList" />


    <el-dialog title="审批数据库中心权限" :visible.sync="dialogVisiable" width="30%" center>
      <el-form label-width="120px" :model="form">
        <el-form-item label="权限选择">
          <el-cascader :options="options" :props="props" clearable :separator="customSeparator"
            v-model="form.centerIds"></el-cascader>
        </el-form-item>
        <el-form-item label="审批意见">
          <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="form.handingOpinions">
          </el-input>

        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisiable = false">取 消</el-button>
        <el-button type="primary" @click="approvalOption()">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import { getNotificationList, applyNotificationInfo } from '@/api/notification'
import Pagination from '@/components/Pagination'
import { getTempleteIdInfo } from '@/api/user'


export default {
  name: 'InlineEditTable',
  components: { Pagination },

  filters: {

  },
  data() {
    return {
      list: null,
      listLoading: true,
      total: 0,
      listQuery: {
        pageSize: 10,
        pageNo: 1,
        nickname: null,
        username: null
      },
      dialogVisiable: false,
      props: { multiple: true },
      options: [],
      customSeparator: '   --->  ',

      form: {
        centerIds: [],
        handingOpinions: "",
        status: 1,
        userApplyId: ""
      },
    }
  },
  mounted() {
    this.getTempleteIdInfothis()
  },
  created() {
    this.getList()
  },
  methods: {
    //获取模板列表信息
    async getTempleteIdInfothis() {
      const { data } = await getTempleteIdInfo()
      console.log(data)
      this.options = this.formattedOptions(data)
    },
    //格式化模板中心的数据结构
    formattedOptions(data) {
      return data.map(item => ({
        value: item.id,
        label: item.templateName,
        children: item.sysCenters.map(center => ({
          value: center.id,
          label: center.centerName
        }))
      }));
    },
    async getList() {
      this.listLoading = true
      const { data } = await getNotificationList(this.listQuery)
      const items = data.data
      this.total = data.totalCount
      this.list = items.map(v => {
        return v
      })
      this.listLoading = false
    },
    openAgreeDialogOption(row) {
      this.dialogVisiable = true;
      this.form = {
        centerIds: [],
        handingOpinions: "",
        status: 1,
        userApplyId: row.id
      };
    },
    disagreeOption(row) {
      this.form = {
        centerIds: [],
        handingOpinions: "",
        status: 2,
        userApplyId: row.id
      };
      this.approvalOption()
    },
    async approvalOption() {
      this.form.centerIds = this.form.centerIds.map(item => item[1]),
        console.log(this.form.centerIds)
      const { data } = await applyNotificationInfo(this.form)
      if (data) {
        this.dialogVisiable = false;
        this.getList()
      }
    },
  }
}
</script>

<style scoped>
.edit-input {
  padding-right: 100px;
}

.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}

.el-cascader {
  width: 100%;
}
</style>
