import { axiosInstance } from "@/lib/axios";

export class Categories {
    private static cache: { data: { id: number; name: string }[]; timestamp: number } | null = null;
    private static readonly CACHE_TTL = 60 * 60 * 1000; // 1 hora

    findAll = async ({} = {}): Promise<{ id: number; name: string }[] | undefined> => {
        const now = Date.now();
        if (Categories.cache && now - Categories.cache.timestamp < Categories.CACHE_TTL) {
            return Categories.cache.data;
        }

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

            Categories.cache = { data: responseFormatted, timestamp: Date.now() };
            return responseFormatted;
        } catch (error) {
            console.error("Error fetching categories:", error);
            if (Categories.cache) return Categories.cache.data;
        }
    };
}