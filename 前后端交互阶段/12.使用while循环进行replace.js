var str = '<div>{{name}}今年{{ age }}岁了</div>'
var pattern = /{{\s*([a-zA-Z]+)\s*}}/

var patternResult = null
while (patternResult = pattern.exec(str)) {
  str = str.replace(patternResult[0], patternResult[1])
}
console.log(str)