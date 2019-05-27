import wxApi from '@/api/wx'
import {Toast} from 'mint-ui'
import wx from 'weixin-js-sdk'

const jsApiList = ['scanQRCode']
export default {
  init () {
    const url = window.location.href.split('#')[0]
    wxApi.configParam(url).then(res => {
      if (res.data.code === 200) {
        const confParam = res.data.data
        confParam.jsApiList = jsApiList
        wx.config(confParam)
      } else {
        Toast({message: '未能正确配置微信API,详情请查看控制台', position: 'bottom'})
        console.error(res.data.msg)
      }
    })
  },
  scanQRCode (cb) {
    console.log(wx)
    wx.scanQRCode(res => {
      console.log(res)
      cb(res)
    })
  }
}
