import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

// Context
import { PageSectionsContext } from "./contexts/PageSectionsContext.ts";

// Pages
import Home from "./pages/Home.tsx";

// Components
import { Navbar } from "./components/navbar/Navbar.tsx";
import { PageFooter } from "./components/pageFooter/PageFooter.tsx";

export function App() {
  const [pageSectionRefs, setPageSectionRefs] = useState(null);

  return (
    <PageSectionsContext.Provider value={{ pageSectionRefs, setPageSectionRefs }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
        <PageFooter />
      </BrowserRouter>
    </PageSectionsContext.Provider>
  );
}
