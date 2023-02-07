const guess = document.getElementById("guess")
const submit = document.getElementById("submit")
const message = document.getElementById("message")
const frame = document.getElementById("frame")
const image = document.getElementById("image")
const skip = document.getElementById("skip")

let currentName = ""
frame.style.height = `${innerHeight * .40}px`
frame.style.width = `${innerHeight * .40}px`
submit.addEventListener("click", () => {
    console.log(guess.value)
    // message.innerHTML = guess.value
    if (guess.value.toLowerCase() == currentName){
    message.innerHTML = "Correct!"
    message.style.color = "rgb(14, 255, 14)";
    guess.value = ""
    getPokemon()
    }
    else {

    message.innerHTML = "Try Again!"
    message.style.color = "red";
    }
})

skip.addEventListener("click", ()=> {
    getPokemon();
    message.innerHTML = "";
})

const getPokemon = () => {
    var pid = Math.floor(Math.random() * 1008)
    const options = {method: 'GET'};
    fetch(`https://pokeapi.co/api/v2/pokemon/${pid}`, options)
    .then(response => response.json())
    .then(response => {
        image.src = response.sprites.front_default
                       currentName = response.name
                       console.log(currentName)
                    })
                    .catch(err => console.error(err));
                }

getPokemon();