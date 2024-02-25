import XLSX from 'xlsx'

export default {
  data() {
    return {
      excelData: {
        header: null,
        results: null
      }
    }
  },

  methods: {
    /**
     * @description 表格数据转json
     * @param {Object} headerMap 头部数据映射 { '表格头部内容': '对应json key' }
     */
    excelToJson(headerMap) {
      return new Promise((resolve, reject) => {
        try {
          const headerProps = [{
            key: 'id',
            label: '序号'
          }]
          const jsonData = []
          const { header, results } = this.excelData

          header.forEach(head => {
            headerProps.push({
              key: headerMap[head],
              label: head
            })
          })

          results.forEach(item => {
            const obj = Object.keys(item).reduce((prev, k) => {
              prev[headerMap[k]] = item[k]
              return prev
            }, {})
            jsonData.push(obj)
          })

          resolve({ header: headerProps, results: jsonData })
        } catch (error) {
          console.log(error)
          reject(error)
        }
      })
    },

    generateData({ header, results }) {
      this.excelData.header = header
      this.excelData.results = results
    },

    /**
     * @description 读取xlsx文件内容
     */
    readerData(file) {
      this.loading = true
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = e => {
          const data = e.target.result
          const workbook = XLSX.read(data, { type: 'array' })
          const firstSheetName = workbook.SheetNames[0]
          const worksheet = workbook.Sheets[firstSheetName]
          const header = this.getHeaderRow(worksheet)
          const results = XLSX.utils.sheet_to_json(worksheet)
          this.generateData({ header, results })
          console.log('results', results)
          console.log('header', header)
          this.loading = false
          resolve()
        }
        reader.readAsArrayBuffer(file)
      })
    },

    /**
     * @description 获取xlsx表格头部内容
     */
    getHeaderRow(sheet) {
      const headers = []
      const range = XLSX.utils.decode_range(sheet['!ref'])
      let C
      const R = range.s.r
      /* start in the first row */
      for (C = range.s.c; C <= range.e.c; ++C) { /* walk every column in the range */
        const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]
        /* find the cell in the first row */
        let hdr = 'UNKNOWN ' + C // <-- replace with your desired default
        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
        headers.push(hdr)
      }
      return headers
    },

    isExcel(file) {
      return /\.(xlsx|xls|csv)$/.test(file.name)
    }
  }
}
