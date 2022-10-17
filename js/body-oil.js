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
    newPrice.textContent = "$13"
  } else {
    newPrice.textContent = "$10"
  }
})

// product image change
scent.addEventListener("change", () => {
  button.setAttribute("data-item-custom2-value", scent.value)
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

