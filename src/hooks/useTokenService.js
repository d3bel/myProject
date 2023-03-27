import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useTokenService = (itemServiceFactory) => {
    const { token }= useContext(AuthContext)

    const service = itemServiceFactory(token)

    return service
};
