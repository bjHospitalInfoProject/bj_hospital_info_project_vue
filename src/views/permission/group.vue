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
          <p style="text-align: center;font-size: 12px;" title="北京医院血液外科">北京医院血液外科</p>
        </el-col>

        <el-col :span="6">
          <br>
          更新时间:2023-01-01 15:00:00
          <br>
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
            <span>{{ row.id }}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="状态">
          <template slot-scope="{row}">
            <span>{{ row.id }}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="创建时间">
          <template slot-scope="{row}">
            <span>{{ row.author }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="更新时间">
          <template slot-scope="{row}">
            <span>{{ row.author }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="医生数量">
          <template slot-scope="{row}">
            <span>{{ row.author }}</span>
          </template>
        </el-table-column>

        <el-table-column fixed="right" label="操作" width="200">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
            <el-button @click="editList(scope.row)" type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-dialog :title="addGroupForm.id ? '编辑小组' : '创建小组'" :visible.sync="dialogvis" width="50%">
      <div class="dialogBdoy">
        <el-row :gutter="20">
          <el-col :span="14">
            <el-form label-width="80px" :model="addGroupForm">
              <el-form-item style="margin: 10px 0;width:100%;" label="小组名称:">
                <el-input style="width: 100%;" size="mini" v-model="addGroupForm.name"></el-input>
              </el-form-item>
            </el-form>

            <p>初始权限</p>

            <el-table size="mini" :data="authlist" border fit highlight-current-row style="width: 100%">
              <el-table-column align="center" label="">
                <template slot-scope="{row}">
                  <span>{{ row.name }}</span>
                </template>
              </el-table-column>
              <el-table-column align="center" width="80" label="预览">
                <template slot-scope="{row}">
                  <el-checkbox v-model="row.preview"></el-checkbox>
                </template>
              </el-table-column>
              <el-table-column align="center" width="80" label="编辑">
                <template slot-scope="{row}">
                  <el-checkbox @change="authEditChange(row)" v-model="row.edit"></el-checkbox>
                </template>
              </el-table-column>
              <el-table-column align="center" width="80" label="删除">
                <template slot-scope="{row}">
                  <el-checkbox v-model="row.del"></el-checkbox>
                </template>
              </el-table-column>
            </el-table>
          </el-col>
          <el-col :span="10">
            <el-table size="mini" :data="userlist" border fit highlight-current-row style="width: 100%">
              <el-table-column align="center" width="40" type="selection">
              </el-table-column>
              <el-table-column align="center" label="姓名">
                <template slot="header" slot-scope="scope">
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
                </template>

                <template slot-scope="{row}">
                  <span>{{ row.id }}</span>
                </template>
              </el-table-column>
              <el-table-column align="center" label="手机号">
                <template slot-scope="{row}">
                  <span>{{ row.id }}</span>
                </template>
              </el-table-column>
            </el-table>
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
export default {
  data() {
    return {
      grouplist: [{}],
      addGroupForm: {},
      dialogvis: false,
      userlist: [],
      authlist: [
        {
          name: '手术信息 | 模板名',
          // auth:['preview','edit','del'],
          preview: 0,
          edit: 0,
          del: 0
        }
      ]
    }
  },
  methods: {
    addGroup() {
      this.dialogvis = true;
    },
    authEditChange(data) {
      if (data.edit) {
        data.preview = true
      }
    },
    editList() {
      this.dialogvis = true;
      this.addGroupForm.id = 1;
    }
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

