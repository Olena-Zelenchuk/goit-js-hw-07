const inputRef = document.querySelector("#validation-input");
// const MustInputLength = inputRef.attributes["data-length"].value;
const MustInputLength = inputRef.dataset.length;
console.log(MustInputLength);

inputRef.addEventListener("change", (event) => {
  const inputLength = event.target.value.length;
  inputRef.classList.add("invalid"); 
  +MustInputLength === +inputLength ? inputRef.classList.replace("invalid", "valid") : inputRef

// MustInputLength ===  inputLength ?  inputRef.classList.remove("invalid", "valid") : inputRef.classList.remove("valid", "invalid");

  // if (Number(MustInputLength) === Number(inputLength)) {
  //   inputRef.classList.remove("invalid");
  //   inputRef.classList.add("valid");
  // } else {
  //   inputRef.classList.remove("valid");
  //   inputRef.classList.add("invalid");
  // }

  
});
