// ONE shared Prisma connection for the whole app.
// (In development Next.js reloads files often; saving the connection on
//  "globalThis" stops it from opening a new connection on every reload.)
import "server-only";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
