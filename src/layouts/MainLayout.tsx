import MenuBar from "../presentional/MenuBar";

interface Props {
  noMarginBottom?: boolean
  children: JSX.Element
}

export const MainLayout = ({ noMarginBottom, children }: Props) => {


  return (
    <>
      <MenuBar />
      <div style={{ marginBottom: noMarginBottom ? "0px" : "100px" }}>
        {children}
      </div>
    </>
  );
};
