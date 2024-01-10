import { RefObject, useEffect } from "react";

export default function useOnClickOutside(
  ref: RefObject<HTMLElement>,
  handler: VoidFunction,
) {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      console.log(ref);
      e.stopPropagation();
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler();
      }
    };

    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
}

/* import { RefObject, useEffect } from "react";

export default function useOnClickOutside(
  ref: RefObject<HTMLElement>,
  callback: () => void,
) {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      e.stopPropagation();
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}
 */
