import { useEffect } from "react";
import styles from "./Flashlight.module.css";

const Flashlight = () => {
  useEffect(() => {
    const mouseMoveHandler = (e) => {
      const { clientX, clientY } = e;

      document
        .getElementById("flashlight")
        .style.setProperty("--pos-x", clientX + "px");
      document
        .getElementById("flashlight")
        .style.setProperty("--pos-y", clientY + "px");
    };

    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <>
      <div
        id="flashlight"
        className={`${styles.flashlight} w-screen h-screen fixed pointer-events-none`}
      ></div>
    </>
  );
};

export default Flashlight;
