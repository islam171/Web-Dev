let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

const sumSalaries = (salaries) => {
  return Object.values(salaries).reduce((acc, item) => acc += item)

}

alert( sumSalaries(salaries) ); // 650




let user = {
  name: 'John',
  age: 30
};

const count = (obj) => {
  return Object.keys(obj).length
}

alert( count(user) ); // 2