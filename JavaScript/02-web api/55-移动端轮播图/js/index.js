window.addEventListener('load', function () {
    //1. 获取元素
    var focus = document.querySelector('.focus')
    var ul = focus.children[0];
    var focusWidth = focus.offsetWidth
    var index = 0
    var ol = focus.querySelector('ol')
    var flag = false
    //2. 自动抡博
    var timer = setInterval(function () {
        index++;
        var translateX = -index * focusWidth;
        ul.style.transition = 'all .3s'
        ul.style.transform = 'translateX(' + translateX + 'px)';
    }, 2000)

    ul.addEventListener('transitionend', function () {
        if (index == 3) {
            index = 0
            ul.style.transition = 'none'
            var translatex = -index * focusWidth
            ul.style.transform = 'translateX(' + translatex + 'px)';
        } else if (index < 0) {
            index = 2
            ul.style.transition = 'none'
            var translatex = -index * focusWidth
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }

        // 小圆点变化
        ol.querySelector('.current').classList.remove('current')
        ol.children[index].classList.add('current')

        // 手指滑动轮播图
        var startx = 0
        var movex = 0
        ul.addEventListener('touchstart', function (e) {
            startx = e.targetTouches[0].pageX
            clearInterval(timer)
        })
        ul.addEventListener('touchmove', function (e) {

            movex = e.targetTouches[0].pageX - startx
            var translatex = -index * focusWidth + movex
            ul.style.transition = 'none'
            ul.style.transform = 'translateX(' + translatex + 'px)'
            flag = true
            e.preventDefault()
        })
        ul.addEventListener('touchend', function (e) {
            if (flag) {
                if (Math.abs(movex) > 50) {
                    if (movex > 0) {
                        // 右滑
                        index--
                    } else {
                        // 左滑
                        index++
                    }
                    var translatex = -index * focusWidth
                    ul.style.transition = "all .3s"
                    ul.style.transform = 'translateX(' + translatex + 'px)'
                } else {
                    var translatex = -index * focusWidth
                    ul.style.transition = "all .1s"
                    ul.style.transform = 'translateX(' + translatex + 'px)'
                }
            }
            clearInterval(timer)
            timer = setInterval(function () {
                index++;
                var translateX = -index * focusWidth;
                ul.style.transition = 'all .3s'
                ul.style.transform = 'translateX(' + translateX + 'px)';
            }, 2000)
        })




    })
    var goBack = this.document.querySelector('.goBack')
    var nav = this.document.querySelector('nav')
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > nav.offsetTop) {
            goBack.style.display = 'block'
        } else {
            goBack.style.display = 'none'
        }
    })

    goBack.addEventListener('click', function () {
        window.scroll(0, 0)
    })
})