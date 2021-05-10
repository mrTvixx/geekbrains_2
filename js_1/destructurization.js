const array = ['first', 'second', { third: 'third' }];

const [abra, cadabra, { third }] = array;

console.log(abra, cadabra, third);

const obj = {
  first: 'first',
  second: 'second',
  third: 'third',
  deepObject: {
    fourth: 'fourth'
  },
  array: ['arr1', { insideValue: 'some data' }]
};

const { third: abra, deepObject: { fourth }, array: [ fromArray, { insideValue}] } = obj;

console.log(abra, fourth)

console.log(fromArray, insideValue)

function logger(obj) {
  // action time

  const { name = 'Default', time } = obj

  // someFrontLogFunc(name, time)

  console.log(name, time)

  console.log(obj)
  // send to server
}

logger({ action: 'click', sessionKey: '234f243r2324f23', orgName: 'GeekBrains', trans: 23425435 })
