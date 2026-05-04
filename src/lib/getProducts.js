"use server";

import products from "@/data/products.json";

export async function getProducts(id = null) {
  if (id) {
    return products.find((p) => p.id === Number(id));
  }

  return products;
}
