import { ProductItemCarousel } from './product-item-carousel';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './shadcn/ui/carousel';

export const CarouselComponent = ({ mockProducts }: any) => {
  const itemsPerCarouselItem = 4;
  const groupProducts = () => {
    const groups = [];
    for (let i = 0; i < mockProducts.length; i += itemsPerCarouselItem) {
      groups.push(mockProducts.slice(i, i + itemsPerCarouselItem));
    }
    return groups;
  };

  const productGroups = groupProducts();

  return (
    <Carousel className="relative">
      <CarouselContent className="flex space-x-4">
        {productGroups.map((group, index) => (
          <CarouselItem key={index} className="w-full flex-shrink-0">
            <div className="grid grid-cols-4 gap-4">
              {group.map((product: any, idx: any) => (
                <ProductItemCarousel
                  key={idx}
                  name={product.name}
                  price={product.price}
                  images={product.images}
                  colors={product.colors}
                />
              ))}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute left-0 top-[40%] h-[62px] w-[62px] -translate-y-1/2 transform rounded-full border-none bg-transparent p-2 text-white shadow-none hover:bg-transparent">
        Previous
      </CarouselPrevious>
      <CarouselNext className="absolute right-0 top-[40%] h-[62px] w-[62px] -translate-y-1/2 transform rounded-full border-none bg-transparent p-2 text-white shadow-none hover:bg-transparent">
        Next
      </CarouselNext>
    </Carousel>
  );
};
