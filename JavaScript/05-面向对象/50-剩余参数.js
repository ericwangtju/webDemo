//在es6之前使用的是arguments参数，但是箭头函数是不能使用这个参数的
//es使用剩余参数
// const sum = (...args) => {
//   let total = 0
//   args.forEach(item =>
//     total += item)
//   return total
// }
// console.log(sum(10, 20));

// console.log(sum(10, 20, 30));

// 剩余参数和解构配合使用
let ary1 = ['张三', '李四', '王五'];
let [s1, ...s2] = ary1;
console.log(s1)
console.log(s2)