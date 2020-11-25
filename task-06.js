const inputRef = document.querySelector("#validation-input");
const MustInputLength = inputRef.attributes["data-length"].value;

inputRef.addEventListener("change", (event) => {
  const inputLength = event.target.value.length;

  if (Number(MustInputLength) === Number(inputLength)) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
});
