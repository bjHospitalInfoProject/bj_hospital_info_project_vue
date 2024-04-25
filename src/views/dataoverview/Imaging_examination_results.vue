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
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="填报人">
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="填报时间">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前影像手段">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术前本院影像">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="术后影像手段">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="术后本院影像">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="影像学检查补充">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
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
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="imageInfo.name"></el-input>
            </el-form-item>

          </el-col>
          <el-col :span="12">
            <el-form-item label="填报人：">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="imageInfo.name"></el-input>
            </el-form-item>
          </el-col>

        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="填报时间：">
              <el-date-picker v-model="imageInfo.name" style="width:150px" size="mini" type="date" placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="术前影像手段：">
              <el-select :disabled="editVis" style="width:150px" size="mini" v-model="imageInfo.hospital" multiple
                placeholder="请选择">
                <el-option v-for="item in yingxiangOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>

          <el-col :span="12">
            <el-form-item label="术前本院影像：">
              <el-select :disabled="editVis" style="width:150px" size="mini" v-model="imageInfo.hospital" multiple
                placeholder="请选择">
                <el-option v-for="item in yingxiangOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="术后本院影像：">
              <el-select :disabled="editVis" style="width:150px" size="mini" v-model="imageInfo.hospital" multiple
                placeholder="请选择">
                <el-option v-for="item in yingxiangOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="影像学检查补充：">
              <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="Numano影像分型：">
              <el-select :disabled="editVis" style="width:150px" size="mini" v-model="imageInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in fenxingOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item class="custom" label="近3月新发/加重影像表现：">
              <el-select :disabled="editVis" style="width:150px" size="mini" v-model="imageInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in biaoxianptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
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
            <el-form-item class="custom" label="重度狭窄/闭塞血管好发部位(xx动脉-分叉起始段/中段/远段)：">
              <el-input :disabled="editVis" type="textarea" :rows="3" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-divider content-position="left">头颈胸部上肢影像</el-divider>
      <el-form label-position="top" label-width="130px" :model="imageInfo" style="padding-right: 20px;">
        <div class="headInfo">
          <div style="left: 28%;" class="labelRight">
            <el-form-item label="颅内动脉">
              <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div style="left: 60%;">
            <el-form-item label="Willis环">
              <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div style="left: 28%;top: 15%;" class="labelRight">
            <el-form-item label="右颈内动脉">
              <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div style="left: 13%;top: 15%;" class="labelRight">
            <el-form-item label="右颈外动脉">
              <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div style="left: 60%;top: 15%;" class="">
            <el-form-item label="左颈内动脉">
              <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div style="left: 75%;top: 15%;" class="">
            <el-form-item label="左颈外动脉">
              <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>

          <div style="left: 20%;top: 30%;" class="labelRight">
            <el-form-item label="右颈总动脉">
              <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div style="left: 68%;top: 30%;" class="">
            <el-form-item label="左颈总动脉">
              <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>

          <div style="left: 28%;top: 45%;" class="labelRight">
            <el-form-item label="右椎动脉">
              <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>

          <div style="left: 60%;top: 45%;" class="">
            <el-form-item label="左椎动脉">
              <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div style="left: 18%;top: 55%;" class="labelRight">
            <el-form-item label="右腋动脉">
              <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div style="left: 31%;top: 55%;" class="labelRight">
            <el-form-item label="右锁骨下动脉">
              <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>

          <div style="left: 57%;top: 55%;" class="">
            <el-form-item label="左锁骨下动脉">
              <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div style="left: 70%;top: 55%;" class="">
            <el-form-item label="左腋动脉">
              <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>

          <div style="left: 33.5%;top: 65%;" class="labelRight">
            <el-form-item label="头臂干">
              <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div style="left: 55%;top: 65%;" class="">
            <el-form-item label="主动脉弓">
              <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div style="left: 35%;top: 75%;" class="labelRight">
            <el-form-item label="升主动脉">
              <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div style="left: 54%;top: 75%;" class="">
            <el-form-item label="胸降主动脉">
              <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>

          <div style="left: 37%;top: 85%;" class="labelRight">
            <el-form-item label="肺动脉">
              <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div style="left: 52%;top: 85%;" class="">
            <el-form-item label="管状动脉">
              <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
        </div>
      </el-form>
      <el-divider content-position="left">腹部下肢影像</el-divider>

      <el-form label-position="top" label-width="130px" :model="imageInfo" style="padding-right: 20px;">
        <div class="fubuxiazhi">
          <div class="" style="right:33%;top:0">
            <el-form-item label="肾上腹主动脉">
              <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="labelRight" style="left:34%;top:10%">
            <el-form-item label="腹腔干">
              <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="" style="right:34%;top:17%">
            <el-form-item label="左肾动脉">
              <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="labelRight" style="left:34%;top:25%">
            <el-form-item label="右肾动脉">
              <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>

          <div class="" style="right:35%;top:30%">
            <el-form-item label="肠系膜上动脉">
              <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>

          <div class="" style="right:35%;top:43%">
            <el-form-item label="肠系膜下动脉">
              <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="labelRight" style="left:35%;top:38%">
            <el-form-item label="肾下腹主动脉">
              <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="labelRight" style="left:33%;top:55%">
            <el-form-item label="右髂总动脉">
              <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>


          <div class="" style="right:33%;top:53%">
            <el-form-item label="左髂总动脉">
              <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>

          <div class="labelRight" style="left:30%;top:70%">
            <el-form-item label="右髂外动脉">
              <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>


          <div class="" style="right:30%;top:68%">
            <el-form-item label="左髂外动脉">
              <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>

          <div class="labelRight" style="left:36.5%;top:93%">
            <el-form-item label="右髂内动脉">
              <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>


          <div class="" style="right:36.5%;top:93%">
            <el-form-item label="左髂内动脉">
              <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="labelRight" style="left:30%;top:85%">
            <el-form-item label="右股动脉">
              <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>


          <div class="" style="right:30%;top:85%">
            <el-form-item label="左股动脉">
              <el-select :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
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
      list: null,
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
      imageInfo: {}
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
  // background-position:center -20%;
  width: 100%;
  height: 60vh;
  position: relative;
  background-size: 16% 85%;

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
  background-size: 16% 90%;
  background-position: center 3vh;
}
</style>
