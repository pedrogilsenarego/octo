import React, { useEffect, useRef, useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { Colors } from "../../constants/pallete";
import usePreventScroll from "../../hooks/usePreventScrollY";
import { useDispatch, useSelector } from "react-redux";
import { setStopScroll } from "../../slicer/general/general.actions";
import { State } from "../../slicer/types";

interface Props {
  images: string[] | JSX.Element[];
  colorBgArrow?: string;
  colorArrow?: string;
  gap: number;
  padding?: string;
  noSlide?: boolean;
  width: string;
  outsideButtons?: boolean;
  numberSlides?: number;
  focusCentral?: boolean;
  ghostEdges?: boolean;
  noArrows?: boolean;
  setValue?: (item: any) => void;
  height?: string;
  objectFi?: "cover" | "contain";
}

const Carousel = ({
  images = [],
  colorBgArrow,
  gap,
  padding,
  noSlide,
  width,
  outsideButtons,
  numberSlides = 4,
  focusCentral,
  ghostEdges,
  colorArrow,
  noArrows,
  height,
  objectFi = "cover",
  setValue,
}: Props) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });
  const [startX, setStartX] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const [addSlide, setAddSlide] = useState(0);
  const [touch, setTouch] = useState(false)
  const dispatch = useDispatch()
  const vertical = useSelector<State, boolean>((state) => state.general.positionVertical)



  usePreventScroll(touch)
  useEffect(() => {
    dispatch(setStopScroll(touch))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [touch])

  useEffect(() => {
    if (setValue) setValue(images[slideIndex + 1]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideIndex]);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNextClick = (direction: number) => {
    if (slideIndex === 0 && direction === -1) return;
    if (
      direction === 1 &&
      slideIndex > images.length - (numberSlides + (ghostEdges ? 2 : 1))
    )
      return;
    setSlideIndex((prevIndex) => (prevIndex + 1 * direction) % images.length);
    setAddSlide(0);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    setTouch(true)
    setStartX(touch.clientX);
    setIsMoving(true);
  };

  const handleMouseStart: React.MouseEventHandler<HTMLDivElement> = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    setTouch(true);
    setStartX(event.clientX);
    setIsMoving(true);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!isMoving) return;

    const touch = event.touches[0];
    const diff = touch.clientX - startX;
    setAddSlide(diff);

    const threshold = windowSize.width / (focusCentral ? !vertical ? 80 : 10 : vertical ? 3 : 20);
    if (diff < -threshold) {
      handleNextClick(1);
      setIsMoving(false);
    } else if (diff > threshold) {
      handleNextClick(-1);
      setIsMoving(false);
    }
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isMoving) return;

    const touch = isTouchEvent(event) ? event.touches[0] : event;
    const diff = touch.clientX - startX;
    setAddSlide(diff);

    const threshold = windowSize.width / (focusCentral ? !vertical ? 200 : 10 : vertical ? 3 : 20);


    if (diff < -threshold) {
      handleNextClick(1);
      setIsMoving(false);
    } else if (diff > threshold) {
      handleNextClick(-1);
      setIsMoving(false);
    }
  };

  const isTouchEvent = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>): event is React.TouchEvent<HTMLDivElement> => {
    return (event as React.TouchEvent<HTMLDivElement>).touches !== undefined;
  };


  const handleTouchEnd = () => {
    setTouch(false)
    setIsMoving(false);
    setAddSlide(0);
  };

  const containerRef = useRef<HTMLDivElement>(null);

  const containerWidth = width;
  const paddingVW = padding;
  const containerWidthVW =
    parseInt(containerWidth, 10) - 2 * parseInt(paddingVW || "0vw", 10);
  const gapVW = (gap / windowSize.width) * 100;
  const childWidthVW =
    (containerWidthVW - gapVW * (numberSlides - 1)) / numberSlides;
  const slideWidthVW = childWidthVW + gapVW;
  const slideWidthPercentage = (slideWidthVW / containerWidthVW) * 100;

  return (
    <div
      ref={containerRef}
      onTouchStart={noSlide ? undefined : handleTouchStart}
      onTouchMove={noSlide ? undefined : handleTouchMove}
      onTouchEnd={noSlide ? undefined : handleTouchEnd}
      onMouseDown={noSlide ? undefined : handleMouseStart}
      onMouseMove={noSlide ? undefined : handleMouseMove}
      onMouseUp={noSlide ? undefined : handleTouchEnd}
      style={{
        width: `${containerWidthVW}vw`,
        position: "relative",
      }}
    >
      <div style={{ position: "relative" }}>
        {!noArrows && (
          <>
            <div
              onClick={() => handleNextClick(1)}
              style={{
                zIndex: 1000,
                position: "absolute",
                right: outsideButtons ? "-30px" : "20px",
                cursor: "pointer",
                top: "50%",
                transform: "translateY(-50%)",
                bottom: 0,
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: colorBgArrow || Colors.NEON_YELLOW,
              }}
            >
              {" "}
              <BiRightArrow
                style={{ position: "absolute", left: "9px", top: "7px" }}
                size='1.7rem'
                color={
                  slideIndex !==
                    images.length - (ghostEdges ? numberSlides + 1 : numberSlides)
                    ? colorArrow || Colors.BLACKISH
                    : "transparent"
                }
              />
            </div>
            <div
              onClick={() => handleNextClick(-1)}
              style={{
                zIndex: 1000,
                position: "absolute",
                left: outsideButtons ? "-30px" : "20px",
                cursor: "pointer",
                top: "50%",
                transform: "translateY(-50%)",
                bottom: 0,
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: colorBgArrow || Colors.NEON_YELLOW,
              }}
            >
              <BiLeftArrow
                style={{ position: "absolute", left: "4px", top: "7px" }}
                size='1.7rem'
                color={
                  slideIndex !== 0
                    ? colorArrow || Colors.BLACKISH
                    : "transparent"
                }
              />
            </div>
          </>
        )}
        <div style={{ overflow: "hidden", position: "relative", cursor: "pointer" }}>
          <div
            style={{
              columnGap: `${gap}px`,
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              transform: `translateX(calc(-${slideIndex * slideWidthPercentage
                }% + ${addSlide}px))`,
              transition: addSlide !== 0 ? "transform 0s" : "transform 0.5s",
            }}
          >
            {images.map((item: string | JSX.Element, pos: number) => {
              if (typeof item === "string") {
                return (
                  <div
                    draggable={false}
                    key={pos}
                    style={{
                      flex: `0 0 ${childWidthVW}vw`,
                      overflow: "hidden",
                      height: height || "auto",
                    }}
                  >
                    <img
                      draggable={false}
                      src={item}
                      alt=''
                      style={{
                        objectFit: objectFi,
                        height: "100%",
                        width: "100%",
                      }}
                    />
                  </div>
                );
              } else {
                return (
                  <div
                    onClick={() => {
                      if (setValue) setValue(item);
                      if (pos - slideIndex === 2) handleNextClick(1);
                      if (pos === slideIndex) handleNextClick(-1);
                    }}
                    draggable={false}
                    key={pos}
                    style={{
                      padding: "5px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flex: `0 0 ${childWidthVW}vw`,

                      transition: "all 0.4s ease-in-out",

                      opacity:
                        ghostEdges && (pos === 0 || pos === images.length - 2)
                          ? 0
                          : focusCentral &&
                            pos !== slideIndex + Math.floor(numberSlides / 2)
                            ? 0.4
                            : 1,
                      transform:
                        focusCentral &&
                          pos !== slideIndex + Math.floor(numberSlides / 2)
                          ? `scale(0.6)`
                          : "none",
                    }}
                  >
                    {item}
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
