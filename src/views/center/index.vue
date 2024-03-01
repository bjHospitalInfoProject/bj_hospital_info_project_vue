<template>
  <div class="app-container">
    <el-tabs class="tab-body" type="border-card">
      <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.name">
        <el-row :gutter="20">
          <!-- :offset="6" -->
          <el-col :span="4" :offset="6">
            <div class="statisticsNum">
              <svg-icon style="font-size: 64px;" icon-class="centerIcon" />
              <span style=""><span style="font-size: 18px;">🚩</span>{{ item.centerNum }}</span>
              <span>中心</span>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="statisticsNum">
             
              <svg-icon style="font-size: 64px;" icon-class="groupIcon" />
              <span style="display: inline-block;">{{ item.groupNum }}</span>
              <span>小组</span>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="statisticsNum">
              <svg-icon style="font-size: 64px;" icon-class="doctorIcon" />
              <span style="display: inline-block;">{{ item.doctorNum }}</span>
              <span>医生</span>
            </div>
          </el-col>
        </el-row>
        <el-divider content-position="left"><i class="el-icon-document"> &nbsp;中心列表</i></el-divider>
        <el-row :gutter="20" class="memberList">
          <el-col :span="2" v-for="ite in item.centerList" :key="ite.url">
            <div class="avatarImg">
              <img style="max-width: 100%;max-height: 100%;" :src="ite.url" alt="">
            </div>
            <p :title="ite.name">{{ ite.name }}</p>
            <el-button @click="editCenterInfo(ite)" icon="el-icon-edit" size="mini"></el-button>
            <br>
            <el-tag style="margin-top: 10px;" size="mini">中心管理员-NAME</el-tag>
          </el-col>
          <el-col :span="2">

            <div class="avatarImg" @click="startModel">
              <img style="width:40px;height: 40px;margin-top: 12px;" src="@/assets/images/addBtn.png" alt="">
            </div>
            <!-- <el-avatar shape="square" :size="100" fit="fill" src="@/assets/images/addBtn.png"></el-avatar> -->
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>

    <el-dialog :title="addCenterForm.id ? '编辑中心' : '创建中心'" :visible.sync="dialogvis" width="30%">
      <div class="dialogBdoy">
        <el-upload class="avatar-uploader" action="" :show-file-list="false" :before-upload="beforeAvatarUpload">
          <div class="avatarImg" @click="dialogvis = true">
            <img src="/public/logo.png" alt="">
          </div>
          <el-button style="margin-top: 35px;vertical-align: text-top; margin-left: 10px;" icon="el-icon-edit"
            size="mini"></el-button>
        </el-upload>

        <el-form label-width="120px" :model="addCenterForm">
          <el-form-item style="margin: 10px 0;width:100%;" label="中心名称:">
            <el-input style="width: 100%;" size="mini" v-model="addCenterForm.name"></el-input>
          </el-form-item>
          <el-form-item style="margin-bottom:0px;width:100%;" label="中心管理员:">

            <el-select style="width: 100%;" size="mini" v-model="addCenterForm.userName" filterable placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>

        </el-form>

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
      tabs: [
        {
          name: '大动脉炎',
          centerNum: 2,
          groupNum: 10,
          doctorNum: 200,
          centerList: [
            {
              url: require("/public/logo.png"),
              id: 1,
              name: '北京医院血管外科'
            },
            {
              url: require("/public/logo.png"),
              id: 1,
              name: '北京医院血管外科'
            },
            {
              url: require("/public/logo.png"),
              id: 1,
              name: '北京医院血管外科'
            },
            {
              url: require("/public/logo.png"),
              id: 1,
              name: '北京医院血管外科'
            }, {
              url: require("/public/logo.png"),
              id: 1,
              name: '北京医院血管外科'
            }
          ]
        },
        {
          name: '输主动脉瘤',
          centerNum: 2,
          groupNum: 20,
          doctorNum: 500
        }
      ],
      addCenterForm: {
        name: '',
        userName: ''
      },
      options: [],
      dialogvis: false
    }
  },
  methods: {
    beforeAvatarUpload() {
      return false
    },
    editCenterInfo(data) {
      this.dialogvis = true;
      this.addCenterForm = { ...data }
    },
    startModel() {
      this.dialogvis = true;
      Object.assign(this.addCenterForm, this.$options.data().addCenterForm)
    }
  }
}
</script>

<style scoped lang="less">
.dialogBdoy {
  text-align: center;

  .avatarImg {
    // margin: 0;
    display: inline-block;
  }
}

.avatarImg {
  cursor: pointer;
  width: 66px;
  height: 66px;
  margin: 0 auto;
  background: rgba(192, 196, 204, .5);
  // border: 1px solid rgba(192, 196, 204);
  border-radius: 8px;
}

.tab-body {
  height: calc(100vh - 90px);

  .statisticsNum {
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    text-align: center;
    height: 10vh;
    line-height: 10vh;

    :nth-child(1) {
      margin-top: 10px;
    }

    :nth-child(2) {
      display: inline-block;
      vertical-align: text-top;
      line-height: 10px;
      margin-top: -30px;
      font-weight: 600;
      font-size: 27px;
      // margin-left: 20px;
      width: 80px;
      text-align: center;
    }

    :nth-child(3) {
      display: inline-block;
      vertical-align: text-top;
      line-height: 10px;
      margin-top: 0px;
      font-size: 18px;
      margin-left: -80px;
      width: 80px;
      text-align: center;
    }
  }



  .memberList {
    text-align: center;

    p {
      font-size: 12px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      text-align: center;
    }
  }
}
</style>

