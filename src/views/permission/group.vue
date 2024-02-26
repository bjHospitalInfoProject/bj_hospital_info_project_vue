<template>
  <div class="app-container">
    <el-card class="box-card centralState">
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
          <svg style="vertical-align: text-top;margin-top: -3px;" t="1708951680031" class="icon" viewBox="0 0 1024 1024"
            version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4230" width="24" height="24">
            <path
              d="M518.4 300.8c-55.1 0-100-44.8-100-99.9 0-55.1 44.8-100 100-100 55.1 0 99.9 44.8 99.9 100 0 55-44.8 99.9-99.9 99.9z m0-165.7c-36.2 0-65.7 29.5-65.7 65.7s29.5 65.7 65.7 65.7 65.7-29.5 65.7-65.7-29.5-65.7-65.7-65.7z m359.4 419.4c14.4-150.7-63.3-292.6-198.2-361.4-8.5-4.4-18.7-1-23 7.5-4.3 8.4-1 18.7 7.5 23 122.2 62.4 192.8 191 179.7 327.6-0.9 9.4 6 17.8 15.4 18.7 0.6 0.1 1.1 0.1 1.7 0.1 8.6 0 16-6.6 16.9-15.5z m-712.5 15.4c9.4-0.9 16.3-9.3 15.4-18.7-13.1-136.6 57.5-265.2 179.7-327.6 8.4-4.3 11.8-14.6 7.5-23-4.3-8.4-14.6-11.8-23-7.5C210 261.9 132.2 403.8 146.7 554.5c0.8 8.8 8.3 15.5 17 15.5 0.5 0 1.1 0 1.6-0.1z m589.8 252.7c7.2-6.1 8.1-16.9 2-24.1-6.1-7.2-16.9-8.1-24.1-2-59.8 50.7-136.1 78.7-214.6 78.7-80 0-157.4-28.9-217.7-81.3-7.1-6.2-18-5.5-24.1 1.7-6.2 7.1-5.4 17.9 1.7 24.1 66.6 57.8 151.9 89.7 240.2 89.7 86.5 0 170.6-30.8 236.6-86.8z m71.7-44.6c-55.1 0-99.9-44.8-99.9-99.9s44.8-99.9 99.9-99.9 99.9 44.8 99.9 99.9-44.8 99.9-99.9 99.9z m0-165.7c-36.2 0-65.7 29.5-65.7 65.7s29.5 65.7 65.7 65.7 65.7-29.5 65.7-65.7c0.1-36.2-29.4-65.7-65.7-65.7z m-631 170.9c-55.1 0-99.9-44.8-99.9-100 0-55.1 44.8-99.9 99.9-99.9s99.9 44.8 99.9 99.9c0.1 55.2-44.8 100-99.9 100z m0-165.7c-36.2 0-65.7 29.5-65.7 65.7s29.5 65.7 65.7 65.7 65.7-29.5 65.7-65.7c0.1-36.2-29.4-65.7-65.7-65.7z"
              p-id="4231" fill="#8a8a8a"></path>
          </svg>
          正常运行
        </el-col>
      </el-row>

    </el-card>

    <el-card class="box-card groupList">
      <div slot="header" class="clearfix">
        <span>小组列表</span>
        <el-button @click="addGroup" style="float: right;" size="small">添加</el-button>
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
            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-dialog :title="addGroupForm.id ? '编辑小组' : '创建小组'" :visible.sync="dialogvis" width="40%">
      <div class="dialogBdoy">
        <el-row :gutter="20">
          <el-col :span="14">
            <el-form label-width="80px" :model="addGroupForm">
              <el-form-item style="margin: 10px 0;width:100%;" label="小组名称:">
                <el-input style="width: 100%;" size="mini" v-model="addGroupForm.name"></el-input>
              </el-form-item>
            </el-form>

            <p>初始权限</p>

            <el-table size="mini" :data="grouplist" border fit highlight-current-row style="width: 100%">
              <el-table-column align="center" label="">
                <template slot-scope="{row}">
                  <span>{{ row.id }}</span>
                </template>
              </el-table-column>
              <el-table-column align="center" label="预览">
                <template slot-scope="{row}">
                  <span>{{ row.id }}</span>
                </template>
              </el-table-column>
              <el-table-column align="center" label="编辑">
                <template slot-scope="{row}">
                  <span>{{ row.id }}</span>
                </template>
              </el-table-column>
              <el-table-column align="center" label="删除">
                <template slot-scope="{row}">
                  <span>{{ row.id }}</span>
                </template>
              </el-table-column>
            </el-table>
          </el-col>
          <el-col :span="10">
            <el-table size="mini" :data="grouplist" border fit highlight-current-row style="width: 100%">
              <el-table-column align="center" type="selection">
              </el-table-column>
              <el-table-column align="center" label="姓名">
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
      dialogvis: false
    }
  },
  methods: {
    addGroup() {
      this.dialogvis = true;
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
  height: 20vh;
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

