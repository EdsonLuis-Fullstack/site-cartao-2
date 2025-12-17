import { axiosInstance } from "@/lib/axios";

export class Partner {
    findById = async ({ id }: { id: string }) => {
        try {
            const response = await axiosInstance.get(`parceiros/${id}`); 
            return response.data;
        } catch (error) {
            console.error("Error fetching partner:", error);
        }}
    findbyNameAndCity = async ({ name,city,uf }: { name: string,city:string,uf:string | null }) => {
        console.log("Fetching partner with name:", name, "city:", city, "uf:", uf);
        try {
            const response = await axiosInstance.post(`parceiros/list`,{
            "draw": 1,
            "start": 0,
            "length": 40,
            "sortBy": "nome",
            "sortDirection": "ASC",
            "nome": `${name}`,
            "status": "S", //S para ativo, D para deletado, N para inativo
            "nomeDaCidade": city, //Nome da cidade
            "nomeDoEstado": uf ? uf : null, //UF do estado
            "categoria": null, //Id da categoria
            "subcategoria": null, // id da subcategoria
            "clinica_parceira": null // true, false, null,
            }); 
            return response.data.data[0];
        } catch (error) {
            console.error("Error fetching partner:", error);
        }}
    
}