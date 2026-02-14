const links = document.getElementById("links")
const msg = document.getElementById("msg")
const text = document.getElementById("text")

links.addEventListener("click", () => {
    msg.style.color = 'red'
    text.classList.add("shake")
    setTimeout(() => {
        msg.style.color = 'gray'
        text.classList.remove("shake")
    }, 1000)
})