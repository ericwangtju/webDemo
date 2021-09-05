//
// function 构造函数名() {
//     this.属性 = 值；
//     this.方法 = function () {

//     }

//     new 构造函数名();
// }

// 构造函数的首字母要大写
function Star(uname, age, sex) {
  this.name = uname;
  this.age = age;
  this.sex = sex;
  this.sing = function (song) {
    console.log(song);
  };
}

var hah = new Star("hah", 18, "male");

console.log(hah);
console.log(typeof hah);

// 调用构造函数必须使用new
hah.sing("小苹果");

// 属性和方法前面必须使用this
