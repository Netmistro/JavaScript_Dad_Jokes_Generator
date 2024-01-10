// Constants
const btnEl = document.getElementById("btn");
const API_Key = "ea3u6sPlDdh8etybcDkbKw==w9WNwoZUmK4190DU";
const jokeEl = document.getElementById("joke");
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": API_Key,
  },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

// Functions
async function getJoke() {
  try {
    jokeEl.innerText = "Loading...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();
    jokeEl.innerText = data[0].joke;
    btnEl.disabled = false;
    btnEl.innerText = "Get Another Joke";
  } catch (error) {
    jokeEl.innerText = "Something went wrong! Try again later.";
    btnEl.disabled = false;
    btnEl.innerText = "Get Another Joke";
    console.log(error);
  }
}

function blankJokeText() {
  jokeEl.innerText = "Press the button to get a joke!";
}

// Event Listeners
btnEl.addEventListener("click", getJoke);
onload = blankJokeText();
