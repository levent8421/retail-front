<template>
  <div class="team">
    <div class="header cell">
      <img :src="user.wxAvatar" alt="" class="avatar">
      <div class="info">
        <h4>{{user.name}}</h4>
        <p>{{user.phone}}</p>
      </div>
      <span class="iconfont icon-QR-code" @click="toTeamShare"></span>
    </div>
    <div class="members">
      <p class="title">团队成员</p>
      <div class="member-list">
        <div class="member" v-for="member in members" :key="member">
          <img :src="user.wxAvatar" alt="">
          <span class="value">{{'用户名'}}</span>
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
      members: '1234567890'.split('')
    }
  },
  created () {
    this.$store.dispatch('app/hideTabbar')
    this.$store.dispatch('app/setTitle', '我的团队')
  },
  computed: {
    user () {
      return this.$store.state.user.user
    }
  },
  methods: {
    toTeamShare () {
      this.$router.push({name: 'TeamShare'})
    }
  }
}
</script>

<style scoped lang="less">
  .team {
    .cell {
      @border: 1px solid #DDDDDD;
      border-bottom: @border;
    }

    .header {
      height: 100px;
      margin-top: 10px;
      background-color: white;

      .avatar {
        float: left;
        width: 70px;
        height: 70px;
        margin: 15px;
        border-radius: 10px;
      }

      .info {
        float: left;

        h4 {
          font-size: 1rem;
          font-weight: normal;
        }

        p {
          color: #666666;
          font-size: .8rem;
        }
      }

      .iconfont {
        float: right;
        height: 100%;
        line-height: 100px;
        width: 70px;
        font-size: 1.8rem;
        color: #666666;
      }
    }

    .members {
      margin-top: 10px;

      .title {
        font-size: .8rem;
        color: #666666;
        margin: 0;
        padding: 0;
      }

      .member-list {
        background-color: white;

        .member {
          height: 56px;
          display: flex;
          justify-content: left;
          border-bottom: 1px solid #DDDDDD;

          img {
            width: 50px;
            height: 50px;
            margin: 3px;
            border-radius: 5px;
          }

          .value {
            line-height: 56px;
            margin-left: 10px;
            color: #666666;
          }
        }
      }
    }
  }
</style>
