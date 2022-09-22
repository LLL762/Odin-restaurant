import template from "./menu-bar.html";
import "./menu-bar.css";
import { Navigation } from "../navigation/navigation";

const MenuBarComponent = () => {
  const init = () => {
    show();

    const homeBtn = document.querySelector("header #btn-home");
    const menuBtn = document.querySelector("header #btn-menu");
    const contactBtn = document.querySelector("header #btn-contact");

    homeBtn.addEventListener("click", () => Navigation.goToHome());
    menuBtn.addEventListener("click", () => Navigation.goToMenu());
    contactBtn.addEventListener("click", () => Navigation.goToContact());
  };

  const show = () => {
    const heardElem = document.querySelector("header");
    heardElem.innerHTML = template;
  };

  return { init };
};

export { MenuBarComponent };
