// pages/contact/contact.js
Page({

    /**
     * Page initial data
     */
    data: {
        colorList: [],
        isLoading: false
    },

    getColor() {
        this.setData({
            isLoading: true
        })
        wx.showLoading({
            title: '',
        })
        wx.request({
            url: 'https://www.escook.cn/api/color',
            method: 'GET',
            success: ({
                data: res
            }) => {
                this.setData({
                    colorList: [...this.data.colorList, ...res.data]
                })
            },
            complete: () => {
                this.setData({
                    isLoading: false
                })
                wx.hideLoading()
            }
        })
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function (options) {
        this.getColor()
    },

    /**
     * Lifecycle function--Called when page is initially rendered
     */
    onReady: function () {
        this.getColor()
    },

    /**
     * Lifecycle function--Called when page show
     */
    onShow: function () {

    },

    /**
     * Lifecycle function--Called when page hide
     */
    onHide: function () {

    },

    /**
     * Lifecycle function--Called when page unload
     */
    onUnload: function () {

    },

    /**
     * Page event handler function--Called when user drop down
     */
    onPullDownRefresh: function () {

    },

    /**
     * Called when page reach bottom
     */
    onReachBottom: function () {
        if (this.data.isLoading) {
            return
        }
        this.getColor()
    },

    /**
     * Called when user click on the top right corner to share
     */
    onShareAppMessage: function () {

    }
})