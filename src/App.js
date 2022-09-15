import React from "react";

import Sidebar from "./components/shared/Sidebar";
import "./App.css";
import Footer from "./components/shared/Footer";
import Navigation from "./components/shared/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
