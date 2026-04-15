// ARCHIVO: frontend/src/App.tsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "@/core/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((r) => (
          <Route key={r.path} path={r.path} element={<r.component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;