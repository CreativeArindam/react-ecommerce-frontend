import React from "react";
import "./CategoryCard.css";
import { Link } from "react-router-dom";

function CategoryCard(props) {
  return (
    <Link to={"/product/" + props.id} className="categoryCard">
      <h3>{props.categoryName}</h3>
      <div className="categoryCard__image">
        <img src={window.location.origin + "/img/" + props.imgName} />
      </div>
      <span className="categoryCard__see-more">See more</span>
    </Link>
  );
}

export default CategoryCard;
