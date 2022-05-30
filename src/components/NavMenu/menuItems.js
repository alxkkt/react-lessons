import { nanoid } from "nanoid";

export const menuItems = [
  {
    id: nanoid(),
    title: "home",
    to: "/",
  },
  {
    id: nanoid(),
    title: "products",
    to: "/products",
  },
  {
    id: nanoid(),
    title: "products from Partners",
    to: "/products-partners",
  },
  {
    id: nanoid(),
    title: "contacts",
    to: "/contacts",
  },
];
