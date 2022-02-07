import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.books.create({
    data: {
      name: "Código Limpo",
      author_id: "2c88a975-cf10-4a4a-9dff-1aa2f7e4ecca",
    },
  });
}

main();
