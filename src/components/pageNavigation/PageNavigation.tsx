import "./pageNavigation.css";
import { useEffect, useState } from "react";
import { PageSection } from "../pageSection/PageSection.tsx";

export function PageNavigation() {
  const [pageSections, setPageSections] = useState([]);
  useEffect(() => {
    setPageSections(Array.from(document.querySelectorAll(".page-section")));
  }, []);
  return (
    <nav>
      {pageSections.map((pageSection) => {
        return <div key={pageSection.id}></div>;
      })}
    </nav>
  );
}
