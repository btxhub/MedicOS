import { routes } from "@/core/routes";

function App() {
  const currentPath = window.location.pathname;

  const route = routes.find(r => r.path === currentPath);

  if (!route) {
    return <div>404</div>;
  }

  const Component = route.component;

  return <Component />;
}

export default App;