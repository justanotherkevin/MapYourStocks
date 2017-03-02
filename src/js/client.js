import React from "react";
import ReactDOM from "react-dom";

// import Layout; make sure the other end is exporting
import Layout from "./components/Layout";

const app = document.getElementById('app');
ReactDOM.render(<Layout />, app);
