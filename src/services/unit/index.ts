import { axiosInstance } from "@/lib/axios";
export class Unit{
    findByCity = async ({ city }: { city: string }) => {
    const response = await axiosInstance.post("unidade/get-by-city",{
  "draw": 1,
  "start": 0,
  "length": 100,
  "nomeDaCidade": `${city}`,
        })
    return response.data;
    }
    
}