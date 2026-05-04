"use server";

export async function getProducts() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/data/products.json`,
    { next: { revalidate: 10 } },
  );

  if (!res.ok) {
    return { ok: false, message: "Failed to fetch products data" };
  }

  return res.json();
}
