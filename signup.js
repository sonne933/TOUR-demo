const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

const btnback = document.querySelector(".btn_back");



signInBtn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
    this.location.href='signup.html';
});

signUpBtn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
    this.location.href='regsiter.html';
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());