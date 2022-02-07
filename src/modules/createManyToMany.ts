import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      fk_id_course: "a28ac64f-4536-4df9-a790-cd502b1b687d",
      fk_id_module: "082e8de5-ebd4-40fd-8a1e-574d3862b0d3",
    },
  });

  console.log(result);
}

main();
