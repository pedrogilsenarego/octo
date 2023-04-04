import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Colors } from "../../../../../constants/pallete";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Props {
  images: string[];
}

const Carrousell = ({ images }: Props) => {
  const [errorImage, setErrorImage] = useState(false);
  const [indexMini, setIndexMini] = useState(0);
  const [mainImage, setMainImage] = useState(images[0]);

  const mouseDownCoords = (e: any) => {
    // @ts-ignore
    window.checkForDrag = e.clientX;
  };
  const clickOrDrag = (e: any) => {
    const mouseUp = e.clientX;
    if (
      // @ts-ignore
      mouseUp < window.checkForDrag + 5 &&
      // @ts-ignore
      mouseUp > window.checkForDrag - 5
    ) {
    }
  };

  const handleOnImgError = () => {
    setErrorImage(true);
  };

  useEffect(() => {
    if (errorImage) setErrorImage(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainImage]);

  const handleGoLeft = () => {
    if (indexMini > 0) {
      setIndexMini(indexMini - 1);
      setMainImage(images[indexMini]);
    }
    return;
  };
  const handleGoRight = () => {
    if (indexMini < images.length - 1) {
      setIndexMini(indexMini + 1);
      setMainImage(images[indexMini]);
    }
    return;
  };

  return (
    <div style={{ position: "relative", width: "60%", height: "350px" }}>
      <Box
        display='flex'
        justifyContent='space-between'
        style={{
          width: "95%",
          position: "absolute",
          left: "2.5%",
          bottom: "42%",
          zIndex: 1000,
        }}
      >
        <Box
          style={{
            borderRadius: "50%",
            backgroundColor: "#ffffff66",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",


          }}
        >
          <FiChevronLeft
            size='3rem'
            color={Colors.BLACKIST_TRANSPARENT}
            style={{ cursor: "pointer", marginLeft: "-3px" }}
            onClick={handleGoLeft}
          />
        </Box>
        <Box
          style={{
            borderRadius: "50%",
            backgroundColor: "#ffffff66",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",


          }}
        >
          <FiChevronRight
            size='3em'
            color={Colors.BLACKIST_TRANSPARENT}
            style={{ cursor: "pointer", marginRight: "-3px" }}
            onClick={handleGoRight}
          />
        </Box>
      </Box>

      {!errorImage && (
        <CarouselProvider
          infinite
          naturalSlideHeight={45}
          naturalSlideWidth={100}
          totalSlides={images.length}
          currentSlide={indexMini}
          touchEnabled={true}
          dragEnabled={true}
        >
          <Slider
            onMouseDown={(e) => mouseDownCoords(e)}
            onMouseUp={(e) => clickOrDrag(e)}
          >
            {images.map((image, pos) => {
              return (
                <Slide key={pos} index={pos}>
                  <img
                    onError={handleOnImgError}
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      height: "350px",
                      cursor: "Pointer",
                    }}
                    src={image}
                    alt=''
                  />
                </Slide>
              );
            })}
          </Slider>
        </CarouselProvider>
      )}
    </div>
  );
};

export default Carrousell;
