import React from "react";
import "./Patron.scss";

export default function Patron(props) {
  return (
    <div>
      {props.patron.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`,
        };
        return (
          <div id={dot[2]} className={"patron"} key={i} style={style}></div>
        );
      })}
    </div>
  );
}
