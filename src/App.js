import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Pricing from "./routes/Pricing";
import Training from "./routes/Training";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/training" element={<Training />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
