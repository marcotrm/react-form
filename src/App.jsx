import { useState } from "react";

function App() {
  const [List, setList] = useState(["Gallette", "Pollo", "Yogurt"]);

  return (
    <div className="container">
      <h1>Lista Spesa</h1>
      <ul>
        {List.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
