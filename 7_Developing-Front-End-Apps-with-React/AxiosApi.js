import axios from 'axios'
const apiUrl = 'https://jsonplaceholder.typicode.com/posts'
axios
  .get(apiUrl)
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.error('There was a problem with the fetch operation:', error)
  })
