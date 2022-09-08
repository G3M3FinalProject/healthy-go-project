import DevA from "../../assets/devs/amandarodrigues.png";
import DevC from "../../assets/devs/carolpezzin.png";
import DevE from "../../assets/devs/eugeniobravin.png";
import DevG from "../../assets/devs/guilhermewursto.png";
import DevQ from "../../assets/devs/querenhope.png";
import footer from "../../assets/footerflag.png";
import GitHub from "../../assets/githubicon.png";
import Linkedin from "../../assets/linkedinicon.png";
import {
  Positioning,
  FramePosition,
  Frame,
  Portrait,
  Icons,
  Paragraph,
  FooterFlag,
  Image,
} from "./styles";

const Footer = () => {
  return (
    <Positioning>
      <div>
        <Paragraph>
          <p>Site desenvolvido por: </p>
        </Paragraph>
        <FramePosition>
          <Frame>
            <Portrait>
              <Image src={DevQ} alt="Developer Queren" />
            </Portrait>
            <p>Queren Hope</p>
            <Icons>
              <a
                target="_blank"
                href="https://github.com/QuerenHope"
                rel="noreferrer"
              >
                <img src={GitHub} alt="GitHub Icon" />
              </a>
              <img src={Linkedin} alt="Linkedin Icon" />
            </Icons>
          </Frame>
          <Frame>
            <Portrait>
              <Image src={DevA} alt="Developer Amanda" />
            </Portrait>
            <p>Amanda Rodrigues</p>
            <Icons>
              <a
                target="_blank"
                href="https://github.com/ahmandi"
                rel="noreferrer"
              >
                <img src={GitHub} alt="GitHub Icon" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/arsamanda/"
                rel="noreferrer"
              >
                <img src={Linkedin} alt="Linkedin Icon" />
              </a>
            </Icons>
          </Frame>
          <Frame>
            <Portrait>
              <Image src={DevC} alt="Developer Carol" />
            </Portrait>
            <p>Carol Pezzin</p>
            <Icons>
              <a
                target="_blank"
                href="https://github.com/CarolPezzin"
                rel="noreferrer"
              >
                <img src={GitHub} alt="GitHub Icon" />
              </a>
              <img src={Linkedin} alt="Linkedin Icon" />
            </Icons>
          </Frame>
          <Frame>
            <Portrait>
              <Image src={DevG} alt="Developer Guilherme" />
            </Portrait>
            <p>Guilherme Wursto</p>
            <Icons>
              <a
                target="_blank"
                href="https://github.com/guiwustro"
                rel="noreferrer"
              >
                <img src={GitHub} alt="GitHub Icon" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/guilhermewustro/"
                rel="noreferrer"
              >
                <img src={Linkedin} alt="Linkedin Icon" />
              </a>
            </Icons>
          </Frame>
          <Frame>
            <Portrait>
              <Image src={DevE} alt="Developer Eugenio" />
            </Portrait>
            <p>Eugenio Bravin</p>
            <Icons>
              <a
                target="_blank"
                href="https://github.com/Bravineugenio"
                rel="noreferrer"
              >
                <img src={GitHub} alt="GitHub Icon" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/eugeniobravin/"
                rel="noreferrer"
              >
                <img src={Linkedin} alt="Linkedin Icon" />
              </a>
            </Icons>
          </Frame>
        </FramePosition>
      </div>
      <FooterFlag src={footer} alt="Devs picture" />
    </Positioning>
  );
};

export default Footer;
