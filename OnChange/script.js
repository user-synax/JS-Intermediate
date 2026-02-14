const selectOptions = document.getElementById("select")

selectOptions.addEventListener("change", () => {
    document.body.style.backgroundColor = selectOptions.value
})