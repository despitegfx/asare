import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  originalPrice?: string;
}

export function ProductCard({ image, name, price, originalPrice }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 mb-3">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-sm mb-1">{name}</h3>
      <div className="flex items-center gap-2">
        <span className="text-sm">{price}</span>
        {originalPrice && (
          <span className="text-sm text-muted-foreground line-through">{originalPrice}</span>
        )}
      </div>
    </div>
  );
}