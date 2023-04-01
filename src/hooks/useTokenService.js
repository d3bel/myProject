import { useAuthContext } from "../context/AuthContext";

export const useTokenService = (itemServiceFactory) => {
  const { token } = useAuthContext();

  const service = itemServiceFactory(token);

  return service;
};
