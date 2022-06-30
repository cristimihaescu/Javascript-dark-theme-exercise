function switchTheme() {
  document.body.classList.toggle("bg-dark");
  const text = document.getElementsByTagName("h1");
  for (let i = 0; i < text.length; i++) {
    if (text[i].innerHTML == "This is the Light theme") {
      text[i].innerHTML = "This is the Dark theme";
      text[i].style.color = "white";
    } else {
      text[i].innerHTML = "This is the Light theme";
      text[i].style.color = "black";
    }
  }
  const nav_collection = document.getElementsByTagName("nav");
  for (let i = 0; i < nav_collection.length; i++) {
    nav_collection[i].classList.toggle("navbar-dark");
    nav_collection[i].classList.toggle("bg-dark");
  }
  const h3_collection = document.getElementsByTagName("h3");
  for (let i = 0; i < h3_collection.length; i++) {
    h3_collection[i].classList.toggle("mystyle2");
  }
  const card_collection = document.getElementsByClassName("card");
  for (let i = 0; i < card_collection.length; i++) {
    card_collection[i].classList.toggle("text-white");
    card_collection[i].classList.toggle("bg-dark");
    card_collection[i].classList.toggle("border-light");
  }
  const column_collection = document.getElementsByClassName("column");
  for (let i = 0; i < column_collection.length; i++) {
    column_collection[i].classList.toggle("col-12");
  }
  const p_collection = document.getElementsByClassName("p_collection");
  for (let i = 0; i < p_collection.length; i++) {
    p_collection[i].classList.toggle("text-white");
  }
  const tabel = document.getElementsByTagName("table")[0];
  tabel.classList.toggle("table-dark");
  document.getElementsByTagName("nav")[1].classList.toggle("navbar-dark");
  document
    .getElementsByTagName("nav")[1]
    .children[0].classList.toggle("justify-content-end");
  document.getElementById("btnSwitch").classList.toggle("btn-light");

  let button = document.getElementById("btnSwitch");
  if (button.innerText == "Activate Dark Theme") {
    button.innerText = "Activate Light Theme";
  } else {
    button.innerText = "Activate Dark Theme";
  }
}
