import React, { useState } from "react";
import axiosWithAuth from "../axiosWithAuth";

const initialColorFormValues = {
  colorName: "",
  hexCode: ""
};
export default function AddNewColour() {
  const [colorFormValues, setColorForm] = useState(initialColorFormValues);

  const onInputChange = e => {
    setColorForm({
      ...colorFormValues,
      [e.target.name]: e.target.value
    });
  };

  function onFormSubmit(e) {
    const newColor = {
      color: colorFormValues.colorName,
      code: { hex: colorFormValues.hexCode }
    };
    axiosWithAuth()
      .post("http://localhost:5000/api/colors", newColor)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }
  return (
    <div>
      <legend>Add Color</legend>
      <form className="newform" onSubmit={onFormSubmit}>
        <label htmlFor="colorname">
          Color Name
          <input
            id="Colorname"
            onChange={onInputChange}
            value={colorFormValues.colorName}
            name="colorName"
          />
        </label>

        <label htmlFor="hexcode">
          Hex Code
          <input
            id="hexcode"
            onChange={onInputChange}
            value={colorFormValues.hexCode}
            name="hexCode"
          />
        </label>
        <label>
            <input type="submit" />
        </label>
        
      </form>
    </div>
  );
}
