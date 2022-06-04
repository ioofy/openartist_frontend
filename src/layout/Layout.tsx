import React, { ReactNode } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <React.Fragment>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
