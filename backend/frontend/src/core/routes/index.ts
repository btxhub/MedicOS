import { Login, Registro, Perfil, Configuracion } from "@/modules/usuario/pages";
import { PacienteListPage, PacienteFormPage, PacienteDetailPage } from "@/modules/paciente/pages";

export const routes = [
  { path: "/login", component: Login },
  { path: "/registro", component: Registro },
  { path: "/perfil", component: Perfil },
  { path: "/configuracion", component: Configuracion },

  { path: "/pacientes", component: PacienteListPage },
  { path: "/pacientes/nuevo", component: PacienteFormPage },
  { path: "/pacientes/editar", component: PacienteFormPage },
  { path: "/pacientes/detalle", component: PacienteDetailPage }
];