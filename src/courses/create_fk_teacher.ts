import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const resultado = await prisma.courses.create({
    data: {
      name: "Curso de ReactJS",
      duration: 300,
      description: "Curso de ReactJS",
      fk_id_teacher: "64ec7894-404b-4b7f-a192-1c774144a708",
    },
  });

  console.log(resultado);
}

main();
