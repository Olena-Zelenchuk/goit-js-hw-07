const inputRef = document.querySelector("#name-input");
const spanName = document.querySelector("#name-output");

inputRef.addEventListener("input", (event) => {
  event.preventDefault();
  const inputName = event.target.value;

  inputName.length === 0
    ? (spanName.textContent = "незнайомець")
    : (spanName.textContent = inputName);
});
