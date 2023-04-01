import { Navigate, Outlet, useParams } from "react-router-dom";

import { useItemContext } from "../../context/ItemContext";
import { useAuthContext } from "../../context/AuthContext";

export const OwnerGuard = ({ children }) => {
  const { itemId } = useParams();
  const { userId } = useAuthContext();
  const { getItem } = useItemContext();
  const currentItem = getItem(itemId);

  if (currentItem && currentItem._ownerId !== userId) {
    return <Navigate to={`/catalogue/${itemId}`} replace />;
  }
  return children ? children : <Outlet />;
};
