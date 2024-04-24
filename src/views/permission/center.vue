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
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>

    </div>

    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="姓名">
        <template slot-scope="{row}">
          <span>{{ row.nickname }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="所在小组">
        <template slot-scope="{row}">
          <span>{{ row.groupName }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="手机号">
        <template slot-scope="{row}">
          <span>{{ row.username }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="上次登录时间">
        <template slot-scope="{row}">
          <span>{{ row.lastLoginTime }}</span>
        </template>
      </el-table-column>

      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">移动小组</el-button>
          <el-button type="text" @click="deleteoption(scope.row)" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total > 0" :total="total" :pageNo.sync="listQuery.pageNo" :pageSize.sync="listQuery.pageSize"
      @pagination="getList" />


    <el-dialog title="移动小组" :visible.sync="dialogvis" width="70%" top="5%">
      <div class="dialogBdoy">
        <el-row :gutter="20">
          <el-col :span="11">
            <el-form label-width="0" :model="addGroupInfoForm">

              <div style="display: flex; justify-content: left; align-items: center;">
                <span style="color: rgb(43, 86, 226);">当前小组</span>
              </div>
              <el-form-item style="margin: 0px 0;width:100%;" label="">
                <el-input style="width: 100%;" size="mini" :disabled="true"
                  v-model="addGroupInfoForm.groupName"></el-input>
              </el-form-item>

              <el-form-item style="margin-top: 20px;">
                <el-table size="mini" :height="400" :data="addGroupInfoForm.permissions" border fit highlight-current-row
                  style="width: 100%">
                  <el-table-column align="center" label="模版名称">
                    <template slot-scope="{row}">
                      <span>{{ row.dataType }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" width="80" label="预览">
                    <template slot-scope="scope">
                      <el-checkbox disabled :checked="isChecked(scope.row, 'query')"></el-checkbox>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" width="80" label="编辑">
                    <template slot-scope="scope">
                      <el-checkbox disabled :checked="isChecked(scope.row, 'edit')"></el-checkbox>

                    </template>
                  </el-table-column>
                  <el-table-column align="center" width="80" label="删除">
                    <template slot-scope="scope">
                      <el-checkbox disabled :checked="isChecked(scope.row, 'delete')"></el-checkbox>
                    </template>
                  </el-table-column>
                </el-table>
              </el-form-item>
            </el-form>


          </el-col>

          <el-col :span="2" style="display: flex; align-items: center; justify-content: center; height: 400px">
            <img style="width:90%" src="@/assets/images/jiantou.png" alt="">
          </el-col>
          <el-col :span="11">
            <el-form label-width="0px">
              <div style="display: flex; justify-content: left; align-items: center;">
                <span style="color: rgb(43, 226, 110);font-weight: 1000;">目标小组</span>
              </div>
              <el-form-item style="margin: 0px 0;width:100%;" label="">
                <el-select class="borderNone" size="mini" style="width: 100%;"v-model="updateGroupId" @change="getGroupPermissionInfo()"
                  placeholder="请选择目标小组">
                  <el-option v-for="item in grouplist" :key="item.id" :label="item.description" :value="item.id">
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item style="margin-top: 20px;">
                <el-table size="mini" :height="400" :data="updatePermissionList" border fit highlight-current-row style="width: 100%">
                  <el-table-column align="center" label="模版名称">
                    <template slot-scope="{row}">
                      <span>{{ row.dataType }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" width="80" label="预览">
                    <template slot-scope="scope">
                      <el-checkbox disabled :checked="isChecked(scope.row, 'query')"></el-checkbox>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" width="80" label="编辑">
                    <template slot-scope="scope">
                      <el-checkbox disabled :checked="isChecked(scope.row, 'edit')"></el-checkbox>

                    </template>
                  </el-table-column>
                  <el-table-column align="center" width="80" label="删除">
                    <template slot-scope="scope">
                      <el-checkbox disabled :checked="isChecked(scope.row, 'delete')"></el-checkbox>
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
        <el-button size="small" type="primary" @click="updateDoctorGroupInfoOption()">保 存</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import { getCenterDoctorList, delCenterToDoctorInfo, getTempletePermissionInfo } from '@/api/permission'
import Pagination from '@/components/Pagination'
import { mapGetters } from 'vuex'

import { getGroupDetailInfo, getCenterGroupList } from '@/api/group'

import { updateDoctorGroupInfo } from '@/api/user'



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
        nickname: '',
        username: '',
        centerId: ''
      },
      addGroupForm: {},
      addGroupInfoForm: {},
      dialogvis: false,
      updatePermissionList: [],
      grouplist: [],
      updateGroupId: '',
      updateUserId: ''
    }
  },
  created() {
    this.getList()
  },
  computed: {
    ...mapGetters([
      'centerId'
    ]),
  },
  methods: {
    isChecked(row, type) {
      return row.operateTypes.some(op => op.operateType === type);
    },
    findOpId(row, type) {
      let found = row.operateTypes.find(op => op.operateType === type);
      return found ? found.id : null;
    },
    handleCheckChange(checkedId, row, type) {
      if (checkedId) {
        // Add the id to selectedIds if it's not already included
        if (!this.selectedIds.includes(checkedId)) {
          this.selectedIds.push(checkedId);
        }
      } else {
        // Remove the id from selectedIds
        this.selectedIds = this.selectedIds.filter(id => id !== this.findOpId(row, type));
      }
      console.log('Selected IDs:', this.selectedIds);
    },
    deleteoption(row) {
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.delCenterToDoctor(row.id)
      }).catch(() => {

      });
    },
    //删除医生的网络请求
    async delCenterToDoctor(userId) {
      const { data } = await delCenterToDoctorInfo({ centerId: this.centerId, userId: userId })
      console.log(data)
      if (data) {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
        this.getList()
      }
    },
    onSubmit() {
      this.getList()
    },
    async getList() {
      this.listLoading = true
      this.listQuery.centerId = this.centerId
      console.log(this.listQuery)
      const { data } = await getCenterDoctorList(this.listQuery)
      const items = data.data
      this.total = data.totalCount
      this.list = items.map(v => {
        return v
      })
      this.listLoading = false
    },
    //更换小组的点击
    handleClick(data) {
      this.dialogvis = true;
      this.getgroupInfo(data.groupId)
      this.getGroupList()
      this.updateGroupId = ''
      this.updatePermissionList = []
      this.updateUserId = data.id
    },
    async getgroupInfo(groupId) {
      const { data } = await getGroupDetailInfo({
        groupId: groupId
      })
      console.log(data)
      this.addGroupInfoForm = { ...data }
    },
    async getGroupPermissionInfo() {
      const { data } = await getGroupDetailInfo({
        groupId: this.updateGroupId
      })
      console.log(data)
      this.updatePermissionList = data.permissions
      console.log(this.updatePermissionList)

    },
    async getGroupList() {
      const { data } = await getCenterGroupList({ centerId: this.centerId })
      const items = data.data
      this.grouplist = items
    },

    async updateDoctorGroupInfoOption() {
      const { data } = await updateDoctorGroupInfo({ centerId: this.centerId, groupId: this.updateGroupId, userId: this.updateUserId })

      if (data) {
        this.dialogvis = false
        this.getList()
      }
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
