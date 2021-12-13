import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setData] = useState(data);

  return (
    <main>
      <section className="container">
        <List people={people} />
      </section>
    </main>
  );
}

export default App;
