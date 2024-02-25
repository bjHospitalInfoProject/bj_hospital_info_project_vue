<template>
  <div class="app-container import-container">
    <el-card class="header">
      <el-select v-model="fileTemplate" placeholder="请选择导入模板" clearable>
        <el-option v-for="opt in templateOptions" :key="opt.value" :label="opt.label" :value="opt.value" />
      </el-select>
      <el-button :disabled="!fileTemplate" class="import-btn" type="primary" icon="el-icon-upload" @click="importFile">导入</el-button>
      <el-button :disabled="!fileTemplate" icon="el-icon-download" type="success" @click="downloadTemplate">下载模板</el-button>
      <el-button :disabled="!isExcelData" icon="el-icon-delete" type="danger" @click="removeExcelData">清除上传内容</el-button>
    </el-card>

    <el-card v-loading="loading" class="body">
      <div v-if="!isExcelData" class="upload-file-container">
        <el-upload v-if="fileTemplate" ref="elUploadRef" accept=".xlsx" drag action="#" :show-file-list="false" :before-upload="uploadFilePrevValidate" :on-change="onChange">
          <i class="el-icon-upload" />
          <div class="el-upload__text">
            <p>将文件拖到此处，或<em>点击上传</em></p>
            <p>只能上传jpg/png文件，且不超过500kb</p>
          </div>
        </el-upload>
        <el-empty v-else description="请选择导入模板" />
      </div>
      <el-table v-else height="100%" :data="excelData.results">
        <el-table-column
          v-for="(col, index) in excelData.header"
          :key="index"
          :prop="col"
          :label="col"
          align="center"
        />
      </el-table>
    </el-card>

    <el-card class="footer">
      <el-row type="flex" justify="center">
        <el-button :disabled="!isExcelData" type="primary">确定</el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import readXlsxFile from '@/mixins/read-xlsx-file'
import dict from './dict'

export default {
  name: 'Import',

  // readXlsxFile 读取 xlsx 方法
  mixins: [readXlsxFile],

  data() {
    return {
      loading: false,
      fileTemplate: '',
      templateOptions: [
        { label: '模板1', value: 'template/模板-1.xlsx' }
      ]
    }
  },

  computed: {
    isExcelData() {
      return this.excelData.header && this.excelData.header.length
    }
  },

  methods: {
    downloadTemplate() {
      const path = this.templateOptions.find(item => item.value === this.fileTemplate).value
      window.open(path, '_blank')
    },

    importFile() {
      console.log(this.$refs.elUploadRef)
      this.$refs.elUploadRef.$refs['upload-inner'].$refs.input.click()
    },

    removeExcelData() {
      this.excelData = {
        header: null,
        results: null
      }
    },

    /**
     * @description 文件上传前置校验
     */
    uploadFilePrevValidate(file) {
      return false
    },

    async onChange(file) {
      if (!this.isExcel(file.raw)) {
        this.$message.error('上传文件只能是 XLSX 格式!')
        return
      }

      console.log(arguments)
      this.loading = true
      await this.readerData(file.raw)
      console.log(this.excelData)
      const res = await this.excelToJson(dict.template)
      this.loading = false
      console.log('res', res)
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep {

  .body .el-card__body {
    height: 100%;
  }

  .upload-file-container .el-upload {
    width: 100%;
    height: 100%;

    .el-upload-dragger {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
  }

  .footer .el-card__body {
    padding: 15px;
  }
}

.import-container {
  height: calc(100vh - 50px);
  flex: 1;
  display: flex;
  flex-direction: column;

  .import-btn {
    margin-left: 10px;
  }

  .body {
    flex: 1;
    overflow: auto;
    margin-top: 20px;

    .upload-file-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;

      & > div {
        width: 100%;
        height: 100%;
      }
    }
  }

  .footer {
    margin-top: 20px;
  }
}
</style>
