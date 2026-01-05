import React, { useState } from "react";
import Title from "./Title";
import NavigationMenuDemo from "./NavigationMenuDemo";
import Table from "./Table";

/**
 * High-level container responsible for coordinating
 * domain selection and rendering the corresponding roadmap.
 */
function Roadmap() {
  // Centralized domain state shared between the selector and the table
  const [domain, setDomain] = useState("");

  return (
    <div>
      <Title />
      <div className="text-center m-auto">
        <NavigationMenuDemo domain={domain} setDomain={setDomain} />
        <Table selectedDomain={domain} />
      </div>
    </div>
  );
}

export default Roadmap;
