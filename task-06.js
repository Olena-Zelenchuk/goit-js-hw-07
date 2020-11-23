const inputRef = document.querySelector("#validation-input");
const MustInputLength = inputRef.attributes["data-length"].value;

inputRef.addEventListener("change", (event) => {
  const inputLength = event.target.value.length;

  Number(MustInputLength) !== Number(inputLength)
    ? inputRef.classList.add("invalid")
    : inputRef.classList.replace("invalid", "valid");
});
