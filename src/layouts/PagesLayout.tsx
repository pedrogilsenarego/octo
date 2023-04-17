
import Footer from "../presentional/Footer";
import MenuBar from "../presentional/MenuBar";

interface Props {
  noMarginBottom?: boolean
  children: JSX.Element
}

export const PagesLayout = ({ noMarginBottom, children }: Props) => {


  return (
    <>

      <div style={{ marginBottom: noMarginBottom ? "0px" : "100px" }}>



        <MenuBar />
        {children}
        <Footer />
      </div>
    </>
  );
};