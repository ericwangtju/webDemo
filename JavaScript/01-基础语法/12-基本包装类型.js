// 就是把基本数据类型包装成为复杂数据类型
var temp = new String("andy");
// 把临时变量的值给str
str = temp;
// 销毁临时变量
temp = null;

var timer = null;
console.log(typeof timer);

// null是object

function fn(a) {
    a++;
    console.log(a);
  }
  var x = 10;
  fn(x);
  console.log(x);
