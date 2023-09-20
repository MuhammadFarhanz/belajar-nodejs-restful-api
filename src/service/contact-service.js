import { prisma } from "../application/database";
import { createContactValidation } from "../validation/contact-validation";
import { validate } from "../validation/validation";

const create = async (user, request) => {
  const contact = validate(createContactValidation, request);
  contact.username = user.username;

  return prisma.contact.create({
    data: contact,
    select: {
      id: true,
      first_name: true,
      last_name: true,
      email: true,
      phone: true,
    },
  });
};

export default {
  create,
};
