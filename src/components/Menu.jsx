import MenuItem from "./MenuItem";

const Menu = ({ menuItems }) => {
  return (
    <section>
      {menuItems.map((menu) => {
        return <MenuItem key={menu.id} {...menu} />;
      })}
    </section>
  );
};
export default Menu;
