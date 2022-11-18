const btn = document.getElementById("btn");
const adviceP = document.getElementById("advice");
const spanS = document.getElementById("span");

async function getRandomAdvice() {
  const res = await fetch("https://api.adviceslip.com/advice");

  const data = await res.json();
  adviceP.innerHTML = data.slip.advice;
  spanS.innerHTML = data.slip.id;
  console.log("hello");
}

btn.addEventListener("click", getRandomAdvice);
