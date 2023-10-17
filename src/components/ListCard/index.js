import "./index.css";

export const ListCard = ({ item, onClick, onCheckItem }) => {
  return (
    <div className="list-card-container">
      <img
        className="checkbox"
        onClick={() => onCheckItem(item)}
        src={`/images/${item?.checked ? "checked.svg" : "unchecked.svg"}`}
        alt="checked"
      />
      <div className="list-card-text-container">
        <span className="list-card-title">{item?.name}</span>
        <span className="list-card-subtitle">{item?.quantity} Unidades </span>
      </div>
      <img
        onClick={() => onClick(item)}
        src="/images/arrow.svg"
        alt="arrow-icon"
        className="icon"
      />
    </div>
  );
};
