// var str = 'xyz'
// var pattern = /x/
// var result = pattern.exec(str)
// console.log(result);


// 提取分组
// var str = '<div>我是{{name}}</div>'
// var pattern = /{{([a-zA-Z]+)}}/

// var result = pattern.exec(str)
// console.log(result);

var str = '<div>我是{{name}}</div>'
var pattern = /{{([a-zA-Z]+)}}/

var patternResult = pattern.exec(str)
// console.log(patternResult)
str = str.replace(patternResult[0], patternResult[1])

console.log(str)