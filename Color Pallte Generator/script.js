let canvas = document.querySelector("body")
let colorname = document.getElementById("color")
console.log(canvas);

colors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#33FFF5",
    "#F5FF33", "#8D33FF", "#FF8D33", "#33FF8D", "#338DFF",

    "#FF3333", "#33FF33", "#3333FF", "#FF33FF", "#33FFFF",
    "#FFFF33", "#9933FF", "#FF9933", "#33FF99", "#3399FF",

    "#CC0000", "#00CC00", "#0000CC", "#CC00CC", "#00CCCC",
    "#CCCC00", "#6600CC", "#CC6600", "#00CC66", "#0066CC",

    "#990000", "#009900", "#000099", "#990099", "#009999",
    "#999900", "#4D0099", "#994D00", "#00994D", "#004D99",

    "#660000", "#006600", "#000066", "#660066", "#006666",
    "#666600", "#330066", "#663300", "#006633", "#003366",

    "#FFB3B3", "#B3FFB3", "#B3B3FF", "#FFB3FF", "#B3FFFF",
    "#FFFFB3", "#D1B3FF", "#FFD1B3", "#B3FFD1", "#B3D1FF",

    "#FF8080", "#80FF80", "#8080FF", "#FF80FF", "#80FFFF",
    "#FFFF80", "#B380FF", "#FFB380", "#80FFB3", "#80B3FF",

    "#FF4D4D", "#4DFF4D", "#4D4DFF", "#FF4DFF", "#4DFFFF",
    "#FFFF4D", "#9966FF", "#FF9966", "#66FF99", "#6699FF",

    "#E60000", "#00E600", "#0000E6", "#E600E6", "#00E6E6",
    "#E6E600", "#7A00E6", "#E67A00", "#00E67A", "#007AE6",

    "#1A1A1A", "#333333", "#4D4D4D", "#666666", "#808080",

    "#0B3C49", "#731DD8", "#F4A261", "#2A9D8F", "#E76F51",
    "#264653", "#E9C46A", "#A8DADC", "#457B9D", "#1D3557",

    "#FF6F91", "#FFC75F", "#845EC2", "#4D96FF", "#00C9A7",
    "#C34A36", "#0081CF", "#B39CD0", "#FBEAFF", "#FF9671",

    "#3D5A80", "#98C1D9", "#E0FBFC", "#EE6C4D", "#293241",
    "#D62828", "#F77F00", "#FCBF49", "#EAE2B7", "#003049",

    "#7F5539", "#9C6644", "#B08968", "#DDB892", "#E6CCB2",
    "#CDB4DB", "#FFC8DD", "#FFAFCC", "#BDE0FE", "#A2D2FF",

    "#7400B8", "#6930C3", "#5E60CE", "#5390D9", "#4EA8DE",
    "#48BFE3", "#56CFE1", "#64DFDF", "#72EFDD", "#80FFDB",

    "#03045E", "#023E8A", "#0077B6", "#0096C7", "#00B4D8",
    "#48CAE4", "#90DBF4", "#ADE8F4", "#CAF0F8", "#E0FBFF",

    "#FFBE0B", "#FB5607", "#FF006E", "#8338EC", "#3A86FF",
    "#FF595E", "#FFCA3A", "#8AC926", "#1982C4", "#6A4C93",

    "#2F3E46", "#354F52", "#52796F", "#84A98C", "#CAD2C5",
    "#F72585", "#B5179E", "#7209B7", "#560BAD", "#480CA8",

    "#3F37C9", "#4361EE", "#4895EF", "#4CC9F0", "#E63946",
    "#F1FAEE", "#A8DADC", "#457B9D", "#1D3557", "#FFDDD2",

    "#6D597A", "#355070", "#B56576", "#E56B6F", "#EAAC8B"
]

function randomColor() {
    ArrayIndex = colors[Math.floor(Math.random() * colors.length)]
    console.log(ArrayIndex);
    canvas.style.backgroundColor = ArrayIndex
    colorname.textContent = ArrayIndex.toUpperCase()
}

document.addEventListener("click", () => {
    randomColor()
})

