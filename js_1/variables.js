function fn1() {
  let a = 5;
  if (true) {
    // можно изменить ниже по коду без ошибок
    a = 3;
  
    // нельзя изменить дальше, будет ошибка
    const b = 5;
  } else {
    let a = 8;
  }
  console.log(a)
}

fn1()
