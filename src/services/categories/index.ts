import { axiosInstance } from "@/lib/axios";

export class Categories {
    findAll = async ({} = {}): Promise<{ id: number; name: string }[] | undefined> => {
        
        try {
            const response = await axiosInstance.post("categorias/list", {
                draw: 1,
                start: 0,
                length: 150,
                sortBy: null,
                sortDirection: "ASC",
                nome: "",
                status: "S"
            });

            const responseFormatted = response.data.data.map((c: { cod: number; nome: string }) => ({
                id: c.cod,
                name: c.nome
            }));

            return responseFormatted;
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };
}