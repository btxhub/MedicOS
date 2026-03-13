import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

  console.log('--- DOCTORES ---')
  const doctores = await prisma.doctor.findMany()
  console.log(doctores)

  console.log('--- PACIENTES ---')
  const pacientes = await prisma.paciente.findMany()
  console.log(pacientes)

  console.log('--- CITAS ---')
  const citas = await prisma.cita.findMany()
  console.log(citas)

  console.log('--- HISTORIAS CLINICAS ---')
  const hce = await prisma.hCE.findMany()
  console.log(hce)

  console.log('--- RECETAS ---')
  const recetas = await prisma.receta.findMany()
  console.log(recetas)

}

main()
  .catch((e) => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
