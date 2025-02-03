import { useState } from "react";

function App() {
  const [product, setProduct] = useState("");
  const [List, setList] = useState(["Gallette", "Pollo", "Yogurt"]);

  const sumbit = (e) => {
    e.preventDefault();

    setList((current) => [...current, product]);

    setProduct("");
  };

  const handleDelete = (index) => {
    setList((current) =>
      current.filter((product, productIndex) => productIndex != index)
    );
  };

  return (
    <div className="container">
      <h1>Lista Spesa</h1>
      <ul>
        {List.map((product, index) => (
          <div className="list-container">
            <button onClick={() => handleDelete(index)}>🗑</button>
            <li key={index}>{product}</li>
          </div>
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
