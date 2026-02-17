let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length ); // 4



let style = ["Jazz", "Blues"]

style.push("Rock-n-Roll")
style[style.length/2] = "Classics"
console.log(style.shift())
style.unshift("Reggae", "Rap")
console.log(style)


let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // [ 'a', 'b', [Function (anonymous)] ]

const  sumInput = () => {

  let numbers = [];

  while (true) {

    let value = prompt("A number please?", 0);

    // should we cancel?
    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

alert( sumInput() );



const getMaxSubSum = (array) => {
  sum = 0
  for(let a of array){
    sum = Math.max(sum, sum + a)
  }
  return sum;
}
