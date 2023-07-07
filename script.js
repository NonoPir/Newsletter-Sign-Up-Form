"use strict";
const invalidEmail = document.getElementById("invalid");
const enterMail = document.getElementById("enter");
const emailInput = document.getElementById("email-input");
const box = document.querySelector(".box");
const secondBox = document.querySelector(".second-box");
const secondBoxChild = document.querySelector(".second-box-child");
const secondBoxPara = document.getElementById("second-box-para");
const button = document.getElementById("dismiss-button");
const validateEmail = (email) => {
  email = emailInput.value;
  const matchEmail = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  if (matchEmail) {
    invalidEmail.classList.add("hidden");
    emailInput.classList.remove("warning");
    enterMail.classList.add("hidden");
    box.classList.add("hidden");
    secondBox.classList.remove("hidden");
    secondBoxPara.innerHTML = secondBoxPara.innerHTML.replace("blank", email);
  } else if (email === "") {
    enterMail.classList.remove("hidden");
    emailInput.classList.add("warning");
    invalidEmail.classList.add("hidden");
  } else {
    emailInput.classList.add("warning");
    invalidEmail.classList.remove("hidden");
    enterMail.classList.add("hidden");
  }
};

const dismissMessage = function () {
  secondBox.classList.add("hidden");
  box.classList.remove("hidden");
  emailInput.value = "";
};
