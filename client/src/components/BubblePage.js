import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosWithAuth from '../axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  
  useEffect(() => {
    axiosWithAuth().get('http://localhost:5000/api/colors')
    .then(res => {
      setColorList(res.data);
    })
    .catch(err => {
      alert(err.response.data.message);
    })

  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
