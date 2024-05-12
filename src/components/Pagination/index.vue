<template>
  <div :class="{'hidden':hidden}" class="pagination-container" style="text-align: right;">
    <el-pagination
      :background="background"
      :current-page.sync="currentPage"
      :page-size.sync="pageSize1"
      :layout="layout"
      :page-sizes="pageSizes"
      :total="total"
      v-bind="$attrs"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>

export default {
  name: 'Pagination',
  props: {
    total: {
      required: true,
      type: Number
    },
    pageNo: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 50]
      }
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },
    background: {
      type: Boolean,
      default: true
    },
    autoScroll: {
      type: Boolean,
      default: true
    },
    hidden: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentPage: {
      get() {
        return this.pageNo
      },
      set(val) {
        this.$emit('update:pageNo', val)
      }
    },
    pageSize1: {
      get() {
        return this.pageSize
      },
      set(val) {
        this.$emit('update:pageSize', val)
      }
    }
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('pagination', { pageNo: this.currentPage, pageSize: val })
      
    },
    handleCurrentChange(val) {
      this.$emit('pagination', { pageNo: val, pageSize: this.pageSize1 })
      
    }
  }
}
</script>

<style scoped>
.pagination-container {
  background: #fff;
  padding: 15px 16px;
}
.pagination-container.hidden {
  display: none;
}
</style>
