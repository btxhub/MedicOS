import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Crear Doctor con id fijo
  const doctor = await prisma.doctor.create({
    data: {
      id: 'doctor-0001',
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

  // Crear User con id fijo y asociado
  const passwordHash = await bcrypt.hash('Password123', 10);
  const user = await prisma.user.create({
    data: {
      id: 'user-0001',
      email: 'usuario@prueba.com',
      name: 'Usuario Prueba',
      password: passwordHash,
      isActive: true,
      doctorId: 'doctor-0001',
    },
  });

  // Asignar Role al User
  await prisma.userRole.create({
    data: {
      userId: 'user-0001',
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
