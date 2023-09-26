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

export const removeAllTestContacts = async () => {
  await prisma.contact.deleteMany({
    where: {
      username: "test",
    },
  });
};

export const createTestContact = async () => {
  await prisma.contact.create({
    data: {
      username: "test",
      first_name: "test",
      last_name: "test",
      email: "test@gmail.com",
      phone: "098766532",
    },
  });
};

export const createManyTestContacts = async () => {
  for (let i = 0; i < 15; i++) {
    await prisma.contact.create({
      data: {
        username: `test`,
        first_name: `test ${i}`,
        last_name: `test ${i}`,
        email: `test${i}@gmail.com`,
        phone: `098766532${i}`,
      },
    });
  }
};

export const getTestContact = async () => {
  return prisma.contact.findFirst({
    where: {
      username: "test",
    },
    select: {
      id: true,
    },
  });
};

export const removeAllTestAddresses = async () => {
  await prisma.address.deleteMany({
    where: {
      contact: {
        username: "test",
      },
    },
  });
};

export const createTestAddress = async () => {
  const contact = await getTestContact();
  await prisma.address.create({
    data: {
      contact_id: contact.id,
      street: "street test",
      city: "city test",
      province: "province test",
      country: "indonesia",
      postal_code: "234234",
    },
  });
};

export const getTestAddress = async () => {
  return prisma.address.findFirst({
    where: {
      contact: {
        username: "test",
      },
    },
  });
};
