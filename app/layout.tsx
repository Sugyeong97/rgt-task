import "./globals.css";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

interface Props {}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className="w-screen h-screen">
      <body>
        <Header />
        <main className="w-full h-full max-w-screen-lg mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
