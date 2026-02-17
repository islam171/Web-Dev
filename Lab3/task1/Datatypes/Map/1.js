function unique(arr) {
  let map = new Set(arr)
  return Array.from(map)
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O




let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

const aclean = (array) => {
  let s = new Set()
  let b = []
  for(let str of array){
    let a = s.size;
    s.add(str.toLowerCase().split("").sort().join(""))
    if(a != s.size){
      b.push(str)
    }

  }
  return b
}


let map = new Map();

map.set("name", "John");


let keys = [];
for(let a of map.keys()){
  keys.push(a)
}

keys.push("more");


alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

