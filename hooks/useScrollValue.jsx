import { useState, useEffect } from "react";

export const useScrollValue = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const updateYPosition = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", updateYPosition);

    updateYPosition();

    return () => window.removeEventListener("scroll", updateYPosition);
  }, []);

  return { scrollY };
};
