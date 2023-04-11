
import Footer from "../presentional/Footer";
import SideBar from "../presentional/SideBar";

interface Props {
  noMarginBottom?: boolean
  children: JSX.Element
}

export const PagesLayout = ({ noMarginBottom, children }: Props) => {


  return (
    <>

      <div style={{ marginBottom: noMarginBottom ? "0px" : "100px" }}>



        <SideBar />
        {children}
        <Footer />
      </div>
    </>
  );
};
