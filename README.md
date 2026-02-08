# MedicOS
Repositorio para Saas MedicOS

MedicOS — SaaS Médico

MedicOS es un SaaS médico profesional diseñado para médicos independientes y consultorios pequeños en Bolivia.
Este repositorio contiene todo el código del producto (backend, frontend e infraestructura) y se desarrolla de forma modular, controlada y asistida por IA.

Este repositorio no redefine producto, UX ni arquitectura.
Implementa estrictamente lo ya definido en el Chat Maestro.

Estado del proyecto

Fase de definición: completada

Fase actual: construcción

Estrategia: desarrollo secuencial por módulos

Asistencia: IA (Codex / Cursor / Copilot)

Stack tecnológico
Backend

Lenguaje: TypeScript

Framework: NestJS

Estilo: API-first (REST)

Autenticación: JWT + Refresh Token

Validaciones: class-validator

Documentación API: Swagger

Base de Datos

Motor: PostgreSQL

ORM: Prisma

Migraciones: Prisma Migrate

Frontend

Framework: React

Build tool: Vite

Estilos: TailwindCSS

Estado global: Context API + Hooks

Consumo API: Fetch / Axios

Infraestructura

Contenedores: Docker

Entorno inicial: local

Preparado para cloud (proveedor no definido)

Arquitectura general

Arquitectura modular

Separación estricta:

Controller

Service

Repository

Backend API-first

Base de datos relacional y normalizada

Preparado para:

Escalabilidad

Integraciones futuras

Testing automatizado

Multi-tenant (regla crítica)

El sistema es multi-tenant por médico.

Reglas obligatorias:

Todas las entidades persistentes incluyen doctor_id

No existen consultas globales entre médicos

El aislamiento se garantiza en:

Base de datos

Lógica de negocio

Autenticación y autorización

❌ Está prohibido crear entidades o consultas sin contexto de médico.

Estructura del repositorio (prevista)
MedicOS/
├── backend/
│   ├── src/
│   │   ├── modules/
│   │   └── common/
│   ├── prisma/
│   └── test/
├── frontend/
│   ├── src/
│   └── test/
├── docker/
├── docs/
└── README.md

Orden obligatorio de desarrollo

Los módulos se implementan estrictamente en este orden:

Usuarios, roles y autenticación

Pacientes

Historia Clínica Electrónica (HCE)

Agenda y citas

Pagos y facturación

Comunicaciones

Reportes y finanzas

❌ No se avanza a un módulo sin cerrar completamente el anterior.

Reglas de desarrollo (IA y humanos)

1 tarea = 1 cambio acotado

Commits pequeños y claros

No introducir deuda técnica consciente

No usar atajos ni soluciones temporales

No redefinir:

Funcionalidades

UX

Arquitectura

Reglas de negocio

Ante cualquier ambigüedad:

Detener implementación

Solicitar confirmación explícita

Testing

El código debe estar preparado para:

Testing unitario

Testing de integración

Pruebas de flujo completo:
paciente → cita → pago → factura → comunicación

Nota final

Este repositorio representa el producto MedicOS en construcción.
Las decisiones viven fuera del código; aquí solo se implementa.

## Backend NestJS (inicializado)

El backend se inicializa en la raíz del repositorio con NestJS, Prisma y Swagger.

### Requisitos

- Node.js 18+
- PostgreSQL local o remoto

### Configuración rápida

1. Instalar dependencias:

   ```bash
   npm install
   ```

2. Crear el archivo `.env` a partir del ejemplo:

   ```bash
   cp .env.example .env
   ```

3. Generar el cliente de Prisma:

   ```bash
   npm run prisma:generate
   ```

4. Iniciar el servidor en modo desarrollo:

   ```bash
   npm run start:dev
   ```

### Endpoints básicos

- Health check: `GET /health`
- Documentación Swagger: `GET /docs`
