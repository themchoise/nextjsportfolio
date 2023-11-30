import { useState } from "react";

export const useBorderColor = () => {
  const [effect, setEffect] = useState("#0B6B95");

  const fnTime = (arg = ""):void => {
        if (arg.length > 0) {
      return setEffect(arg);
    }
    setTimeout(() => {
      setEffect("#BE9DE1");
    }, 3000);

     setTimeout(() => {
      setEffect("#39680B");
    }, 6000);
  };

  return {effect, fnTime};
};
