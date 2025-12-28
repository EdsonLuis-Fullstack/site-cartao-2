import { axiosInstance } from "@/lib/axios";

export class Cities {
  private _findAllCache?: {
    expiresAt: number;
    data: Array<{ id: number; name: string; uf: string }>;
  };
  private _findAllPromise?: Promise<
    Array<{ id: number; name: string; uf: string }>
  >;
  private _findAllPartnersCache?: {
    expiresAt: number;
    data: Array<{ id: number; name: string; uf: string }>;
  };
  private _findAllPartnersPromise?: Promise<
    Array<{ id: number; name: string; uf: string }>
  >;
  findAllPartnersCache = async ({} = {}) => {
    const now = Date.now();
    // Return cached if valid
    if (
      this._findAllPartnersCache &&
      this._findAllPartnersCache.expiresAt > now
    ) {
      return this._findAllPartnersCache.data;
    }
    // If a request is already in flight, wait for it
    if (this._findAllPartnersPromise) {
      return this._findAllPartnersPromise;
    }

    this._findAllPartnersPromise = (async () => {
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

        // Cache for 1 hour
        this._findAllPartnersCache = {
          data: responseFormatted,
          expiresAt: Date.now() + 60 * 60 * 1000,
        };

        return responseFormatted;
      } catch (error) {
        console.error("Error fetching partner cities:", error);
        // Fallback to stale cache if available
        if (this._findAllPartnersCache) return this._findAllPartnersCache.data;
        throw error;
      } finally {
        this._findAllPartnersPromise = undefined;
      }
    })();

    return this._findAllPartnersPromise;
  };
  findAll = async ({} = {}) => {
    const now = Date.now();
    // Return cached if valid
    if (this._findAllCache && this._findAllCache.expiresAt > now) {
      return this._findAllCache.data;
    }
    // If a request is already in flight, wait for it
    if (this._findAllPromise) {
      return this._findAllPromise;
    }

    this._findAllPromise = (async () => {
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

        // Cache for 1 hour
        this._findAllCache = {
          data: responseFormatted,
          expiresAt: Date.now() + 60 * 60 * 1000,
        };

        return responseFormatted;
      } catch (error) {
        console.error("Error fetching cities:", error);
        // Fallback to stale cache if available
        if (this._findAllCache) return this._findAllCache.data;
        throw error;
      } finally {
        this._findAllPromise = undefined;
      }
    })();

    return this._findAllPromise;
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
  findAllCache = async ({} = {}) => {
    const now = Date.now();
    // Return cached if valid
    if (this._findAllCache && this._findAllCache.expiresAt > now) {
      return this._findAllCache.data;
    }
    // If a request is already in flight, wait for it
    if (this._findAllPromise) {
      return this._findAllPromise;
    }

    this._findAllPromise = (async () => {
      try {
        const response = await axiosInstance.post("cidades/list", {
          draw: 1,
          start: 0,
          length: 140,
          sortBy: "cidade",
          sortDirection: "ASC",
          filterOnlyExist: null, //P - Apenas cidades com parceiros || U - Apenas unidades com parceiros || Null - Todas as cidades
        });

        const responseFormatted = response.data.data.map(
          (c: { idCidade: number; cidade: string; uf: string }) => ({
            id: c.idCidade,
            name: c.cidade,
            uf: c.uf,
          })
        );

        // Cache for 1 hour
        this._findAllCache = {
          data: responseFormatted,
          expiresAt: Date.now() + 60 * 60 * 1000,
        };

        return responseFormatted;
      } catch (error) {
        console.error("Error fetching cities:", error);
        // Fallback to stale cache if available
        if (this._findAllCache) return this._findAllCache.data;
        throw error;
      } finally {
        this._findAllPromise = undefined;
      }
    })();

    return this._findAllPromise;
  };
}
