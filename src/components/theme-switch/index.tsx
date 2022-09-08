import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

import { useAppThemeContext } from "../../contexts/themeProvider";
import { Container } from "./styles";

const Theme = () => {
  const { toggleTheme } = useAppThemeContext();
  return (
    <>
      <BsFillMoonFill style={{ color: "black" }} />
      <Container onClick={toggleTheme}>Go Dark</Container>
      {/* <span>
        {" "}
        Go light
        <BsFillSunFill />
      </span> */}
    </>
  );
};

export default Theme;
