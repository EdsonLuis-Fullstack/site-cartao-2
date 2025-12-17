import { axiosInstance } from "@/lib/axios";

export class Subcategories {
    findAll = async ({ codCategoria }: {
        codCategoria: number;
    }) => {
        try {
            const response = await axiosInstance.post("subcategorias/list", {
                "draw": 1,
                "start": 0,
                "length": 10,
                "sortBy": null,
                "sortDirection": "ASC",
                "nome": "",
                "status": "S",
                "cod_categoria": codCategoria
            });

            return response.data.data;
        } catch (error) {
            console.error("Error fetching subcategories:", error);
            throw error;
        }
    }
    findByName = async ({ nome }: {
        nome: string;
    }) => {
        try {
            const response = await axiosInstance.post("subcategorias/list", {
                "draw": 1,
                "start": 0,
                "length": 40,
                "sortBy": "nome",
                "sortDirection": "ASC",
                "nome": nome,
                "status": "S"
            });
            return response.data.data;
    }catch (error) {
            console.error("Error fetching subcategories by name:", error);
            throw error;
        }
}
}