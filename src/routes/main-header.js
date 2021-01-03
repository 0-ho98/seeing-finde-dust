import React from "react";
import "./main-header.css";
import { Link } from "react-router-dom";
function Mainheader() {
  return (
    <header className="main-header">
      <Link to="/">Fine Dust</Link>
    </header>
  );
}
export default Mainheader;
