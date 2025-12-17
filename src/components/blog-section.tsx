import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import highlight1 from "../../public/images/highlight-1.webp";
import highlight2 from "../../public/images/highlight-2.webp";
import highlight3 from "../../public/images/highlight-3.webp";

interface BlogPost {
  id: string;
  date: string;
  readTime: string;
  title: string;
  image: StaticImageData | string;
  alt: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    date: "Jul 10, 2025",
    readTime: "3 minutos de leitura",
    title: "Beneficiar lança nova conta digital para empreendedores",
    image: highlight1,
    alt: "Beneficiar conta digital para empreendedores",
  },
  {
    id: "2",
    date: "Jul 10, 2025",
    readTime: "2 minutos de leitura",
    title:
      "Agora é oficial: Beneficiar permite pagar contas sem comprometer o limite do cartão",
    image: highlight2,
    alt: "Beneficiar pagamento de contas",
  },
  {
    id: "3",
    date: "Jul 09, 2025",
    readTime: "3 minutos de leitura",
    title: "Banco Beneficiar atinge a marca de 1 milhão de clientes ativos",
    image: highlight3,
    alt: "Banco Beneficiar 1 milhão de clientes",
  },
];

interface BlogCardProps {
  post: BlogPost;
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="overflow-hidden w-full max-w-[398px] h-[755px] flex flex-col">
      {/* Image */}
      <div className="relative max-w-[398px] h-[350px] overflow-hidden rounded-2xl">
        <Image
          src={post.image}
          alt={post.alt}
          fill
          sizes="(max-width: 398px) 100vw, 398px"
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        {/* Meta information */}
        <div className="flex items-center gap-4 text-[#6e7070] text-sm mb-6 mt-8">
          <span className="capitalize">{post.date}</span>
          <div className="w-px h-2.5 bg-[#999999]" />
          <span className="capitalize">{post.readTime}</span>
        </div>

        {/* Title */}
        <h3 className="text-[#f87315] text-2xl font-semibold leading-[34px] mb-auto max-w-[320px]">
          {post.title}
        </h3>

        {/* Read more button */}
        <div className="mt-8 mb-6">
          <button className="border cursor-pointer border-[#f87315] text-[#f87315] px-6 py-3 rounded-full flex items-center gap-3 hover:bg-[#f87315] hover:text-white transition-colors group">
            <span className="text-base font-normal">Leia mais</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </article>
  );
}

interface BlogSectionProps {
  className?: string;
}

export default function BlogSection({ className }: BlogSectionProps) {
  return (
    <section
      className={cn("relative w-full bg-[#fdfbf8] py-20 px-6", className)}
    >
      <div className="max-w-[1281px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal text-black">
            Últimos destaques
          </h2>
        </div>

        {/* Blog posts grid */}
        <div className="flex flex-col items-center md:flex-row md:flex-wrap justify-center gap-8 max-w-[1281px] mx-auto">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
