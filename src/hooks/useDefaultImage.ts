import { useState } from "react";

const useDefaultImage = () => {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  return { error, handleError };
};

export default useDefaultImage;
