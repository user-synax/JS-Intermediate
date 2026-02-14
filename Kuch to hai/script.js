const colorInput = document.getElementById("color-counter-input")
const button = document.getElementById("add-button")
const Sumbitbutton = document.getElementById("sumbit-button")


button.addEventListener("click", () => {
    let inputBoxes = colorInput.value.trim()
    for (let i = 0; i < inputBoxes; i++) {
        let input = document.createElement("input")
        input.type = "color"
        input.classList.add("color")
        input.id = `color${i}`
        document.body.append(input)
    }
})


Sumbitbutton.addEventListener("click", () => {
    let colorsInput = document.querySelectorAll(".color")
    let colors = []
    for (let i = 0; i < colorsInput.length; i++) {
        console.log(colorsInput[i].value);
        colors.push(colorsInput[i].value)
    }
    document.body.style.background = `linear-gradient(to bottom, ${colors.join(', ')})`;
    document.body.removeChild(colorsInput)

})
