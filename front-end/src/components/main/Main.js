import "./main.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Search from "./search/Search";
import Description from "./description/Description";
import React from "react";

export default function Main() {
  const [moveInfo, setMoveInfo] = React.useState(null);
  return (
    <div className="main">
      <Header />
      <Search setMoveInfo={setMoveInfo} />
      <Description moveInfo={moveInfo} />
      <Footer />
    </div>
  );
}
