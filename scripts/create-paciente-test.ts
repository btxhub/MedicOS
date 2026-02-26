import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.patient.create({
    data: {
      id: 'pac-0001',
      nombres: 'Paciente Prueba',
      apellidos: 'Test',
      email: 'paciente@test.com',
      telefono: '0000000000',
      activo: true,
      documentoIdentidad: '00000000',
      fechaNacimiento: new Date('1990-01-01'),
      doctor: {
        connect: { id: 'doctor-0001' }
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
  console.log('Paciente de prueba creado');
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });