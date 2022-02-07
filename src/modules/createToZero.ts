import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      course: {
        create: {
          teacher: {
            connect: {
              id: "09a2818e-a052-4cc4-88a9-a01b3dae2b3e",
            },
          },
          duration: 200,
          name: "Curso de NodeJS",
          description: "Curso completo de NodeJS",
        },
      },
      module: {
        create: {
          description: "Curso completo de PrismaIO",
          name: "PrismaIO",
        },
      },
    },
  });
  console.log("result: ", result);
}

main();
