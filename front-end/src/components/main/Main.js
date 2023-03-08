import "./main.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Search from "./search/Search";

export default function Main() {
  return (
    <div className="main">
      <Header />
      <Search />
      <Footer />
    </div>
  );
}
