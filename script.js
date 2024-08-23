const radioInput = document.querySelectorAll('input[name="offer"]');

radioInput.forEach((radio) => {
  radio.addEventListener("change", function () {
    //To Hide all product options.
    document.querySelectorAll(".product-options").forEach((option) => {
      option.classList.add("hidden");
    });

    if (this.dataset.showOptions === "true") {
      this.closest(".offer")
        .querySelector(".product-options")
        .classList.remove("hidden");
    }

    // Updating the total price.
    let selectedPrice = document.querySelector(
      'input[name="offer"]:checked'
    ).nextElementSibling;
    let price = selectedPrice.querySelector(".price").innerText;
    document.querySelector(
      ".total span:last-child"
    ).innerText = `Total: ${price}`;

    document.querySelectorAll(".offer").forEach((offer) => {
      offer.classList.remove("offer-selected");
    });

    //To Remove the discount tag.
    document.querySelectorAll(".discount").forEach((offer) => {
      offer.classList.remove("hidden");
    });

    // Add functionalities when radio button clicked.
    if (radio.checked) {
      const offerAdd = radio.closest(".offer");
      offerAdd.classList.add("offer-selected");
      offerAdd.querySelector(".discount").classList.add("hidden");
    }
  });
});
