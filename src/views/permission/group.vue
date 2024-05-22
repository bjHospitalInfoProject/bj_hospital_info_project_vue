<template>
  <div class="app-container">
    <el-card class=" centralState">
      <div slot="header" class="clearfix">
        <span>中心状态</span>
      </div>
      <el-row>
        <el-col :span="3">
          <div class="avatarImg" @click="dialogvis = true">
            <img style="width: 100%;height: 100%;" src="/logo.png" alt="">
          </div>
          <p style="text-align: center;font-size: 12px;">{{ centerName }}</p>
        </el-col>

        <el-col :span="6">
          <br>
          <svg-icon style="font-size: 24px;" icon-class="runIcon" />
          正常运行
        </el-col>
      </el-row>

    </el-card>

    <el-card class="groupList">
      <div slot="header" class="clearfix">
        <span>小组列表</span>
        <el-button @click="addGroup" style="float: right;" type="success" size="small">添加</el-button>
      </div>

      <el-table :data="grouplist" border fit highlight-current-row style="width: 100%">
        <el-table-column align="center" label="名称">
          <template slot-scope="{row}">
            <span>{{ row.groupName }}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="状态">
          <template slot-scope="{row}">
            <div v-if="row.status == 1"><el-tag type="success">启用</el-tag></div>
            <div v-else><el-tag type="danger">删除</el-tag></div>
          </template>
        </el-table-column>

        <el-table-column align="center" label="创建时间">
          <template slot-scope="{row}">
            <span>{{ row.createTime }}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="医生数量">
          <template slot-scope="{row}">
            <span>{{ row.userCount }}</span>
          </template>
        </el-table-column>

        <el-table-column fixed="right" label="操作" width="200">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
            <el-button @click="editList(scope.row)" type="text" size="small">编辑</el-button>
            <el-button type="text" @click="deleteoption(scope.row)" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <pagination v-show="total > 0" :total="total" :pageNo.sync="listQuery.pageNo" :pageSize.sync="listQuery.pageSize"
        @pagination="getList" />
    </el-card>

    <el-dialog :title="addGroupForm.id ? '编辑小组' : '创建小组'" :visible.sync="dialogvis" width="60%" height="30%" top="5%">
      <div class="dialogBdoy">
        <el-row :gutter="20">
          <el-col :span="14">
            <el-form label-width="80px" :model="addGroupForm">
              <el-form-item style="margin: 10px 0;width:100%;" label="小组名称:">
                <el-input style="width: 100%;" size="mini" v-model="addGroupForm.name"></el-input>
              </el-form-item>
            </el-form>
            <p>初始权限</p>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="14">
            <el-table size="mini" :height="400" :data="authlist" border fit highlight-current-row style="width: 100%">
              <el-table-column align="center" label="模版名称">
                <template slot-scope="{row}">
                  <span>{{ row.dataType }}</span>
                </template>
              </el-table-column>
              <el-table-column align="center" width="80" label="预览">
                <template slot-scope="scope">
                  <el-checkbox :true-label="findOpId(scope.row, 'query')" :false-label="null"
                    :checked="addGroupForm.id == '' ? false : isChecked(scope.row, 'query')"
                    @change="handleCheckChange($event, scope.row, 'query')">
                  </el-checkbox>
                </template>
              </el-table-column>
              <el-table-column align="center" width="80" label="编辑">
                <template slot-scope="scope">
                  <el-checkbox :true-label="findOpId(scope.row, 'edit')" :false-label="null"
                    :checked="addGroupForm.id == '' ? false : isChecked(scope.row, 'edit')"
                    @change="handleCheckChange($event, scope.row, 'edit')">
                  </el-checkbox>

                </template>
              </el-table-column>
              <el-table-column align="center" width="80" label="删除">
                <template slot-scope="scope">
                  <el-checkbox :true-label="findOpId(scope.row, 'delete')" :false-label="null"
                    :checked="addGroupForm.id == '' ? false : isChecked(scope.row, 'delete')"
                    @change="handleCheckChange($event, scope.row, 'delete')">
                  </el-checkbox>
                </template>
              </el-table-column>
            </el-table>
          </el-col>
          <el-col :span="10">
            <el-table :height="400" size="mini" :data="userlist" border fit highlight-current-row style="width: 100%"
              @selection-change="handleSelectionChange">
              <el-table-column align="center" width="40" type="selection">
              </el-table-column>
              <el-table-column align="center" label="姓名">
                <!-- <template slot="header" slot-scope="scope">
                  <el-popover placement="top">
                    <template slot="reference">
                      <el-button type="text" style="padding:0;color: #515a6e;font-weight: 600;">姓名
                        <i style="vertical-align: text-top;margin-top: 4px;" class="el-icon-search"></i>
                      </el-button>
                    </template>
                    <el-input style="width:70%" v-model="queryParams" size="mini" placeholder="请输入姓名"></el-input>
                    &nbsp;
                    <el-button type="primary" size="mini" @click="onSearch">确定</el-button>
                  </el-popover>
                </template> -->

                <template slot-scope="{row}">
                  <span>{{ row.nickname }}</span>
                </template>
              </el-table-column>
              <el-table-column align="center" label="手机号">
                <template slot-scope="{row}">
                  <span>{{ row.username }}</span>
                </template>
              </el-table-column>
            </el-table>
          </el-col>
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="dialogvis = false">取 消</el-button>
        <el-button size="small" type="primary" @click="addGroupInfo()">保 存</el-button>
      </span>
    </el-dialog>
  </div>
