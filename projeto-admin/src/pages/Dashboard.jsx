import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
);

function Dashboard() {
  const [pedidos, setPedidos] = useState([]);
  const [materiais, setMateriais] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/pedidos")
      .then((res) => setPedidos(res.data))
      .catch((err) => console.error(err));

    axios
      .get("http://localhost:3000/estoque")
      .then((res) => setMateriais(res.data))
      .catch((err) => console.error(err));

    axios
      .get("http://localhost:3000/usuarios")
      .then((res) => setUsuarios(res.data))
      .catch((err) => console.error(err));
  }, []);

  const pedidosPendentes = pedidos.filter(
    (p) => p.status !== "Finalizado",
  ).length;
  const pedidosFinalizados = pedidos.filter(
    (p) => p.status === "Finalizado",
  ).length;

  // Dados para gráfico de pedidos por status
  const pedidosData = {
    labels: ["Pendentes", "Finalizados"],
    datasets: [
      {
        label: "Pedidos",
        data: [pedidosPendentes, pedidosFinalizados],
        backgroundColor: ["#f57c00", "#2e7d32"],
      },
    ],
  };

  // Dados para gráfico de materiais em estoque
  const materiaisData = {
    labels: materiais.map((m) => m.nome),
    datasets: [
      {
        label: "Quantidade",
        data: materiais.map((m) => m.quantidade),
        backgroundColor: "#1976d2",
      },
    ],
  };

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <p>Visão geral do sistema</p>

      {/* Cards de resumo */}
      <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
        <div
          style={{
            flex: 1,
            background: "#1976d2",
            color: "white",
            padding: "1rem",
            borderRadius: "8px",
          }}
        >
          <h2>Total de Pedidos</h2>
          <p>{pedidos.length}</p>
        </div>
        <div
          style={{
            flex: 1,
            background: "#f57c00",
            color: "white",
            padding: "1rem",
            borderRadius: "8px",
          }}
        >
          <h2>Pedidos Pendentes</h2>
          <p>{pedidosPendentes}</p>
        </div>
        <div
          style={{
            flex: 1,
            background: "#2e7d32",
            color: "white",
            padding: "1rem",
            borderRadius: "8px",
          }}
        >
          <h2>Pedidos Finalizados</h2>
          <p>{pedidosFinalizados}</p>
        </div>
        <div
          style={{
            flex: 1,
            background: "#6a1b9a",
            color: "white",
            padding: "1rem",
            borderRadius: "8px",
          }}
        >
          <h2>Usuários</h2>
          <p>{usuarios.length}</p>
        </div>
      </div>

      {/* Gráfico de pedidos */}
      <div style={{ marginTop: "2rem" }}>
        <h2>Pedidos por Status</h2>
        <Pie data={pedidosData} />
      </div>

      {/* Gráfico de estoque */}
      <div style={{ marginTop: "2rem" }}>
        <h2>Estoque de Materiais</h2>
        <Bar data={materiaisData} />
      </div>
    </div>
  );
}

export default Dashboard;
