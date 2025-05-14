const Categories = ({ states, filter }) => {
  return (
    <div>
      {states.map((categoryState) => {
        return (
          <button
            key={categoryState}
            onClick={() => filter({ categoryState })}
            style={{ marginRight: "1.5rem", padding: "0 0.625rem" }}
          >
            {categoryState}
          </button>
        );
      })}
    </div>
  );
};
export default Categories;
