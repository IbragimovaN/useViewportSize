import { useViewportSize } from "./hooks/useViewportSize";

export function Demo() {
  const { height, width } = useViewportSize();

  return (
    <>
      Width: {width}, height: {height}
    </>
  );
}
