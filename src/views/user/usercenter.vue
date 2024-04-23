<template>
  <div class="user-center-wrapper clear-fix">
    <el-card :body-style="{ padding: '50px' }">
      <el-form :label-position="labelPosition" width="46%" class="form-list" label-width="120px"
        :model="formLabelAlign">
        <el-form-item label="名称">
          <el-input v-model="formLabelAlign.nickName" :disabled="true"></el-input>
          <el-button slot="append" @click="showPasswordDialog">修改密码</el-button>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="formLabelAlign.username" :disabled="true">
            <el-button slot="append" @click="showUpdateDialog">换绑</el-button>
          </el-input>
        </el-form-item>
        <el-form-item label="所在数据库">
          <el-input v-model="formLabelAlign.templateName" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="所在中心">
          <el-input v-model="formLabelAlign.centerName" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="所在小组">
          <el-input v-model="formLabelAlign.groupName" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item style="display: flex; justify-content: center; align-items: center;">
          <span>中心管理员：xxxxx | 13345679088<br> 超级管理员：xxxxx | 13345679088</span>
        </el-form-item>
      </el-form>
    </el-card>

    <el-dialog title="换绑手机号" :visible.sync="centerDialogVisible" width="30%" center>
      <el-form :model="updateInfo" label-width="120px">

        <el-form-item label="手机号">
          <el-input class="borderNone" v-model="updateInfo.newUsername" placeholder="手机号" type="number"
            @input="handlePhoneInput" :validate-event="false" :controls="false"></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input v-model="updateInfo.verifyCode" class=" borderNone code-input" type="number" placeholder="验证码">
            <el-button slot="append" @click="getVerificationCode(passwordInfo.username, 'FORGET_PASSWORD')"
              :disabled="countdown > 0">{{
      countdown > 0 ?
        countdown +
        's 后重新获取' : '获取验证码' }}</el-button>
          </el-input>
        </el-form-item>

      </el-form>
      <div style="display: flex; justify-content: center; align-items: center;">
        <span style="color: blueviolet;">成功后，将收到新的短信</span>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="更改密码" :visible.sync="updateDialogVisible" width="30%" center>
      <el-form :model="passwordInfo" label-width="120px">

        <el-form-item prop="password">
          <el-input class="borderNone" type="password" v-model="passwordInfo.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input class="borderNone" type="password" v-model="passwordInfo.password" placeholder="请输入密码"></el-input>
        </el-form-item>

      </el-form>
      <div style="display: flex; justify-content: center; align-items: center;">
        <span style="color: blueviolet;">成功后，将收到新的短信</span>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import { updatePhoneInfo, getVerifyCodeInfo } from '@/api/user'

export default {
  name: 'UserCenter',
  created() {

  },
  data() {
    return {
      updateInfo: {
        newUsername: "",
        verifyCode: ""
      },
      passwordInfo: {
        password: ''
      },
      centerDialogVisible: false,
      updateDialogVisible: false,

      labelPosition: 'right',
      countdown: 0, // 倒计时

      formLabelAlign: {}
    };
  },
  computed: {
    ...mapGetters([
      'groupName',
      'centerName',
      'name',
      'templateName',
      'username'
    ])
  },
  created() {
    this.generateInfo()
  },
  methods: {
    generateInfo() {
      this.formLabelAlign = {
        nickName: this.name,
        username: this.username,
        templateName: this.templateName,
        centerName: this.centerName,
        groupName: this.groupName,
      }
    },
    showUpdateDialog() {
      this.centerDialogVisible = true;
    },
    showPasswordDialog() {
      this.updateDialogVisible = true;
    },

    async updatePhoneOptions() {
      const { data } = await updatePhoneInfo(this.updateInfo)
      if (data) {
        this.centerDialogVisible = false
        this.$message({
          message: '手机号修改成功',
          type: 'success'
        });
      }
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
      this.updateInfo.phone = value.replace(/\D/g, '');
    },
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
  }
}
</script>

<style>
::v-deep .borderNone .el-input__inner {
  border: none;
  border-bottom: #1681d3;
}

::v-deep .el-input-group__append,
::v-deep .el-input-group__prepend {
  border: none !important;
}

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

::v-deep input::-webkit-outer-spin-button,
::v-deep input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
}

::v-deep input[type='number'] {
  -moz-appearance: textfield !important;
}
</style>
