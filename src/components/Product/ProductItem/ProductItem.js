import React from "react";

const productItem = props => {
  return (
    <div>
      <ul>
        <li>
          <img src={props.serviceImg} />
          <h3>{props.serviceName}</h3>
          <p>
            Rs<span>{props.servicePrice}</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default productItem;
