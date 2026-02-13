function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // Error

let calculator = {


  read(){
    this.a = prompt("a: ", 0)
    this.b = prompt("b: ", 0)
  },

  sum(){
    return this.a + this.b;
  },

  mul(){
    return this.a * this.b;
  }
}


let ladder = {
  step: 0,
  up() {
    this.step++;
    return this
  },
  down() {
    this.step--;
    return this
  },
  showStep: function() { // shows the current step
    alert( this.step );
    return this
  }
};

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0