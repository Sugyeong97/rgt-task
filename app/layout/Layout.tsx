import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="w-screen max-w-screen-lg mx-auto h-screen">
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
