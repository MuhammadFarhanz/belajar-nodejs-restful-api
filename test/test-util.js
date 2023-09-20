import { prisma } from "../src/application/database";
import bcrypt from "bcrypt";

export const removeTestUser = async () => {
  await prisma.user.deleteMany({
    where: {
      username: "test",
    },
  });
};

export const createTestUser = async () => {
  await prisma.user.create({
    data: {
      username: "test",
      password: await bcrypt.hash("secret", 10),
      name: "test",
      token: "test",
    },
  });
};

export const getTestUser = async () => {
  return prisma.user.findUnique({
    where: {
      username: "test",
    },
  });
};

export const removeAllTestContact = async () => {
  await prisma.contact.deleteMany({
    where: {
      username: "test",
    },
  });
};
