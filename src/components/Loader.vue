<template>
    <div>
      <div class="align-items-center mb-3">
        <b-progress class="w-100" :max="maxLoadingTime" height="1.5rem">
          <b-progress-bar :value="loadingTime" :label="`${((loadingTime / maxLoadingTime) * 100).toFixed(2)}%`"></b-progress-bar>
        </b-progress>
  
        <b-button class="ml-3" @click="startLoading()">Reload</b-button>
      </div>
  
      <b-skeleton-wrapper :loading="loading">
        <template #loading>
          <b-card>
            <b-skeleton width="90%"></b-skeleton>
            <b-skeleton width="95%"></b-skeleton>
            <b-skeleton width="85%"></b-skeleton>
          </b-card>
        </template>
  
        <b-card>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra nunc sapien,
          non rhoncus elit tincidunt vitae. Vestibulum maximus, ligula eu feugiat molestie,
          massa diam imperdiet odio, vitae viverra ligula est id nisi. Aliquam ut molestie est.
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Phasellus at consequat dui. Aenean tristique sagittis quam,
          sit amet sollicitudin neque sodales in.
        </b-card>
      </b-skeleton-wrapper>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          loading: false,
          loadingTime: 0,
          maxLoadingTime: 3
        }
      },
      watch: {
        loading(newValue, oldValue) {
          if (newValue !== oldValue) {
            this.clearLoadingTimeInterval()
  
            if (newValue) {
              this.$_loadingTimeInterval = setInterval(() => {
                this.loadingTime++
              }, 1000)
            }
          }
        },
        loadingTime(newValue, oldValue) {
          if (newValue !== oldValue) {
            if (newValue === this.maxLoadingTime) {
              this.loading = false
            }
          }
        }
      },
      created() {
        this.$_loadingTimeInterval = null
      },
      mounted() {
        this.startLoading()
      },
      methods: {
        clearLoadingTimeInterval() {
          clearInterval(this.$_loadingTimeInterval)
          this.$_loadingTimeInterval = null
        },
        startLoading() {
          this.loading = true
          this.loadingTime = 0
        }
      }
    }
  </script>