import { useAuthUserContext } from "../../contexts/authUserContext";
import { Container, Wrapper, OrderContainer, OrderInfo } from "./styles";

const UserRequestsItems = () => {
  const { user } = useAuthUserContext();
  return (
    <Container>
      <h2>Meus pedidos</h2>
      <Wrapper>
        {user?.requests?.map((request) => {
          return (
            <OrderContainer key={request.id}>
              <div>
                <OrderInfo>
                  <h4>Nº DO PEDIDO</h4>
                  <p className="short">{request.id.slice(4)}</p>
                </OrderInfo>
                <OrderInfo>
                  <h4>STATUS</h4>
                  <p>{request.status}</p>
                </OrderInfo>
              </div>
              <div>
                <OrderInfo>
                  <h4>DATA</h4>
                  <p>{request.date}</p>
                </OrderInfo>
                <OrderInfo>
                  <h4>PAGAMENTO</h4>
                  <p>{request.payament}</p>
                </OrderInfo>
              </div>
              <div className="totalGrid">
                <OrderInfo className="totalFlex">
                  <h4>TOTAL</h4>
                  <p>R$ {request.total}</p>
                </OrderInfo>
              </div>
            </OrderContainer>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default UserRequestsItems;
