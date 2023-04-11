
import SideBar from "../presentional/SideBar";

interface Props {
  noMarginBottom?: boolean
  children: JSX.Element
}

export const MainLayout = ({ noMarginBottom, children }: Props) => {


  return (
    <>

      <div style={{ marginBottom: noMarginBottom ? "0px" : "100px" }}>



        <SideBar />
        {children}
      </div>
    </>
  );
};
