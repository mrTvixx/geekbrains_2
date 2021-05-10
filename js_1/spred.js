const a = {
  a: 1,
  b: 1,
}

const b = {
  b: 123,
}

const c = { ...a, ...b }

let state = {
  a: 1,
  b: {
    c1: 2,
    c: 1
  }
}

state = {
  ...state,
  b: {
    ...state.b,
    c: 2
  }
}

console.log(state)

const arr1 = [1,2,[3]];
const arr2 = [4,5,6];

console.log([...arr1.flat(), ...arr2]);

const fn11 = (...arr) => {
  console.log(arr);
}

fn11(1,2,3)
fn11(1,2,3, '4', '5')