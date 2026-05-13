const buttons = document.querySelectorAll(".add-button");
const toast = document.querySelector(".cart-toast");
const message = document.querySelector("#cart-message");
let toastTimer;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.dataset.product;
    message.textContent = `${product} toegevoegd aan je selectie`;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2400);
  });
});
