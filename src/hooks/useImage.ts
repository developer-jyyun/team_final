import { useState } from "react";

const useImage = () => {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  return { error, handleError };
};

export default useImage;
