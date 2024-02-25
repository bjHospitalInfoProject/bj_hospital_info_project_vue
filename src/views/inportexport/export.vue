<template>
  <div class="app-container export-container">
    <el-card class="header">
      <el-form>
        <el-form-item>
          <el-select v-model="fileTemplate" placeholder="请选择导出的数据" clearable @change="switchData">
            <el-option v-for="opt in templateOptions" :key="opt.value" :label="opt.label" :value="opt.value" />
          </el-select>
          <el-button :disabled="!fileTemplate" class="export-btn" icon="el-icon-download" type="primary" @click="exportFile">导出</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card class="body">
      <el-table v-if="excelData.header && excelData.results.length" height="100%" :data="excelData.results">
        <el-table-column
          v-for="(value, key) in excelData.header"
          :key="value"
          :prop="value"
          :label="key"
          align="center"
        />
      </el-table>
      <el-empty v-else description="暂无数据" />
    </el-card>
  </div>
</template>

<script>
import dict from './dict'

export default {
  name: 'Export',

  data() {
    return {
      fileTemplate: '',
      templateOptions: [
        { label: '模板1-数据', value: 'template' }
      ],
      excelData: {
        header: null,
        results: [
          {
            'header1': 1,
            'header2': 2,
            'header3': 3
          },
          {
            'header1': 4,
            'header2': 5,
            'header3': 6
          },
          {
            'header1': 1,
            'header2': 2,
            'header3': 3
          },
          {
            'header1': 4,
            'header2': 5,
            'header3': 6
          },
          {
            'header1': 1,
            'header2': 2,
            'header3': 3
          },
          {
            'header1': 4,
            'header2': 5,
            'header3': 6
          },
          {
            'header1': 1,
            'header2': 2,
            'header3': 3
          },
          {
            'header1': 4,
            'header2': 5,
            'header3': 6
          },
          {
            'header1': 1,
            'header2': 2,
            'header3': 3
          },
          {
            'header1': 4,
            'header2': 5,
            'header3': 6
          },
          {
            'header1': 1,
            'header2': 2,
            'header3': 3
          },
          {
            'header1': 4,
            'header2': 5,
            'header3': 6
          },
          {
            'header1': 1,
            'header2': 2,
            'header3': 3
          },
          {
            'header1': 4,
            'header2': 5,
            'header3': 6
          },
          {
            'header1': 1,
            'header2': 2,
            'header3': 3
          },
          {
            'header1': 4,
            'header2': 5,
            'header3': 6
          },
          {
            'header1': 1,
            'header2': 2,
            'header3': 3
          },
          {
            'header1': 4,
            'header2': 5,
            'header3': 6
          },
          {
            'header1': 1,
            'header2': 2,
            'header3': 3
          },
          {
            'header1': 4,
            'header2': 5,
            'header3': 6
          },
          {
            'header1': 1,
            'header2': 2,
            'header3': 3
          },
          {
            'header1': 4,
            'header2': 5,
            'header3': 6
          },
          {
            'header1': 1,
            'header2': 2,
            'header3': 3
          },
          {
            'header1': 4,
            'header2': 5,
            'header3': 6
          }
        ]
      }
    }
  },

  methods: {
    switchData(value) {
      this.excelData.header = dict[value]
      console.log(this.excelData)
    },

    exportFile() {
      import('/vendor/Export2Excel').then(excel => {
        const { header, results } = this.excelData
        const filename = this.templateOptions.find(item => item.value === this.fileTemplate).label
        console.log(header, results)
        excel.export_json_to_excel({
          header: Object.keys(header),
          data: results.map(item => Object.values(item)),
          filename,
          autoWidth: true,
          bookType: 'xlsx'
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep {
  .body .el-card__body {
    height: 100%;
  }
}

.export-container {
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;

  .export-btn {
    margin-left: 10px;
  }

  .body {
    height: 100%;
    margin-top: 20px;
  }
}
</style>
