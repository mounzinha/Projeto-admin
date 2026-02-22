import React, { useEffect, useState } from "react";
import axios from "axios";
import UsuarioTable from "../components/UsuarioTable";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/usuarios")
      .then((response) => setUsuarios(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Usuários</h2>
      <UsuarioTable usuarios={usuarios} />
    </div>
  );
}

export default Usuarios;
