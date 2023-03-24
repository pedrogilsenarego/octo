import MenuBar from "../presentional/MenuBar";



export const MainLayout = (props: any) => {


  return (
    <>
      <MenuBar />

      {props.children}
    </>
  );
};
