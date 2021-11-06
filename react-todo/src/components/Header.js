import React from "react";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("Click");
  };
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button text="Add" color="green" onClick={onClick} />
    </header>
  );
};

export default Header;
