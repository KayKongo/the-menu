import MenuItem from "./MenuItem";

const Menu = ({ menuItems }) => {
  return (
    <div className="section-center">
      {menuItems.map((menu) => {
        return <MenuItem key={menu.id} {...menu} />;
      })}
    </div>
  );
};
export default Menu;
