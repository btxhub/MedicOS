import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const doctorId = "doctor-0001";

  // Crear doctor si no existe
  await prisma.doctor.upsert({
    where: { id: doctorId },
    update: {},
    create: { id: doctorId, name: "Doctor Prueba" },
  });

  // Crear paciente con campos correctos
  const patient = await prisma.patient.upsert({
    where: { id: "patient-0001" },
    update: {},
    create: {
      id: "patient-0001",
      doctorId,
      nombres: "Paciente",
      apellidos: "Prueba",
      documentoIdentidad: "12345678",
      fechaNacimiento: new Date("1990-01-01")
    },
  });

  // Crear HCE
  const hce = await prisma.hCE.upsert({
    where: { id: "TEST_HCE_ID" },
    update: {},
    create: { id: "TEST_HCE_ID", doctorId, patientId: patient.id, motivoConsulta: "Consulta de prueba" },
  });

  // Crear evolución
  const evolution = await prisma.evolution.create({
    data: { doctorId, hceId: hce.id, notaClinica: "Evolución de prueba con enfoque directo" },
  });

  console.log("Evolución creada correctamente:", evolution);
}

main()
  .catch(e => console.error(e))
  .finally(async () => { await prisma.$disconnect(); });