</template>


<script>

import { getCenterGroupList, createGroupInfo, delGroupInfo, updateGroupInfo } from '@/api/group'
import { mapGetters } from 'vuex'
import Pagination from '@/components/Pagination'
import { getTempletePermissionInfo, getCenterDoctorList } from '@/api/permission'

export default {
  data() {
    return {
      grouplist: [],
      addGroupForm: {
        id: ''
      },
      total: 0,
      dialogvis: false,
      userlist: [],
      authlist: [],
      listQuery: {
        pageNo: 1,
        pageSize: 10,
        centerId: ''
      },
      selectedIds: [],
      users: []
    }
  },
  created() {
    this.getList()
  },
  computed: {
    ...mapGetters([
      'centerId',
      'templateId',
      'centerName'
    ]),
  },
  methods: {
    isChecked(row, type) {
      return row.operateTypes.some(op => op.operateType === type);
    },
    findOpId(row, type) {
      let found = row.operateTypes.find(op => op.operateType === type);
      // console.log(found)
      return found ? found.id : null;
    },
    handleCheckChange(checkedId, row, type) {
      console.log(checkedId)
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

    handleSelectionChange(selection) {
      this.users = selection.map(item => item.id);
      console.log('选中行的id:', this.users);
    },
    addGroup() {
      this.dialogvis = true;
      this.getPermissionList()
      this.getCenterDoctorList()
    },

    async addGroupInfo() {
      const { data } = await createGroupInfo({
        centerId: this.centerId, groupName: this.addGroupForm.name,
        users: this.users, dataPermissions: this.selectedIds
      })
      console.log(data)
      if (data) {
        this.dialogvis = false
        this.$message({
          type: 'success',
          message: '操作成功!'
        });
        this.getList()
      }

    },
    //获取当前模板的所有权限
    async getPermissionList() {
      const { data } = await getTempletePermissionInfo({ templateId: this.templateId })
      console.log(data)
      this.authlist = data
    },

    //获取当中心下的所有医生列表
    async getCenterDoctorList() {
      const { data } = await getCenterDoctorList({
        pageNo: 1,
        pageSize: 1000,
        centerId: this.centerId
      },)
      console.log(data)
      this.userlist = data.data
    },
    authEditChange(data) {
      if (data.edit) {
        data.preview = true
      }
    },
    editList(row) {
      console.log(row)
      this.dialogvis = true;
      this.addGroupForm = { ...row }
    },
    async getList() {
      this.listLoading = true
      this.listQuery.centerId = this.centerId
      console.log(this.listQuery)
      const { data } = await getCenterGroupList(this.listQuery)
      const items = data.data
      this.total = data.totalCount
      this.grouplist = items.map(v => {
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
        this.delGroupInfoOption(row.id)
      }).catch(() => {

      });
    },
    //删除小组的网络请求
    async delGroupInfoOption(groupId) {
      const { data } = await delGroupInfo({ groupId: groupId })
      console.log(data)
      if (data) {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
        this.getList()
      }
    },
  }
}
</script>

<style scoped lang="less">
.groupList {
  margin-top: 20px;
  height: calc(100vh - 110px - 20vh);
}

.centralState {
  min-height: 20vh;
}

.avatarImg {
  cursor: pointer;
  width: 66px;
  height: 66px;
  margin: 0 auto;
  background: rgba(192, 196, 204);
  border: 1px solid rgba(192, 196, 204);
  border-radius: 8px;
}
</style>
