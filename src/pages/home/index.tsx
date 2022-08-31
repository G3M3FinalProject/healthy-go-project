import { Containerdash, Img } from "./style";
import ImgInicial from "../../assets/eatinghealthyfood.gif";
import pessoasremovebgpreview from "../../assets/pessoasremovebgpreview.png";

export const Home = () => {
  return (<>
    <Containerdash>
     
        <div>
          <section>
            <p>
              Trazemos a praticidade para os usuários com restrição alimentar.
            </p>
            <p>
              Restaurantes que viabilizam a procura por pratos na plama da mão.
            </p>
          </section>
          <img src={ImgInicial} alt="Mulher comendo salada" />
        </div>
      
    </Containerdash>
    <Img src={pessoasremovebgpreview} alt="Amigos comendo juntos" />
    </>);
};
