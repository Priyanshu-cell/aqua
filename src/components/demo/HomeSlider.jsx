import { useState } from "react";
import styles from "./HomeSlider.module.css";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";

export const HomeSlider = ({ imageUrls }) => {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  }

  return (
    <>
      <div className={`${styles.sectionContainer} ${styles.herostyle}`}>
        {/* <div
          className={`${styles.shopButton}`}
          style={{
            display: "flex",
            position: "absolute", // Overlay on the slider
            top: "50%", // Vertical center
            left: "50%", // Horizontal center
            transform: "translate(-50%, -50%)", // Ensure perfect centering
            justifyContent: "center",
            alignItems: "center", // Vertically center the content
          }}
        >
          <button>Shop All</button>
        </div> */}

        <div className={`${styles.imgController}`}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            overflow: "hidden",
          }}
        >
          {imageUrls.map((url) => (
            <img
              key={url}
              src={url}
              className={`${styles.imgSliderImg}`}
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          ))}
        </div>

        <button
          onClick={showPrevImage}
          className={styles.imgSliderButton}
          style={{ left: 0 }}
        >
          <ArrowBigLeft />
        </button>
        <button
          onClick={showNextImage}
          className={styles.imgSliderButton}
          style={{ right: 0 }}
        >
          <ArrowBigRight />
        </button>
        <div className={styles.clickButtonsDiv}>
          {imageUrls.map((_, index) => (
            <button
              key={index}
              className={styles.imgSliderDotButtons}
              onClick={() => setImageIndex(index)}
            >
              {index === imageIndex ? <CircleDot /> : <Circle />}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
