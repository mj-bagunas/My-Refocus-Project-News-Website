let card = document.querySelectorAll(".news-card");
let like = document.querySelectorAll(".fa-heart");
let remove = document.querySelectorAll(".fa-circle-xmark");
let read = document.querySelectorAll(".fa-circle-check");
let link = document.querySelectorAll(".link");
const hamburger = document.querySelector(".fa-bars");
const menu = document.querySelector(".navbar__menu");
const buttons = document.querySelector(".navbar__buttons");
let cardContainer = document.querySelector(".news-container");
let prevScrollpos = window.pageYOffset;
let isClicked = false;

// DELETE
card.forEach(function (a) {
  let remove = a.querySelector(".fa-circle-xmark");

  remove.addEventListener("click", function () {
    a.remove();
  });
});

// LIKE
like.forEach(function (b) {
  b.addEventListener("click", function () {
    if (b.classList.contains("liked")) {
      b.classList.remove("fa-solid", "liked");
    } else {
      b.classList.add("fa-solid", "liked");
    }
  });
});

// READ
link.forEach(function (c) {
  c.addEventListener("click", function () {
    let parentCard = c.closest(".news-card");
    let checkIcon = parentCard.querySelector(".fa-circle-check");

    if (checkIcon) {
      checkIcon.classList.add("fa-solid", "read");
      checkIcon.style.display = "inline-block";
    }
  });
});

//HAMBURGER MENU
hamburger.addEventListener("click", () => {
  if (isClicked) {
    cardContainer.style.marginTop = "10px";
    menu.classList.remove("show");
    buttons.classList.remove("show");
  } else {
    menu.classList.add("show");
    buttons.classList.add("show");
    cardContainer.style.marginTop = "250px";
    window.scrollTo(0, 0);
  }
  isClicked = !isClicked;
});

// JavaScript to hide the links when user scrolls down
function toggleNavVisibility() {
  const currentScrollPos = window.pageYOffset;
  const windowWidth = window.innerWidth;

  if (windowWidth <= 768) {
    // hide on small screens
    if (prevScrollpos > currentScrollPos) {
      menu.classList.add("hide");
      buttons.classList.add("hide");
    } else if (prevScrollpos < currentScrollPos) {
      menu.classList.add("hide");
      buttons.classList.add("hide");
    }

    // show the links when reaching the top
    if (currentScrollPos === 0) {
      menu.classList.remove("hide");
      buttons.classList.remove("hide");
    }

    prevScrollpos = currentScrollPos;
  } else {
    // show on large screens
    menu.classList.remove("hide");
    buttons.classList.remove("hide");
  }
}

window.onscroll = toggleNavVisibility;
window.onresize = toggleNavVisibility;
