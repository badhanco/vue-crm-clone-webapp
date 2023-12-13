<template>
    <div ref="chartContainer"></div>
  </template>
  
  <script>
  import Highcharts from 'highcharts';
  import HighchartsVue from 'highcharts-vue';
  
  // Import the exporting module if you need to enable exporting charts as images or PDFs
  import exporting from 'highcharts/modules/exporting';
  
  exporting(Highcharts);
  
  // Import the drilldown module if you need to use drilldown functionality
  // import drilldown from 'highcharts/modules/drilldown';
  // drilldown(Highcharts);
  
  export default {
    name: 'EggYolkChart',
    data() {
      return {
        chartOptions: {
          chart: {
            type: 'pie'
          },
          title: {
            text: 'Egg Yolk Composition'
          },
          tooltip: {
            valueSuffix: '%'
          },
          subtitle: {
            text: 'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>'
          },
          plotOptions: {
            series: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: [{
                enabled: true,
                distance: 20
              }, {
                enabled: true,
                distance: -40,
                format: '{point.percentage:.1f}%',
                style: {
                  fontSize: '1.2em',
                  textOutline: 'none',
                  opacity: 0.7
                },
                filter: {
                  operator: '>',
                  property: 'percentage',
                  value: 10
                }
              }]
            }
          },
          series: [{
            name: 'Percentage',
            colorByPoint: true,
            data: [
              { name: 'Water', y: 55.02 },
              { name: 'Fat', sliced: true, selected: true, y: 26.71 },
              { name: 'Carbohydrates', y: 1.09 },
              { name: 'Protein', y: 15.5 },
              { name: 'Ash', y: 1.68 }
            ]
          }]
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
  