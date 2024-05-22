import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(item);
  };
  return (
    <div className="card">
      <img
        className="card__image"
        onClick={handleCardClick}
        src={item.link}
        alt={item.name}
      />
      <h2 className="item__name">{item.name}</h2>
    </div>
  );
}

export default ItemCard;
