import React from "react";

const Header = (props) => {
  return <div>{props.title}</div>;
};

Header.defaultProps = {
  title: "No title provided.",
};

export default Header;
