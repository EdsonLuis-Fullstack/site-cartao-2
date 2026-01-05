import { axiosInstance } from "@/lib/axios";

export class Cities {
  findAllPartnersCache = async ({}) => {

    try {
      const response = await axiosInstance.post("cidades/list", {
        draw: 1,
        start: 0,
        length: 120,
        sortBy: "cidade",
        sortDirection: "ASC",
        filterOnlyExist: "U", //P - Apenas cidades com parceiros || U - Apenas unidades com parceiros || Null - Todas as cidades
      });

      const responseFormatted = response.data.data.map(
        (c: { idCidade: number; cidade: string; uf: string }) => ({
          id: c.idCidade,
          name: c.cidade,
          uf: c.uf,
        })
      );
      return responseFormatted;
    } catch (error) {
      console.error("Error fetching partner cities:", error);
      throw error;
    }
  };
  findAll = async ({}) => {
    try {
      const response = await axiosInstance.post("cidades/list", {
        draw: 1,
        start: 0,
        length: 120,
        sortBy: "cidade",
        sortDirection: "ASC",
        filterOnlyExist: "P", //P - Apenas cidades com parceiros || U - Apenas unidades com parceiros || Null - Todas as cidades
      });

      const responseFormatted = response.data.data.map(
        (c: { idCidade: number; cidade: string; uf: string }) => ({
          id: c.idCidade,
          name: c.cidade,
          uf: c.uf,
        })
      );



      return responseFormatted;
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };
  findAllPartners = async ({}) => {
    try {
      const response = await axiosInstance.post("cidades/list", {
        draw: 1,
        start: 0,
        length: 120,
        sortBy: "cidade",
        sortDirection: "ASC",
        filterOnlyExist: "U", //P - Apenas cidades com parceiros || U - Apenas unidades com parceiros || Null - Todas as cidades
      });

      const responseFormatted = response.data.data.map(
        (c: { idCidade: number; cidade: string; uf: string }) => ({
          id: c.idCidade,
          name: c.cidade,
          uf: c.uf,
        })
      );

      return responseFormatted;
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };
  findAllCache = async ({}) => {
    try {
      const response = await axiosInstance.post("cidades/list", {
        draw: 1,
        start: 0,
        length: 300,
        sortBy: "cidade",
        sortDirection: "ASC",
        filterOnlyExist: "U", //P - Apenas cidades com parceiros || U - Apenas unidades com parceiros || Null - Todas as cidades
      });

      const responseFormatted = response.data.data.map(
        (c: { idCidade: number; cidade: string; uf: string }) => ({
          id: c.idCidade,
          name: c.cidade,
          uf: c.uf,
        })
      );

      return responseFormatted;
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };
}
