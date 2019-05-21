<template>
  <div class="detail">
    <mt-swipe :auto="4000" class="images">
      <mt-swipe-item v-for="url in commodity.imageList" :key="url">
        <img :src="url" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <div class="base-info">
      <h2>{{commodity.name}}</h2>
      <p class="description">{{commodity.description}}</p>
      <p class="price">
        <span class="current-price">{{commodity.currentPrice | toYuan}}</span>
        <span class="origin-price">{{commodity.originalPrice | toYuan}}</span>
      </p>
      <p class="stock">
        <span class="stock">库存：{{commodity.stockCount}}</span>
        <span class="sale">已售：{{commodity.saleCount}}</span>
      </p>
    </div>
    <div class="store-info">
      <h2>{{store.name}}</h2>
      <div class="info">
        <div class="left">
          <p>{{store.address}}</p>
          <p class="call">{{store.phone}}</p>
        </div>
        <div class="right" @click="call">
          <span class="iconfont icon-call"></span>
        </div>
      </div>
    </div>
    <div class="detail-html">
      <p class="title">详细信息</p>
      <div class="html-container" v-html="detail.html">
      </div>
    </div>
    <div class="bottom-button">
      <div class="icon-btn" @click="toLocal">
        <span class="iconfont icon-store"></span>
        <span class="text">店铺</span>
      </div>
      <div class="icon-btn" @click="doShowServiceSheet">
        <span class="iconfont icon-kefu"></span>
        <span class="text">客服</span>
      </div>
      <mt-button class="btn-buy" @click="toBuy">立即购买</mt-button>
    </div>
    <mt-actionsheet :actions="serviceSheet" v-model="showServiceSheet"/>
  </div>
</template>

<script>
import commodityApi from '@/api/commodity'
import {Toast} from 'mint-ui'

export default {
  name: 'Index',
  created () {
    this.$store.dispatch('app/hideTabbar')
    this.$store.dispatch('app/setTitle', '商品详情')
    this.commodity = this.$route.params
    this.fetchData()
  },
  data () {
    return {
      commodity: {},
      store: {},
      detail: {
        html: ''
      },
      showServiceSheet: false,
      serviceSheet: [
        {
          name: '---',
          method: this.call
        }
      ]
    }
  },
  methods: {
    fetchData () {
      commodityApi.detail(this.commodity.id).then(res => {
        this.commodity = res.data.data
        this.store = res.data.data.store
        this.serviceSheet[0].name = this.store.phone
      })
      for (let i = 0; i < 30; i++) {
        this.detail.html += '<p>这是一堆详细图文信息</p>'
      }
    },
    call () {
      Toast('call:' + this.store.phone)
    },
    doShowServiceSheet () {
      this.showServiceSheet = true
      console.log(this)
    },
    toLocal () {
      this.$router.replace({name: 'Index'})
    },
    toBuy () {
      this.$router.push({name: 'Buy', params: this.commodity})
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

    .base-info {
      padding: 10px;
      background-color: white;
      margin-top: 10px;

      h2 {
        margin: 0;
        padding: 0;
        font-size: 1.2rem;
        font-weight: normal;
      }

      p.description {
        margin: 5px 0;
        padding: 0;
        color: #666666;
        font-size: .8rem;
      }

      p.price {

        .current-price {
          color: red;
          font-size: 1.3rem;
        }

        .origin-price {
          text-decoration: line-through;
          margin-left: 30px;
          color: #666666;
        }
      }

      p.stock {
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
        font-size: .8rem;
        color: #666666;
        margin: 0;
      }
    }

    .store-info {
      background-color: white;
      margin-top: 10px;
      padding: 10px;

      h2 {
        margin: 0;
        padding: 0;
        font-weight: normal;
        font-size: 1.1rem;
      }

      .info {
        display: flex;
        justify-content: space-between;

        .left {
          p {
            color: #666666;
            margin: 5px 0;
            padding: 0;
            font-size: .8rem;
          }
        }

        .right {
          line-height: 50px;
          color: #ff9900;

          span.iconfont {
            font-size: 2rem;
          }
        }
      }
    }

    .detail-html {
      background-color: white;
      margin-top: 10px;

      .title {
        font-size: .9rem;
        color: #666666;
        padding-left: 10px;
      }

      .html-container {
        margin-bottom: 50px;
      }
    }

    .bottom-button {
      width: 100%;
      height: 50px;
      position: fixed;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      background-color: white;

      .icon-btn {
        width: 24%;

        .iconfont {
          width: 100%;
          height: 60%;
          display: block;
          text-align: center;
          font-size: 1.4rem;
          color: #FF8800;
        }

        .text {
          font-size: .8rem;
          color: #666666;
          display: block;
          text-align: center;
        }
      }

      .btn-buy {
        width: 50%;
        height: 100%;
        background-color: red;
        color: white;
      }
    }
  }
</style>
