"use server";

import { api } from "@/instances/api";
import { unstable_noStore as noStore } from 'next/cache';

export async function handlePagination(
  start: number,
  city: any,
  uf: string | null,
  tipo: string
) {
  noStore()
  var data;

  switch (tipo) {
    case "partners":
      data = await api.partners.findAll({ start });
      break;
    case "cities":
      data = await api.partners.findByCity({
        city: city,
        uf: uf,
        start,
      });
      break;
  }
  return data;
}

export async function handleSubcategoryes(code: number) {
  noStore()
  try {
    const data = await api.subcategories.findByCode({ codCategoria: code });
    return data;
  } catch (error) {
    console.error("Error fetching subcategories:", error);
  }
}

export async function handlePartnersCategory(
  codeCategory: number,
  codeSubcategory: number | null,
  start?: number,
  city?: string | null,
  uf?: string | null
) {
  try {
    const data = await api.partners.findByCategorySubCategory({
      city: city || null,
      uf: uf || null,
      subCategory: codeSubcategory,
      Category: codeCategory,
      start: start || 0,
    });
    return data;
  } catch (error) {
    console.error("Error fetching partners by category:", error);
  }
}

export async function handleRequestsCity() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/cidades/list`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          draw: 1,
          start: 0,
          length: 120,
          sortBy: "cidade",
          sortDirection: "ASC",
          filterOnlyExist: "P",
        }),
        cache: "force-cache",
        next: { revalidate: 3600 },
      }
    );
    return await response.json()
  } catch (error) {
    console.error("Error fetching cities:", error);
  }
}
