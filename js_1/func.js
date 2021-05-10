const f = (a, b ,c) => {
  return a + b + c;
};

function f(a, b, c) {
  return a + b + c;
}

f(5)
f()

const name = 'asd';

const user = {
  name: 'John',
  greetCreate: function() {
    this.greetFn = () => {
      console.log('this', this)
      console.log('Hello ' + this.name);
    }
  },
  greet: function() {
    console.log('this', this)
    console.log('Hello ' + this.name);
  },
}



user.greetCreate()
user.greetFn()
