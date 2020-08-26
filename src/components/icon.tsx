import React from "react";
import sprite from "../images/icons.svg";

type Props = {
  type: string,
  className?: string,
  onClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
}

const Icon: React.FC<Props> = (props) => {
  return (
    <svg className={props.className} onClick={props.onClick}>
      <use href={`${sprite}#icon-${props.type}`} />
    </svg>
  );
};

export default Icon;