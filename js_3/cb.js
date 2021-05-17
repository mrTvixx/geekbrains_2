// eventloop js
//! https://www.youtube.com/watch?v=8aGhZQkoFbQ&ab_channel=JSConf

const async = (a, cb) => {
  setTimeout(() => {
    const b = a + 1;
    cb(b);
  }, 0);
}

console.log('before')

async(5, (b) => {
  console.log(b);  // 6
});

//! страшная логика

console.log('after')

// getData(params, (data) => {
//   sendData(newData, (res) => {
//     sendToAnother(res, (resData) => {
      
//     })
//   })
// })

