var obj = new Object();
// 创建了一个空的对象
obj.name = "hah";
obj.age = 18;

console.log(obj);
obj.sayHi = function () {
  console.log("hi");
};

obj.sayHi();
