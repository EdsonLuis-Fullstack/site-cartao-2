import { queryClient } from "@/lib/react-query";
import ReactQueryProvider from "@/providers/react-query-provider";
import "@/styles/globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { Figtree, Livvic, Manrope, Poppins } from "next/font/google";

const livvic = Livvic({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
  variable: "--font-livvic",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-figtree",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`overflow-x-hidden ${figtree.variable} ${manrope.variable} ${livvic.variable} ${poppins.variable} font-sans`}
      >
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
