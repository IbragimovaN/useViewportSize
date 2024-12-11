import { useState } from "react";
import { useWindowEvent } from "./useWindowEvent";
import { useThrottle } from "./useThrottle";

export const useViewportSize = () => {
  const [heightValue, setHeightValue] = useState(window.innerHeight);
  const [widthValue, setWidthValue] = useState(window.innerWidth);

  useWindowEvent("resize", (e) => {
    setHeightValue(e.target.innerHeight);
    setWidthValue(e.target.innerWidth);
  });

  const height = useThrottle(heightValue, 500);
  const width = useThrottle(widthValue, 500);

  return { width, height };
};
