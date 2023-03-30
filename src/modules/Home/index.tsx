import Initial from "./Initial";
import "./index.css"
import About from "./About";
import Collections from "./Collections";
import Shop from "./Shop";
import { useSelector } from "react-redux";
import { State } from "../../slicer/types";
import { useEffect, useState } from "react";

const Home = () => {
  const disableSnap = useSelector<State, boolean>(
    (state) => state.general.disableSnap
  );
  const [scrollSnapEnabled, setScrollSnapEnabled] = useState(false);

  useEffect(() => {
    setScrollSnapEnabled(disableSnap)
  }, [disableSnap])

  return (
    <div className={scrollSnapEnabled ? "" : "homeContainer"} >
      <div className="initial">
        <Initial />
      </div>
      <div className="initial">
        <About />
      </div>
      <div className="initial">
        <Collections />
      </div>
      <div className="initial">
        <Shop />
      </div>
    </div>
  )
};

export default Home;
