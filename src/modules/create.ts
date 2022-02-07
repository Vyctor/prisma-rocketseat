import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.modules.create({
    data: {
      description: "Aprendendo firebase do zero",
      name: "Aprendendo Firebase",
      courses: {
        create: {
          course: {
            connect: {
              id: "a28ac64f-4536-4df9-a790-cd502b1b687d",
            },
          },
        },
      },
    },
  });
}

main();
