// product price change
const button = document.querySelector(".product-button")
const size = document.querySelector("#Size")
const scent = document.querySelector("#Scent")
let selectedOption = size.options[size.selectedIndex].value
console.log(selectedOption)
const newPrice = document.querySelector(".item-price")
console.log(newPrice.textContent)

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

scent.addEventListener("change", () => {
  button.setAttribute("data-item-custom2-value", scent.value)
})


// product image change

