const wrapper = document.getElementById("wrapper");
const signupbutton = document.getElementById("signupbutton");
const closemodal = document.getElementById("closemodal");

const name = document.querySelector('input[name="name"]');
const nickname = document.querySelector('input[name="nickname"]');
const email = document.querySelector('input[name="email"]');
const PW = document.querySelector('input[name="PW"]');
const PWcf = document.querySelector('input[name="PWcf"]');

signupbutton.onclick = function () {
  wrapper.style.display = "inline";
  wrapper.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
};

