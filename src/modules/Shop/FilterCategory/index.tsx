import { Typography, useTheme, useMediaQuery } from "@mui/material";
import { Product, categories } from "../../../constants/category";
import { fabrics } from "../../../constants/fabrics";
import Element from "../../../sharedComponents/Element";

import { Colors } from "../../../constants/pallete";
import { useSelector } from "react-redux";
import { State } from "../../../slicer/types";
import Carousel from "../../../components/Carousel";
import { useContext, useState } from "react";
import { ProductContext } from "../ProductContext";

const FilterCategory = () => {

  const Theme = useTheme()
  const { category, pattern, setCategory, setPattern } = useContext(ProductContext);
  const vertical = useSelector<State, boolean>((state) => state.general.positionVertical)
  const [mounted, setMounted] = useState(false);


  const newCategories = [...categories];
  const firstObjectCopy = { ...newCategories[0] };
  newCategories.unshift(firstObjectCopy);
  newCategories.push(firstObjectCopy);
  newCategories.push(firstObjectCopy);

  const newPatterns = [...fabrics];
  const firstObjectCopy2 = { ...newPatterns[0] };
  newPatterns.unshift(firstObjectCopy2);
  newPatterns.push(firstObjectCopy2);
  newPatterns.push(firstObjectCopy2);

  const handleSetCategory = (value: any) => {
    if (mounted) {

      setPattern(null)
      setCategory(value.props.item.title)
    }
    setMounted(true)
  }

  const handleSetPattern = (value: any) => {
    if (mounted) {

      setCategory(null)
      setPattern(value.props.item.title)
    }
    setMounted(true)
  }


  return (

    <div
      style={{
        display: "flex",
        width: "100%",

        flexDirection: vertical ? "column" : "row",
        columnGap: "20px",
        backgroundColor: Colors.BLACKISH,

        padding: vertical ? "10px" : "10px",
      }}
    >
      <div
        style={{
          width: vertical ? "100%" : "50%",
          display: "flex",

          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          fontFamily='Avalanche'
          fontSize={vertical ? "5vw" : '1.6vw'}
          color={Colors.PRETTY_CREAM}
        >
          Products
        </Typography>
        <div >
          <Carousel
            setValue={handleSetCategory}

            noArrows={vertical ? true : false}
            numberSlides={3}
            ghostEdges
            focusCentral
            outsideButtons
            width={vertical ? "60vw" : '26vw'}
            colorArrow={Colors.NEON_YELLOW_TRANSPARENT}
            colorBgArrow='#00000000'
            gap={10}
            images={newCategories.map((item, pos) => (
              <Element key={pos} item={item} selected={category === item.title} marginText={vertical ? "119%" : undefined} />
            ))}
          />
        </div>
      </div>
      <div
        style={{
          width: vertical ? "100%" : "50%",
          display: "flex",

          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          fontFamily='Avalanche'
          fontSize={vertical ? "5vw" : '1.6vw'}
          color={Colors.PRETTY_CREAM}
        >
          Patterns
        </Typography>
        <div >
          <Carousel
            setValue={handleSetPattern}
            // noSlide={vertical ? true : false}
            numberSlides={3}
            ghostEdges
            noArrows={vertical ? true : false}
            focusCentral
            outsideButtons
            width={vertical ? "60vw" : '26vw'}
            colorArrow={Colors.NEON_YELLOW_TRANSPARENT}
            colorBgArrow='#00000000'
            gap={10}
            images={newPatterns.map((item, pos) => (
              <Element key={pos} item={item} selected={pattern === item.title} marginText={vertical ? "126%" : undefined} />
            ))}


          />
        </div>
      </div>
    </div>

  );
};

export default FilterCategory;
