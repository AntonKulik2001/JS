function someFunc(str, obj) {
  return str in obj
}

const obj1 = {
  bar : 'foo',
  1 : 'bar'
}

const str1 = 'bar';
const str2 = 'foo';

console.log(someFunc(str1, obj));
console.log(someFunc(str2, obj));