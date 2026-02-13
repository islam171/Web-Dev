// let i = 3;
//
// while (i) {
//   alert( i-- );
// }// i =1
//
// let i = 0;
// while (++i < 5) alert( i ); // i = 4
//
// let i = 0;
// while (i++ < 5) alert( i ); // i = 5
//
// for (let i = 0; i < 5; ++i) alert( i );
//
// for (let i = 0; i < 5; i++) alert( i );
// both are i = 4

// for(let i = 2; i <= 10; i = i + 2) alert( i );

// let i = 0
// while(i < 3){
//   alert(`number ${i++}!` );
// }


while(true){
  let a = prompt("Enter the number greater than 100: ");
  if(a > 100){
    break;
  }else continue;
}

let n = 10
for(let i = 2; i < n; i++){
  let bool = false;
  for(let j = 2; j < i; j++){
    if(i % j == 0){
      bool = true;
      break;
    }
  }
  !bool && console.log(i)
}