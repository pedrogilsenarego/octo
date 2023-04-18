import Initial from "./Initial";
import About from "./About";
import Collections from "./Collections";
import Shop from "./Shop";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../slicer/types";
import ReactPageScroller from "react-page-scroller";
import { scrollTo } from "../../slicer/general/general.actions";


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

      animationTimer={400}
      customPageNumber={scrollToL}
      pageOnChange={(e) => handlePageChange(e)}
    >
      <Initial />

      <Collections />
      <About />
      <Shop />
    </ReactPageScroller>
  );
};

export default Home;
