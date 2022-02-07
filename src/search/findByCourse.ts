import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.findMany({
    where: {
      id: "ff5fe744-948a-4265-932f-8e05f31d8eec",
    },
    include: {
      modules: true,
    },
  });

  console.log("result: ", JSON.stringify(result));
}

main();
