import Initial from "./Initial";
import About from "./About";
import Collections from "./Collections";
import Shop from "./Shop";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../slicer/types";
import ReactPageScroller from "react-page-scroller";
import { scrollTo } from "../../slicer/general/general.actions";
import Footer from "../../presentional/Footer";
import { useMediaQuery, useTheme } from "@mui/material";
import { Colors } from "../../constants/pallete";


const Home = () => {
  const dispatch = useDispatch();
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down("sm"))
  const scrollToL = useSelector<State, number>(
    (state) => state.general.scrollTo
  );

  const handlePageChange = (e: number) => {
    dispatch(scrollTo(e))
  }

  const renderLaptop = () => {
    return (
      // <ReactPageScroller

      //   animationTimer={800}
      //   customPageNumber={scrollToL}
      //   pageOnChange={(e) => handlePageChange(e)}
      // >
      <>
        <Initial />
        <Collections />
        <About />
        <Shop />
        <div style={{ display: "flex", alignItems: "end", backgroundColor: Colors.TAUPE }}>
          <Footer noMarginTop />
        </div>
      </>
      // </ReactPageScroller>)
    )
  }

  const renderMobile = () => {
    return (
      <>
        <Initial />
        <Collections />
        <About />
        <Shop />
        <Footer />
      </>)
  }

  return (
    mobile ? renderMobile() : renderLaptop()




  );
};

export default Home;
