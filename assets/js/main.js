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
