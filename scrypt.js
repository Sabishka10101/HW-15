const buyBtn = document.querySelector(".btn__buy");
const form = document.querySelector(".buy__form");
const post = document.querySelector("#post__office");
const input = document.querySelector("input");
const numCount = document.getElementById("num_count");
const plusBtn = document.getElementById("button_plus");
const minusBtn = document.getElementById("button_minus");
const submitBtn = document.querySelector("#submit-btn");
const userName = document.querySelector(".user__name");

buyBtn.addEventListener(
  "submit",
  (event) => {
    event.preventDefault();
  },
  false
);
buyBtn.addEventListener("click", () => (form.style.display = "flex"));
plusBtn.onclick = function () {
  let qty = parseInt(numCount.value);
  qty = qty + 1;
  numCount.value = qty;
};
minusBtn.onclick = function () {
  let qty = parseInt(numCount.value);
  qty = qty - 1;
  numCount.value = qty;
  if (qty <= 0) {
    numCount.value = 0;
  }
};
