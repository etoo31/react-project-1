import React, { Component } from "react";
import CardAuthor from "./CardAuthor";
import CardHeader from "./CardHeader";
import CardImg from "./CardImg";
import CardPrice from "./CardPrice";
import CardRating from "./CardRating";

export default class Card extends Component {
  render() {
    /**
     * the card cosnsists of:
     * 1- Card image
     * 2- card header
     * 3- Card Author
     * 4- Card Rating
     * 5- Card Price
     *
     * And there is a div with card class conatin all of these.
     */
    return (
      <div className="card course w-100 h-100">
        <CardImg {...this.props}></CardImg>
        <CardHeader {...this.props}></CardHeader>
        <CardAuthor {...this.props}></CardAuthor>
        <CardRating {...this.props}></CardRating>
        <CardPrice {...this.props}></CardPrice>
      </div>
    );
  }
}
