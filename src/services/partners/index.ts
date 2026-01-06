import { axiosInstance } from "@/lib/axios";

export class Partners {
  findAll = async ({ start }: { start?: number }) => {
    try {
      const response = await axiosInstance.post("parceiros/list", {
        draw: 1,
        start: start || 0,
        length: 9,
        sortBy: "nome",
        sortDirection: "ASC",
        nome: null,
        status: null, //S para ativo, D para deletado, N para inativo
        nomeDaCidade: null,
        nomeDoEstado: null, //UF do estado
        categoria: null, //Id da categoria
        subcategoria: null, // id da subcategoria
        clinica_parceira: false, // true, false, null
      });

      return response.data;
    } catch (error) {
      console.error("Error fetching partners:", error);
    }
  };
  findByCity = async ({
    city,
    uf,
    start,
  }: {
    city: string;
    uf: string | null;
    start?: number;
  }) => {
    try {
      const cityFormatted = city.replace(/-/g, " ");

      const response = await axiosInstance.post("parceiros/list", {
        "draw": 1,
        "start": start || 0,
        "length": 50,
        "sortBy": "cidade",
        "sortDirection": "status",
        "nome": null,
        "status": "S", //S para ativo, D para deletado, N para inativo
        "nomeDaCidade": `${cityFormatted}`,
        "nomeDoEstado": uf ? uf : null,
        "cod_categoria": null, //Id da categoria
        "cod_subcategoria": null, // id da subcategoria
        "clinica_parceira": false, // true, false, null
      });

      const responseFormatted = response.data;
      return responseFormatted;
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };
  findByCityPartner = async ({
    city,
    uf,
  }: {
    city: string;
    uf: string | null;
  }) => {
    try {
      let cityFormatted = city.replace(/-/g, " ");

      const response = await axiosInstance.post("parceiros/list", {
        draw: 1,
        start: 0,
        length: 40,
        sortBy: "cidade",
        sortDirection: "ASC",
        nome: null,
        status: "S",
        nomeDaCidade: `${cityFormatted}`,
        nomeDoEstado: uf ? uf : null,
        categoria: null,
        subcategoria: null,
        clinica_parceira: true,
      });
      return response?.data?.data;
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };
  findByCategorySubCategory = async ({
    city,
    uf,
    subCategory,
    Category,
    start,
  }: {
    city: string | null;
    start?: number;
    uf: string | null;
    subCategory: number | null;
    Category: number;
  }) => {
    try {
      city ? city.replace(/-/g, " ") : null;
      const response = await axiosInstance.post("parceiros/list", {
        draw: 1,
        start: start || 0,
        length: 9,
        sortBy: "cidade", //  'cod',  'nome', 'cidade', 'estado'
        sortDirection: "ASC", //'ASC', 'DESC'
        nome: "",
        status: "S", //S para ativo, D para deletado, N para inativo
        nomeDaCidade: city ? city : null,
        nomeDoEstado: uf ? uf : null, //UF do estado
        cod_categoria: Category, //Id da categoria
        cod_subcategoria: subCategory, // id da subcategoria
        clinica_parceira: false,
      });

      return response?.data
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };
}
