import Initial from "./Initial";
import About from "./About";
import Collections from "./Collections";
import Shop from "./Shop";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../slicer/types";
import ReactPageScroller from "react-page-scroller";
import { scrollTo } from "../../slicer/general/general.actions";
import Footer from "../../presentional/Footer";
import { Colors } from "../../constants/pallete";


const Home = () => {
  const dispatch = useDispatch();

  const scrollToL = useSelector<State, number>(
    (state) => state.general.scrollTo
  );

  const handlePageChange = (e: number) => {
    dispatch(scrollTo(e))
  }

  return (

    <ReactPageScroller

      animationTimer={800}
      customPageNumber={scrollToL}
      pageOnChange={(e) => handlePageChange(e)}
    >
      <Initial />
      <Collections />
      <About />
      <Shop />
      <div style={{ backgroundColor: Colors.TAUPE, height: "100vh" }}>
        <Footer noMarginTop />
      </div>
    </ReactPageScroller>
  );
};

export default Home;
