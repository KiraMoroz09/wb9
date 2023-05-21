const colorsDiv = document.querySelector('.colors')

const db_url = "https://na1omagux-default-rtdb.firebaseio.com"

function getColor () {
  fetch( `${db_url}/color.json`,  {
    method: 'GET',
    headers: {
      'Content-Type':'application/json'
    }
  })
  .then(res => res.json())
  .then(result => {
    const colors = Object.keys(result).map(key => result[key])
    console.log(colors);
    
    for (let i  = 0; i < colors.length; i++) {
      const div = document.createElement('div')
      div.classList.add('div')
      const divImg = document.createElement('div')
      
      const divText = document.createElement('div')
      
      
      const img = document.createElement('img')
      img.classList.add('img')
      const text = document.createElement('p')

      img.src = colors[i].link
      text.innerText = colors[i].description

      divImg.append(img),
      divText.append(text)
      div.append(divImg, divText)
      colorsDiv.append(div)

    }

  })
  .catch(error => {
    console.log(error);
});
}
getColor()



