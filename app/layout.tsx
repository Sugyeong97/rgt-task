import "./globals.css";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className="w-screen h-screen">
      <body>
        <Header />
        <main className="w-screen max-w-screen-lg mx-auto h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default layout;
