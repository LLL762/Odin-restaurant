import { MenuBarComponent } from "./menu-bar/menu-bar";
import { Navigation } from "./navigation/navigation";
import css from "./style.css";

require("./index.html");

MenuBarComponent().init();

Navigation.goToHome();

console.log("pedro");
