import { ContactComponent } from "../contact-page/contact";
import { GlobalVar } from "../global-var";
import { HomeComponent } from "../home-page/home";
import { MenuComponent } from "../menu-page/menu";

const Navigation = (() => {
  const pageContent = GlobalVar.getPageContentElement();

  const goToHome = () => {
    pageContent.innerHTML = HomeComponent().getTemplate();
  };

  const goToMenu = () => {
    pageContent.innerHTML = MenuComponent().getTemplate();
  };

  const goToContact = () => {
    pageContent.innerHTML = ContactComponent().getTemplate();
  };

  return { goToHome, goToMenu, goToContact };
})();

export { Navigation };
