<template>
  <div class="my">
    <div class="my-header">
      <img :src="user.wxAvatar" alt="" class="wx-avatar">
      <div class="info">
        <h4>{{user.name}}</h4>
        <p>{{user.phone | filterPhone}}</p>
      </div>
    </div>
    <div class="cell" @click="toVault" v-if="showVault">
      <div class="container">
        <h4>我的金库</h4>
        <p>我的返现金库</p>
      </div>
      <span class="iconfont icon-right"></span>
    </div>
    <div class="cell" @click="toTeam" v-if="showTeam">
      <div class="container">
        <h4>我的团队</h4>
        <p>我的推手团队</p>
      </div>
      <span class="iconfont icon-right"></span>
    </div>
    <div class="order">
      <p class="title">我的订单</p>
      <mt-navbar class="page-part" v-model="orderSelected">
        <mt-tab-item id="all">全部</mt-tab-item>
        <mt-tab-item id="paid">已支付</mt-tab-item>
        <mt-tab-item id="booked">已预约</mt-tab-item>
        <mt-tab-item id="complete">已完成</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="orderSelected" class="order-list">
        <mt-tab-container-item id="all">
          <order-card v-for="order in orders" :key="order" v-if="orderSelected==='all'"/>
        </mt-tab-container-item>
        <mt-tab-container-item id="paid">
          <order-card v-for="order in orders" :key="order" v-if="orderSelected==='paid'"/>
        </mt-tab-container-item>
        <mt-tab-container-item id="booked">
          <order-card v-for="order in orders" :key="order" v-if="orderSelected==='booked'"/>
        </mt-tab-container-item>
        <mt-tab-container-item id="complete">
          <order-card v-for="order in orders" :key="order" v-if="orderSelected==='complete'"/>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import OrderCard from '@/components/commons/OrderCard'
import {Indicator, Toast} from 'mint-ui'

export default {
  name: 'Index',
  data () {
    return {
      orders: '123456'.split(''),
      orderSelected: 'all'
    }
  },
  computed: {
    user () {
      return this.$store.state.user.user
    },
    showTeam () {
      const user = this.$store.state.user.user
      return user.role === 3
    },
    showVault () {
      const user = this.$store.state.user.user
      return user.role !== 1
    }
  },
  watch: {
    orderSelected (tab) {
      this.orders = []
      Toast({message: 'load:' + tab, position: 'bottom'})
      Indicator.open('加载中')
      setTimeout(() => {
        this.orders = '1234567890'.split('')
        Indicator.close()
      }, 1000)
    }
  },
  filters: {
    filterPhone (v) {
      return v && v !== 'NULL' ? v : '电话未知'
    }
  },
  components: {
    OrderCard
  },
  created () {
  },
  methods: {
    toVault () {
      this.$router.push({
        name: 'Vault'
      })
    },
    toTeam () {
      this.$router.push({
        name: 'Team'
      })
    }
  }
}
</script>

<style scoped lang="less">
  .my {
    .my-header {
      background-color: white;
      display: flex;
      justify-content: left;
      margin: 10px 0 0 0;
      height: 100px;

      .wx-avatar {
        width: 70px;
        height: 70px;
        margin: 15px;
        border-radius: 5px;
      }
    }

    .cell {
      border-top: 1px solid #DDDDDD;
      background-color: white;
      height: 70px;
      display: flex;
      justify-content: space-between;

      .container {
        height: 100%;

        h4 {
          margin: 10px;
          padding: 0;
          font-size: 1rem;
          font-weight: normal;
          color: #666666;
        }

        p {
          margin: 10px;
          padding: 0;
          font-size: .8rem;
          color: #666666;
        }
      }

      .icon-right {
        display: block;
        height: 100%;
        line-height: 70px;
        font-size: 1.5rem;
        margin-right: 10px;
      }
    }

    .order {
      margin-bottom: 55px;
      margin-top: 10px;

      .title {
        color: #666666;
        margin: 0;
        padding: 0;
        font-size: .8rem;
      }

      .page-part {
        height: 44px;
        color: #666666;
      }

      .order-list {
        background-color: white;
        margin-top: 3px;
      }
    }
  }
</style>
