import template from "./menu-bar.html";
import "./menu-bar.css";

const MenuBarComponent = () => {
  const show = () => {
    const heardElem = document.querySelector("header");
    heardElem.innerHTML = template;
  };

  return { show };
};

export { MenuBarComponent };
