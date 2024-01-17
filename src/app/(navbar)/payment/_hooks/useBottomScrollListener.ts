import { useState, useEffect, useRef } from "react";

const useBottomScrollListener = (
  imageSrcDefault: string,
  imageSrcOnScroll: string,
) => {
  const [imageSrc, setImageSrc] = useState(imageSrcDefault);
  const [isDivHidden, setIsDivHidden] = useState(false);
  const bottomScrollRef = useRef(null);

  useEffect(() => {
    const currentRef = bottomScrollRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setImageSrc(imageSrcOnScroll);
          setIsDivHidden(true);
        }
      },
      { threshold: 0.5 },
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [imageSrcOnScroll]);

  return { bottomScrollRef, imageSrc, isDivHidden };
};

export default useBottomScrollListener;
