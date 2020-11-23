const inputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");

inputRef.addEventListener("input", (event) => {
  inputRef.min = 0;
  inputRef.max = 45;

  const FontSize = (spanRef.style.fontSize = `${inputRef.value}px`);
});
