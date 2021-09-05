function fn() {
  console.log(arguments);
  console.log(arguments.length);
}
// 只有函数才有arguments对象， 是一个伪数组
fn("a", "b", "c");

var hah = function () {
  console.log(arguments);
};

hah(1);
