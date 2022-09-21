import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import WomanEating from "../../assets/womanaboutus.png";
import { Container, Paragraph } from "./styles";

export const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <img src={WomanEating} alt="Pessoa comendo" />
        <Paragraph>
          <h1>Sobre nós</h1>
          <p>
            Alimentar-se bem é saber fazer boas escolhas e a missão da Healthygo
            é te ajudar nessa decisão tão importante!
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
      </Container>
    </motion.div>
  );
};
