// Função para alternar tipos de habilidades

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

// Função do filtro de habilidades

let mixerPortfolio = mixitup(".projetos_container", {
  selectors: {
    target: ".projetos_card",
  },
  animation: {
    duration: 300,
  },
});

//

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

const navMenu = document.getElementById("sidebar"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-sidebar");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-sidebar");
  });
}

function toggleAddPopup() {
  document.querySelector(".add_popup").classList.toggle("open");
  limpaCampos();
  const error_message = document.querySelector(".error_message");
  error_message.classList.remove("show");

  const form_add_popup = document.querySelector(".form-add_popup_login");
  form_add_popup.classList.remove("hide");

  const form_add = document.querySelector(".form_add");
  form_add.classList.remove("show");
}

document.querySelector(".nav_add").addEventListener("click", toggleAddPopup);
document
  .querySelector(".add_popup-close")
  .addEventListener("click", toggleAddPopup);

function authenticateUser() {
  event.preventDefault();

  const usuario = document.querySelector(".input[type='text']").value;
  const senha = document.querySelector(".input[type='password']").value;
  const form_add_popup_login = document.querySelector(".form-add_popup_login");
  const form_add = document.querySelector(".form_add");

  const error_message = document.querySelector(".error_message");

  if (usuario === "" && senha === "") {
    error_message.classList.remove("show");
    form_add_popup_login.classList.add("hide");
    form_add.classList.add("show");
  } else {
    error_message.classList.add("show");
    limpaCampos();
  }
}

function limpaCampos() {
  const inputUsuario = document.querySelector(".input[type='text']");
  const inputSenha = document.querySelector(".input[type='password']");

  const usuario = inputUsuario.value;
  const senha = inputSenha.value;

  inputUsuario.value = "";
  inputSenha.value = "";
}

//adicionar projetos

// // Array global para armazenar os projetos
// const projetosArray = [];

// function addProjeto(event) {
//   event.preventDefault(); // Evita o reload da página

//   // Captura os valores do formulário
//   const thumbInput = document.getElementById("thumb");
//   const title = document.getElementById("title").value.trim();
//   const description = document.getElementById("description").value.trim();
//   const date = document.getElementById("date").value.trim();
//   const type = document.getElementById("type").value.trim();
//   const techs = document.getElementById("techs").value.trim();
//   const domain = document.getElementById("domain").value.trim();

//   // Validação: Verifica se todos os campos estão preenchidos
//   if (
//     !thumbInput.value ||
//     !title ||
//     !description ||
//     !date ||
//     !type ||
//     !techs ||
//     !domain
//   ) {
//     alert("Por favor, preencha todos os campos!");
//     return;
//   }

//   // Validação: Verifica se o título já existe
//   const projetoExistente = projetosArray.some(
//     (projeto) => projeto.title === title
//   );
//   if (projetoExistente) {
//     alert("Já existe um projeto com este título!");
//     return;
//   }

//   // Define o índice do novo projeto e o nome do arquivo da imagem
//   const indice = projetosArray.length;
//   const thumbFileName = `thumb-${indice}.png`;

//   // Simula o armazenamento da imagem na pasta "assets/img/thumbs"
//   const reader = new FileReader();
//   reader.onload = function () {
//     // Aqui você pode implementar a lógica de upload para o servidor, se necessário
//     console.log(`Imagem salva como: assets/img/thumbs/${thumbFileName}`);
//   };
//   reader.readAsDataURL(thumbInput.files[0]);

//   // Cria um objeto para o novo projeto
//   const novoProjeto = {
//     title,
//     description,
//     date,
//     type,
//     techs,
//     domain,
//     thumb: `assets/img/thumbs/${thumbFileName}`,
//   };

//   // Adiciona o projeto ao array
//   projetosArray.push(novoProjeto);

//   // Atualiza o contêiner HTML com o novo projeto
//   renderProjetos();

//   // Limpa o formulário após adicionar o projeto
//   document.getElementById("form-projetos").reset();

//   alert("Projeto adicionado com sucesso!");
// }

// // Função para renderizar todos os projetos no contêiner
// function renderProjetos() {
//   const projetosContainer = document.querySelector(".projetos_container");
//   projetosContainer.innerHTML = ""; // Limpa os projetos existentes

//   projetosArray.forEach((projeto, index) => {
//     const projetoCard = document.createElement("div");
//     projetoCard.classList.add("projetos_card", "mix", projeto.type);

//     projetoCard.innerHTML = `
//             <img src="${projeto.thumb}" alt="${projeto.title}" class="projetos_img" />
//             <h3 class="projetos_title">${projeto.title}</h3>
//             <span class="projetos_button">
//                 Ver mais
//                 <i class="uil uil-arrow-right projetos_button-icon"></i>
//             </span>
//             <div class="portfolio_item-details">
//                 <h3 class="details_title">${projeto.title}</h3>
//                 <p class="details_description">${projeto.description}</p>
//                 <ul class="details_info">
//                     <li>Criado - <span>${projeto.date}</span></li>
//                     <li>Tecnologias - <span>${projeto.techs}</span></li>
//                     <li>
//                         Visualizar - <span><a href="${projeto.domain}" target="_blank">${projeto.domain}</a></span>
//                     </li>
//                 </ul>
//             </div>
//         `;

//     projetosContainer.appendChild(projetoCard);
//   });
// }
