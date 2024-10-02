import "./ItemCard.css";
import dislikeButton from "../../assets/like-button.svg";
import likeButton from "../../assets/like-button-State=Liked.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import React, { useContext } from "react";
function ItemCard({ item, onCardClick, onCardLike, isLoggedIn }) {
  const handleCardClick = () => {
    onCardClick(item);
  };
  const { currentUser } = useContext(CurrentUserContext);
  const isLiked = item.likes && item.likes.includes(currentUser._id);

  const isOwn = item.owner === currentUser._id;

  const itemLikeButtonClassName = `card__like-button ${
    isOwn ? "card__like-btn_visible" : "card__like-btn_hidden"
  }`;

  const handleLike = () => {
    onCardLike(item, isLiked);
  };
  return (
    <div className="card">
      <img
        className="card__image"
        onClick={handleCardClick}
        src={item.imageUrl}
        alt={item.name}
      />
      <div className="card__wrapper">
        <h2 className="item__name">{item.name}</h2>
        <img
          src={isLiked ? likeButton : dislikeButton}
          alt="like button"
          onClick={handleLike}
          className={itemLikeButtonClassName}
        />
      </div>
    </div>
  );
}

export default ItemCard;
