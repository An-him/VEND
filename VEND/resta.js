document.addEventListener("DOMContentLoaded", function () {
    const burgerBtn = document.getElementById("burgerBtn");
    const GFriesBtn = document.getElementById("GFriesBtn");
    const FudgeBtn = document.getElementById("FudgeBtn");

    burgerBtn.addEventListener("click", function () {
      addToCart("Signature Burger");
    });

    GFriesBtn.addEventListener("click", function () {
      addToCart("Gravy-Fries");
    });

    FudgeBtn.addEventListener("click", function () {
      addToCart("Chocolate Fudge");
    });

    function addToCart(itemName) {
      alert(itemName + " added to cart!");
    }
  });
