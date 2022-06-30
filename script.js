function switchTheme() {
  document.getElementsByTagName("h1")[0].classList.toggle("text-white");
  document.body.classList.toggle("bg-dark");
  document.getElementsByTagName("nav")[0].classList.toggle("navbar-dark");
  document.getElementsByTagName("nav")[0].classList.toggle("bg-dark");
  document.getElementsByClassName("card")[0].classList.toggle("text-white");
  document.getElementsByClassName("card")[0].classList.toggle("bg-dark");
  document.getElementsByClassName("card")[0].classList.toggle("border-light");
  document.getElementsByClassName("card")[1].classList.toggle("text-white");
  document.getElementsByClassName("card")[1].classList.toggle("bg-dark");
  document.getElementsByClassName("card")[1].classList.toggle("border-light");
  document.getElementsByClassName("card")[2].classList.toggle("text-white");
  document.getElementsByClassName("card")[2].classList.toggle("bg-dark");
  document.getElementsByClassName("card")[2].classList.toggle("border-light");
  document.getElementsByClassName("column")[0].classList.toggle("col-12");
  document.getElementsByClassName("column")[1].classList.toggle("col-12");
  document.getElementsByClassName("column")[2].classList.toggle("col-12");
  document.getElementsByClassName("table")[0].classList.toggle("table-dark");
  document.getElementsByTagName("nav")[1].classList.toggle("navbar-dark");
  document.getElementById("class1").toggle.textContent="This is the dark theme";
  document.getElementsByTagName("nav")[1].children[0].classList.toggle("justify-content-end");
  document.getElementById("btnSwitch").classList.toggle("btn-light");
  var button = document.getElementById("btnSwitch");
  button.onclick = function () {
    document.body.classList.toggle("btnSwitch");
    if (button.body.classList.contains("Activate Dark Theme")) {
      button.innerText = "Activate Light Theme";
    } else {
      button.innerText = "Activate Dark Theme";
    }
  }
}
//   if (button.innerText == "Activate Dark Theme") {
//     button.innerText = "Activate Light Theme";
//   } else {
//     button.innerText = "Activate Dark Theme";
//   }
// }