function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}


function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}

// No difference


function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}


function min(a,b) {
  return a > b ? a : b
}

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

function pow(a, b){
  for(let i = 0; i < b; i++){
    a *= a;
  }
  return a
}

console.log(pow(3, 2))
console.log(pow(3, 3))
console.log(pow(1, 100))

