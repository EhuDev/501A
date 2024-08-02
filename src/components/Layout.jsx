import React, { useState } from "react";
import Footer from "./partials/Footer";
import Navbar from "./partials/Navbar";

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div> {React.cloneElement(children, { darkMode })}</div>
      <Footer />
    </>
  );
};

export default Layout;
