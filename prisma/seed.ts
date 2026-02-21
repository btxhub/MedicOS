import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Crear Doctor con id fijo
const doctor = await prisma.doctor.create({
  data: {
    id: "doctor-0001",
    name: 'Doctor Prueba',
  },
});

  // Crear Role
  const role = await prisma.role.create({
    data: {
      key: 'Doctor',
      name: 'Doctor',
    },
  });

// Crear usuario de prueba
const user = await prisma.user.create({
  data: {
    id: "user-test-id",
    doctorId: "doctor-0001",
    email: "testuser@medicos.com",
    name: "Test User",
    password: await bcrypt.hash("123456", 10),
    isActive: true,
  },
});

// Asignar Role al User
await prisma.userRole.create({
  data: {
    userId: user.id,
    roleId: role.id,
  },
});

  console.log('Datos iniciales genéricos creados con ids fijos');
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
