# MedicOS

Backend base de MedicOS construido con NestJS.

## Requisitos

- Node.js 18+
- PostgreSQL

## Configuración

1. Copia el archivo de ejemplo de variables de entorno:

```bash
cp .env.example .env
```

2. Ajusta `DATABASE_URL` y `PORT` según tu entorno.

## Scripts principales

```bash
npm install
npm run start:dev
```

## Endpoints técnicos

- `GET /health`
- `GET /docs` (Swagger)

## Prisma

El esquema inicial está configurado para PostgreSQL sin modelos. Para generar el cliente:

```bash
npm run prisma:generate
```
