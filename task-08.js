const controlsDiv = document.getElementById("controls");
// console.log(controlsDiv);
controlsDiv.addEventListener('change', (e) => {
    // console.log("target", e.target.value);
    const amount = e.target.value;
    const elements = [];
    const element = "<div></div>";

    for (let i = 0; i < amount; i += 1) { elements.push(element) }


    controlsDiv.insertAdjacentHTML('afterend', elements.join(' '))
})






