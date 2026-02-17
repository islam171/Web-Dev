let str = "string"

let iter = str[Symbol.iterator]()


while(true){
  let result = iter.next();
  if(result.done) break;
  console.log(result.value);
}

let array = {
  0: "Hello",
  1: "World",
  length: 2
}

let arr = Array.from(array);
for(let a of arr){
  console.log(a);
}


let str = "hello"

let a =Array.from(str)

console.log(a);