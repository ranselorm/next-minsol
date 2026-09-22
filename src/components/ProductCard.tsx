import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProductCardProps {
  image: string;
  title: string;
  description?: string;
  description2?: string;
  index: number;
  featured?: boolean;
}

const ProductCard = ({ image, title, description, description2, index, featured = false }: ProductCardProps) => (
  <Dialog>
    <article className={`group h-full ${featured ? "grid overflow-hidden bg-accent md:grid-cols-2" : ""}`}>
      <div className="overflow-hidden">
        <img src={image} alt={title} className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${featured ? "h-80 md:h-full md:min-h-[470px]" : "h-64 md:h-80"}`} />
      </div>
      <div className={featured ? "flex flex-col justify-center p-7 md:p-12" : "border-b border-slate-900/15 py-6"}>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-main">0{index + 1}</p>
        <h3 className={`${featured ? "mt-5 text-3xl md:text-5xl" : "mt-4 text-2xl"} font-medium tracking-[-0.025em] text-blu`}>{title}</h3>
        {featured && description && <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">{description}</p>}
        <DialogTrigger asChild>
          <button type="button" className="mt-6 inline-flex items-center gap-2 border-b border-main pb-1 text-sm text-main transition-colors hover:text-blu">
            Product details <span aria-hidden="true">→</span>
          </button>
        </DialogTrigger>
      </div>
    </article>

    <DialogContent className="max-h-[calc(100vh-2rem)] max-w-4xl overflow-y-auto border-slate-900/10 p-0 text-blu sm:rounded-sm">
      <div className="grid md:grid-cols-2">
        <div className="min-h-64 overflow-hidden md:min-h-full">
          <img src={image} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="p-7 md:p-10">
          <DialogHeader className="border-b border-slate-900/10 pb-6 pr-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-main">Ground support product</p>
            <DialogTitle className="pt-3 text-3xl font-medium tracking-[-0.03em]">{title}</DialogTitle>
            <DialogDescription className="sr-only">Product details for {title}</DialogDescription>
          </DialogHeader>
          <div className="space-y-5 pt-6 text-base leading-7 text-slate-600">
            {description && <p>{description}</p>}
            {description2 && <p>{description2}</p>}
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

export default ProductCard;
