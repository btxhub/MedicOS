// ARCHIVO: frontend/src/core/routes/index.ts

import { Login, Registro, Perfil, Configuracion } from "@/modules/usuario/pages";
import { PacienteListPage, PacienteFormPage, PacienteDetailPage } from "@/modules/paciente/pages";
import {
  AgendaCalendarPage,
  AgendaCreatePage,
  AgendaEditPage,
  AgendaDetailPage
} from "@/modules/agenda/pages";

import {
  DiagnosticoPage,
  TratamientoPage,
  RecetaPage,
  SignosVitalesPage,
  EvolucionPage,
  AdjuntosPage
} from "@/modules/clinico/pages";

import {
  PublicidadListPage,
  PublicidadFormPage,
  PublicidadPagosPage
} from "@/modules/publicidad/pages";

export const routes = [
  { path: "/login", component: Login },
  { path: "/registro", component: Registro },
  { path: "/perfil", component: Perfil },
  { path: "/configuracion", component: Configuracion },

  { path: "/pacientes", component: PacienteListPage },
  { path: "/pacientes/nuevo", component: PacienteFormPage },
  { path: "/pacientes/editar", component: PacienteFormPage },
  { path: "/pacientes/detalle", component: PacienteDetailPage },

  { path: "/agenda", component: AgendaCalendarPage },
  { path: "/agenda/nuevo", component: AgendaCreatePage },
  { path: "/agenda/editar", component: AgendaEditPage },
  { path: "/agenda/detalle", component: AgendaDetailPage },

  // CLINICO
  { path: "/clinico/diagnostico", component: DiagnosticoPage },
  { path: "/clinico/tratamiento", component: TratamientoPage },
  { path: "/clinico/receta", component: RecetaPage },
  { path: "/clinico/signos-vitales", component: SignosVitalesPage },
  { path: "/clinico/evolucion", component: EvolucionPage },
  { path: "/clinico/adjuntos", component: AdjuntosPage },

  // PUBLICIDAD
  { path: "/publicidad/listado", component: PublicidadListPage },
  { path: "/publicidad/crear", component: PublicidadFormPage },
  { path: "/publicidad/pagos", component: PublicidadPagosPage }
];