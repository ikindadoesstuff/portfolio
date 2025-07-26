import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

// Context

// Pages
import Home from "./pages/Home/Home.tsx";

// Components
import { Navbar } from "./components/navbar/Navbar.tsx";
import { PageFooter } from "./components/pageFooter/PageFooter.tsx";

export function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
      <PageFooter />
    </BrowserRouter>
  );
}
