let obj = {
  "foo": "bar",
  "marvin": 42,
  "dharma": [4, 8, 15, 16, 23, 42],
  "avg": {
    "cap": "Steve Rogers"
  }
}

obj = JSON.stringify(obj);
console.log(typeof obj)
obj = JSON.parse(obj)
console.log(typeof obj)