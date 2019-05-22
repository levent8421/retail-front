<template>
  <div class="withdraw">
    <img src="../../assets/icon/iconWithdraw.png" alt="" class="icon-withdraw">
    <div class="cell withdraw-cell">
      <span class="label">可提现金额</span>
      <span class="value">{{withdrawable | toYuan}}</span>
    </div>
    <div class="cell input-cell">
      <h4>提现金额</h4>
      <div class="input">
        <span class="label">￥</span>
        <input type="number" placeholder="请输入提现金额" v-model="withdrawAmount">
      </div>
    </div>
    <mt-button type="primary" class="btn-withdraw" @click="doWithdraw">立即申请</mt-button>
    <p class="note">温馨提示：</p>
    <p class="note">资讯类信息文案可以打满多行资讯类信息文案可以打满多行资讯类信息文案可以打满多行。</p>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'

export default {
  name: 'Withdraw',
  data () {
    return {
      withdrawAmount: null
    }
  },
  created () {
    this.$store.dispatch('app/hideTabbar')
    this.$store.dispatch('app/setTitle', '提现申请')
  },
  watch: {
    withdrawAmount (v) {
      if (v * 100 > this.withdrawable) {
        this.withdrawAmount = this.withdrawAmount.substr(0, this.withdrawAmount.length - 1)
      }
    }
  },
  computed: {
    withdrawable () {
      const user = this.$store.state.user.user
      if (user.role === 1) {
        // 普通用户
        return 0
      }
      if (user.role === 2) {
        // 普通推手
        return user.directIncome
      }
      if (user.role === 3) {
        // 队长
        return (user.teamHeaderLevel === 2 || user.teamHeaderLevel === 3) ? user.directIncome + user.teamIncome : user.directIncome
      }
    }
  },
  methods: {
    doWithdraw () {
      Toast('提现：' + parseInt(this.withdrawAmount * 100) + '分')
    }
  }
}
</script>

<style scoped lang="less">
  .withdraw {
    height: 100%;

    .icon-withdraw {
      width: 105px;
      height: 105px;
      margin: 100px auto 20px auto;
      display: block;
    }

    .cell {
      @border: 1px solid #DDDDDD;
      border-bottom: @border;
      border-top: @border;
      background-color: white;
      padding: 10px 10px;

      .value {
        color: red;
        font-size: 1.1rem;
      }
    }

    .withdraw-cell {
      display: flex;
      justify-content: space-between;
    }

    .input-cell {
      margin-top: 10px;

      h4 {
        padding: 0;
        font-weight: normal;
        margin: 0 0 10px 0;
      }

      .label {
        font-size: 1.5rem;
      }

      input {
        border: none;
        outline: none;
        font-size: 1.5rem;
        color: #666666;
        margin-bottom: 10px;
      }
    }

    .btn-withdraw {
      width: 90%;
      display: block;
      margin: 10px auto;
    }

    p.note {
      font-size: .8rem;
      padding: 10px;
      margin: 0;
      color: #666666;
    }
  }
</style>
