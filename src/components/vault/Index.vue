<template>
  <div class="vault">
    <div class="header">
      <div class="top">
        <div class="left">
          <h4>总资产</h4>
          <p>￥123.00</p>
        </div>
        <div class="right">
          <button class="btn-withdraw" @click="toWithdraw">申请提现</button>
        </div>
      </div>
      <div class="bottom">
        <p>
          <span>可提现：{{withdrawable | toYuan}}</span>
          <span>已提现：{{withdrawals | toYuan}}</span>
        </p>
        <p>
          <span>累计收益：{{totalIncome | toYuan}}</span>
          <span>团队收益：{{teamIncome | toYuan}}</span>
        </p>
      </div>
    </div>
    <div class="orders">
      <p class="title">返现订单</p>
      <div class="order-list">
        <div class="order" v-for="order in orders" :key="order">
          {{order}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      orders: '1234567890'.split('')
    }
  },
  computed: {
    user () {
      return this.$store.state.user.user
    },
    withdrawable () {
      return this.user.directIncome
    },
    withdrawals () {
      return this.user.withdrawals
    },
    teamIncome () {
      return this.user.teamIncome
    },
    totalIncome () {
      return this.user.directIncome + this.user.teamIncome + this.user.withdrawals
    }
  },
  created () {
    this.$store.dispatch('app/hideTabbar')
    this.$store.dispatch('app/setTitle', '我的金库')
  },
  methods: {
    toWithdraw () {
      this.$router.push({
        name: 'Withdraw'
      })
    }
  }
}
</script>

<style scoped lang="less">
  .vault {
    overflow: hidden;

    .header {
      overflow: hidden;
      margin-top: 10px;
      height: 120px;
      background-color: #26a2ff;

      .top {
        display: flex;
        justify-content: space-between;

        .left {
          padding-left: 10px;
          color: white;

          h4 {
            font-size: 1rem;
            margin: 10px 0 0 0;
            font-weight: normal;
            padding: 0;
          }

          p {
            font-size: 1.1rem;
            padding: 0;
            margin-top: 10px;
          }
        }

        .btn-withdraw {
          background-color: white;
          color: #2697EB;
          border: none;
          margin: 20px;
          outline: none;
        }
      }

      .bottom {
        margin: 0;
        color: white;
        font-size: .7rem;

        p {
          margin: 0;
          padding: 0 0 0 10px;

          span {
            margin-right: 20px;
          }
        }
      }
    }

    @border: 1px solid #DDDDDD;

    .orders {
      margin-top: 10px;

      .title {
        color: #666666;
        padding-left: 10px;
        font-size: .8rem;
        margin: 0;
      }

      .order-list {
        background-color: white;

        .order {
          padding: 10px;
          border-bottom: @border;
          border-top: @border;
          margin-bottom: 10px;
        }
      }
    }
  }
</style>
