import React, { useState } from "react";

const Matrix = () => {
  const initialColors = Array(9).fill("#fff"); // colors for each box of the
  const [colors, setColors] = useState(initialColors);
  const [orderofclick, setOrderofClick] = useState([]);

  const handleOnClick = (index) => {
    if (colors[index] === "#fff") {
      const newColors = [...colors];
      newColors[index] = "green";
      setColors(newColors);
      setOrderofClick([...orderofclick, index]);

      if (orderofclick.length === 8) {
        setTimeout(() => {
          ColorsToOrange([...orderofclick, index]);
        }, 500);
      }
    }
  };

  const ColorsToOrange = (order) => {
    const newColors = [...colors];
    let i = 0;

    const interval = setInterval(() => {
      if (i < order.length) {
        newColors[order[i]] = "orange";
        setColors([...newColors]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 500);
  };
  return (
    <div className="ml-12">
        {colors.map((color, index) => (
             <div
             className="w-24 h-24 m-0 border-black border inline-block"
             style={{ backgroundColor: color }}
             onClick={() => handleOnClick(index)}
           ><span className="block m-[38px]">{index+1}</span></div>
      ))}
    </div>
  );
};

export default Matrix;
