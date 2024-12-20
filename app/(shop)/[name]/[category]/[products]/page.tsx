import { mockProducts } from '@/app/_mocks/products';
import { ProductItem } from '@/components/product-item';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/shadcn/ui/select';

export default function ProductsPage() {
  return (
    <div>
      <div>
        {/* Filtro de Ordenação */}
        <div className="mb-10 hidden w-full items-center justify-end gap-2 md:flex">
          <span className="text-xs tracking-[1px]">ORDENAR POR:</span>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue
                placeholder="Mais relevantes"
                className="placeholder:tracking-[2px]"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Mais relevantes</SelectItem>
              <SelectItem value="price_low_high">
                Preço: menor para maior
              </SelectItem>
              <SelectItem value="price_high_low">
                Preço: maior para menor
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* Listagem de Produtos */}
      <div className="mt-5 grid grid-cols-2 items-center justify-center gap-3 lg:grid-cols-4">
        {mockProducts.map((product, index) => (
          <ProductItem
            key={index}
            name={product.name}
            price={product.price}
            images={product.images}
            colors={product.colors}
          />
        ))}
      </div>
    </div>
  );
}
