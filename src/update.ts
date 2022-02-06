import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.courses.update({
    where: {
      id: "ac18af4d-34ab-4f5b-b2f6-1e16704a94d0",
    },
    data: {
      description: "Curso excelente de React Native com Rafa do mal proibido",
    },
  });
}

main();
