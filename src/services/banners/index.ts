import { axiosInstance } from "@/lib/axios";

type Banner = {
  id: number;
  image: string;
  imagemMobile: string;
};

export class Banners {
  findAll = async () => {
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

      const responseFormatted: Banner[] = response.data.data.map(
        (c: { cod: number; imagem: string; imagem_mobile: string }) => ({
          id: c.cod,
          image: c.imagem,
          imagemMobile: c.imagem_mobile,
        })
      );

      return responseFormatted;
    } catch (error) {
      console.error("Error fetching banners:", error);
    }
  };
      findAllUnit = async () => {
    
        try {
            const response = await axiosInstance.post("/banner-unidade/list", {
                draw: 1,
                start: 0,
                length: 50,
                sortBy: "status",
                sortDirection: "ASC",
                nome: "",
                status: "S",
            });

            const responseFormatted: Banner[] = response.data.data.map((c: {
                cod: number;
                image_path: string;
                image_path_mobile: string;
                descricao: string;
            }) => ({
                id: c.cod,
                image: c.image_path,
                imagemMobile: c.image_path_mobile,
                description: c.descricao,
            }));



            return responseFormatted;
        } catch (error) {
            console.error("Error fetching banners:", error);

        }
    };
}
