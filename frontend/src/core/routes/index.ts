// ARCHIVO: src/core/routes/index.ts

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
  HceListPage,
  HceCreatePage,
  HceDetailPage
} from "@/modules/hce/pages";

export const routes = [
  { path: "/", component: HceListPage, roles: ['ADMIN','MEDICO'] },

  { path: "/login", component: Login, public: true },
  { path: "/registro", component: Registro, public: true },

  { path: "/perfil", component: Perfil, roles: ['ADMIN','MEDICO','ASISTENTE'] },
  { path: "/configuracion", component: Configuracion, roles: ['ADMIN'] },

  { path: "/pacientes", component: PacienteListPage, roles: ['ADMIN','MEDICO','ASISTENTE'] },
  { path: "/pacientes/nuevo", component: PacienteFormPage, roles: ['ADMIN','MEDICO'] },
  { path: "/pacientes/editar", component: PacienteFormPage, roles: ['ADMIN','MEDICO'] },
  { path: "/pacientes/detalle", component: PacienteDetailPage, roles: ['ADMIN','MEDICO','ASISTENTE'] },

  { path: "/agenda", component: AgendaCalendarPage, roles: ['ADMIN','MEDICO','ASISTENTE'] },
  { path: "/agenda/nuevo", component: AgendaCreatePage, roles: ['ADMIN','MEDICO','ASISTENTE'] },
  { path: "/agenda/editar", component: AgendaEditPage, roles: ['ADMIN','MEDICO','ASISTENTE'] },
  { path: "/agenda/detalle", component: AgendaDetailPage, roles: ['ADMIN','MEDICO','ASISTENTE'] },

  { path: "/hce", component: HceListPage, roles: ['ADMIN','MEDICO'] },
  { path: "/hce/nuevo", component: HceCreatePage, roles: ['ADMIN','MEDICO'] },
  { path: "/hce/:id", component: HceDetailPage, roles: ['ADMIN','MEDICO'] },

  { path: "/clinico/diagnostico", component: DiagnosticoPage, roles: ['ADMIN','MEDICO'] },
  { path: "/clinico/tratamiento", component: TratamientoPage, roles: ['ADMIN','MEDICO'] },
  { path: "/clinico/receta", component: RecetaPage, roles: ['ADMIN','MEDICO'] },
  { path: "/clinico/signos-vitales", component: SignosVitalesPage, roles: ['ADMIN','MEDICO'] },
  { path: "/clinico/evolucion", component: EvolucionPage, roles: ['ADMIN','MEDICO'] },
  { path: "/clinico/adjuntos", component: AdjuntosPage, roles: ['ADMIN','MEDICO'] }
];