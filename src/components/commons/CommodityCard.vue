<template>
  <div class="card" @click="handleCardClick">
    <div class="img-wrapper">
      <mt-swipe :auto="4000" class="image">
        <mt-swipe-item v-for="image in commodity.imageList" :key="image">
          <img :src="image" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="text-wrapper">
      <h2>{{commodity.name}}</h2>
      <p>{{commodity.description}}</p>
    </div>
    <div class="price-info">
      <div class="price">
        <span class="hot">{{commodity.currentPrice | toYuan}}</span>
        <span class="deleted">{{commodity.originalPrice | toYuan}}</span>
      </div>
      <div class="stock">
        <span>库存：</span>
        <b>{{commodity.stockCount}}</b>
      </div>
    </div>
    <div class="distance" v-if="commodity.distance">
      <p><span>距离：</span><b>{{commodity.distance}}米</b></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommodityCard',
  props: ['commodity'],
  methods: {
    handleCardClick () {
      this.$emit('click', this.commodity)
    }
  }
}
</script>

<style scoped lang="less">
  .card {
    margin: 5px 10px;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;

    .img-wrapper {
      width: 100%;

      .image {
        width: 100%;
        border-radius: 10px 10px 0 0;
        height: 222px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .text-wrapper {
      margin: 0 10px;
      border-bottom: 1px solid #DDDDDD;

      h2 {
        color: #333333;
        margin: 0;
        padding: 0;
        font-weight: normal;
      }

      p {
        color: #AEAEAE;
        margin: 5px 0 10px 0;
      }
    }

    .price-info {
      display: flex;
      justify-content: space-between;
      margin: 10px 10px;

      .price {
        text-align: left;

        .hot {
          color: red;
          font-size: 1.2rem;
        }

        .deleted {
          color: #666666;
          text-decoration: line-through;
          margin-left: 10px;
        }
      }

      .stock {
        span {
          color: #666666;
        }

        b {
          color: #666666;
        }
      }
    }

    .distance {
      color: #666666;
      text-align: right;
      font-size: .8rem;
      margin-right: 10px;
    }
  }
</style>
