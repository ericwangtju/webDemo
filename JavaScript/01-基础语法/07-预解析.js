// console.log(num); 直接崩溃

// undefined
// console.log(num);
// var num = 10;

//
// fn();
// function fn() {
//   console.log(11);
// }

// 如果使用函数
// fun();
// var fun = function () {
//   console.log(22);
// };

// js引擎运行js氛围两部， 预解析， 代码执行
// 预解析 js引擎会把js里面的var 还是有funciton 提升到当前作用域的最前面
// 代码执行 按照代码书写的顺序从上往下执行
// 预解析 分为变量预解析（变量提升）和函数预解析（函数提升）
//  变量提升就是把所有格变量生命提升到当前的作用域最前面， 不提升赋值操作
// 函数提升就是把所有的函数声明提升到当前作用域的最前面 不调用函数
// var num = 10;
// fun();

// function fun() {
//   console.log(num);
//   var num = 20;
// }

// var num = 10;
// function fn() {
//   console.log(num);
//   var num = 20;
//   console.log(num);
// }
// fn();

var a = 10;
f1();
function f1() {
  var b = 9;
  console.log(a);
  console.log(b);
  var a = "123";
}

f1();
console.log(c);
console.log(b);
console.log(a);
function f1() {
  var a = (b = c = 9);
  //   var a = 9;b=9;c=9
  //   b和c 没有var， 相当于全局变量
  console.log(a);
  console.log(b);
  console.log(c);
}
