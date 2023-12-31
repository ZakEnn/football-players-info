import Footer from "../footer/Footer";
import Header from "../header/Header";
import style from "./Layout.module.css";
import NavBar from "../navbar/NavBar";


function Layout({ children }) {
  return (
    <>
          <Header/>
          <NavBar/>
          <div className={style.container}>
            {children}
          </div>
          <Footer />
    </>
  );
}

export default Layout;