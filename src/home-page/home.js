import template from "./home.html";
import "./home.css";

const HomeComponent = () => {
  const getTemplate = () => template;

  return { getTemplate };
};

export { HomeComponent };
