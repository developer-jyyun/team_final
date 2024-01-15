"use client";

import { useEffect } from "react";

const MSWProvider = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (process.env.NEXT_PUBLIC_MSW === "true") {
        require("@/mocks/browser");
      }
    }
  }, []);

  return null;
};

export default MSWProvider;
