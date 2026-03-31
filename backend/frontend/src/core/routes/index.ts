import { Login, Registro, Perfil, Configuracion } from "@/modules/usuario/pages";

export const routes = [
  { path: "/login", component: Login },
  { path: "/registro", component: Registro },
  { path: "/perfil", component: Perfil },
  { path: "/configuracion", component: Configuracion },
];