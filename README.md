<!-- PROJECT LOGO -->
<br />
<div align="center">

<h1 align="center">HealthyGo</h1>

  <p align="center">

  </p>
  <a href="https://healthygo.vercel.app/home/">
Link do projeto</a>
</div>

<!-- ABOUT THE PROJECT -->

## Sobre o projeto

Alimentar-se bem é saber fazer boas escolhas e a missão da Healthygo é te ajudar nessa decisão tão importante!
O projeto foi inspirado com o objetivo de facilitar a vida das pessoas com restrições alimentares: os com intolerância a lactose, glúten, vegetarianos e veganos.  
<br/>
A aplicação permite o usuário fazer um pedido de diversos restaurantes os quais se encaixam nessas restrições. Além de possuir filtros, para facilitar o usuário, podendo escolher quais restaurantes possuem essa categoria alimentícia.
<br/>

## Tecnologias utilizadas

O projeto foi realizado em React e TypeScript e as bibliotecas utilizadas foram:

- Axios;
- Styled components;
- Context API;
- React Router DOM;
- Hot-Toastify;
- Framer motion;
- React icons;
- Yup;
- Hook-form;
- react-google-auth;
- react-input-mask;

Além de consumirmos a API Geolocation/DB e uma API com os dados dos restaurantes e seus respectivos menus, no qual utilizamos um servidor "falso" para podermos fazer o consumo de dados, deixando nossa aplicação dinâmica.

<!-- ## Usabilidade -->
<!-- Colocar um GIF Aquii -->
<!-- <div align="center">
</div> -->

<!-- ROADMAP -->

## Features

- [x] Página inicial com os restaurantes da API a amostra, para o usuários deslogado. ;
- [x] Página para Login, onde o usuário pode logar com as credenciais do Google;
- [x] Página para Cadastro de usuário;
- [x] Não é possível adicionar produtos ao carrinho deslogado, sendo enviado feedbacks ao usuário quando tenta adicionar produtos ao carrinho deslogado, indicando o Login;
- [x] Usuário logado pode editar perfil, tendo suas informações salvas na API, além de adicionar endereços e remove-los;
- [x] Usuário tem a opção de pegar o endereço através da localização atual, os dados são retirados da API Geolocation/DB ;
- [x] Usuário logado pode adicionar produtos ao carrinho através dos restaurantes, podendo adicionar produtos de diversos restaurantes. O Frete é calculado numa taxa fixa por restaurante;
- [x] Usuário logado pode manipular seu carrinho (adicionando, diminuindo e removendo produtos) através do próprio carrinho;
- [x] Usuário logado pode finalizar seu pedido, redirecionando para a página de CheckOut, onde há campos para o registro de Cartão de Débito/Crédito, além do resumo do pedido do usuário;
- [x] Depois do preenchimento dos dados do cartão e seleção de um Endereço, e clicado no botão "Finalizar pedido", o usuário é notificado com uma mensagem de Sucesso e o carrinho é esvaziado;
- [x] Feedback ao usuário (notificações de erro) caso falte alguma informação a preencher no checkout;
- [x] O carrinho do usuário fica salvo na API , ou seja, enquanto o usuário, ou seja, o carrinho estará lá até remover os produtos ou o usuário finalizar o pedido;
- [x] Página com os pedidos do usuário;
- [x] Responsivo para telas entre 320px e 4k;
- [x] Dark-Mode;


