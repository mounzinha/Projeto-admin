import React from "react";

function UsuarioTable({ usuarios }) {
  return (
    <table
      border="1"
      cellPadding="10"
      style={{ width: "100%", marginTop: "1rem" }}
    >
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map((u) => (
          <tr key={u.id}>
            <td>{u.nome}</td>
            <td>{u.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UsuarioTable;
