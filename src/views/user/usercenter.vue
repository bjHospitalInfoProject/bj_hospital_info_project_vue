<template>
  <div class="user-center-wrapper clear-fix">
    <el-card :body-style="{ padding: '50px' }">
      <el-form :label-position="labelPosition" width="46%" class="form-list" label-width="120px" :model="formLabelAlign">
        <el-form-item label="名称">
          <el-input v-model="formLabelAlign.region" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="formLabelAlign.type" :disabled="true">
            <el-button slot="append" @click="showUpdateDialog">换绑</el-button>
          </el-input>
        </el-form-item>
        <el-form-item label="所在数据库">
          <el-input v-model="formLabelAlign.type" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="所在中心">
          <el-input v-model="formLabelAlign.type" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="所在小组">
          <el-input v-model="formLabelAlign.type" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item style="display: flex; justify-content: center; align-items: center;">
          <span>中心管理员：xxxxx | 13345679088<br> 超级管理员：xxxxx | 13345679088</span>
        </el-form-item>
      </el-form>
    </el-card>

    <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
      <span>需要注意的是内容是默认不居中的</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>


export default {
  name: 'UserCenter',
  data() {
    return {
      centerDialogVisible: false,
      userInfo: {}
    }
  },
  created() {
    // getUserInfo().then(res => {
    //   this.userInfo = res
    // })
  },
  data() {
    return {
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      }
    };
  },
  methods: {
    showUpdateDialog() {
      this.centerDialogVisible = true;
    },
    updatePhoneDilaog() {

    }
  }
}
</script>

<style>
.user-center-wrapper {
  .el-card {
    padding-top: 20px;
  }

  .form-list {
    width: 45%;
    margin: 0 auto;

    .el-rate {
      line-height: 2;
    }

    >.el-form-item {
      margin-bottom: 22px;

      .line {
        text-align: center;
      }

      .tip-title {
        text-align: right;
        color: #606266;
      }
    }

    .submit-box {
      margin-top: 35px;
      margin-left: 0;
      text-align: center;
    }
  }
}
</style>
