import { useEffect, useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { Colors } from "../../../../constants/pallete";

interface Props {
  thirdRow: string[];
  rgb: [number, number, number];
  gap: number;
  padding: number;
}

const Carousel = ({ thirdRow, rgb, gap, padding }: Props) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  console.log(slideIndex)
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleNextClick = (direction: number) => {
    if (slideIndex === 0 && direction === -1) return
    if (direction === 1 && slideIndex > thirdRow.length - 5) return;

    setSlideIndex((prevIndex) => (prevIndex + 1 * direction) % thirdRow.length);
  };
  const containerWidth = windowSize.width - 2 * (windowSize.width * padding);
  const childWidth = (containerWidth - gap * 3) / 4;
  const slideWidth = childWidth + gap;
  const slideWidthPercentage = (slideWidth / containerWidth) * 100;
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
          >
            {" "}
            <BiRightArrow
              style={{ position: "absolute", left: "9px", top: "7px" }}
              size='1.7rem'
              color={slideIndex !== thirdRow.length / 2 ? Colors.BLACKISH : "transparent"}
            />
          </div>
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
          >
            <BiLeftArrow
              style={{ position: "absolute", left: "4px", top: "7px" }}
              size='1.7rem'
              color={slideIndex !== 0 ? Colors.BLACKISH : "transparent"}
            />
          </div>
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
