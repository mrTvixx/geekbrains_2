// https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch

fetch('http://example.com/movies', {
  method: 'POST',
  body: JSON.stringify({ data: 'gb' })
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })
