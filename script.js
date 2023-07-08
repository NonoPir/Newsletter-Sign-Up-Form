"use strict";

const invalidEmail = document.getElementById("invalid");
const enterMail = document.getElementById("enter");
const emailInput = document.getElementById("email-input");
const box = document.querySelector(".box");
const secondBox = document.querySelector(".second-box");
const secondBoxChild = document.querySelector(".second-box-child");
const secondBoxPara = document.getElementById("second-box-para");
const button = document.getElementById("dismiss-button");

const addHiddenClass = () => {
  invalidEmail.classList.add("hidden");
  enterMail.classList.add("hidden");
  box.classList.add("hidden");
  secondBox.classList.add("hidden");
};

const removeHiddenClass = () => {
  secondBox.classList.remove("hidden");
};

const removeWarningClass = () => {
  emailInput.classList.remove("warning");
};

const addWarningClass = () => {
  emailInput.classList.add("warning");
};

const validateEmail = () => {
  const email = emailInput.value;
  const matchEmail = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  if (matchEmail) {
    addHiddenClass();
    removeWarningClass();
    secondBoxPara.innerHTML = secondBoxPara.innerHTML.replace("blank", email);
    removeHiddenClass();
  } else if (email === "") {
    enterMail.classList.remove("hidden");
    addWarningClass();
    invalidEmail.classList.add("hidden");
  } else {
    addWarningClass();
    invalidEmail.classList.remove("hidden");
    enterMail.classList.add("hidden");
  }
};

const dismissMessage = function () {
  addHiddenClass();
  box.classList.remove("hidden");
  emailInput.value = "";
};
