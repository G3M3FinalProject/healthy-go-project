import Loading from "../../components/loading";
import UserRequestsItems from "../../components/user-requests-items";
import { useAuthUserContext } from "../../contexts/authUserContext";

export const UserRequests = () => {
  const { isLoading } = useAuthUserContext();

  if (isLoading) return <Loading />;

  return (
    <div>
      <UserRequestsItems />
    </div>
  );
};
