import React from "react";

const DelButton = ({ handleDelete }) => {
  return (
    <div>
      <button onClick={handleDelete} className="bin-button">
        <img src="/icon1.svg" alt="" className="bin-top" />
        <img src="/icon2.svg" alt="" className="bin-bottom" />
        <img src="/icon3.svg" alt="" className="garbage" />
      </button>
    </div>
  );
};

export default DelButton;
