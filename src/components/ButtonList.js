import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonNames = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Soccer",
    "Cricket",
    "Cooking",
    "Valentines",
  ];
  return (
    <div className="flex">
      {buttonNames.map((buttonName) => {
        return <Button name={buttonName} />;
      })}
    </div>
  );
};

export default ButtonList;
