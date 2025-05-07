// PROBLEMA 1 - preciso abrir o popup de editar perfil:

// Preciso pegar o botão de editar perfil
const editProfileButton = document.querySelector(".profile__edit-button");
// Preciso pegar o popup de editar perfil
const popupEditProfile = document.querySelector(".popup");
// o usuario precisa clicar na caneta de editar perfil
editProfileButton.addEventListener("click", function () {
  // ao clicar devo abrir o popup de editar
  popupEditProfile.classList.add("popup-opened");
});

// PROBLEMA 2 - preciso fechar o popup de editar perfil:
// Preciso pegar o botão de fechar o popup
const editProfilePopupCloseButton = document.querySelector(".popup__close-btn");

function closePopup(popup) {
  // ao clicar devo fechar o popup de editar
  popup.classList.remove("popup-opened");
}

// o usuario precisa clicar no botao de fechar X
editProfilePopupCloseButton.addEventListener("click", () =>
  closePopup(popupEditProfile)
);

// PROBLEMA 3 - Editar nome e about:

// Preciso selecionar o formulário
const formEditProfile = document.querySelector(".popup__form");
// o usuario precisa preencher e enviar o formulario
formEditProfile.addEventListener("submit", function (event) {
  // previne o comportamento default do formulário
  event.preventDefault();

  const userNameInput = event.srcElement[0];
  const userAboutInput = event.srcElement[1];

  // Pega os campos que o usuário preencheu
  const userName = userNameInput.value;
  const userAbout = userAboutInput.value;

  // Pega o elemento user name
  const userNameElement = document.querySelector(".profile__name");
  userNameElement.textContent = userName;
  // Pega o elemento user about
  const userAboutElement = document.querySelector(".profile__about");
  userAboutElement.textContent = userAbout;

  closePopup(popupEditProfile);
});
