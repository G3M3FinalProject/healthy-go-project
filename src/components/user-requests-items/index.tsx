import { useAuthUserContext } from "../../contexts/authUserContext";
import {
  Container,
  Wrapper,
  OrderContainer,
  OrderInfo,
  TextEmptyRequest,
} from "./styles";

const UserRequestsItems = () => {
  const { user } = useAuthUserContext();
  return (
    <Container>
      <h2>Meus pedidos</h2>
      <Wrapper>
        {!user?.requests && (
          <TextEmptyRequest>
            Finalize alguma compra e volte aqui para verificar o histórico dos
            seus pedidos!
          </TextEmptyRequest>
        )}
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
