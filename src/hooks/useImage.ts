import { useState } from "react";

const useImage = () => {
  const [ImagPath, setImagePath] = useState("/assets/imageLoadError.png");

  return { ImagPath, setImagePath };
};

export default useImage;
