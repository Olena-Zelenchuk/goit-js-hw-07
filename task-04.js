let counterValue = 0;
const btnIncRef = document.querySelector('[data-action="increment"]');
const btnDcrRef = document.querySelector('[data-action="decrement"]');
const counter = document.querySelector("#value");

const increment = (event) => {
  counterValue += 1;
  counter.textContent = counterValue;
  return counter.textContent;
};
const decrement = (event) => {
  counterValue -= 1;
  counter.textContent = counterValue;
  return counter.textContent;
};

btnIncRef.addEventListener("click", increment);
btnDcrRef.addEventListener("click", decrement);
