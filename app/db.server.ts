// import { PrismaClient } from "@prisma/client";

// declare global {
//   var prismaGlobal: PrismaClient;
// } 

// if (process.env.NODE_ENV !== "production") {
//   if (!global.prismaGlobal) {
//     global.prismaGlobal = new PrismaClient();
//   }
// }

// const prisma = global.prismaGlobal ?? new PrismaClient();

// export default prisma;

import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = (DATABASE_URL?: string) =>
  new PrismaClient({
    datasourceUrl: DATABASE_URL,
  }).$extends(withAccelerate());

export default prisma;