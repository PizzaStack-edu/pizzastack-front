import { Header } from "./coomon/components/header/header.component";
import { MenuList } from "./modules/menu/components/menu-list/menu-list.component";
import { Footer } from "./coomon/components/footer/footer.component";
import pizzaMenu from "@app/mocks/pizza.json";

export const App = () => {
  return (
    <div>
      <Header />
      <div className="mx-12 mb-24">
        <MenuList items={pizzaMenu} />
      </div>
      <Footer />
    </div>
  );
};
