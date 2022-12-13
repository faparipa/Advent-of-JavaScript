let priceRangeInput = document.getElementById("priceRange");
let dollarsInput = document.querySelector(".dollars");

priceRangeInput.addEventListener("input", () => {
    console.log(priceRangeInput.value);
    dollarsInput.textContent = priceRangeInput.value / 100;
});
