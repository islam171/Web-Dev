let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

const isEmpty = (obj) => {
  let a = 0;
  for (let code in obj) {
    a++;
  }
  return a === 0;
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false



let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum); // 390


const multiplyNumeric = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}


// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);