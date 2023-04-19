import Footer from "../presentional/Footer";
import MenuBar from "../presentional/MenuBar";
import UpScroller from "../presentional/UpScroller";
import "./pages.css"

interface Props {
  noMarginBottom?: boolean
  children: JSX.Element
}

export const PagesLayout = ({ noMarginBottom, children }: Props) => {


  return (
    <>

      <div className="main" style={{ marginBottom: noMarginBottom ? "0px" : "100px", }}>


        <UpScroller />
        <MenuBar />
        {children}
        <Footer />
      </div>
    </>
  );
};
