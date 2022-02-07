import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.authors.create({
    data: {
      name: "Robert C. Martin",
      books: {
        create: {
          name: "Arquitetura Limpa - O guia do artesão para Estrutura e Design de Software",
        },
      },
    },
  });
}

main();
