<template>
  <div class="app-container">
    <el-tabs class="tab-body" type="border-card">
      <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.name">
        <el-row :gutter="20">
          <!-- :offset="6" -->
          <el-col :lg="{ span: 8, offset: 0 }" :xl="{ span: 4, offset: 6 }">
            <div class="statisticsNum">
              <svg-icon style="font-size: 4rem;" icon-class="centerIcon" />
              <span style=""><span style="font-size: 18px;">🚩</span>{{ item.centerNum }}</span>
              <span>中心</span>
            </div>
          </el-col>
          <el-col :lg="{ span: 8 }" :xl="{ span: 4 }">
            <div class="statisticsNum">

              <svg-icon style="font-size: 4rem;" icon-class="groupIcon" />
              <span style="display: inline-block;">{{ item.groupNum }}</span>
              <span>小组</span>
            </div>
          </el-col>
          <el-col :lg="{ span: 8 }" :xl="{ span: 4 }">
            <div class="statisticsNum">
              <svg-icon style="font-size: 4rem;" icon-class="doctorIcon" />
              <span style="display: inline-block;">{{ item.doctorNum }}</span>
              <span>医生</span>
            </div>
          </el-col>
        </el-row>
        <el-divider content-position="left"><i class="el-icon-document"> &nbsp;中心列表</i></el-divider>
        <el-row :gutter="20" class="memberList">

          <el-col :lg="3" :xl="2" :md="4" v-for="ite in item.centerList" :key="ite.id">
            <div class="avatarImg">
              <img class="avatarImg" :src="ite.iconUrl" alt="">
            </div>
            <p :title="ite.centerName">{{ ite.centerName }}</p>
            <el-button @click="editCenterInfo(ite)" icon="el-icon-edit" size="mini"></el-button>
            <br>
            <div v-for="admin in ite.userDtos">
              <el-tag class="eltag" size="mini">{{ admin.nickname }}</el-tag>
            </div>
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
            <img class="avatarImg" :src="addCenterForm.iconUrl" alt="">
          </div>
          <el-button style="margin-top: 35px;vertical-align: text-top; margin-left: 10px;" icon="el-icon-edit"
            size="mini"></el-button>
        </el-upload>

        <el-form label-width="120px" :model="addCenterForm">
          <el-form-item style="margin: 10px 0;width:100%;" label="中心名称:">
            <el-input style="width: 100%;" size="mini" v-model="addCenterForm.centerName"></el-input>
          </el-form-item>
          <el-form-item style="margin-bottom:0px;width:100%;" label="中心管理员:">
            <el-select style="width: 100%;" size="mini" v-model="addCenterForm.centerManageUserIds" filterable multiple
              placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>

        </el-form>

      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="dialogvis = false">取 消</el-button>
        <el-button size="small" type="primary"
          @click="addCenterForm.id ? updateCenter() : createCenter()">保存</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>


import { getDoctorList } from '@/api/doctor'
import { getCenterListInfo, getCenterTotalInfo, createCenterInfo, updateCenterInfo } from '@/api/center'
import { mapGetters } from 'vuex'
import axios from 'axios';


export default {
  data() {
    return {
      imageUrl: '', // 初始化为空，不显示图片
      tabs: [
        {
          name: '大动脉炎',
          centerNum: 0,
          groupNum: 0,
          doctorNum: 0,
          centerList: []
        }
      ],
      addCenterForm: {
        id: '',
        centerManageUserIds: [],
        centerName: "",
        description: "",
        iconUrl: ""
      },
      options: [],
      dialogvis: false
    }
  },
  methods: {
    beforeAvatarUpload(file) {

      // 这里可以添加上传前的文件检查，例如文件大小、类型等
      const isJPG = (file.type === 'image/jpeg' || file.type === 'image/png');
      const isLt2M = (file.size / 1024 / 1024 < 2);

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG/PNG 格式!');
        return false;
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
        return false;
      }
      const formData = new FormData();
      formData.append('file', file); // 与后端约定的字段名

      axios.post('http://39.105.54.128:8080/oss/uploadFile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(response => {
          // 假设返回的数据中有一个 `url` 字段包含图片地址
          this.addCenterForm.iconUrl = response.data.data;
        })
        .catch(error => {
          console.error('Upload failed:', error);
          this.$message.error('图片上传失败！');
        });

      return false
    },
    editCenterInfo(data) {
      this.dialogvis = true;
      this.getDoctorInfoList();

      this.addCenterForm = { ...data }

      this.addCenterForm.centerManageUserIds = data.userDtos.map(item => item.id)
      console.log(this.addCenterForm.centerManageUserIds)
    },
    startModel() {
      this.dialogvis = true;
      this.addCenterForm = {
        id: '',
        centerManageUserIds: [],
        centerName: "",
        description: "",
        iconUrl: ""
      }
      this.getDoctorInfoList();
      // Object.assign(this.addCenterForm, this.$options.data().addCenterForm)


    },
    //获取中心列表信息
    async getCenterList() {
      const { data } = await getCenterListInfo({ templateId: this.templateId })
      console.log(data)
      this.tabs[0].centerList = data
    },
    //获取当前模板对应的统计信息
    async getCenterTotal() {
      const { data } = await getCenterTotalInfo({ templateId: this.templateId })
      console.log(data)
      this.tabs[0].centerNum = data.centerCount
      this.tabs[0].groupNum = data.groupCount
      this.tabs[0].doctorNum = data.userCount
    },
    //更新中心
    async updateCenter() {
      const { data } = await updateCenterInfo(
        {
          centerManageUserIds: this.addCenterForm.centerManageUserIds,
          centerName: this.addCenterForm.centerName,
          description: this.addCenterForm.description,
          iconUrl: this.addCenterForm.iconUrl,
          centerId: this.addCenterForm.id
        })
      console.log(data)
      if (data) {
        this.dialogvis = false
        this.getCenterList()
        this.getCenterTotal()
      }
    },
    //创建中心
    async createCenter() {
      this.dialogvis = false
      const { data } = await createCenterInfo(
        {
          centerManageUserIds: this.addCenterForm.centerManageUserIds,
          centerName: this.addCenterForm.centerName,
          description: this.addCenterForm.description,
          iconUrl: this.addCenterForm.iconUrl,
          templateId: this.templateId
        })
      if (data) {
        this.dialogvis = false
        this.getCenterList()
        this.getCenterTotal()
      }
    },

    async getDoctorInfoList() {
      const { data } = await getDoctorList({})
      console.log(data.data)
      this.options = data.data.map(item => ({
        value: item.id,
        label: item.nickname,
      }));
    }

  },
  mounted() {
    this.getCenterList()
    this.getCenterTotal()
  },
  computed: {
    ...mapGetters([
      'templateId'
    ])
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
    min-height: 10vh;
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
    margin-bottom: 10px;

    p {
      font-size: 12px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      text-align: center;
    }

    .eltag {
      margin-top: 5px;
      max-width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>
