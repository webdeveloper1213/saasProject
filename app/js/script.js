const btHamburger = document.querySelector("#btHamburger");
btHamburger.addEventListener("click", () => {
  console.log("clicked");
  if (btHamburger.classList.contains("open")) {
    btHamburger.classList.remove("open");
  } else {
    btHamburger.classList.add("open");
  }
});
