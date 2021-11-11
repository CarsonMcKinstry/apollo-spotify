import { Resolvers } from "../../types";

export const baseResolvers: Resolvers = {
  Query: {
    health: () => true,
  },
};
