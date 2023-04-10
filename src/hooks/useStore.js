import { createStore } from "redux";
import { authReducer } from "../services/requester";

export const store = createStore(authReducer);
