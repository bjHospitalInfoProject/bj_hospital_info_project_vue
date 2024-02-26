<template>
  <div class="app-container">
    <el-tabs class="tab-body" type="border-card">
      <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.name">
        <el-row :gutter="20">
          <!-- :offset="6" -->
          <el-col :span="4" :offset="6">
            <div class="statisticsNum">
              <svg t="1708930951281" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="6243" width="64" height="64">
                <path
                  d="M813.302519 848.507259v-657.635555l-92.197926-61.525334L385.042963 279.324444v116.081778l-185.713778 64.663704v388.437333h-18.962963v46.146371h60.624593V486.987852l246.347852-80.734815v488.400593h170.552889v-49.986371H619.994074V398.535111l-89.419852-53.845333-100.096 34.853926v-73.320297l242.574222-107.690666v696.101926h170.581334v-46.165334h-30.331259z"
                  p-id="6244" fill="#cdcdcd"></path>
                <path
                  d="M271.322074 794.661926l178.119111-23.096889v-76.904296l-178.119111 26.917926zM271.322074 894.634667l178.119111-3.858963v-76.913778l-178.119111 7.717926zM373.902222 660.764444h-31.469037V530.574222l31.469037-9.633185z"
                  p-id="6245" fill="#cdcdcd"></path>
                <path d="M280.282074 615.860148v-21.352296l160.208593-29.240889v30.776889z" p-id="6246" fill="#cdcdcd">
                </path>
              </svg>
              <span style=""><span style="font-size: 18px;">🚩</span>{{ item.centerNum }}</span>
              <span>中心</span>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="statisticsNum">
              <svg t="1708931292371" class="icon" viewBox="0 0 1593 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="7336" width="64" height="64">
                <path d="M1126.798909 792.060612c40.138905 13.853543-39.775208-13.853543 0 0z" p-id="7337" fill="#cdcdcd">
                </path>
                <path
                  d="M1126.798909 792.060612c-47.974918-16.531674-99.818248-17.755018-147.793167-34.452009-14.580937-4.959502-43.34605-11.010095-49.363578-27.707086a201.421918 201.421918 0 0 1-6.61267-52.570724q-1.058027-20.234769-1.058027-40.502601c0-8.894041 22.747584-27.707086 27.707086-35.873733a270.094492 270.094492 0 0 0 24.499941-111.19204c30.914231 8.530344 34.815706-48.669249 40.138904-66.126697 3.901475-12.068122 27.707086-95.18938-9.224674-83.848651a149.380208 149.380208 0 0 0 14.91157-52.207027 313.837302 313.837302 0 0 0-3.901475-139.62652A219.970456 219.970456 0 0 0 805.423164 0.821624a225.855732 225.855732 0 0 0-225.591225 134.270258 293.205773 293.205773 0 0 0-9.919005 140.32085 175.797823 175.797823 0 0 0 16.531674 64.308212c-34.452009-10.315765-15.969597 62.820362-12.068122 75.682004 5.686896 18.118715 10.646398 83.121258 42.982353 74.26028a508.282853 508.282853 0 0 0 13.853543 86.328403 129.112375 129.112375 0 0 0 29.12881 49.363579c6.381226 7.10862 9.588371 7.80295 9.224674 17.060688a354.670537 354.670537 0 0 1-6.61267 84.542981c-7.10862 27.012756-66.424267 38.353484-90.229877 43.34605-63.944516 13.225339-122.929529 19.176742-176.194583 58.985013a236.70051 236.70051 0 0 0-94.495049 194.313298h987.569149a242.056773 242.056773 0 0 0-162.704737-231.608755z"
                  p-id="7338" fill="#cdcdcd"></path>
                <path
                  d="M395.371519 748.383929l5.686896-2.843448a21.094416 21.094416 0 0 0-2.843448 1.421724 10.613335 10.613335 0 0 0-2.843448 1.421724z"
                  p-id="7339" fill="#cdcdcd"></path>
                <path
                  d="M395.371519 748.350865c-12.068122 6.050593-26.649059 13.489846 2.843448-1.421724l2.843448-1.421724a224.830768 224.830768 0 0 1 76.045701-16.69699c9.919004-1.058027 14.580937-7.80295 7.10862-17.391322-14.21724-18.118715-63.217122-21.656493-83.848652-29.757013a22.21857 22.21857 0 0 1-17.391321-23.805611c-0.363697-6.381226-3.901475-34.815706 1.058027-39.444574 3.537778-3.537778 25.921665-2.116054 30.914231-2.843448a250.454863 250.454863 0 0 0 60.04304-14.21724 109.869506 109.869506 0 0 0 23.144344-12.068122c8.530344-6.381226-6.381226-22.02019-10.315765-30.550534a240.304415 240.304415 0 0 1-19.176742-84.906678 1382.378591 1382.378591 0 0 0-5.323199-171.565715c-15.969597-87.022733-83.121258-130.732479-168.623076-130.732479a153.017176 153.017176 0 0 0-134.633954 64.308213c-32.666588 50.785303-30.914231 114.035488-29.12881 171.929411a581.71655 581.71655 0 0 1-2.116054 99.454551 209.191805 209.191805 0 0 1-10.315765 41.560629c-3.901475 10.315765-23.805611 35.873733-15.969597 41.196932a192.06499 192.06499 0 0 0 114.729819 25.227335 141.676447 141.676447 0 0 1-2.116055 56.207692c-9.919004 25.591032-84.179285 32.335955-106.563171 39.676018a147.991547 147.991547 0 0 0-108.348593 142.172397h282.427121c4.628869 0 22.383887-33.063348 27.343389-38.353484a311.787374 311.787374 0 0 1 85.601009-66.424266z m1087.056764-37.659153c-28.765113-9.224674-84.179285-12.068122-104.810814-36.93176-10.315765-12.431819-4.628869-44.04038-3.537778-58.985014a225.855732 225.855732 0 0 0 48.669249-3.306334 218.647922 218.647922 0 0 0 42.618656-9.919005 127.657588 127.657588 0 0 0 18.813045-8.530344c13.853543-8.166647 7.472317-9.588371 0.363697-21.656493-38.717181-65.002543-21.32586-147.42947-23.144344-218.813239-1.421724-59.315647-17.060688-124.31819-71.053136-157.712171a203.571035 203.571035 0 0 0-172.987438-9.919005c-150.636615 60.406737-61.828461 260.043234-113.308094 374.409356-8.894041 19.176742-21.656493 25.921665 0.69433 37.295457a173.450325 173.450325 0 0 0 39.444574 13.853543 314.961456 314.961456 0 0 0 63.217122 8.530344 176.029266 176.029266 0 0 1 0 49.363579c-3.901475 17.391321-41.924326 22.383887-56.207692 26.450679s-38.717181 4.959502-45.8258 20.234769c-10.646398 22.747584 35.179403 17.060688 46.553194 19.176742a222.08651 222.08651 0 0 1 97.338497 50.090972 159.233085 159.233085 0 0 1 57.893923 69.433032h284.906872a150.206791 150.206791 0 0 0-109.770316-142.800601z"
                  p-id="7340" fill="#cdcdcd"></path>
              </svg>
              <span style="display: inline-block;">{{ item.groupNum }}</span>
              <span>小组</span>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="statisticsNum">
              <svg t="1708931378638" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="8951" width="64" height="64">
                <path
                  d="M709.7 375.6c-4.4 0-9-0.9-13.6-2.7-118.7-46.8-249.5-46.8-368.2 0-10.8 4.3-21.9 3.4-30.4-2.3-7.6-5.2-12.1-13.7-12.1-22.9V133.4c0-15.5 12.1-27.3 24.1-32C374.3 75.8 442.4 62.9 512 62.9s137.7 12.9 202.4 38.5c12 4.7 24.1 16.5 24.1 32v214.3c0 9.2-4.5 17.8-12.1 22.9-4.8 3.3-10.6 5-16.7 5zM512 287.9c60.4 0 119.7 9.7 176.6 29V145c-114.2-43-239-43-353.1 0v171.9c56.8-19.2 116.1-29 176.5-29zM851.7 957H173.2c-11.7 0-22.8-4.7-31.2-13.4-8.8-9-13.8-21.5-13.8-34.4-9.6-104.8 14.4-189.6 71.2-251.9 35.8-39.3 84.2-68.9 143.9-88 51.8-16.6 111.2-25 176.4-25 124 0 229.5 40 297.1 112.7 29 31.2 50.6 67.9 64.1 109.2 14.1 43 19.4 91.1 15.8 142.8 0 13.1-5 25.7-13.9 34.8-8.4 8.5-19.4 13.2-31.1 13.2z m-673.5-50h668.5v-0.8c6.3-88.5-16.1-160.9-66.6-215.2-58.1-62.4-150.6-96.8-260.6-96.8-89.1 0-210.5 16.8-283.3 96.7-47.1 51.8-66.7 124-58.2 214.7 0.2 0.5 0.2 1 0.2 1.4z"
                  p-id="8952" fill="#cdcdcd"></path>
                <path
                  d="M511 588.3c-30.8 0-60.9-7.7-89.6-23-26.2-13.9-50-33.4-70.8-57.9-19.6-23.1-35.8-50.3-46.9-78.6-11.3-29-17.3-59.4-17.3-87.8h50c0 45.3 19.6 95.4 52.3 134.1 34.5 40.7 78 63.2 122.3 63.2 97.8 0 176.6-107.5 176.6-196.5h50c0 28.5-6.1 58.9-17.7 87.9-11.2 28.2-27.7 55.3-47.6 78.3-21 24.3-45 43.7-71.4 57.5-28.9 15.1-59.2 22.8-89.9 22.8zM591 915h-62L285 734.9 397 609z"
                  p-id="8953" fill="#cdcdcd"></path>
                <path d="M511.3 845l64.8 54L739 731.3 651 609zM576.4 175H537v-39.4h-50V175h-39.4v50H487v39.4h50V225h39.4z"
                  p-id="8954" fill="#cdcdcd"></path>
              </svg>
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
              <img src="@/assets/images/addBtn.png" alt="">
            </div>
            <!-- <el-avatar shape="square" :size="100" fit="fill" src="@/assets/images/addBtn.png"></el-avatar> -->
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>

    <el-dialog :title="addCenterForm.id?'编辑中心':'创建中心'" :visible.sync="dialogvis" width="30%">
      <div class="dialogBdoy">
        <el-upload class="avatar-uploader" action="" :show-file-list="false" :before-upload="beforeAvatarUpload">
          <div class="avatarImg" @click="dialogvis = true">
            <img src="/public/logo.png" alt="">
          </div>
          <el-button style="margin-top: 35px;vertical-align: text-top; margin-left: 10px;" icon="el-icon-edit"
            size="mini"></el-button>
        </el-upload>

        <el-form  label-width="120px" :model="addCenterForm">
          <el-form-item style="margin: 10px 0;width:100%;" label="中心名称:">
            <el-input style="width: 100%;" size="mini" v-model="addCenterForm.name"></el-input>
          </el-form-item>
          <el-form-item style="margin-bottom:0px;width:100%;" label="中心管理员:">
            
            <el-select  style="width: 100%;" size="mini" v-model="addCenterForm.userName" filterable placeholder="请选择">
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
              id:1,
              name: '北京医院血管外科'
            },
            {
              url: require("/public/logo.png"),
              id:1,
              name: '北京医院血管外科'
            },
            {
              url: require("/public/logo.png"),
              id:1,
              name: '北京医院血管外科'
            },
            {
              url: require("/public/logo.png"),
              id:1,
              name: '北京医院血管外科'
            }, {
              url: require("/public/logo.png"),
              id:1,
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
      options:[],
      dialogvis: false
    }
  },
  methods: {
    beforeAvatarUpload() {
      return false
    },
    editCenterInfo(data){
      this.dialogvis = true;
      this.addCenterForm = {...data}
    },
    startModel(){
      this.dialogvis = true;
      Object.assign(this.addCenterForm,this.$options.data().addCenterForm)
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
  background: rgba(192, 196, 204);
  border: 1px solid rgba(192, 196, 204);
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

