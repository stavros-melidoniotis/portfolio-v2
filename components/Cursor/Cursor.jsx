import { useEffect, useState } from "react";
import styles from "./Cursor.module.css";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isCursorPointer, setIsCursorPointer] = useState(false);

  useEffect(() => {
    const mouseMoveHandler = (e) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
    };

    const mouseDownHandler = () => {
      setIsMouseDown(true);
    };

    const mouseUpHandler = () => {
      setIsMouseDown(false);
    };

    const mouseOverHandler = (e) => {
      const isLink = e.target.nodeName === "A";

      setIsCursorPointer(isLink);
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mousedown", mouseDownHandler);
    document.addEventListener("mouseup", mouseUpHandler);
    document.addEventListener("mouseover", mouseOverHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mousedown", mouseDownHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
      document.removeEventListener("mouseup", mouseOverHandler);
    };
  }, []);

  return (
    <>
      <div
        className={`${styles.ring} hidden xl:block`}
        style={{
          left: `${mousePosition.x - 18}px`,
          top: `${mousePosition.y - 18}px`,
          transform: isMouseDown || isCursorPointer ? "scale(1.5)" : "scale(1)",
        }}
      ></div>

      <div
        className={`${styles.dot} ${
          isCursorPointer ? "hidden" : " hidden xl:block"
        }`}
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      ></div>
    </>
  );
};

export default Cursor;
