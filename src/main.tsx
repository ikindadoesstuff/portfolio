import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router";

// Import Pages
import Landing from "./pages/Landing.tsx";

// Import Stylesheet
import "./global.css";

// Import Components
import { Navbar } from "./components/navbar/Navbar.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/developer" element={<Landing />}></Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
