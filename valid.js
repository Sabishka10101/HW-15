const reqField = document.querySelector(".required-field");
const formError = document.querySelector(".form-input-error");
const postField = document.querySelector(".post-dest-feeld");
const main = document.querySelector(".main");
const towns = document.querySelector("#towns");
const payField = document.querySelector("#pay");
const text = document.querySelector(".final__text");
const tel = document.querySelector(".tel");
const email = document.querySelector(".email");
const regExp = /^([a-zа-яё]+[\s]{0,1}[a-zа-яё]+[\s]{0,1}[a-zа-яё]+)$/gi;
const regExpEmail =
  /^(([a-zа-я0-9_-]+\.)*[a-zа-я0-9_-]+@[a-zа-я0-9-]+(\.[a-zа-я0-9-]+)*\.[a-zа-я]{2,6})?$/;
const regExpTel = /^([+380]{4}[0-9]{9})?$/g;

submitBtn.addEventListener("click", (event) => {
  if (reqField.value == 0 || !regExp.test(reqField.value)) {
    console.log("ФИО:" + regExp.test(reqField.value));
    event.preventDefault();
    reqField.style.border = "2px solid red";
    formError.style.display = "block";
    return null;
  }
  if (email.value == 0 || !regExpEmail.test(email.value)) {
    console.log("email:" + regExp.test(email.value));
    event.preventDefault();
    email.style.border = "2px solid red";
    formError.style.display = "block";
    return null;
  }
  if (!regExpTel.test(tel.value)) {
    console.log("tel:" + regExp.test(tel.value));
    event.preventDefault();
    tel.style.border = "2px solid red";
    formError.style.display = "block";
    return null;
  }
  if (postField.value == 0) {
    event.preventDefault();
    postField.style.border = "2px solid red";
    formError.style.display = "block";
    return null;
  } else {
    formVal(event);
  }
});

function formVal(event) {
  event.preventDefault();

  tel.style.border = "1px solid black";
  postField.style.border = "1px solid black";
  email.style.border = "1px solid black";
  reqField.style.border = "1px solid black";
  let div = document.createElement("div");
  main.appendChild(div);
  div.classList.add("form-value");
  let p = document.createElement("p");
  div.appendChild(p);
  p.innerHTML = "ПІП:" + " " + reqField.value;
  let valEmail = document.createElement("p");
  div.appendChild(valEmail);
  valEmail.innerHTML = "Email :" + " " + email.value;
  let valTel = document.createElement("p");
  div.appendChild(valTel);
  valTel.innerHTML = "Телефон :" + " " + tel.value;
  let town = document.createElement("p");
  div.appendChild(town);
  town.innerHTML = "Місто:" + " " + towns.value;
  let post = document.createElement("p");
  div.appendChild(post);
  post.innerHTML = "Склад Нової Пошти №:" + " " + postField.value;
  let pay = document.createElement("p");
  div.appendChild(pay);
  pay.innerHTML = "Оплата:" + " " + payField.value;
  let amount = document.createElement("p");
  div.appendChild(amount);
  amount.innerHTML = "Кількість товару:" + " " + numCount.value;
  let valText = document.createElement("p");
  div.appendChild(valText);
  valText.innerHTML = "Коментар до замовленя :" + " " + text.value;

  // document.querySelector("form").submit();
}
