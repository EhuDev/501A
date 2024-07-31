import Navbar from "./partials/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <div></div>
    </>
  );
};

export default Layout;
