// var age = 100;

// var obj = {
//   age: 20,
//   say: () => {

//     console.log(this.age);
//   },
//   goodbye: function () {
//     console.log(this.age);
//   }
// }

// obj.say();
// obj.goodbye()

/**
 * 因为箭头函数是定义在obj内部，而obj是没有作用域的，是属于全局作用域，那么say箭头函数也算全局的作用域，里面的this指向了window
 *
 */