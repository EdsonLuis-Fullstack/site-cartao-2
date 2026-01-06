"use server";

import { api } from "@/instances/api";
import { unstable_noStore as noStore } from 'next/cache';

export async function handlePagination(
  start: number,
  city: any,
  uf: string | null,
  tipo: string
) {
  noStore(); // Desabilita cache para esta função
  
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

export async function handleSubcategoryes(
  code: number,
  city?: string | null,
  uf?: string | null
) {
  noStore();
  
  try {
    const data = await api.subcategories.findByCode({ codCategoria: code });
    return data;
  } catch (error) {
    console.error("Error fetching subcategories:", error);
    return [];
  }
}

export async function handlePartnersCategory(
  codeCategory: number,
  codeSubcategory: number | null,
  start?: number,
  city?: string | null,
  uf?: string | null
) {
  noStore();
  
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
    return { data: [], recordsFiltered: 0, recordsTotal: 0, draw: 1 };
  }
}