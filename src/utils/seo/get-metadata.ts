import type { Metadata } from "next";
import { GetMetaDataProps } from "./types";

export const getMetaData = ({
    description,
    image,
    title,
    url,
    type = "website",
}: GetMetaDataProps): Metadata => {
    const metaDataObject: Metadata = {
        title,
        description,
        openGraph: {
            type,
            images: [image],
            title,
            description,
            url: image,
        },
        alternates: {
            canonical: url,
        },
        metadataBase: new URL("http://localhost:3000"), // base URL env
        twitter: {
            title,
            description,
            images: [image],
        },
    };

    return metaDataObject;
};