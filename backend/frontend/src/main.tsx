import React from 'react';
import ReactDOM from 'react-dom/client';
import { routes } from './core/routes';

function Router() {
  const path = window.location.pathname;
  const match = routes.find(r => r.path === path);

  if (!match) return <div>404</div>;

  const Component = match.component;
  return <Component />;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);