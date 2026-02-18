const myName = document.getElementById("my-name")
const myBtn = document.getElementById("my-btn")

const FontSize = (size) => {

    const changeSize= () => {
        myName.style.fontSize = `${size}px`
    }

    return changeSize
}

const Size10 = FontSize(10)
const Size40 = FontSize(40)
const Size20 = FontSize(20)
const Size70 = FontSize(70)

myBtn.addEventListener("click", Size70)