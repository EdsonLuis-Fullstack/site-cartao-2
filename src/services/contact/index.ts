import { axiosInstance } from "@/lib/axios";

export class Contact {
    sendContact = async ({ name,surname,email,phone,city,howHelp,message }: { name: string,surname:string,email:string,phone:string,city:string,howHelp:string,message:string
}) => {
    try {
        const response = await axiosInstance.post("email/send", {
        "nome": `${name}`,
        "sobrenome": `${surname}`,
        "email": `${email}`,
        "telefone": `${phone}`,
        "cidade": `${city}`,
        "como_podemo_ajudar": `${howHelp}`,
        "mensagem": `${message}`
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching subcategories by name:", error);
        throw error;
    }
}
}