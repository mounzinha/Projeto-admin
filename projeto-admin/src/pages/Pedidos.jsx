import React, { useEffect, useState } from "react";
import axios from "axios";
import PedidoTable from "../components/PedidoTable";

function Pedidos() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/pedidos")
      .then((response) => setPedidos(response.data))
      .catch((error) => console.error(error));
  }, []);

  const atualizarStatus = (id, novoStatus) => {
    axios
      .put(`http://localhost:3000/pedidos/${id}`, { status: novoStatus })
      .then(() => {
        setPedidos(
          pedidos.map((p) => (p.id === id ? { ...p, status: novoStatus } : p)),
        );
      })
      .catch((error) => console.error(error));
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Pedidos</h2>
      <PedidoTable pedidos={pedidos} atualizarStatus={atualizarStatus} />
    </div>
  );
}

export default Pedidos;
