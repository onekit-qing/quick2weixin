// components/marquee.js
Component({
  options: {
  },
  properties: {
    onekitClass:String,
    onekitStyle:String,
    text: {
      type: String,
      value: ''
    },
    direction: {
      type: String,
      value: 'left'
    },
    scrollamount: {
      type: Number,
      value: 6
    },
    loop: {
      type: Number,
      value: -1,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    marqueePace: 1,
    marqueeDistance: 0,
    size: 14,
  },
  /*
   *组件生命周期 
   */
  lifetimes: {
    created: function () {
      var that = this;
      var length = that.data.text.length * that.data.size;
      var windowWidth = wx.getSystemInfoSync().windowWidth
      that.setData({
        length: length,
        windowWidth: windowWidth
      });
      that._scrolling();
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    _scrolling: function () {
      var that = this;
      var timer = setInterval(() => {
        if (-that.data.marqueeDistance < that.data.length) {
          that.setData({
            marqueeDistance: that.data.marqueeDistance - that.data.marqueePace
          })
        } else {
          clearInterval(timer);
          that.setData({
            marqueeDistance: that.data.windowWidth
          });
          that._scrolling();
        }
      }, that.properties.scrollamount);
    }
  },
})