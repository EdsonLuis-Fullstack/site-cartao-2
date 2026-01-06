import type { Metadata } from "next";
import { GetMetaDataProps } from "./types";

export const getMetaData = ({
    description,
    image,
    title,
    url,
    type = "website",
}: GetMetaDataProps): Metadata => {
    // ✅ Use string instead of URL object
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    
    const metaDataObject: Metadata = {
        title,
        description,
        openGraph: {
            type,
            images: [image],
            title,
            description,
            url: `${baseUrl}${url}`, // Fixed: was using `image` instead of `url`
        },
        alternates: {
            canonical: `${baseUrl}${url}`,
        },
        metadataBase: baseUrl, // ✅ Changed from new URL() to string
        twitter: {
            title,
            description,
            images: [image],
        },
    };

    return metaDataObject;
};