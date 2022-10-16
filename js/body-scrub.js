// product price change
const button = document.querySelector(".product-button")
const size = document.querySelector("#Size")
const scent = document.querySelector("#Scent")
let selectedOption = size.options[size.selectedIndex].value
const newPrice = document.querySelector(".item-price")

size.addEventListener("change", () => {
  button.setAttribute("data-item-custom1-value", size.value)
  let selectedOption = size.options[size.selectedIndex].value
  const newPrice = document.querySelector(".item-price")
  if (selectedOption === "Large") {
    newPrice.textContent = "$12.50"
  } else {
    newPrice.textContent = "$10"
  }
})

// product image change
scent.addEventListener("change", () => {
  button.setAttribute("data-item-custom2-value", scent.value)
  let selectedMainImage = document.querySelector("#main-image")
  let selectedImages = document.querySelectorAll(".product-images")
  let selectedScent = scent.options[scent.selectedIndex].value
  if(selectedScent === "Tropikal Paradise") {
    selectedMainImage.src = selectedImages[1].src
  } else if (selectedScent === "Sweet Kandy") {
    selectedMainImage.src = selectedImages[2].src
  } else if (selectedScent === "Mango Madness") {
    selectedMainImage.src = selectedImages[3].src
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


