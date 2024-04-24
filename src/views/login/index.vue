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
          <el-button type="primary" @click="showLoginDialog(0)" icon="el-icon-edit">注册</el-button>
          <el-button type="primary" @click="showLoginDialog(1)" icon="el-icon-user-solid">登录</el-button>
        </el-row>
      </div>
    </div>

    <el-dialog :visible.sync="dialogLoginVisible" width="55%" center :show-close="false">
      <div class="login-dialog-container">
        <div class="login-image">
          <h1 class="image-title">大动脉炎外科治疗</h1>
          <h1 class="image-title">云端数据库</h1>

          <div class="image-wrapper">
            <img src="logo.png" alt="图片描述">
          </div>
          <!-- <h2 class="image-title"> <i class="el-icon-phone-outline"></i>400-110-0000</h2> -->
          <h2 class="image-phone"> <i class="el-icon-phone-outline" style="color: rgba(100, 133, 223, 1);margin-right: 10px;"></i>400-110-0000</h2>

        </div>
        <div class="login-form">

          <!-- 注册 -->
          <el-form ref="registrationLoginForm" :rules="registerRules" :model="registerInfo" label-width="0px"
            v-show="isregister == 0">

            <el-form-item prop="nickname">
              <el-input class="borderNone" v-model="registerInfo.nickname" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item prop="username">
              <el-input class="borderNone" v-model="registerInfo.username" placeholder="手机号" type="number"
                @input="handlePhoneInput" :validate-event="false" :controls="false"></el-input>
            </el-form-item>
            <el-form-item prop="verifyCode">
              <el-input v-model="registerInfo.verifyCode" class=" borderNone code-input" type="number"
                placeholder="验证码">
                <el-button slot="append" @click="getVerificationCode(registerInfo.username, 'REGISTER')"
                  :disabled="countdown > 0">{{
            countdown > 0 ?
              countdown +
              's 后重新获取' : '获取验证码' }}</el-button>
              </el-input>
            </el-form-item>
            <el-form-item prop="remark">
              <el-input class="borderNone" v-model="registerInfo.remark" placeholder="备注"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" :loading="registerLoading"
                @click="submitRegisterForm('registrationLoginForm')">注册</el-button>
            </el-form-item>
            <el-form-item>
              <span>已经有账号？ <el-button type="text" @click="changestatus(1)">去登录></el-button></span>
            </el-form-item>
          </el-form>


          <!-- 登录 -->

          <el-form ref="LoginForm" :rules="loginrules" :model="loginInfo" label-width="0px" v-show="isregister == 1">
            <el-form-item prop="templateId">
              <el-select class="borderNone" v-model="loginInfo.templateId" @change="getCenterIdInfo"
                placeholder="数据库选择/模板选择">
                <el-option v-for="item in options" :key="item.id" :label="item.templateName" :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="centerId">
              <el-select class="borderNone" v-model="loginInfo.centerId" placeholder="中心选择">
                <el-option v-for="item in sysCenters" :key="item.id" :label="item.centerName" :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="username">
              <el-input class="borderNone" v-model="loginInfo.username" placeholder="手机号" type="number"
                @input="handlePhoneInput" :validate-event="false" :controls="false"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input class="borderNone" type="password" v-model="loginInfo.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
              <div style="display: flex; justify-content: right; align-items: center;">
                <el-button type="text" @click="showLoginDialog(2)">忘记密码?</el-button>
              </div>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" :loading="loginLoading" @click="submitLoginForm('LoginForm')">登录</el-button>
            </el-form-item>
            <el-form-item>
              <span>还没有账号？ <el-button type="text" @click="changestatus(0)">立即注册></el-button></span>
            </el-form-item>
          </el-form>

          <!-- 忘记密码 -->
          <el-form ref="passwordForm" :rules="passwordrules" :model="passwordInfo" label-width="0px"
            v-show="isregister == 2">

            <el-form-item prop="username">
              <el-input class="borderNone" v-model="passwordInfo.username" placeholder="手机号" type="number"
                @input="handlePhoneInput" :validate-event="false" :controls="false"></el-input>
            </el-form-item>
            <el-form-item prop="verifyCode">
              <el-input v-model="passwordInfo.verifyCode" class=" borderNone code-input" type="number"
                placeholder="验证码">
                <el-button slot="append" @click="getVerificationCode(passwordInfo.username, 'FORGET_PASSWORD')"
                  :disabled="countdown > 0">{{
            countdown > 0 ?
              countdown +
              's 后重新获取' : '获取验证码' }}</el-button>
              </el-input>
            </el-form-item>
            <el-form-item prop="newPassword">
              <el-input class="borderNone" show-password v-model="passwordInfo.newPassword"
                placeholder="新密码"></el-input>
            </el-form-item>
            <el-form-item prop="repeatNewPassword">
              <el-input class="borderNone" show-password v-model="passwordInfo.repeatNewPassword"
                placeholder="确认密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" :loading="updatePasswordLoading"
                @click="submitUpdatepasswordForm('passwordForm')">提交</el-button>
            </el-form-item>
            <el-form-item>
              <span>更改完成？ <el-button type="text" @click="changestatus(1)">去登录 ></el-button></span>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>


import { register, forgetPassword, getTempleteIdInfo, getCenterIdInfo, getVerifyCodeInfo } from '@/api/user'


