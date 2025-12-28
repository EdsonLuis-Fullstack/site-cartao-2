import { axiosInstance } from "@/lib/axios";

type Banner = {
    id: number;
    image: string;
    imagemMobile: string;
};

const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

export class Banners {
    private static cache: { data: Banner[]; expiresAt: number } | null = null;

    findAll = async (): Promise<Banner[]> => {
        // return cached value if not expired
        if (Banners.cache && Date.now() < Banners.cache.expiresAt) {
            return Banners.cache.data;
        }

        try {
            const response = await axiosInstance.post("banner/list", {
                draw: 1,
                start: 0,
                length: 10,
                sortBy: "status",
                sortDirection: "ASC",
                nome: "",
                status: "S",
            });

            const responseFormatted: Banner[] = response.data.data.map((c: {
                cod: number;
                imagem: string;
                imagem_mobile: string;
            }) => ({
                id: c.cod,
                image: c.imagem,
                imagemMobile: c.imagem_mobile,
            }));

            Banners.cache = {
                data: responseFormatted,
                expiresAt: Date.now() + CACHE_TTL_MS,
            };

            return responseFormatted;
        } catch (error) {
            console.error("Error fetching banners:", error);
            // if fetch fails, return cached data if available (even if expired) as a fallback
            if (Banners.cache) return Banners.cache.data;
            return [];
        }
    };

    // optional helper to manually clear cache
    static clearCache() {
        Banners.cache = null;
    }
}