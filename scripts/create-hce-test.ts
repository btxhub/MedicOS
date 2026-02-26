import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.hCE.create({
    data: {
      id: 'hce-test-001',
      doctorId: 'doctor-0001',
      patientId: 'pac-0001',
      motivoConsulta: 'Consulta de prueba',
      antecedentes: 'HCE de prueba',
      diagnostico: '',
      tratamiento: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
  console.log('HCE de prueba creado');
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });