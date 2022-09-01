import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import WomanEating from "../../assets/womanaboutus.png";
import { Container, Paragraph } from "./styles";

export const AboutUs = () => {
  const [isMobile, setMobile] = useState(window.innerWidth < 426);

  const updateMedia = () => {
    setMobile(window.innerWidth < 426);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Container>
        {isMobile ? (
          <p>
            MAIS PRATICIDADE E CONFORTO PARA VOCÊ QUE POSSUI UMA NECESSIDADE
            ALIMENTAR
          </p>
        ) : (
          <Paragraph>
            <h1>Sobre nós</h1>
            <p>
              Alimentar-se bem é saber fazer boas escolhas e a missão da
              Healthygo é te ajudar nessa decisão tão importante!
            </p>
            <p>
              Em um mundo em que a diversidade de pratos nublam o poder de
              decisão, nós nos propomos a viabilizar seu almoço ou jantar da
              maneira mais saudável possível! Quer encontrar restaurantes
              Gluten-free, veganos, vegetarianos ou zero lactose?
            </p>
            <p>
              Vem para <strong>Healthygo</strong> que nós temos isso, e muito
              mais!!
            </p>
          </Paragraph>
        )}
        <img src={WomanEating} alt="Pessoa comendo" />
      </Container>
    </motion.div>
  );
};
