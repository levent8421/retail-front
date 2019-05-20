<template>
  <div class="local">
    <position-bar/>
    <div class="commodities-wrapper" v-infinite-scroll="loadMore"
         :infinite-scroll-disabled="loading"
         :infinite-scroll-distance="10">
      <commodity-card v-for="c in commodities" :key="c.id" :commodity="c" @click="toDetail"/>
      <div class="loading" v-if="loading">
        <span class="iconfont icon-loading"></span>
        <span>加载中</span>
      </div>
      <div class="loading" v-if="allLoaded">
        <span>没有更多数据了</span>
      </div>
    </div>
  </div>
</template>

<script>
import PositionBar from '../commons/PositionBar'
import CommodityCard from '../commons/CommodityCard'
import CommodityApi from '../../api/commodity'

export default {
  name: 'Index',
  components: {
    PositionBar,
    CommodityCard
  },
  created () {
    this.currentPage = 1
    this.loadMore()
  },
  data () {
    return {
      allLoaded: false,
      currentPage: 1,
      maxId: 3,
      loading: false,
      commodities: []
    }
  },
  methods: {
    loadMore () {
      const self = this
      if (this.allLoaded) {
        return
      }
      if (this.loading) {
        return
      }
      this.loading = true
      CommodityApi.all(this.currentPage++).then(res => {
        const coms = res.data.data.list
        this.commodities = this.commodities.concat(coms)
        self.loading = false
        if (res.data.data.isLastPage) {
          self.allLoaded = true
        }
      })
    },
    toDetail (c) {
      this.$router.push({
        name: 'CommodityDetail',
        params: c
      })
    }
  }
}
</script>

<style scoped lang="less">
  .local {
    width: 100%;
    height: 100%;
    margin-bottom: 55px;

    .commodities-wrapper {
      .loading {
        width: 100%;
        text-align: center;
        line-height: 50px;
        color: #666666;
      }
    }
  }
</style>
