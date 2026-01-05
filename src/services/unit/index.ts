import { axiosInstance } from "@/lib/axios";
export class Unit {
  findByCity = async ({ city }: { city: string }) => {
    city = city.replace(/-/g, " ");
    const response = await axiosInstance.post("unidade/get-by-city", {
      "nomeDaCidade": `${city}`,
    });
    return response.data;
  };
}
