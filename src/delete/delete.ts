import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.delete({
    where: {
      id: "763d372a-1c4f-4de7-adcd-c3cbb1fdb8e7",
    },
  });

  console.log(result);
}

main();
