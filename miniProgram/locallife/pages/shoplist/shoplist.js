// pages/shoplist/shoplist.js
Page({

    /**
     * Page initial data
     */
    data: {
        query: {},
        shoplist: [],
        page: 1,
        pageSize: 10,
        total: 0,
        isLoading: false
    },
    getShoplist(cb) {
        this.setData({
            isLoading: true
        })
        wx.showLoading({
            title: '数据加载中。。。',
        })
        wx.request({
            url: `https://www.escook.cn/categories/${this.data.query.id}/shops`,
            method: 'GET',
            data: {
                _page: this.data.page,
                _limit: this.data.pageSize
            },
            success: (res) => {
                this.setData({
                    shoplist: [...this.data.shoplist, ...res.data],
                    total: res.header['X-Total-Count'] - 0
                })
            },
            complete: () => {
                this.setData({
                    isLoading: false
                })
                wx.hideLoading(),
cb && cb()
            }
        })
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function (options) {
        console.log(options);
        this.setData({
            query: options
        })
        this.getShoplist()
    },

    /**
     * Lifecycle function--Called when page is initially rendered
     */
    onReady: function () {
        wx.setNavigationBarTitle({
            title: this.data.query.title
        })
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
        this.setData({
            page: 1,
            total: 0,
            shoplist: []
        })
        this.getShoplist(()=> {
            wx.stopPullDownRefresh()
        })
    },

    /**
     * Called when page reach bottom
     */
    onReachBottom: function () {
        if (this.data.page * this.data.pageSize >= this.data.total) {
            return wx.showToast({
                title: '数据加载完毕！',
                icon: 'success'
            })
        }
        if (this.data.isLoading) return
        this.setData({
            page: this.data.page + 1
        })
        this.getShoplist()
    },

    /**
     * Called when user click on the top right corner to share
     */
    onShareAppMessage: function () {

    }
})