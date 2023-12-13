<template>
    <div>
      <div id="container"></div>
      <div>
        <input
          type="range"
          id="play-range"
          :min="startYear"
          :max="endYear"
          :value="inputValue"
          @input="updateRange"
        />
        <button @click="togglePlayPause" :class="playPauseClass" :title="playPauseTitle"></button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        startYear: 1960,
        endYear: 2018,
        inputValue: 1960,
        playInterval: null,
        btnClass: 'fa fa-play',
        btnTitle: 'play',
        dataset: null,
        chart: null,
        nbr: 20
      };
    },
    mounted() {
      this.initChart();
    },
    methods: {
      async initChart() {
        this.dataset = await fetch('https://demo-live-data.highcharts.com/population.json').then(response =>
          response.json()
        );
  
        this.chart = Highcharts.chart('container', {
          // ... (Your existing Highcharts chart options)
        });
      },
      getData(year) {
        // ... (Your existing getData function logic)
      },
      getSubtitle() {
        // ... (Your existing getSubtitle function logic)
      },
      pause() {
        this.btnTitle = 'play';
        this.btnClass = 'fa fa-play';
        clearInterval(this.playInterval);
      },
      update(increment) {
        // ... (Your existing update function logic)
      },
      play() {
        this.btnTitle = 'pause';
        this.btnClass = 'fa fa-pause';
        this.playInterval = setInterval(() => {
          this.update(1);
        }, 500);
      },
      togglePlayPause() {
        if (this.playInterval) {
          this.pause();
        } else {
          this.play();
        }
      },
      updateRange() {
        this.update();
      }
    }
  };
  </script>
  
  <style>
  /* Add any component-specific styles here */
  </style>
  