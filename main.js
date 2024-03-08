let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  navbar.classList.toggle("open-menu");
  menu.classList.toggle("move");
};

window.onscroll = () => {
  navbar.classList.remove("open-menu");
  menu.classList.remove("move");
};

document.addEventListener("DOMContentLoaded", function () {
  const phoneButton = document.getElementById("copyPhone");
  const emailButton = document.getElementById("copyEmail");

  const phoneNumber = "+4571846557";
  const emailAddress = "youssefftopaji@gmail.com";

  phoneButton.addEventListener("click", function () {
    copyToClipboard(phoneNumber);
  });

  emailButton.addEventListener("click", function () {
    copyToClipboard(emailAddress);
  });

  function copyToClipboard(text) {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert(text + " copied to clipboard");
  }
});
