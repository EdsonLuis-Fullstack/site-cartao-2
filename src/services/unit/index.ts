import { axiosInstance } from "@/lib/axios";
export class Unit{
    findByCity = async ({ city }: { city: string }) => {
    const response = await axiosInstance.post("unidade/list",{
  "draw": 1,
  "start": 0,
  "length": 10,
  "sortBy": "descricao",
  "sortDirection": "",
  "cod": null,
  "cod_parceiro": null,
  "cod_cidade": null,
  "status": "S",
  "link_whats": "",
  "endereco": "",
  "nomeDaCidade": `${city}`,
  "nomeDoEstado": ""  //UF do estado
        })
    return response.data.data;
    }
    
}