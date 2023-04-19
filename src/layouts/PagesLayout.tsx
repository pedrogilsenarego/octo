
import Footer from "../presentional/Footer";
import MenuBar from "../presentional/MenuBar";
import UpScroller from "../presentional/UpScroller";

interface Props {
  noMarginBottom?: boolean
  children: JSX.Element
}

export const PagesLayout = ({ noMarginBottom, children }: Props) => {


  return (
    <>

      <div style={{ marginBottom: noMarginBottom ? "0px" : "100px", }}>


        <UpScroller />
        <MenuBar />
        {children}
        <Footer />
      </div>
    </>
  );
};
