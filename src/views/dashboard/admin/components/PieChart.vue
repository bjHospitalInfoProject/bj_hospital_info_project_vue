<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'
import "/node_modules/echarts/map/js/china.js"; // 引入中国地图数据

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '500px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {


      const selectedProvinces = [
        { name: '北京', value: 100, color: '#123456' },   // 红色
        { name: '上海', value: 150, color: '#00ff00' },   // 绿色

        { name: '上海', value: 150, color: '#00ff00' },   // 绿色


      ];

      // 初始数据
      const data = [
        { name: '北京', value: 123 },
        { name: '上海', value: 456 },
        { name: '广东', value: 789 },
        { name: '新疆', value: 7089 },
        { name: '山西', value: 7289 },
        { name: '湖北', value: 389 },

        { name: '西藏', value: 7839 },

        // 其他省份的数据...
      ];

      const formattedData = data.map((item) => ({
        ...item,
        selected: selectedProvinces.some((selected) => selected.name === item.name),
        itemStyle: {
          normal: {
            areaColor: selectedProvinces.find((selected) => selected.name === item.name)?.color || '#ccc',
          },
        },
        label: {
          normal: {
            show: true,
            formatter: '{b}\n{c}',  // 显示省份名和数据值
          },
          emphasis: {
            show: true,
            textStyle: {
              color: '#222222',        // 鼠标悬停时的字体颜色
            },
          },
        },
      }));

      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
        title: {
          text: '病例数据大屏',

        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}<br/>{c}',
        },
        series: [
          {
            name: '中国',
            type: 'map',
            mapType: 'china',
            selectedMode: 'multiple',
            label: {
              show: true,
            },
            data: formattedData
          },
        ],
      })
    }
  }
}
</script>
