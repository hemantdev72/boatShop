import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ data, id }) => {
  // console.log(data);
  const navigate = useNavigate();
  const imageUrl =
    data && data.img && data.img.data && data.img.data[0]
      ? data.img.data[0].attributes.url
      : "fallback-url";
  return (
    <div className="product-card" onClick={() => navigate("/product/" + id)}>
      <div className="thumbnail">
        <img src={"https://boat-shop.vercel.app" + imageUrl} />
      </div>
      <div className="prod-details">
        <span className="name">{data.title}</span>
        <span className="price">&#8377;{data.price}</span>
      </div>
    </div>
  );
};

export default Product;
