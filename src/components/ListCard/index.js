import "./index.css";

export const ListCard = (props) => {
  const { item, onClick } = props;

  return (
    <div className="list-card-container" onClick={() => onClick(item)}>
      <img
        className="checkbox"
        src={`/images/${item?.checked ? "checked.svg" : "unchecked.svg"}`}
        alt="checked-item"
      />
      <div className="list-card-text-container">
        <span className="list-card-title">{item.name}</span>
        <span className="list-card-subtitle">{item.quantity} unidade</span>
      </div>
      <img src="/images/arrow.svg" alt="arrow-icon" className="arrow-icon" />
    </div>
  );
};
