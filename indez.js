const divUserName = document.querySelector('.userName')
const divGameCount = document.querySelector('.game-count')
const divGame = document.querySelector('.game')

const inputName = document.getElementById('name')
const btnToCount = document.getElementById('to-count')
const inputCount = document.getElementById('count')
const btnToGame = document.getElementById('to-game')

const rfvtym = document.getElementById('rfvtym')
const yjbws = document.getElementById('yjbws')
const evfuf = document.getElementById(',evfuf')
btnToCount.setAttribute('disabled',true)

const disableName = () => {
    console.log(inputName.value.lenght);
    if(inputName.value.length < 2) {
        btnToCount.setAttribute('disabled',true)
    } else {
      btnToCount.setAttribute('disabled')
    }
}

inputName.addEventListener('input',disableName)