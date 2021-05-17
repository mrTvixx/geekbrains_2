const promise = new Promise((res, rej) => {
  setTimeout(() => {
    console.log('FINISH REQUEST')
    rej('error ');
  }, 1000)
})

promise // pending
  .then((data) => {
    return data + ' FROM THEN';
  })
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    console.log('FINALLY')
  })





// callbacks

const async = (cb, cb1, cb2) => {
  setTimeout(() => {
    console.log('FINISH REQUEST')
    cb1(cb2(cb1(cb('error ', cb1))));
  }, 1000)
}

const cb = (a) => {
  return a + ' FROM CB'
}

const cb1 = (a) => {
  console.log(a)
}

const cb2 = (a) => {
  return a.toUpperCase()
}



