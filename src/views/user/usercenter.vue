<template>
  <div class="user-center-wrapper clear-fix">
    <el-card :body-style="{ padding: '50px' }">
      <el-form :label-position="labelPosition" width="46%" class="form-list" label-width="80px" :model="formLabelAlign">
      
        <el-form-item label="活动区域">
          <el-input v-model="formLabelAlign.region" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input v-model="formLabelAlign.type" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input v-model="formLabelAlign.type" :disabled="true">
            <el-button slot="append" @click="showUpdateDialog" >修改</el-button>
          </el-input>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>


export default {
  name: 'UserCenter',
  data() {
    return {
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
  methods:{
    showUpdateDialog(){
      console.log(11111)
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
}</style>
