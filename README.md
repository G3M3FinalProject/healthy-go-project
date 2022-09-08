<!-- PROJECT LOGO -->
<br />
<div align="center">

<h1 align="center">HealthyGo</h1>

  <p align="center">

  </p>
  <a href="https://kenzie-hub-guiwustro.vercel.app/">
Link do projeto</a>
</div>

<!-- ABOUT THE PROJECT -->

## Sobre o projeto

## Tecnologias utilizadas

O projeto foi realizado em React, e as bibliotecas utilizadas foram:

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

Além de consumirmos a API Geolocation e a API Fake para consumo dos dados, deixando nossa aplicação dinâmica.

<!-- USAGE EXAMPLES -->

## Usabilidade

<div align="center">
<img src="screenshots/kenzie-hub.gif" >
</div>

<!-- ROADMAP -->

## Features

- [x] Página inicial com os restaurantes da API a amostra, para o usuários deslogado. ;
- [x] Não é possível adicionar produtos ao carrinho deslogado, sendo enviado feedbacks ao usuário quando tenta adicionar produtos ao carrinho deslogado, indicando o Login;
- [x] Usuário logado pode editar perfil, tendo suas informações salvas na API, além de adicionar endereços e remove-los;
- [x] Usuário logado pode adicionar produtos ao carrinho através dos restaurantes, podendo adicionar produtos de diversos restaurantes. O Frete é calculado numa taxa fixa por restaurante;
- [x] Usuário logado pode manipular seu carrinho (adicionando, diminuindo e removendo produtos) através do próprio carrinho;
- [x] Usuário logado pode finalizar seu pedido, redirecionando para a página de CheckOut, onde há campos para o registro de Cartão de Débito/Crédito, além do resumo do pedido do usuário;
- [x] Depois do preenchimento dos dados do cartão e seleção de um Endereço, e clicado no botão "Finalizar pedido", o usuário é notificado com uma mensagem de Sucesso e o carrinho é esvaziado;
- [x] O carrinho do usuário fica salvo na API , ou seja, enquanto o usuário, ou seja, o carrinho estará lá até remover os produtos ou o usuário finalizar o pedido;
