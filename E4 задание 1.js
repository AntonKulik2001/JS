const test = {
  a:2,
  b:1,
}

function value(obj) {
  for(let key in obj){
    if (obj.hasOwnProperty(key)){
      console.log(key, obj[key])
    }
  }
}

const test1 = Object.create(test)

test1.c = '3123';

value(test1);