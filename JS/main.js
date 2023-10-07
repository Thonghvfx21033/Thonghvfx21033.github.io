"use strict";
// biến kiểm tra nhập email có đúng định dạng không
function checkEmail(email) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

const submitBtn = document.querySelector(".submit-btn");

const backBtn = document.querySelector(".back-btn");

const aboutDetails = document.querySelector(".about-details");

const aboutInput = document.querySelector(".about-input");

const emailInput = document.querySelector(".email-input");

// Show thông tin cá nhân sau khi nhập email đúng định dạng
submitBtn.addEventListener("click", function () {
  if (checkEmail(emailInput.value) && emailInput.value != "") {
    aboutDetails.classList.remove("hide");
    aboutInput.classList.add("hide");
    backBtn.classList.remove("hide");
  } else {
    emailInput.value = "Please, enter your email!...";
  }
});

// Quay trở lại form nhập email
backBtn.addEventListener("click", function () {
  aboutDetails.classList.add("hide");
  aboutInput.classList.remove("hide");
  backBtn.classList.add("hide");
});

// Hiện thông tin nghề nghiệp khi click view more
const viewMoreBtns = document.querySelectorAll(".view-more-btn");

const viewLessBtns = document.querySelectorAll(".view-less-btn");

const containerDescs = document.querySelectorAll(".container-desc");

for (let i = 0; i < viewMoreBtns.length; i++) {
  viewMoreBtns[i].addEventListener("click", function () {
    containerDescs[i].classList.remove("hide");

    viewLessBtns[i].classList.remove("hide");

    viewMoreBtns[i].classList.add("hide");
  });
}

// Ẩn thông tin khi cick view less
for (let i = 0; i < viewLessBtns.length; i++) {
  viewLessBtns[i].addEventListener("click", function () {
    containerDescs[i].classList.add("hide");

    viewLessBtns[i].classList.add("hide");
  });
}
