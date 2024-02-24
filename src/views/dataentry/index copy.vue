<template>
  <div>

    <el-dialog :visible.sync="dialogVisible" width="60%" center :show-close="false">
      <div class="login-container">
        <div class="login-image">
          <h1 class="image-title">大动脉炎外科治疗</h1>
          <h1 class="image-title">云端数据库</h1>

          <div class="image-wrapper">
            <img src="logo.png" alt="图片描述">
          </div>
          <h2 class="image-title"> <i class="el-icon-phone-outline"></i>400-110-0000</h2>
        </div>
        <div class="login-form">
          <el-form ref="loginForm" :model="loginForm" label-width="0px">
            <el-form-item prop="username">
              <el-select class="borderNone" v-model="value" placeholder="数据库选择/模板选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="password">
              <el-select class="borderNone" v-model="value" placeholder="中心选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="username">
              <el-input class="borderNone" type="username" v-model="loginForm.password" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input class="borderNone" type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="login">登录</el-button>
            </el-form-item>
            <el-form-item>
              <span>还没有账号？ <el-link type="primary">立即注册</el-link></span> </el-form-item>
          </el-form>



        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: true,
      loginForm: {
        username: '',
        password: '',
      },
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }],
      value: ''
    };
  },
  methods: {
    openDialog() {
      this.dialogVisible = true;
    },
    closeDialog() {
      this.dialogVisible = false;
    },
    login() {
      // Call your login API here
      console.log('Logging in with username: ' + this.loginForm.username + ' and password: ' + this.loginForm.password);
      this.dialogVisible = false;
    }
  }
};
</script>

<style scoped>
::v-deep .el-dialog--center .el-dialog__body {
  padding: 0px;
  text-align: center;
}


::v-deep .el-dialog--center .el-dialog__header {
  padding: 0px;
  text-align: center;
}


::v-deep .el-form-item .el-form-item__content{
 margin-left: 0px;
}
.login-container {
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: #ABC1F2;
}

.login-image {
  width: 40%;
  overflow: hidden;
  color: #ffffff;
  height: 100%;
}

.login-form {
  width: 60%;
  margin-left: 3%;
  background-color: white;
  border-top-left-radius: 20px;
  padding-left: 100px;
  padding-top: 70px;
  padding-right: 100px;
  padding-bottom: 50px;
  border-bottom-left-radius: 20px;
}

.el-button--primary {
  color: #FFF;
  width: 100%;
  background-color: #409EFF;
  border-color: #409EFF;
}

.el-select {
  width: 100%;

}

::v-deep .borderNone  .el-input__inner {
  border: none;
  border-bottom: #1681d3;
}

::v-deep .el-input {
  border: none;
  border-bottom: 1px solid #ccc;
  /* 保留底边框，可以根据需求调整颜色和样式 */
  border-radius: 0;
  /* 如果你还想取消圆角边框，可以将 border-radius 设置为 0 */
}

/* 隐藏 el-input 聚焦时的底边框 */
.el-input.is-focus .el-input__inner {
  border-bottom: 1px solid #ccc;
  /* 保留底边框，可以根据需求调整颜色和样式 */
}
</style>