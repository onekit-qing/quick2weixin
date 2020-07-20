// component/refresh/refresh.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    componentName: 'refresh',
    isRefreshing: false,
    refreshType: 'auto'
  },
  onInit() {
    this.$page.setTitleBar({
      text: 'Refresh'
    })
  },
  changeType() {
    this.refreshType = this.refreshType === 'auto' ? 'pulldown' : 'auto'
  },
  refresh(e) {
    const self = this
    // 更新刷新状态（属性refreshing的值从false改为true会触发refresh组件的状态更新，反之亦然）
    self.isRefreshing = e.refreshing
    setTimeout(function () {
      // 关闭刷新状态
      self.isRefreshing = false
      prompt.showToast({
        message: '刷新完成'
      })
    }, 3000)
  },
  stopRefresh() {
    this.isRefreshing = false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})