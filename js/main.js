document.addEventListener("DOMContentLoaded", function () {
  // Sidebar menu toggler
  const menuItems = document.querySelectorAll(".sidebar-menu__item--has-child");
  const menuToggle = (e) => {
    e.classList.toggle("sidebar-menu__item--active");
  };
  menuItems.forEach((element) => {
    element.addEventListener("click", () => {
      menuToggle(element);
    });
  });

  // Fav button toggler
  const favButtons = document.querySelectorAll(".like");
  const removeFavButtons = document.querySelectorAll(".remove-like");
  const favToggle = (e) => {
    e.parentNode.querySelector(".like").classList.toggle("like--active");
  };
  const favRemove = (e) => {
    e.parentNode.querySelector(".like").classList.remove("like--active");
  };

  favButtons.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      favToggle(element);
    });
  });
  removeFavButtons.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      favRemove(element);
    });
  });

  tippy(".like", {
    content: "В избранное",
  });
  tippy(".remove-like", {
    content: "Удалить из избранного",
  });

  // Mobile menu toggle
  const burger = document.querySelectorAll(".hamburger");
  const sidebar = document.querySelector(".sidebar");
  burger.forEach((element) => {
    element.addEventListener("click", (e) => {
      burger.forEach((element) => {
        element.classList.toggle("is-active");
      });
      sidebar.classList.toggle("sidebar--open");
    });
  });
});
