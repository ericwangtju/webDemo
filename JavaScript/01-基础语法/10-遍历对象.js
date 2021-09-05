function Star(uname, age, sex) {
  this.name = uname;
  this.age = age;
  this.sex = sex;
  this.sing = function (song) {
    console.log(song);
  };
}

var hah = new Star("hah", 18, "male");

for (const key in hah) {
  if (Object.hasOwnProperty.call(hah, key)) {
    const element = hah[key];
    console.log(key);
    console.log(element);
  }
}
