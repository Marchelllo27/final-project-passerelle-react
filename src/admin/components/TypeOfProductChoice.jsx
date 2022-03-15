import React from "react";

const TypeOfProductChoice = props => {
  return (
    <div style={{textAlign: "left"}}>
      <p>Type du produit</p>
      <input
        id="type"
        type="checkbox"
        name="type"
        value="vegetarian"
        checked={props.checked}
        onChange={props.onChange}
        style={{marginRight: "1rem"}}
      />
      <label htmlFor="type">Végétarienne</label>
    </div>
  );
};

export default TypeOfProductChoice;
