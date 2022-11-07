const adviceButton = document.querySelector(".advice-btn");
const adviceId = document.getElementById("advice_id");
const quote = document.querySelector(".card-text");

//get random advices from https://api.adviceslip.com/advice

const getAdvice = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  if (response) {
    const data = await response.json();
    adviceId.innerText = data.slip.id;
    quote.innerHTML = `<p class="quote">“${data.slip.advice}”</p>`;
  } else {
    console.log(error);
  }
};

//Function to display random advice when user click on button

adviceButton.addEventListener("click", getAdvice);
getAdvice();
