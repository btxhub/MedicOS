// ARCHIVO: frontend/src/App.tsx

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import {
  PublicidadListPage,
  PublicidadFormPage,
  PublicidadPagosPage,
} from "@/modules/publicidad/pages";

import {
  SistemaLogListPage,
  SistemaLogDetailPage,
} from "@/modules/sistema/pages";

function App() {
  return (
    <Router>
      <Routes>
        {/* DEFAULT */}
        <Route path="/" element={<Navigate to="/sistema/logs" />} />

        {/* PUBLICIDAD */}
        <Route path="/publicidad/listado" element={<PublicidadListPage />} />
        <Route path="/publicidad/crear" element={<PublicidadFormPage />} />
        <Route path="/publicidad/pagos" element={<PublicidadPagosPage />} />

        {/* SISTEMA LOG */}
        <Route path="/sistema/logs" element={<SistemaLogListPage />} />
        <Route path="/sistema/logs/:id" element={<SistemaLogDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;