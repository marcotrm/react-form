import { useState } from "react";

function App() {
  const [product, setProduct] = useState("");
  const [List, setList] = useState(["Gallette", "Pollo", "Yogurt"]);

  const sumbit = (e) => {
    e.preventDefault();

    setList((current) => [...current, product]);

    setProduct("");
  };

  return (
    <div className="container">
      <h1>Lista Spesa</h1>
      <ul>
        {List.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
      <hr />
      <h2>Aggiungi Prodotto</h2>
      <form onSubmit={sumbit}>
        <input
          type="text"
          value={product}
          onChange={(e) => {
            setProduct(e.target.value);
          }}
        />
        <button type="submit">Invia</button>
      </form>
    </div>
  );
}
export default App;
