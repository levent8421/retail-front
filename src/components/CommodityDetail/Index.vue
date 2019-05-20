<template>
  <div class="detail">
    <mt-swipe :auto="4000" class="images">
      <mt-swipe-item v-for="url in commodity.imageList" :key="url">
        <img :src="url" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import commodityApi from '@/api/commodity'

export default {
  name: 'Index',
  created () {
    this.commodity = this.$route.params
    if (!this.commodity.name) {
      this.fetchData()
    }
  },
  data () {
    return {
      commodity: null
    }
  },
  methods: {
    fetchData () {
      commodityApi.detail(this.commodity.id).then(res => {
        this.commodity = res.data.data
      })
    }
  }
}
</script>

<style scoped lang="less">
  .detail {
    .images {
      width: 100%;
      height: 220px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
