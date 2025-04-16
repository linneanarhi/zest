import { Outlet } from "react-router-dom";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
};

export default Layout;
