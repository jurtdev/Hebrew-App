import React, { useState } from "react";

const FontSize = () => {
  const [fontSize, setFontSize] = useState(16);

  const handleChange = (event) => {
    setFontSize(event.target.value);
  };

  return (
    <div>
      <select value={fontSize} onChange={handleChange}>
        <option value={12}>12</option>
        <option value={14}>14</option>
        <option value={16}>16</option>
        <option value={18}>18</option>
        <option value={20}>20</option>
      </select>

      <div style={{
        fontFamily: "Arial, sans-serif",
        fontSize: `${fontSize}px`
      }}>
        Hello World!
      </div>
    </div>
  );
};

export default FontSize;
