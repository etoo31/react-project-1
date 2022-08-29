import React from "react";

export default function CardPrice(props) {
    //if there is offer 
  if (props.offer) {
    return (
      <div className="d-flex">
        <span className="card-price">E£{props.offerPrice}</span>
        <span className="price-delete">E£{props.price}</span>
      </div>
    );
  } else {
    //if there is no offer
    return (
      <div className="d-flex">
        <span className="card-price">E£{props.price}</span>
      </div>
    );
  }
}
