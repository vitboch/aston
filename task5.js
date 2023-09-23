const URL = 'https://google/com&#39'

async function fetchUrl(url) {
  let attempt = 0

  while (attempt < 5) {
    try {
      const response = await fetch(url)

      if (response.ok) {
        return response.text()
      } else {
        attempt++
      }
    } catch (error) {
      console.log(error)
      attempt++
    }
  }

  throw new Error(`Ошибка после ${attempt} неудачных попыток получить содержимое страницы`)
}

fetchUrl(URL)
  .then(data => console.log(data))
  .catch(error => console.error(error))
