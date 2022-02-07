import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const resultado = await prisma.courses.create({
    data: {
      name: "Curso de Elixir",
      duration: 500,
      description: "Curso de Elixir",
      teacher: {
        connect: {
          id: "1b78f1a5-8050-4905-92c9-5ffbfccdeaeb",
        },
      },
    },
  });

  console.log(resultado);
}

main();
