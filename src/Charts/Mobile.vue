<template>
    <div ref="chartContainer"></div>
  </template>
  
  <script>
  import Highcharts from 'highcharts';
  import HighchartsVue from 'highcharts-vue';
  
  export default {
    name: 'MobileVendorChart',
    data() {
      return {
        chartOptions: {
          chart: {
            styledMode: true
          },
          title: {
            text: 'Mobile vendor market share, 2021'
          },
          xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
          series: [
            {
              type: 'pie',
              allowPointSelect: true,
              keys: ['name', 'y', 'selected', 'sliced'],
              data: [
                ['Samsung', 27.79, true, true],
                ['Apple', 27.34, false],
                ['Xiaomi', 10.87, false],
                ['Huawei', 8.48, false],
                ['Oppo', 5.38, false],
                ['Vivo', 4.17, false],
                ['Realme', 2.57, false],
                ['Unknown', 2.45, false],
                ['Motorola', 2.22, false],
                ['LG', 1.53, false],
                ['Other', 7.2, false]
              ],
              showInLegend: true
            }
          ]
        }
      };
    },
    mounted() {
      // Create the Highcharts chart when the component is mounted
      Highcharts.chart(this.$refs.chartContainer, this.chartOptions);
    }
  };
  </script>
  
  <style scoped>
  /* Add any component-specific styles here */
  </style>
  