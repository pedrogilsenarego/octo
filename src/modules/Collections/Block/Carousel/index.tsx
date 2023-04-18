import { useState } from "react";

interface Props {
  thirdRow: string[];
  rgb: [number, number, number];
  gap: number;
  padding: number;
}

const Carousel = ({ thirdRow, rgb, gap, padding }: Props) => {
  const [slideIndex, setSlideIndex] = useState(0);
  console.log(thirdRow.length);
  const handleNextClick = (direction: number) => {
    if (direction === 1 && slideIndex > thirdRow.length - 5) return;

    setSlideIndex((prevIndex) => (prevIndex + 1 * direction) % thirdRow.length);
  };
  const containerWidth = window.innerWidth - 2 * (window.innerWidth * padding);
  const childWidth = (containerWidth - gap * 3) / 4;
  const slideWidth = childWidth + gap;
  const slideWidthPercentage = slideWidth / containerWidth * 100;
  return (
    <div
      style={{
        width: window.innerWidth - 2 * (window.innerWidth * padding),

        overflow: "hidden",
        position: "relative",
      }}
    >
      {thirdRow.length > 4 && (
        <>
          <div
            onClick={() => handleNextClick(1)}
            style={{
              zIndex: 1000,
              position: "absolute",
              right: "20px",
              cursor: "pointer",
              top: "50%",
              transform: "translateY(-50%)",
              bottom: 0,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: `rgb(${rgb[0]},${rgb[1]},${rgb[2]}`,
            }}
          ></div>
          <div
            onClick={() => handleNextClick(-1)}
            style={{
              zIndex: 1000,
              position: "absolute",
              left: "20px",
              cursor: "pointer",
              top: "50%",
              transform: "translateY(-50%)",
              bottom: 0,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: `rgb(${rgb[0]},${rgb[1]},${rgb[2]}`,
            }}
          ></div>
        </>
      )}


      <div
        style={{
          columnGap: "5px",
          position: "relative",
          display: "flex",
          justifyContent: "flex-start",
          transform: `translateX(-${slideIndex * slideWidthPercentage}%)`,

          transition: "transform 0.5s",
        }}
      >
        {thirdRow?.map((item: string, pos: number) => {
          return (
            <div
              draggable={false}
              key={pos}
              style={{
                flex: `0 0 ${childWidth}px`,
                overflow: "hidden",
                height: window.innerHeight * 0.55,
              }}
            >
              <img
                draggable={false}
                src={item}
                alt=''
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
