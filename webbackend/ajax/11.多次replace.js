var str = '<div>{{name}}今年{{ age }}岁了</div>'
var pattern = /{{\s*([a-zA-Z]+)\s*}}/

// 第一次匹配
var res1 = pattern.exec(str)
str = str.replace(res1[0], res1[1])
console.log(str)

// 第二次匹配
var res2 = pattern.exec(str)
str = str.replace(res2[0], res2[1])
console.log(str)

// 第三次匹配
var res3 = pattern.exec(str)
console.log(res3)