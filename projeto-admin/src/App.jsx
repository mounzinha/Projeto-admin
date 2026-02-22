import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Pedidos from "./pages/Pedidos";
import Estoque from "./pages/Estoque";
import Usuarios from "./pages/Usuarios";

function App() {
  return (
    <Router>
      <nav style={{ padding: "1rem", background: "#1976d2", color: "white" }}>
        <Link to="/" style={{ margin: "1rem", color: "white" }}>
          Dashboard
        </Link>
        <Link to="/pedidos" style={{ margin: "1rem", color: "white" }}>
          Pedidos
        </Link>
        <Link to="/estoque" style={{ margin: "1rem", color: "white" }}>
          Estoque
        </Link>
        <Link to="/usuarios" style={{ margin: "1rem", color: "white" }}>
          Usuários
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/estoque" element={<Estoque />} />
        <Route path="/usuarios" element={<Usuarios />} />
      </Routes>
    </Router>
  );
}

export default App;
