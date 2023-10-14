import React, {useState, useEffect} from 'react'
import {capitalizeFirstLetter} from '../utils.js'

function FetchData() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <React.Fragment>
      <h3>List of Posts:</h3>
      <ul>
        {data.map(post => (
          <li key={post.id}>{capitalizeFirstLetter(post.title)}</li>
        ))}
      </ul>
    </React.Fragment>
  )
}

export default FetchData
