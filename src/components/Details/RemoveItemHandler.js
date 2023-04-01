import { useState } from "react";

export const RemoveItemHandler = () => {
  const [confirmation, setConfirmation] = useState(false);
  setConfirmation(true);
};
