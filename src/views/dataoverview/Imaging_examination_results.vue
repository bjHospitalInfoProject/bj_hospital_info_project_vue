<template>
  <div class="app-container">

    <div class="filter-container">
      <el-form :inline="true" :model="listQuery" class="demo-form-inline">
        <el-form-item label="姓名">
          <el-input v-model="listQuery.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="listQuery.phone"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getList">查询</el-button>
        </el-form-item>
      </el-form>

    </div>

    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="影像学检查结果ID">
        <template slot-scope="{row}">
          <span>{{ row.imagingExamResultId }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="填报人">
        <template slot-scope="{row}">
          <span>{{ row.reporter }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="填报时间">
        <template slot-scope="{row}">
          <span>{{ row.reportTime }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前影像手段">
        <template slot-scope="{row}">
          <span>{{ row.preImagingMethodsStr }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前本院影像">
        <template slot-scope="{row}">
          <span>{{ row.preHospitalImagingStr }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="术后本院影像">
        <template slot-scope="{row}">
          <span>{{ row.postHospitalImagingStr }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="影像学检查补充">
        <template slot-scope="{row}">
          <span>{{ row.additionalImaging }}</span>
        </template>
      </el-table-column>

      <el-table-column fixed="right" label="操作" width="80">
        <template slot-scope="scope">
          <el-button type="text" @click="getDetailInfoOption" size="small">详情</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total > 0" :total="total" :pageNo.sync="listQuery.pageNo" :pageSize.sync="listQuery.pageSize"
      @pagination="getList" />


    <el-drawer title="结果详情" size="50%" :visible.sync="drawer" direction="rtl">

      <el-form label-width="150px" :model="imageInfo" style="padding-right: 20px;">


        <el-row>
          <el-col :span="12">
            <el-form-item label="影像学检查结果ID：">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="imageInfo.imagingExamResultId"></el-input>
            </el-form-item>

          </el-col>
          <el-col :span="12">
            <el-form-item label="填报人：">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="imageInfo.reporter"></el-input>
            </el-form-item>
          </el-col>

        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="填报时间：">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="imageInfo.reportTime"></el-input>

            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="术前影像手段：">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="imageInfo.preImagingMethods"></el-input>

            </el-form-item>
          </el-col>
        </el-row>
        <el-row>

          <el-col :span="12">
            <el-form-item label="术前本院影像：">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="imageInfo.preHospitalImaging"></el-input>

            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="术后本院影像：">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="imageInfo.postHospitalImaging"></el-input>

            </el-form-item>
          </el-col>
        </el-row>
        
        <el-row>
          <el-col :span="12">
            <el-form-item label="Numano影像分型：">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="imageInfo.numanoClassificationStr"></el-input>

            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item class="custom" label="近3月新发/加重影像表现：">
              <el-input :disabled="editVis" style="width:150px" size="mini"
                v-model="imageInfo.recentChanges"></el-input>

            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="">
              <img style="width:90%" src="@/assets/images/Numano.png" alt="">
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="影像学检查补充：">
              <el-input :disabled="editVis" type="textarea" v-model="imageInfo.additionalImaging" :rows="3"
                placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="重度狭窄/闭塞血管好发部位(xx动脉-分叉起始段/中段/远段)：">
              <el-input :disabled="editVis" type="textarea" v-model="imageInfo.severeNarrowingLocation" :rows="3"
                placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-divider content-position="left">头颈胸部上肢影像</el-divider>
      <el-form label-position="top" label-width="130px" :model="imageInfo" style="padding-right: 20px;">
        <div class="headInfo">
          <div style="left: 26%;" class="labelRight">
            <el-form-item label="颅内动脉">
              <el-input :disabled="editVis"  size="mini"
                v-model="imageInfo.intracranialArteriesStr"></el-input>

            </el-form-item>
          </div>
          <div style="right: 26%;">
            <el-form-item label="Willis环">
              <el-input :disabled="editVis"  size="mini"
                v-model="imageInfo.willisRingStr"></el-input>

            </el-form-item>
          </div>
          <div style="left: 26%;top: 15%;" class="labelRight">
            <el-form-item label="右颈内动脉">
              <el-input :disabled="editVis"  size="mini"
                v-model="imageInfo.rightInternalCarotidArteryStr"></el-input>

            </el-form-item>
          </div>
          <div style="left: 11%;top: 15%;" class="labelRight">
            <el-form-item label="右颈外动脉">
              <el-input :disabled="editVis"  size="mini"
                v-model="imageInfo.rightExternalCarotidArteryStr"></el-input>

            </el-form-item>
          </div>
          <div style="right: 26%;top: 15%;" class="">
            <el-form-item label="左颈内动脉">
              <el-input :disabled="editVis"  size="mini"
                v-model="imageInfo.leftInternalCarotidArteryStr"></el-input>

            </el-form-item>
          </div>
          <div style="right: 11%;top: 15%;" class="">
            <el-form-item label="左颈外动脉">
              <el-input :disabled="editVis"  size="mini"
                v-model="imageInfo.leftExternalCarotidArteryStr"></el-input>

            </el-form-item>
          </div>

          <div style="left: 18%;top: 30%;" class="labelRight">
            <el-form-item label="右颈总动脉">
              <el-input :disabled="editVis"  size="mini"
                v-model="imageInfo.rightCommonCarotidArteryStr"></el-input>

            </el-form-item>
          </div>
          <div style="right: 18%;top: 30%;" class="">
            <el-form-item label="左颈总动脉">
              <el-input :disabled="editVis"  size="mini"
                v-model="imageInfo.leftCommonCarotidArteryStr"></el-input>

            </el-form-item>
          </div>

          <div style="left: 26%;top: 45%;" class="labelRight">
            <el-form-item label="右椎动脉">
              <el-input :disabled="editVis"  size="mini"
                v-model="imageInfo.rightVertebralArteryStr"></el-input>

            </el-form-item>
          </div>

          <div style="right: 26%;top: 45%;" class="">
            <el-form-item label="左椎动脉">
              <el-input :disabled="editVis"  size="mini"
                v-model="imageInfo.leftVertebralArteryStr"></el-input>

            </el-form-item>
          </div>
          <div style="left: 14%;top: 55%;" class="labelRight">
            <el-form-item label="右腋动脉">
              <el-input :disabled="editVis"  size="mini"
                v-model="imageInfo.rightAxillaryArteryStr"></el-input>

            </el-form-item>
          </div>
          <div style="left: 29%;top: 55%;" class="labelRight">
            <el-form-item label="右锁骨下动脉">
              <el-input :disabled="editVis"  size="mini"
                v-model="imageInfo.rightSubclavianArteryStr"></el-input>

            </el-form-item>
          </div>

          <div style="right: 14%;top: 55%;" class="">
            <el-form-item label="左锁骨下动脉">
              <el-input :disabled="editVis"  size="mini"
                v-model="imageInfo.leftSubclavianArteryStr"></el-input>

            </el-form-item>
          </div>
          <div style="right: 27%;top: 55%;" class="">
            <el-form-item label="左腋动脉">
              <el-input :disabled="editVis"  size="mini"
                v-model="imageInfo.leftAxillaryArteryStr"></el-input>

            </el-form-item>
          </div>

          <div style="left: 31.5%;top: 65%;" class="labelRight">
            <el-form-item label="头臂干">
              <el-input :disabled="editVis"  size="mini" v-model="imageInfo.name"></el-input>

            </el-form-item>
          </div>
          <div style="right:29%;top: 65%;" class="">
            <el-form-item label="主动脉弓">
              <el-input :disabled="editVis"  size="mini"
                v-model="imageInfo.aorticArchStr"></el-input>

            </el-form-item>
          </div>
          <div style="left: 33%;top: 75%;" class="labelRight">
            <el-form-item label="升主动脉">
              <el-input :disabled="editVis"  size="mini"
                v-model="imageInfo.ascendingAortaStr"></el-input>

            </el-form-item>
          </div>
          <div style="right: 29%;top: 75%;" class="">
            <el-form-item label="胸降主动脉">
              <el-input :disabled="editVis"  size="mini"
                v-model="imageInfo.descendingAortaStr"></el-input>

            </el-form-item>
          </div>

          <div style="left: 35%;top: 85%;" class="labelRight">
            <el-form-item label="肺动脉">
              <el-input :disabled="editVis"  size="mini"
                v-model="imageInfo.pulmonaryArteryStr"></el-input>

            </el-form-item>
          </div>
          <div style="right: 35%;top: 85%;" class="">
            <el-form-item label="管状动脉">
              <el-input :disabled="editVis"  size="mini" v-model="imageInfo.name"></el-input>

            </el-form-item>
          </div>
        </div>
      </el-form>
      <el-divider content-position="left">腹部下肢影像</el-divider>

      <el-form label-position="top" label-width="130px" :model="imageInfo" style="padding-right: 20px;">
        <div class="fubuxiazhi">
          <div class="" style="right:31%;top:0">
            <el-form-item label="肾上腹主动脉">
              <el-input :disabled="editVis"  size="mini"
                v-model="imageInfo.suprarenalAbdominalAortaStr"></el-input>
            </el-form-item>
          </div>
          <div class="labelRight" style="left:32%;top:10%">
            <el-form-item label="腹腔干">
              <el-input :disabled="editVis"  size="mini"
                v-model="imageInfo.celiacTrunkStr"></el-input>

            </el-form-item>
          </div>
          <div class="" style="right:32%;top:17%">
            <el-form-item label="左肾动脉">
              <el-input :disabled="editVis"  size="mini"
                v-model="imageInfo.leftRenalArteryStr"></el-input>

            </el-form-item>
          </div>
          <div class="labelRight" style="left:32%;top:25%">
            <el-form-item label="右肾动脉">
              <el-input :disabled="editVis"  size="mini"
                v-model="imageInfo.rightRenalArteryStr"></el-input>

            </el-form-item>
          </div>

          <div class="" style="right:32%;top:30%">
            <el-form-item label="肠系膜上动脉">
              <el-input :disabled="editVis"  size="mini"
                v-model="imageInfo.superiorMesentericArteryStr"></el-input>

            </el-form-item>
          </div>

          <div class="" style="right:33%;top:43%">
            <el-form-item label="肠系膜下动脉">
              <el-input :disabled="editVis"  size="mini"
                v-model="imageInfo.inferiorMesentericArteryStr"></el-input>

            </el-form-item>
          </div>
          <div class="labelRight" style="left:33%;top:38%">
            <el-form-item label="肾下腹主动脉">
              <el-input :disabled="editVis"  size="mini"
                v-model="imageInfo.infrarenalAbdominalAortaStr"></el-input>

            </el-form-item>
          </div>
          <div class="labelRight" style="left:31%;top:55%">
            <el-form-item label="右髂总动脉">
              <el-input :disabled="editVis"  size="mini"
                v-model="imageInfo.rightIliacArteryStr"></el-input>

            </el-form-item>
          </div>


          <div class="" style="right:31%;top:53%">
            <el-form-item label="左髂总动脉">
              <el-input :disabled="editVis"  size="mini"
                v-model="imageInfo.leftIliacArteryStr"></el-input>

            </el-form-item>
          </div>

          <div class="labelRight" style="left:28%;top:70%">
            <el-form-item label="右髂外动脉">
              <el-input :disabled="editVis"  size="mini"
                v-model="imageInfo.rightExternalIliacArteryStr"></el-input>

            </el-form-item>
          </div>


          <div class="" style="right:28%;top:68%">
            <el-form-item label="左髂外动脉">
              <el-input :disabled="editVis"  size="mini"
                v-model="imageInfo.leftExternalIliacArteryStr"></el-input>

            </el-form-item>
          </div>

          <div class="labelRight" style="left:34.5%;top:93%">
            <el-form-item label="右髂内动脉">
              <el-input :disabled="editVis"  size="mini"
                v-model="imageInfo.rightInternalIliacArteryStr"></el-input>
            </el-form-item>
          </div>


          <div class="" style="right:34.5%;top:93%">
            <el-form-item label="左髂内动脉">
              <el-input :disabled="editVis"  size="mini"
                v-model="imageInfo.leftInternalIliacArteryStr"></el-input>

            </el-form-item>
          </div>
          <div class="labelRight" style="left:26%;top:81%">
            <el-form-item label="右股动脉">
              <el-input :disabled="editVis"  size="mini"
                v-model="imageInfo.rightFemoralArteryStr"></el-input>

            </el-form-item>
          </div>
          <div class="" style="right:26%;top:81%">
            <el-form-item label="左股动脉">
              <el-input :disabled="editVis"  size="mini"
                v-model="imageInfo.leftFemoralArteryStr"></el-input>

            </el-form-item>
          </div>

        </div>
      </el-form>

    </el-drawer>

  </div>
</template>

<script>
import { getPatientPageInfoList } from '@/api/dataquery'
import Pagination from '@/components/Pagination'
import { mapGetters } from 'vuex'


export default {
  name: 'InlineEditTable',
  components: { Pagination },
  data() {
    return {
      list: [],
      listLoading: true,
      total: 0,
      listQuery: {
        pageNo: 1,
        pageSize: 10,
        name: "",
        phone: "",
        centerId: ''
      },
      drawer: false,
      imageInfo: {},
      editVis: true
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getDetailInfoOption() {
      this.drawer = true;
    },
    async getList() {
      this.listLoading = true
      this.listQuery.centerId = this.centerId
      const { data } = await getPatientPageInfoList(this.listQuery)
      const items = data.data
      this.total = data.totalCount
      this.list = items.map(v => {
        return v
      })
      this.listLoading = false
    },
    getLabelFromValue(options, value) {
      for (let i = 0; i < options.length; i++) {
        if (options[i].value === value) {
          return options[i].label;
        }
      }
      // 如果没有找到匹配的值，则返回空字符串或者其他你觉得合适的值
      return "";
    }
  },
  computed: {
    ...mapGetters([
      'centerId'
    ])
  }
}
</script>

<style scoped lang="less">
.filter-container {
  margin-bottom: 30px;

  .filter-item {
    margin-left: 20px;
  }
}

::v-deep .el-drawer__body {
  margin-left: 20px;
}


.rowSelect {
  .el-form-item__label {
    height: 20px;
    line-height: 20px;
  }

  .left .el-form-item {
    text-align: right;
  }
}


::v-deep .custom .el-form-item__label {
  line-height: 20px
}

.el-form-item {
  margin-bottom: 5px;
}


.headInfo,
.fubuxiazhi {
  background: url("../../assets/images/headInfo.png") center top no-repeat;
  width: 100%;
  height: 60vh;
  position: relative;
  background-size: 25% 85%;

  ::v-deep .el-form-item__label {
    height: 20px;
    line-height: 20px;
  }

  >div {
    display: inline-block;
    position: absolute;
    width: 13%;
  }

  .labelRight {
    text-align: right;
  }
}

.fubuxiazhi {
  background: url("../../assets/images/fubuxiazhi.jpg") center top no-repeat;
  height: 50vh;
  background-size: 25% 90%;
  background-position: center 3vh;
}
</style>
