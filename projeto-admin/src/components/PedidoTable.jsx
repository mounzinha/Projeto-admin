import React from "react";

function PedidoTable({ pedidos, atualizarStatus }) {
  return (
    <table
      border="1"
      cellPadding="10"
      style={{ width: "100%", marginTop: "1rem" }}
    >
      <thead>
        <tr>
          <th>Trabalhador</th>
          <th>Materiais</th>
          <th>Data</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {pedidos.map((p) => (
          <tr key={p.id}>
            <td>{p.trabalhador}</td>
            <td>{p.materiais.join(", ")}</td>
            <td>{p.data}</td>
            <td>{p.status}</td>
            <td>
              <button onClick={() => atualizarStatus(p.id, "Encomendado")}>
                Encomendado
              </button>
              <button onClick={() => atualizarStatus(p.id, "Finalizado")}>
                Finalizado
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PedidoTable;
