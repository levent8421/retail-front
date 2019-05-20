export default {
  toYuan (v) {
    return '￥' + (parseInt(v) / 100).toFixed(2)
  }
}
