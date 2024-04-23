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
      <el-table-column align="center" label="随访信息ID">
        <template slot-scope="{row}">
          <span>{{ row.followUpInfoId }}</span>
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
      <el-table-column align="center" label="随访人">
        <template slot-scope="{row}">
          <span>{{ row.followUpPerson }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="随访方式">
        <template slot-scope="{row}">
          <span>{{ row.followUpMethod }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="随访日期">
        <template slot-scope="{row}">
          <span>{{ row.followUpDate }}</span>
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

    <el-drawer title="随访详情信息" size="50%" :visible.sync="drawer" direction="rtl">

      <el-form label-width="200px" :model="followInfo" style="padding-right: 20px;">

        <el-row>
          <el-col :span="12">
            <el-form-item label="随访人:">
              <el-select :disabled="editVis" size="mini" style="width:150px" v-model="followInfo.hospital" filterable
                allow-create placeholder="请选择">
                <el-option v-for="item in suifangrenoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="随访方式:">
              <el-select :disabled="editVis" size="mini" style="width:150px" v-model="followInfo.hospital" filterable
                allow-create placeholder="请选择">
                <el-option v-for="item in suifangfangshioptions" :key="item.value" :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="随访日期:">
              <el-date-picker v-model="followInfo.name" style="width:150px" size="mini" type="date" placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="年龄(岁):">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="followInfo.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>


          <el-col :span="12">
            <el-form-item label="身高(cm):">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="followInfo.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="体重(kg):">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="followInfo.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="术后时长(月):">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="followInfo.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="当前表现：">
              <el-select :disabled="editVis" size="mini" style="width:150px" v-model="followInfo.hospital" multiple
                placeholder="请选择">
                <el-option v-for="item in firstoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="病情变化补充:">
              <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="脑相关不良事件情况（脑梗、脑出血等）:">
              <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="心血管不良事件情况（心梗、心衰等）:">
              <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="结核病情:">
              <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="激素 (药名-剂量-频次-给药方式默认p.o.):">
              <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="免疫抑制剂 (药名-剂量-频次-给药方式默认p.o.):">
              <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="生物制剂 (药名-剂量-频次-给药方式默认i.v.):">
              <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="降压药 (药名-剂量-频次-给药方式默认p.o.):">
              <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="降脂药 (药名-剂量-频次-给药方式默认p.o.):">
              <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item class="custom" label="抗栓药 (药名-剂量-频次-给药方式默认p.o.):">
              <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="用药补充:">
              <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="手术干预:">
              <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="随访实验室检验结果ID:">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="followInfo.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="红细胞沉降率(ESR,mm/h):">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="followInfo.name"></el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="C-反应蛋白(CRP,mg/L):">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="followInfo.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="IL-6 (pg/mL):">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="followInfo.name"></el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item class="custom" label="肿瘤坏死因子-α (TNF-α,pg/mL):">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="followInfo.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="影像检查时间:">
              <el-date-picker v-model="followInfo.name" style="width:150px" size="mini" type="date" placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="影像手段:">
              <el-select :disabled="editVis" size="mini" style="width:150px" v-model="followInfo.hospital" multiple
                placeholder="请选择">
                <el-option v-for="item in yingxiangtoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="靶血管情况:">
              <el-select :disabled="editVis" size="mini" style="width:150px" v-model="followInfo.hospital" multiple
                placeholder="请选择">
                <el-option v-for="item in baxuetoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="具体影像结果(靶血管/新发/加重):">
              <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="随访PGA活动性评价:">
              <el-select :disabled="editVis" size="mini" style="width:150px" v-model="followInfo.hospital"
                placeholder="请选择">
                <el-option v-for="item in GPAOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="本次随访疾病活动性评分ID:">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="followInfo.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="本次随访生活质量健康评价ID:">
              <el-input :disabled="editVis" style="width:150px" size="mini" v-model="followInfo.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="其他评价补充:">
              <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="随访补充:">
              <el-input :disabled="editVis" type="textarea" :rows="4" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-drawer>

  </div>
</template>

<script>
import { getFollowUpPageInfo } from '@/api/dataquery'
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
      followInfo: {
        name: '2',
        hospital: '1'
      },
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
      const { data } = await getFollowUpPageInfo(this.listQuery)
      const items = data.data
      this.total = data.totalCount
      this.list = items.map(v => {
        return v
      })
      this.listLoading = false
    }
  },
  computed: {
    ...mapGetters([
      'centerId'
    ])
  }
}
</script>

<style scoped>
.filter-container {
  margin-bottom: 30px;

  .filter-item {
    margin-left: 20px;
  }
}

::v-deep .custom .el-form-item__label {
  line-height: 20px
}

.el-form-item {
  margin-bottom: 5px;
}
</style>
