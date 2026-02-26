import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.evolution.create({
    data: {
      id: 'evo-0001',
      hceId: 'hce-test-001',
      doctorId: 'doctor-0001',
      notaClinica: 'Evolución de prueba inicial',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
  console.log('Evolución de prueba creada');
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });