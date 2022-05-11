import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Main = styled.main`
  margin: 20px 0px;
`;

const Layout = (props: LayoutProps) => {
  return (
    <React.Fragment>
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
