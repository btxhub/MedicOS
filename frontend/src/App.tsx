// ARCHIVO: /home/btx/MedicOS/frontend/src/App.tsx

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { routes } from "@/core/routes";

const getUser = () => {
  const raw = localStorage.getItem("token");
  if (!raw) return null;

  try {
    const payload = JSON.parse(atob(raw));
    return payload;
  } catch {
    return null;
  }
};

function App() {
  const usuario = getUser();

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((r) => {
          const Component = r.component;

          const isPublic = r.public === true;
          const roles = r.roles || [];

          if (isPublic) {
            return (
              <Route
                key={r.path}
                path={r.path}
                element={<Component />}
              />
            );
          }

          if (!usuario) {
            return (
              <Route
                key={r.path}
                path={r.path}
                element={<Navigate to="/login" />}
              />
            );
          }

          if (roles.length > 0) {
            const userRoles = usuario.roles || [];

            const autorizado = roles.some((rol: string) =>
              userRoles.includes(rol)
            );

            if (!autorizado) {
              return (
                <Route
                  key={r.path}
                  path={r.path}
                  element={<Navigate to="/login" />}
                />
              );
            }
          }

          return (
            <Route
              key={r.path}
              path={r.path}
              element={<Component />}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;