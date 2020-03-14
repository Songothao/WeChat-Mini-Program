// pages/tabBar/classification/index.js

Page({

  data: {
    x1:"visible",
    y1: "block",
    x2:"hidden",
    y2: "none",
    x3: "hidden",
    y3: "none",
    x4: "hidden",
    y4: "none",
    x5:"hidden",
    y5: "none",
    x6: "hidden",
    y6: "none",
    x7: "hidden",
    y7: "none",
  },
  /*小程序js不能操作dom ( 想那些getElementByID都是不能用的 )
  clickedChange : function(e){
    // 获取id
    var kind = e.target.id
  }*/
  
  switch7 :function(event){
    var that = this;
    that.setData({
      x1:"hidden",
      y1: "none",
      x2: "hidden",
      y2: "none",
      x3: "hidden",
      y3: "none",
      x4: "hidden",
      y4: "none",
      x5: "hidden",
      y5: "none",
      x6: "hidden",
      y6: "none",
      x7:"visible",
      y7:"block"
    })
  },
  switch6: function (event) {
    var that = this;
    that.setData({
      x1: "hidden",
      y1: "none",
      x2: "hidden",
      y2: "none",
      x3: "hidden",
      y3: "none",
      x4: "hidden",
      y4: "none",
      x5: "hidden",
      y5: "none",
      x6: "visible",
      y6: "block",
      x7: "hidden",
      y7: "none"
    })
  },
  switch5: function (event) {
    var that = this;
    that.setData({
      x1: "hidden",
      y1: "none",
      x2: "hidden",
      y2: "none",
      x3: "hidden",
      y3: "none",
      x4: "hidden",
      y4: "none",
      x5: "visible",
      y5: "block",
      x6: "hidden",
      y6: "none",
      x7: "hidden",
      y7: "none"
    })
  },
  switch4: function (event) {
    var that = this;
    that.setData({
      x1: "hidden",
      y1: "none",
      x2: "hidden",
      y2: "none",
      x3: "hidden",
      y3: "none",
      x4: "visible",
      y4: "block",
      x5: "hidden",
      y5: "none",
      x6: "hidden",
      y6: "none",
      x7: "hidden",
      y7: "none"
    })
  },
  switch3: function (event) {
    var that = this;
    that.setData({
      x1: "hidden",
      y1: "none",
      x2: "hidden",
      y2: "none",
      x3: "visible",
      y3: "block",
      x4: "hidden",
      y4: "none",
      x5: "hidden",
      y5: "none",
      x6: "hidden",
      y6: "none",
      x7: "hidden",
      y7: "none"
    })
  },
  switch2: function (event) {
    var that = this;
    that.setData({
      x1: "hidden",
      y1: "none",
      x2: "visible",
      y2: "block",
      x3: "hidden",
      y3: "none",
      x4: "hidden",
      y4: "none",
      x5: "hidden",
      y5: "none",
      x6: "hidden",
      y6: "none",
      x7: "hidden",
      y7: "none"
    })
  },
  switch1: function (event) {
    var that = this;
    that.setData({
      x1: "visible",
      y1: "block",
      x2: "hidden",
      y2: "none",
      x3: "hidden",
      y3: "none",
      x4: "hidden",
      y4: "none",
      x5: "hidden",
      y5: "none",
      x6: "hidden",
      y6: "none",
      x7: "hidden",
      y7: "none"
    })
  }
})

