import { axiosInstance } from "@/lib/axios";

export class Banners {
    findAll = async () => {
        try {
            const response = await axiosInstance.post("banner/list", {
                "draw": 1,
                "start": 0,
                "length": 10,
                "sortBy": "status",
                "sortDirection": "ASC",
                "nome": "",
                "status": "S"
            });

            const responseFormatted = response.data.data.map((c: {
                cod: number;
                imagem: string;
                imagem_mobile: string;
            }) => ({
                id: c.cod,
                image: c.imagem,
                imagemMobile: c.imagem_mobile,
            }));

            return responseFormatted;
        } catch (error) {
            console.error("Error fetching banners:", error);
            return [];
        }
    }
}