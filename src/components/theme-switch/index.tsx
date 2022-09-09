import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

import { useAppThemeContext } from "../../contexts/themeProvider";
import { Container } from "./styles";

const Theme = () => {
  const { themeName, toggleTheme } = useAppThemeContext();

  return (
    <>
      {themeName === "light" ? (
        <>
          <BsFillMoonFill style={{ color: "black" }} />
          <Container onClick={toggleTheme}>Go Dark</Container>
        </>
      ) : (
        <>
          <BsFillSunFill />
          <Container onClick={toggleTheme}>Go light</Container>
        </>
      )}
    </>
  );
};

export default Theme;
