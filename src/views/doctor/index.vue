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

      <el-table-column label="创建时间">
        <template slot-scope="{row}">

          <span>{{ row.createTime }}</span>
        </template>
      </el-table-column>

      <el-table-column label="上次登录时间">
        <template slot-scope="{row}">

          <span>{{ row.loginTime }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="操作" width="300px">
        <template slot-scope="scope">
          <el-button type="text" round size="small" @click="updateoption(scope.row)">修改</el-button>
          <el-button type="text" round size="small" @click="resetPasswordeoption(scope.row)">重置密码</el-button>
          <el-button type="text" round size="small" @click="deleteoption(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total > 0" :total="total" :pageNo.sync="listQuery.pageNo" :pageSize.sync="listQuery.pageSize"
      @pagination="getList" />

    <el-dialog title="更改模板库中心权限" :visible.sync="dialogVisiable" width="30%" center>
      <el-form label-width="120px" :model="updateForm">
        <el-form-item label="权限选择">
          <el-cascader :options="options" :props="props" clearable :separator="customSeparator"
            v-model="selectedOptions"></el-cascader>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisiable = false">取 消</el-button>
        <el-button type="primary" @click="updateSubmit()">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import { getDoctorList, delDoctorInfo, updateDoctorInfo } from '@/api/doctor'
import Pagination from '@/components/Pagination'
import { getTempleteIdInfo } from '@/api/user'


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
        pageSize: 10,
        pageNo: 1,
        nickname: null,
        username: null
      },
      dialogVisiable: false,
      props: { multiple: true },
      options: [],
      customSeparator: '   --->  ',
      selectedOptions: [],
      updateForm: {}
    }
  },
  created() {
    this.getList()
  },
  mounted() {
    this.getTempleteIdInfothis()
  },
  methods: {
    //获取模板列表信息
    async getTempleteIdInfothis() {
      const { data } = await getTempleteIdInfo()
      console.log(data)
      this.options = this.formattedOptions(data)
    },
    async getList() {
      this.listLoading = true
      const { data } = await getDoctorList(this.listQuery)
      const items = data.data
      this.total = data.totalCount
      this.list = items.map(v => {

        return v
      })
      this.listLoading = false
    },
    deleteoption(row) {
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.delDoctorInfoOption(row)
      }).catch(() => {
        this.$message({
          message: '操作失败',
          type: 'error'
        });
      });
    },
    //  删除医生信息
    async delDoctorInfoOption(row) {
      const { data } = await delDoctorInfo({ userId: row.id })
      console.log(data)
      if (data) {
        this.$message({
          message: '操作成功',
          type: 'success'
        });
        this.getList()
      }
    }
    ,
    //修改医生权限
    updateoption(row) {
      this.updateForm = { ...row }
      this.dialogVisiable = true;
      this.selectedOptions = row.sysUserTemplateCenterDto.flatMap(item =>
        item.sysCenters.map(center => [item.templateId, center.centerId])
      );

    },
    //重置密码信息
    async resetPasswordeoption(row) {
      const { data } = await updateDoctorInfo({
        password: "000000",
        userId: row.id
      })
      console.log(data)
      if(data){
        this.$message({
          message: '密码重置成功',
          type: 'success'
        });
      }

    },
    //更改用户模板中心信息
    async updateSubmit() {
      console.log(this.selectedOptions)
      console.log(this.updateForm.id)

      const { data } = await updateDoctorInfo({
        centerIds: this.selectedOptions.map(item => item[1]),
        userId: this.updateForm.id
      })
      console.log(data)
      if (data) {
        this.dialogVisiable = false;
        this.$message({
          message: '操作成功',
          type: 'success'
        });
        this.getList()
      }
    },
    formattedOptions(data) {
      return data.map(item => ({
        value: item.id,
        label: item.templateName,
        children: item.sysCenters.map(center => ({
          value: center.id,
          label: center.centerName
        }))
      }));
    }
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
