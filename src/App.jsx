import { useState } from "react";
import Title from "./components/Title";
import data from "./data";
import Menu from "./components/Menu";
import Categories from "./components/Categories";

const App = () => {
  const [menus, setMenus] = useState(data);
  const categorySet = new Set(menus.map((menu) => menu.category));
  const tempCategories = Array.from(categorySet);
  const categoriesList = ["all", ...tempCategories];
  const [categories, setCategories] = useState(categoriesList);

  const filterCategory = (category) => {
    if (category === "all") {
      setMenus(data);
    } else {
      const newList = data.filter((menu) => menu.category == category);
      setMenus(newList);
    }
  };

  return (
    <main>
      <section className="menu">
        <Title title="Our Menu" />
        <Categories states={categories} filter={filterCategory} />
        <Menu menuItems={menus} />
      </section>
    </main>
  );
};
export default App;
