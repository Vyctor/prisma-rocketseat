import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.courses.create({
    data: {
      name: "Curso de React",
      duration: 200,
      description: "Curso excelente de React",
    },
  });
  await prisma.courses.create({
    data: {
      name: "Curso de Elixir",
      duration: 200,
      description: "Curso excelente de Elixir",
    },
  });
  await prisma.courses.create({
    data: {
      name: "Curso de React Native",
      duration: 200,
      description: "Curso excelente de React Native",
    },
  });
  await prisma.courses.create({
    data: {
      name: "Curso de Flutter",
      duration: 200,
      description: "Curso excelente de Flutter",
    },
  });
}

main();
