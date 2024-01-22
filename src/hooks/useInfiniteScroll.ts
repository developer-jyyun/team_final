import { useEffect, useRef } from "react";

const useInfiniteScroll = (
  fetchNextPage: () => void,
  isFetching: boolean,
  hasNextPage: boolean,
) => {
  const lastElementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isFetching && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.2 },
    );

    const currentRef = lastElementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [fetchNextPage, isFetching, hasNextPage]);

  return lastElementRef;
};

export default useInfiniteScroll;
