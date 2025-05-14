const MenuItem = ({ id, title, category, price, img, desc }) => {
  return (
    <div key={id} style={{ padding: "2rem 0" }}>
      <img src={img} alt={title} style={{ width: "15rem" }} />
      <h2>{title}</h2>
      <h3>category: {category}</h3>
      <h5>price: {price}</h5>
      <p>description: {desc}</p>
    </div>
  );
};
export default MenuItem;
