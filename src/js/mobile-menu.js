
(() => {
  const menu = document.getElementById("mob-menu");
  const menuLinks = menu.querySelectorAll("nav a");
  const refs = {
    // Додати атрибут data-menu-open на кнопку відкриття
    openModalBtn: document.querySelector("[data-menu-open]"),
    // Додати атрибут data-menu-close на кнопку закриття
    closeModalBtn: document.querySelector("[data-menu-close]"),
    // Додати атрибут data-menu на бекдроп модалки
    modal: document.querySelector("[data-menu]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle("is-open");
  }
  // закрити меню при натисканні на пунк меню:
  menuLinks.forEach(link => {
    link.addEventListener("click", function () {
      refs.modal.classList.toggle("is-open");
    })
  })
})();
       

      