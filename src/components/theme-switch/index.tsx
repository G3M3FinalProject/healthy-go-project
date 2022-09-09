import React from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

import { Container } from "./styles";

const Toggle = ({ theme, toggleTheme }) => {
  return <Container onClick={toggleTheme}>Go Dark</Container>;
};

export default Toggle;
