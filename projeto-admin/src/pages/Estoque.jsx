import React, { useEffect, useState } from "react";
import axios from "axios";
import EstoqueTable from "../components/EstoqueTable";

function Estoque() {
  const [materiais, setMateriais] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/estoque")
      .then((response) => setMateriais(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container">
      <h2>Estoque</h2>
      <EstoqueTable materiais={materiais} />
    </div>
  );
}

export default Estoque;
