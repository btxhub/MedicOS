import { AuthService } from "./src/auth/auth.service";
import { PrismaService } from "./src/prisma/prisma.service";

async function main() {
  const prisma = new PrismaService();
  await prisma.$connect();
  const auth = new AuthService(prisma);

  try {
    const result = await auth.register("testuser@example.com", "Test1234!");
    console.log("Usuario creado:", result);
  } catch (e) {
    console.error("Error al registrar usuario:", e.message);
  } finally {
    await prisma.$disconnect();
  }
}

main();
