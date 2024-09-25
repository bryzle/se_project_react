import "./ItemCard.css";
import likeButton from "../../assets/like-button.svg";
import dislikeButton from "../../assets/like-button-State=Liked.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import React, { useContext } from "react";
function ItemCard({ item, onCardClick, onCardLike }) {
  const handleCardClick = () => {
    onCardClick(item);
  };
  const {currentUser} = useContext(CurrentUserContext);
  const isLiked = item.likes && item.likes.includes(currentUser._id);

  const handleLike = () => {
    console.log(isLiked)
 
    onCardLike(item,isLiked);
  };
  return (
    <div className="card">
      <img
        className="card__image"
        onClick={handleCardClick}
        src={item.imageUrl}
        alt={item.name}
      />
      <h2 className="item__name">{item.name}</h2>
      <img
        src={isLiked ? likeButton : dislikeButton}
        alt="like button"
        onClick={handleLike}
        className="card__like-btn"
      />
    </div>
  );
}

export default ItemCard;
