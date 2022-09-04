import { useAuthUserContext } from "../../contexts/authUserContext";

const UserRequestsItems = () => {
  const { user } = useAuthUserContext();
  console.log(user);
  return (
    <div>
      <h2>Meus pedidos</h2>
      <div>
        {user?.requests?.map((request) => {
          return (
            <div key={request.id}>
              <div>
                <h4>Nº DO PEDIDO</h4>
                <p>{request.id}</p>
              </div>
              <div>
                <h4>STATUS</h4>
                <p>{request.status}</p>
              </div>
              <div>
                <h4>DATA</h4>
                <p>{request.date}</p>
              </div>
              <div>
                <h4>PAGAMENTO</h4>
                <p>{request.payament}</p>
              </div>
              <div>
                <h4>TOTAL</h4>
                <p>{request.total}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserRequestsItems;
