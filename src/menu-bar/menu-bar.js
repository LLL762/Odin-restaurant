import template from "./menu-bar.html";
import "./menu-bar.css";
import { Navigation } from "../navigation/navigation";

const MenuBarComponent = () => {
  const selectedStyleClass = "menu-item-selected";

  let currPageBtn;

  const show = () => {
    const heardElem = document.querySelector("header");
    heardElem.innerHTML = template;
  };

  const init = () => {
    show();
    const homeBtn = document.querySelector("header #btn-home");
    const menuBtn = document.querySelector("header #btn-menu");
    const contactBtn = document.querySelector("header #btn-contact");

    setCurrPageBtn(homeBtn);

    homeBtn.addEventListener("click", (event) => homeBtnOnClick(event));
    menuBtn.addEventListener("click", (event) => menuBtnOnClick(event));
    contactBtn.addEventListener("click", (event) => contactBtnOnClick(event));
  };

  const homeBtnOnClick = (event) => {
    Navigation.goToHome();
    setCurrPageBtn(event.currentTarget);
  };

  const menuBtnOnClick = (event) => {
    Navigation.goToMenu();
    setCurrPageBtn(event.currentTarget);
  };

  const contactBtnOnClick = (event) => {
    Navigation.goToContact();
    setCurrPageBtn(event.currentTarget);
  };

  const setCurrPageBtn = (newvalue) => {
    if (currPageBtn) {
      clearSelectedStyle();
    }
    currPageBtn = newvalue;
    applySelectedStyle();
  };

  const applySelectedStyle = () => {
    currPageBtn.classList.add(selectedStyleClass);
  };

  const clearSelectedStyle = () => {
    currPageBtn.classList.remove(selectedStyleClass);
  };

  return { init };
};

export { MenuBarComponent };
