<template>
  <div>
    <div class="login-container">
      <div class="headInfo">
        <span class="left-text"><img class="custom-icon" src="logo.png" alt="医院图标">北京医院血管外科</span>
        <span class="right-text"><i class="el-icon-phone-outline"></i>400-110-0000</span>
      </div>
      <div class="content">
        <h1 style="font-size: 45px;margin-block-end: 0em;text-shadow: 2px 2px 2px black;">周围血管疾病数据平台</h1>
        <h1 style="font-size: 45px;margin-block-start: 0em;text-shadow: 2px 2px 2px black;font-style: italic;">Vascular
          Improvement Platform
          (VIP)</h1>
        <h3 style="text-align:left;margin-block-end: 0em;">
          <svg-icon icon-class="loginicon" style="margin-right: 8x;" /> 大动脉炎外科治疗数据库 [运行中]
        </h3>
        <h3 style="text-align:left;margin-block-start: 0em;margin-block-end: 0em;">
          <svg-icon icon-class="loginicon" style="margin-right: 8x;" /> 腹主动脉瘤数据库[ 运行中]
        </h3>
        <h3 style="text-align:left;margin-block-start: 0em;">
          <svg-icon icon-class="loginicon" style="margin-right: 8x;" /> xx数据库 [在建..]
        </h3>
        <el-row>
          <el-button type="primary" @click="showLoginDialog(true)" icon="el-icon-edit">注册</el-button>
          <el-button type="primary" @click="showLoginDialog(false)" icon="el-icon-user-solid">登录</el-button>
        </el-row>
      </div>
    </div>

    <el-dialog :visible.sync="dialogLoginVisible" width="50%" center :show-close="false">
      <div class="login-dialog-container">
        <div class="login-image">
          <h1 class="image-title">大动脉炎外科治疗</h1>
          <h1 class="image-title">云端数据库</h1>

          <div class="image-wrapper">
            <img src="logo.png" alt="图片描述">
          </div>
          <h2 class="image-title"> <i class="el-icon-phone-outline"></i>400-110-0000</h2>
        </div>
        <div class="login-form">
          <el-form ref="registrationLoginForm" :model="loginInfo" label-width="0px">
            <el-form-item prop="model" v-if="!isregister">
              <el-select class="borderNone" v-model="loginInfo.model" placeholder="数据库选择/模板选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="center" v-if="!isregister">
              <el-select class="borderNone" v-model="loginInfo.center" placeholder="中心选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="username" v-if="!isregister">
              <el-input class="borderNone" type="username" v-model="loginInfo.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password" v-if="!isregister">
              <el-input class="borderNone" type="password" v-model="loginInfo.password" placeholder="请输入密码"></el-input>
            </el-form-item>

            <el-form-item prop="orgname" v-if="isregister">
              <el-input class="borderNone" v-model="loginInfo.orgname" placeholder="机构名"></el-input>
            </el-form-item>
            <el-form-item prop="region" v-if="isregister">
              <el-input class="borderNone" v-model="loginInfo.region" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item prop="phone" v-if="isregister">
              <el-input class="borderNone" v-model="loginInfo.phone" placeholder="手机号" type="number"
                @input="handlePhoneInput" :validate-event="false" :controls="false"></el-input>
            </el-form-item>
            <el-form-item prop="code" v-if="isregister">
              <el-input v-model="loginInfo.code" class=" borderNone code-input" type="number" placeholder="验证码">
                <el-button slot="append" @click="getVerificationCode" :disabled="countdown > 0">{{
                  countdown > 0 ?
                  countdown +
                  's 后重新获取' : '获取验证码' }}</el-button>
              </el-input>
            </el-form-item>


            <el-form-item>
              <el-button type="primary" v-if="!isregister"
                @click="submitLoginForm('registrationLoginForm')">登录</el-button>
              <el-button type="primary" v-if="isregister" @click="submitLoginForm('registrationLoginForm')">注册</el-button>

            </el-form-item>
            <el-form-item v-if="!isregister">
              <span>还没有账号？ <el-button type="text" @click="changestatus">立即注册</el-button></span>
            </el-form-item>
            <el-form-item v-if="isregister">
              <span>已经有账号？ <el-button type="text" @click="changestatus">去登录</el-button></span>
            </el-form-item>
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
      dialogVisible: false, // 控制弹窗显示与隐藏的变量
      labelPosition: 'right',
      isregister: false,
      formLabelAlign: {
        name: '',
        region: '',
        type: '',
        phone: '',
        code: ''
      },
      loginInfo: {
        username: 'admin',
        password: '11111',
        model: "大动脉炎数据库",
        center: "北京医院血管外科中心"
      },
      countdown: 0, // 倒计时
      dialogLoginVisible: false,//d登录弹窗的显示隐藏变量
      applyrules: {
        name: [
          { required: true, message: '请输入机构名称', trigger: 'blur' },
        ],
        region: [
          { required: true, message: '请输入名称', trigger: 'blur' },
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: this.validatePhone, trigger: 'blur' },
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
        ],
      },
      loginrules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    // 重置数据
    resetFormLabelAlignData() {
      this.formLabelAlign = {
        name: '',
        region: '',
        phone: '',
        code: '',
      };
      this.countdown = 0;
    },
    // 对话框关闭前的处理
    handleFormLabelAlignData() {
      // 重置数据
      this.resetFormLabelAlignData();
      // 重置表单校验状态
      this.$nextTick(() => {
        this.$refs.registrationForm.resetFields();
      });
      // 执行关闭
      // done();
    },
    // handleLoginBeforeClose(done) {
    //   // 重置数据
    //   this.resetLoginData();
    //   // 重置表单校验状态
    //   this.$nextTick(() => {
    //     this.$refs.registrationLoginForm.resetFields();
    //   });
    //   // 执行关闭
    //   done();
    // },
    resetLoginData() {
      this.loginInfo = {
        userInfo: '',
        password: ''
      };
    },
    showLoginDialog(parameter) {
      // 在这里访问传递的参数 parameter
      console.log(parameter);
      this.dialogLoginVisible = true; // 点击按钮时显示弹窗
      this.isregister = parameter;
    },
    getVerificationCode() {
      // 模拟获取验证码的逻辑，这里可以调用后端接口获取验证码
      // 然后开始倒计时
      this.startCountdown();
    },
    changestatus() {
      this.isregister = !this.isregister
      console.log(this.isregister + "-----")
    }
    ,
    startCountdown() {
      this.countdown = 60;
      const timer = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--;
        } else {
          clearInterval(timer);
        }
      }, 1000);
    },
    validatePhone(rule, value, callback) {
      const reg = /^1[3456789]\d{9}$/;
      if (!reg.test(value)) {
        callback(new Error('手机号格式不正确'));
      } else {
        callback();
      }
    },
    handlePhoneInput(value) {
      // 处理手机号输入，移除非数字字符
      this.formLabelAlign.phone = value.replace(/\D/g, '');
    },
    submitForm() {
      // 提交表单的逻辑，可以在这里调用后端接口
      console.log('Form submitted:', this.formLabelAlign);
    },
    submitLoginForm(formName) {
      // 提交登录表单的逻辑，可以在这里调用后端接口
      console.log('Form submitted:', this.resetLoginData);

      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.dialogLoginVisible = false;
          this.$store.dispatch('user/login', this.loginInfo).then(() => {
            this.$router.push({ path: this.redirect || '/' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  },
};
</script>
<style scoped>
.login-container {
  height: 100vh;
  background: url(~@/assets/images/defaultbackground.jpg);
  display: flex;
  flex-direction: column;
  /* 设置为垂直方向的列布局 */
  align-items: center;
  /* 在垂直方向上居中 */
  justify-content: flex-start;
  /* 在垂直方向上靠上对齐 */
  background-size: cover;
  position: relative;
  overflow: auto;
  /* 允许内容溢出时滚动 */
}

.headInfo {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  color: #ffffff;
  box-sizing: border-box;
  /* 防止内边距撑大容器 */
}

.content {
  text-align: left;
  width: 100%;
  padding: 5px;
  transform: translateY(45%);
  box-sizing: border-box;
  /* 防止内边距撑大容器 */
  padding-left: 15%;
  color: #ffffff;
}

.el-row {
  margin-top: 50px;
}

.el-row .el-button:hover {
  background-color: rgba(255, 255, 255, 0.5);
  /* 你希望的背景色 */
}

/* 设置点击时的背景色 */
.el-row .el-button:active {
  background-color: #b3b8bc;
  /* 你希望的点击时的背景色 */
}

.el-row .el-button--primary {
  border-radius: 0px;
}

.el-row .el-button--primary {
  color: #FFF;
  background-color: rgba(255, 255, 255, 0.3);
  border-color: #ffffff;
  width: 130px;
  margin-right: 40px;
}

.right-text {
  margin-right: 15px;
  margin-left: auto;
  text-align: right;
}

.right-text i {
  margin-right: 15px;
  /* 间距调整为 5px */
}

.left-text i {
  margin-right: 15px;
  /* 间距调整为 5px */
}

.left-text,
.right-text {
  margin-left: 15px;
  text-align: left;
  font-weight: bold;
  /* 加粗字体 */
  font-size: 26px;
  /* 设置字体大小，可根据需求调整 */
}

.custom-icon {
  display: inline-block;
  width: 35px;
  /* 根据实际图标大小调整 */
  height: 35px;
  /* 根据实际图标大小调整 */
  vertical-align: middle;
  /* 垂直居中 */
  margin-right: 15px;
  margin-top: -5px;

}

/* 添加自定义类样式，设置圆角 */
.el-dialog__wrapper .el-dialog {
  border-radius: 10px;
  /* 调整圆角大小 */
}

.code-input {
  width: calc(100% 110px);
  /* 调整输入框宽度，留出按钮的宽度 */
}

::v-deep .el-dialog--center .el-dialog__body {
  padding: 0px;
  text-align: center;
}


::v-deep .el-dialog--center .el-dialog__header {
  padding: 0px;
  text-align: center;
}


::v-deep .el-form-item .el-form-item__content {
  margin-left: 0px;
}

.login-dialog-container {
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

::v-deep .borderNone .el-input__inner {
  border: none;
  border-bottom: #1681d3;
}

::v-deep .el-button.btnborderNone {
  border: none !important;
}


::v-deep .el-input-group__append,
::v-deep .el-input-group__prepend {
    border: none !important;
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

/**取消输入框后边的加减
 */
::v-deep input::-webkit-outer-spin-button,
::v-deep input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
}

::v-deep input[type='number'] {
  -moz-appearance: textfield !important;
}
</style>
