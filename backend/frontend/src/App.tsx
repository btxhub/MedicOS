// ARCHIVO: src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PublicidadListPage, PublicidadFormPage, PublicidadPagosPage } from '@/modules/publicidad/pages';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/publicidad/listado" element={<PublicidadListPage />} />
        <Route path="/publicidad/crear" element={<PublicidadFormPage />} />
        <Route path="/publicidad/pagos" element={<PublicidadPagosPage />} />
      </Routes>
    </Router>
  );
};

export default App;