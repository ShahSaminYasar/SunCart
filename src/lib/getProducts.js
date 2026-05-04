"use server";

export async function getProducts(id = null) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/data/products.json`,
    { next: { revalidate: 10 } },
  );

  if (!res.ok) {
    return { ok: false, message: "Failed to fetch products data" };
  }

  const products = await res.json();

  if (id) {
    return products.find((p) => p?.id === Number(id));
  }

  return products;
}
