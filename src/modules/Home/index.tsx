
import Initial from "./Initial";
import "./index.css"
import About from "./About";
import Collections from "./Collections";

const Home = () => {
  return (
    <div className="homeContainer">
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
        <Initial />
      </div>
    </div>
  )
};

export default Home;
