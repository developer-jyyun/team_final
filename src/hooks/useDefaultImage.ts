import { useState } from "react";

const useDefaultImage = () => {
  const [error, setError] = useState(false);
  const loadErrorImageUrl =
    "https://github.com/yanolja-finalproject/LETS_FE/assets/125979833/13c73347-220e-4062-a535-17bbed7943e6";

  const handleError = () => {
    setError(true);
  };

  return { error, handleError, loadErrorImageUrl };
};

export default useDefaultImage;
