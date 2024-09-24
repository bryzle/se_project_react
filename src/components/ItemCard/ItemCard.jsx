import "./ItemCard.css";
import likeButton from "../../assets/like-button.svg";
import dislikeButton from "../../assets/like-button-State=Liked.svg";

function ItemCard({ item, onCardClick, onCardLike }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleLike=() => {
    onCardLike(item)
  }
  return (
    <div className="card">
      <img
        className="card__image"
        onClick={handleCardClick}
        src={item.imageUrl}
        alt={item.name}
      />
      <h2 className="item__name">{item.name}</h2>
      <img src={likeButton} alt="like button" onClick={handleLike} className="card__like-btn"/>
    </div>
  );
}

export default ItemCard;
