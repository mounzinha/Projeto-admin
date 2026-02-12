import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Paper,
} from "@mui/material";

function AdminDashboard() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/pedidos") // rota do backend
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
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Painel da Administração</Typography>
        </Toolbar>
      </AppBar>

      <Container style={{ marginTop: "2rem" }}>
        <Paper elevation={3}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Trabalhador</TableCell>
                <TableCell>Materiais</TableCell>
                <TableCell>Data</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pedidos.map((p) => (
                <TableRow key={p.id}>
                  <TableCell>{p.trabalhador}</TableCell>
                  <TableCell>{p.materiais.join(", ")}</TableCell>
                  <TableCell>{p.data}</TableCell>
                  <TableCell>{p.status}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => atualizarStatus(p.id, "Encomendado")}
                    >
                      Encomendado
                    </Button>
                    <Button
                      variant="outlined"
                      color="success"
                      onClick={() => atualizarStatus(p.id, "Finalizado")}
                      style={{ marginLeft: "0.5rem" }}
                    >
                      Finalizado
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Container>
    </>
  );
}

export default AdminDashboard;
