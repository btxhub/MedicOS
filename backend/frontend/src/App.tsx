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

import {
  IntegracionesEmailPage,
  IntegracionesWhatsappPage,
  IntegracionesCalendarPage
} from "@/modules/integraciones/pages";

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

        {/* INTEGRACIONES */}
        <Route path="/integraciones/email" element={<IntegracionesEmailPage />} />
        <Route path="/integraciones/whatsapp" element={<IntegracionesWhatsappPage />} />
        <Route path="/integraciones/calendario" element={<IntegracionesCalendarPage />} />
      </Routes>
    </Router>
  );
}

export default App;