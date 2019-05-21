<template>
  <div class="buy">
    <div class="card order">
      <p class="title">订单信息</p>
      <mt-field label="姓名" placeholder="请输入姓名" class="input" v-model="user.name"/>
      <mt-field label="电话" placeholder="请输入电话" class="input" v-model="user.phone"/>
      <p class="label">备注信息</p>
      <mt-field placeholder="请输入备注" type="textarea" rows="4"/>
    </div>
    <div class="card commodity">
      <p class="title">商品信息</p>
      <h4>{{commodity.name}}</h4>
      <p class="description">{{commodity.description}}</p>
      <p class="price"><span class="label">单价</span><span class="value">{{commodity.currentPrice | toYuan}}</span></p>
      <p class="count">
        <span class="label">数量</span>
        <span class="count-input">
          <span class="btn-sub" @click="subCount">-</span>
          <input type="number" v-model="count">
          <span class="btn-add" @click="count++">+</span>
        </span>
      </p>
    </div>
    <div class="bottom-buttons">
      <div class="amount">
        <span class="label">小计</span>
        <span class="value">{{totalFee | toYuan}}</span>
      </div>
      <mt-button class="btn-pay" type="default" @click="doPay">付款</mt-button>
    </div>
  </div>
</template>

<script>
import userApi from '@/api/user'
import commodityApi from '@/api/commodity'
import {Toast} from 'mint-ui'

export default {
  name: 'Buy',
  data () {
    return {
      commodity: {},
      user: {},
      count: 1
    }
  },
  computed: {
    totalFee () {
      return this.commodity.currentPrice * this.count
    }
  },
  created () {
    this.$store.dispatch('app/hideTabbar')
    this.commodity.id = this.$route.params.id
    this.loadData()
  },
  methods: {
    loadData () {
      userApi.detail(1).then(res => {
        this.user = res.data.data
      })
      commodityApi.detail(this.commodity.id).then(res => {
        this.commodity = res.data.data
      })
    },
    subCount () {
      if (this.count > 1) {
        this.count--
      }
    },
    doPay () {
      Toast('支付：' + this.totalFee + '分')
    }
  }
}
</script>

<style scoped lang="less">
  .buy {
    overflow: hidden;

    .card {
      width: 90%;
      margin: 5px auto;
      background-color: white;
      padding: 10px;
      border-radius: 9px;
      border: 1px solid #DDDDDD;

      .title {
        margin: 0;
        color: #666666;
        font-size: .8rem;
        border-bottom: 1px solid #DDDDDD;
      }
    }

    .order {

      .label {
        font-size: .8rem;
        color: #666666;
      }

      .input {
        border-bottom: 1px solid #DDDDDD;
      }
    }

    .commodity {
      margin-bottom: 50px;

      h4 {
        font-weight: normal;
        margin: 10px 0;
        padding: 0;
        font-size: 1rem;
        color: #666666;
      }

      p.description {
        color: #666666;
        font-size: .8rem;
        border-bottom: 1px solid #DDDDDD;
        margin: 0;
      }

      p.price, p.count {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #DDDDDD;
        line-height: 2rem;

        span.value {
          color: red;
          font-size: 1.1rem;
        }

        span.label {
          color: #666666;
        }

        .count-input {
          display: flex;
          justify-content: space-between;
          height: 33px;

          span.btn-add, span.btn-sub {
            background-color: #AEAEAE;
            display: block;
            width: 30px;
            text-align: center;
            line-height: 33px;
            font-size: 1.2rem;
            color: #666666;
          }

          input {
            width: 40px;
            text-align: center;
            font-size: 1.2rem;
            outline: none;
            color: #666666;
          }
        }
      }
    }

    .bottom-buttons {
      display: flex;
      justify-content: space-between;
      width: 100%;
      position: fixed;
      bottom: 0;
      height: 50px;
      background-color: white;
      border-top: 1px solid #DDDDDD;

      .amount {
        line-height: 50px;
        padding-left: 10px;

        .label {
          color: #666666;
          font-size: .9rem;
        }

        .value {
          color: red;
          font-size: 1.1rem;
        }
      }

      .btn-pay {
        background-color: red;
        height: 100%;
        width: 50%;
        color: white;
      }
    }
  }
</style>
