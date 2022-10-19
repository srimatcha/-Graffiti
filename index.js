
// Select some elements...

let header = document.queryselector("#page-header");
header.style.textAlign = "left"


let dogImages = document.querySelectorAll(".dog-image")
for (let i = 0; i < dogImages.length; i++) {
    dogImages[i].style.borderRadius = "50px"
}


let dogPar = document.querySelectorAll(".dog-description")
for (let i = 0; i < dogPar.length; i++) {
    dogPar[i].style.fontFamily = "Brush Script MT"
}
