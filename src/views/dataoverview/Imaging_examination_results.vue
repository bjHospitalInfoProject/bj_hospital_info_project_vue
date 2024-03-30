<template>
  <div class="app-container">

    <div class="filter-container">
      <el-input v-model="listQuery.name" placeholder="姓名" style="width: 150px;" @keyup.enter.native="handleFilter" />

      <el-input v-model="listQuery.tel" placeholder="手机号" style="width: 150px;" class="filter-item"
        @keyup.enter.native="handleFilter" />

      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        搜索
      </el-button>

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

    <pagination v-show="total > 0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit"
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
        <el-row class="rowSelect">
          <el-col :span="10">
            <el-row class="left">
              <el-col :offset="12" :span="12">
                <el-form-item label="右侧大脑前动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :offset="12" :span="12">
                <el-form-item label="右侧大脑中动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Willis环">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="右侧大脑后动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="基底动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="右椎动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="头臂干/无名动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="左颈外动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="右颅内动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="右颈内动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :offset="12" :span="12">
                <el-form-item label="右颈总动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>


              <el-col :offset="12" :span="12">
                <el-form-item label="右锁骨下动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :offset="12" :span="12">
                <el-form-item label="右腋动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>

            </el-row>
          </el-col>
          <el-col :span="4" style="text-align: center;margin-top: 100px;">
            <img style="width:90%" src="@/assets/images/headInfo.png" alt="">
          </el-col>
          <el-col :span="10">
            <el-row>
              <el-col :span="12">
                <el-form-item label="左侧大脑前动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="左侧大脑中动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="左侧大脑后动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="左椎动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="左颈外动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="左颈内动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="左颈总动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="左锁骨下动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="左腋动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label=" ">
                  <br>
                </el-form-item>

                <el-form-item label=" ">
                  <br>
                </el-form-item>
                <el-form-item label="升主动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="冠状动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>

                <el-form-item label="肺动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="胸降主动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>

              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-form>
      <el-divider content-position="left">腹部下肢影像</el-divider>

      <el-form label-position="top" label-width="130px" :model="imageInfo" style="padding-right: 20px;">
        <el-row class="rowSelect">
          <el-col :span="10">
            <el-row class="left">
              <el-col :offset="12" :span="12">
                <el-form-item label="右髂总动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>


              <el-col :span="12">
                <el-form-item label="肾下腹主动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :span="12">
                <el-form-item label="右髂内动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Riolan弓">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :span="12">
                <el-form-item label="右髂外动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="腹腔干">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="右股动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>


              <el-col :offset="12" :span="12">
                <el-form-item label="右肾动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>

            </el-row>
          </el-col>
          <el-col :span="4" style="text-align: center;">
            <img style="width:90%" src="@/assets/images/fubuxiazhi.jpg" alt="">
          </el-col>
          <el-col :span="10">
            <el-row>
              <el-col :span="12">
                <el-form-item label="左髂总动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="左髂内动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="左髂外动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="左股动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="左肾动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label=" ">
                  <br>
                </el-form-item>

                <el-form-item label="肾上腹主动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="肠系膜上动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="肠系膜下动脉">
                  <el-select style="width:130px" :disabled="editVis" multiple size="mini" v-model="imageInfo.hospital"
                    placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>

              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-form>

    </el-drawer>

  </div>
</template>

<script>
import { fetchList } from '@/api/article'
import Pagination from '@/components/Pagination'


export default {
  name: 'InlineEditTable',
  components: { Pagination },

  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      drawer: false,
      list: null,
      listLoading: true,
      total: 0,
      listQuery: {
        page: 1,
        limit: 10
      },
      formInline: {
        user: '',
        region: ''
      },
      activeName: 'first',
      imageInfo: {
        name: '2',
        hospital: '1'
      },
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      this.listLoading = true
      const { data } = await fetchList(this.listQuery)
      const items = data.items
      this.total = data.total
      this.list = items.map(v => {
        this.$set(v, 'edit', false) // https://vuejs.org/v2/guide/reactivity.html
        v.originalTitle = v.title //  will be used when user click the cancel botton
        return v
      })
      this.listLoading = false
    },
    cancelEdit(row) {
      row.title = row.originalTitle
      row.edit = false
      this.$message({
        message: 'The title has been restored to the original value',
        type: 'warning'
      })
    },
    confirmEdit(row) {
      row.edit = false
      row.originalTitle = row.title
      this.$message({
        message: 'The title has been edited',
        type: 'success'
      })
    },
    getDetailInfoOption() {
      this.drawer = true;
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
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
</style>
