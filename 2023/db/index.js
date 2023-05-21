const link = document.getElementById("link")
const description = document.getElementById("description")
const btn = document.getElementById("btn")

const db_url = "https://na1omagux-default-rtdb.firebaseio.com/"
btn.onclick = () => {
    const data = {
      link: link.value,
      description: description.value,
    }
    link.value = ''
    description.value = ''

    return fetch(`${db_url}/color.json`,
        {
            method: 'POST',
            header: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        })
    .catch(error => {
        console.log(error);
    });
}

