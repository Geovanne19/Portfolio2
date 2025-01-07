const tabs = document.querySelectorAll("[data-target]"),
  tabContent = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContent.forEach((tabContents) => {
      tabContents.classList.remove("habilidades_active");
    });

    target.classList.add("habilidades_active");

    tabs.forEach((tab) => {
      tab.classList.remove("habilidades_active");
    });

    tab.classList.add("habilidades_active");
  });
});

let mixerPortfolio = mixitup(".projetos_container", {
  selectors: {
    target: ".projetos_card",
  },
  animation: {
    duration: 300,
  },
});

const linkProjeto = document.querySelectorAll(".projeto_item");

function activeProjeto() {
  linkProjeto.forEach((l) => l.classList.remove("active-projeto"));
  this.classList.add("active-projeto");
}

linkProjeto.forEach((l) => l.addEventListener("click", activeProjeto));

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("projetos_button")) {
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
  }
});

function togglePortfolioPopup() {
  document.querySelector(".portfolio_popup").classList.toggle("open");
}

document
  .querySelector(".portfolio_popup-close")
  .addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp_thumbnail img").src =
    portfolioItem.querySelector(".projetos_img").src;
  document.querySelector(".portfolio_popup-subtitle span").innerHTML =
    portfolioItem.querySelector(".projetos_title").innerHTML;
  document.querySelector(".portfolio_popup-body").innerHTML =
    portfolioItem.querySelector(".portfolio_item-details").innerHTML;
}

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

window.addEventListener("scroll", navHighlighter);

const sections = document.querySelectorAll("section[id]");

function navHighlighter() {
  let scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav_menu a[href="#' + sectionId + '"]')
        .classList.add("active-link");
    } else {
      document
        .querySelector('.nav_menu a[href="#' + sectionId + '"]')
        .classList.remove("active-link");
    }
  });
}
