declare module "*.graphql" {
  import { DocumentNode } from "graphql";

  const content: DocumentNode;

  export = content;
}
