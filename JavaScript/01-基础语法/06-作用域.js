// 1.全局作用域： 整个script标签，或者是一个单独的js文件

// 2.局部作用域：在函数内部的就是局部作用域，这个只在函数内部起作用
var num = 10;
function fn() {
  var num = 20;
  function fun() {
    console.log(num);
  }
  fun();
}

fn();
