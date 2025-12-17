import { axiosInstance } from "@/lib/axios";

export class Partners {
    findAll = async ({ }) => {
        try {

            const response = await axiosInstance.post("parceiros/list", {
                "draw": 1,
                "start": 0,
                "length": 10,
                "sortBy": "nome",
                "sortDirection": "ASC",
                "nome": null,
                "status": null, //S para ativo, D para deletado, N para inativo
                "nomeDaCidade": null,
                "nomeDoEstado": null, //UF do estado
                "categoria": null, //Id da categoria
                "subcategoria": null, // id da subcategoria
                "clinica_parceira": null // true, false, null
            }
            );

            return response.data;
        } catch (error) {
            console.error("Error fetching partners:", error);
        }
    }
            findByCity = async ({city, uf,partner}:{city: string,uf:string | null}) => {
            try {

            const cityFormatted = city.replace(/-/g, " ");
            const response = await axiosInstance.post("parceiros/list", {
                 "draw": 1,
                "start": 0,
                "length": 40,
                "sortBy": "nome",
                "sortDirection": "ASC",
                "nome": null,
                "status": null, //S para ativo, D para deletado, N para inativo
                "nomeDaCidade": `${cityFormatted}`,
                "nomeDoEstado": uf ? uf : null, 
                "categoria": null, //Id da categoria
                "subcategoria": null, // id da subcategoria
                "clinica_parceira": false // true, false, null
            });

            const responseFormatted = response.data
            return responseFormatted;
        } catch (error) {
            console.error("Error fetching cities:", error);
        }
    }
        findByCityPartner = async ({city,uf}:{city: string,uf:string | null}) => {
            try {
                let cityFormatted = city.replace(/-/g, " ");

                
                const response = await axiosInstance.post("parceiros/list", {
                    "draw": 1,
                    "start": 0,
                    "length": 40,
                    "sortBy": "cidade",
                    "sortDirection": "ASC",
                    "nome": null,
                    "status": "S",
                    "nomeDaCidade": `${cityFormatted}`,
                    "nomeDoEstado": uf ? uf : null,
                    "categoria": null,
                    "subcategoria": null,
                    "clinica_parceira": true
                });

                return response?.data?.data;
            } catch (error) {
                console.error("Error fetching cities:", error);
            }
        }

}