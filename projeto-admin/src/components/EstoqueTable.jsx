import React from "react";

function EstoqueTable({ materiais }) {
  return (
    <table
      border="1"
      cellPadding="10"
      style={{ width: "100%", marginTop: "1rem" }}
    >
      <thead>
        <tr>
          <th>Material</th>
          <th>Quantidade</th>
        </tr>
      </thead>
      <tbody>
        {materiais.map((m) => (
          <tr key={m.id}>
            <td>{m.nome}</td>
            <td>{m.quantidade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EstoqueTable;
