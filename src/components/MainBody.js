import React from "react";
import CategoryCard from "./CategoryCard";
import "./MainBody.css";

function MainBody() {
  return (
    <div className="mainbody">
      <CategoryCard
        categoryName="Toys"
        imgName="category__ornaments.jpg"
        id="4"
      />
      <CategoryCard
        categoryName="Ornaments"
        imgName="category__ornaments.jpg"
        id="2"
      />
      <CategoryCard categoryName="Toys" imgName="category__toys.png" id="1" />

      <CategoryCard categoryName="Toys" imgName="category__toys.png" id="3" />
      <CategoryCard
        categoryName="Toys"
        imgName="category__ornaments.jpg"
        id="4"
      />
      <CategoryCard categoryName="Toys" imgName="category__toys.png" id="4" />
      <CategoryCard
        categoryName="Toys"
        imgName="category__ornaments.jpg"
        id="4"
      />
    </div>
  );
}

export default MainBody;
