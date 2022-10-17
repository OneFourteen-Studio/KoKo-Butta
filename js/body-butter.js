// product price change
const button = document.querySelector(".product-button")
const scent = document.querySelector("#Scent")


// product image change
scent.addEventListener("change", () => {
  button.setAttribute("data-item-custom1-value", scent.value)
  let selectedMainImage = document.querySelector("#main-image")
  let selectedImages = document.querySelectorAll(".product-images")
  let selectedScent = scent.options[scent.selectedIndex].value
  
  if(selectedScent === "Tropikal Paradise") {
    selectedMainImage.src = selectedImages[1].src
    button.setAttribute("data-item-image", selectedImages[1].src)
  } else if (selectedScent === "Sweet Kandy") {
    selectedMainImage.src = selectedImages[2].src
    button.setAttribute("data-item-image", selectedImages[2].src)
  } else if (selectedScent === "Mango Madness") {
    selectedMainImage.src = selectedImages[3].src
    button.setAttribute("data-item-image", selectedImages[3].src)
  }


})

// image change on click
let mainImage = document.getElementById("main-image")
let images = document.querySelectorAll(".product-images")

images.forEach((image) => {
  image.addEventListener("click", (event) => {
    mainImage.setAttribute("src", image.getAttribute("src"))
    console.log(mainImage)
  })
})


