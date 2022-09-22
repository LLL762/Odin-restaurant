import template from "./menu.html";

const MenuComponent = () => {
  const getTemplate = () => template;

  return { getTemplate };
};

export { MenuComponent };