export default {
  mounted() {
    this.getTempleteIdInfothis()
  },
  data() {
    return {
      dialogVisible: false, // 控制弹窗显示与隐藏的变量
      labelPosition: 'right',
      isregister: 0,
      updatePasswordLoading: false,
      registerLoading: false,
      loginLoading: false,
      options: [],
      sysCenters: [],
      formLabelAlign: {
        name: '',
        region: '',
        type: '',
        phone: '',
        code: ''
      },
      // 注册
      registerInfo: {
        nickname: "",
        remark: "",
        username: "",
        verifyCode: ""
      },
      // 登录
      loginInfo: {
        username: '',
        password: '',
        templateId: "",
        centerId: ""
      },
      //忘记密码
      passwordInfo: {
        newPassword: "",
        repeatNewPassword: "",
        templateId: 0,
        username: "",
        verifyCode: ""
      },
      countdown: 0, // 倒计时
      dialogLoginVisible: false,//d登录弹窗的显示隐藏变量
      registerRules: {
        remark: [
          { required: true, message: '请输入备注', trigger: 'blur' },
        ],
        nickname: [
          { required: true, message: '请输入名称', trigger: 'blur' },
        ],
        username: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: this.validatePhone, trigger: 'blur' },
        ],
        verifyCode: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
        ],
      },
      loginrules: {
        username: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          // { validator: this.validatePhone, trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
        centerId: [
          { required: true, message: '请选择数据库中心', trigger: 'blur' },
        ],
        templateId: [
          { required: true, message: '请选择数据库模版', trigger: 'blur' },
        ],
      },
      passwordrules: {
        username: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: this.validatePhone, trigger: 'blur' },
        ],
        repeatNewPassword: [
          { required: true, message: '请再次输入新密码', trigger: 'blur' },
        ],
        verifyCode: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
        ],
        newPassword: [
          { required: true, message: '请输入新密码', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    showLoginDialog(parameter) {
      // 在这里访问传递的参数 parameter
      console.log(parameter);
      this.dialogLoginVisible = true; // 点击按钮时显示弹窗
      this.isregister = parameter;
      this.countdown = 0;
      this.$refs.registrationLoginForm.resetFields();
      this.$refs.LoginForm.resetFields();
      this.$refs.passwordForm.resetFields();
    },
    //获取验证码并开始倒计时
    async getVerificationCode(phone, params) {
      // 模拟获取验证码的逻辑，这里可以调用后端接口获取验证码
      console.log(params)

      const reg = /^1[3456789]\d{9}$/;
      if (!reg.test(phone)) {
        this.$message({
          message: '手机号格式不正确',
          type: 'error'
        });
        return
      }
      var responce = await getVerifyCodeInfo({
        "phone": phone,
        "verifyCodeType": params
      });
      console.log(responce)
      if (responce.code != 0) {
        // this.$message.error(responce.msg);
      } else {
        // 然后开始倒计时
        this.startCountdown();
      }
    },
    //切换状态来控制显示哪个表单
    changestatus(flag) {
      this.isregister = flag
      console.log(this.isregister + "-----")
    },
    //提交忘记密码的表单验证
    submitUpdatepasswordForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {

          if (this.passwordInfo.repeatNewPassword != this.passwordInfo.newPassword) {
            this.$message({
              message: '密码不一致！',
              type: 'error'
            });
            return;
          }
          this.submitforgetPasswordInfo();
        } else {
          console.log('error submit!!');
          this.updatePasswordLoading = false;
          return false;
        }
      });
    },
    //提交忘记密码的网络请求
    async submitforgetPasswordInfo() {
      const { data } = await forgetPassword(this.passwordInfo)
      console.log(data)
      this.updatePasswordLoading = false;
      if (data) {
        this.$message({
          message: '密码重置成功',
          type: 'success'
        });
        this.changestatus(1)
      }
    },
    //开始倒计时
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
    //验证手机号
    validatePhone(rule, value, callback) {
      const reg = /^1[3456789]\d{9}$/;
      if (!reg.test(value)) {
        callback(new Error('手机号格式不正确'));
      } else {
        callback();
      }
    },
    //处理手机号的输入情况
    handlePhoneInput(value) {
      // 处理手机号输入，移除非数字字符
      this.formLabelAlign.phone = value.replace(/\D/g, '');
    },
    //登录提交和验证
    submitLoginForm(formName) {
      // 提交登录表单的逻辑，可以在这里调用后端接口
      console.log('Form submitted:', this.loginInfo);

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
          return false;
        }
      });
    },
    //提交注册表单验证信息
    submitRegisterForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.registerLoading = true;
          this.submitRegisterInfo();
        } else {
          console.log('error submit!!');
          this.registerLoading = false;
          return false;
        }
      });
    },
    //提交注册信息
    async submitRegisterInfo() {
      const { data } = await register(this.registerInfo)
      console.log(data)
      this.registerLoading = false;
      if (data.code == 0) {
        this.$message({
          message: '注册成功',
          type: 'success'
        });
        this.changestatus(1)
      }
    },
    //获取模板列表信息
    async getTempleteIdInfothis() {
      const { data } = await getTempleteIdInfo()
      console.log(data)
      this.options = data
    },
    //根据模板 id 获取中心列表
    async getCenterIdInfo() {
      const { data } = await getCenterIdInfo({ templateId: this.loginInfo.templateId })
      console.log(data)
      this.sysCenters = data
    },
  },
};
</script>
<style scoped lang="less">
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
  width: calc(100%);
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
  /* align-items: center; */
  overflow: hidden;
  background-color: #ABC1F2;
}
.image-wrapper{
  margin-top: 10vh;
}

::v-deep .noborderBottom .el-input{
  border-bottom: 0px solid !important;
}

.login-image {
  width: 35%;
  overflow: hidden;
  color: #ffffff;
  padding-top: 14vh;
  height: 100%;
  .image-title{
    color: rgba(100, 133, 223, 1);
  }
  .image-phone{
    position: absolute;
    bottom: 20px;
    font-size: 14px;
    color: #fff;
    text-align: center;
    display: inline-block;
    left: 0;
    width: 35%;
  }
}

.login-form {
  width: 65%;
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
