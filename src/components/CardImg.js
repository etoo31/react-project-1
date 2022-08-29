import React from "react";

//import all images
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
//array of imported images
const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));

export default function CardImg(props) {
  /**
   * it conatins only div with class course-img and image inside it 
   */
  return (
    <div className = "course-img">
    <img
      src={images[props.imageSrc]}
      alt={props.alt}
      className="img-fluid"
    />
    </div>
  );
}
