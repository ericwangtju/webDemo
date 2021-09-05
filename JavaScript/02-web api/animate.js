function animate (obj, target) {
  // 先清除以前的定时器，只保留当前的一个定时器执行
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    // 步长值写到定时器的里面
    var step = (target - obj.offsetLeft) / 10;
    if (obj.offsetLeft == target) {
      // 停止动画 本质是停止定时器
      clearInterval(obj.timer);
    }
    // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
    obj.style.left = obj.offsetLeft + step + 'px';

  }, 15);
}