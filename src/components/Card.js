import React, { Component } from "react";
import CardAuthor from "./CardAuthor";
import CardHeader from "./CardHeader";
import CardImg from "./CardImg";
import CardPrice from "./CardPrice";
import CardRating from "./CardRating";

export default class Card extends Component {
  render() {
    console.log(this.props.imageSrc);
    return (
      <div className="card course">
        <CardImg {...this.props}></CardImg>
        <CardHeader {...this.props}></CardHeader>
        <CardAuthor {...this.props}></CardAuthor>
        <CardRating {...this.props}></CardRating>
        <CardPrice {...this.props}></CardPrice>
      </div>
    );
  }
}
