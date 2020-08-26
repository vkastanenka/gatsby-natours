import React from "react";
import sprite from "../images/icons.svg";

const Icon = (props) => {
  return (
    <svg className={props.className} onClick={props.onClick}>
      <use href={`${sprite}#icon-${props.type}`} />
    </svg>
  );
};

export default Icon;