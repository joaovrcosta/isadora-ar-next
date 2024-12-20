import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/shadcn/ui/select';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/shadcn/ui/tabs';
import Image from 'next/image';
import mapLocaleImg from '@/public/others/map-google-locale.jpg';
import { ScrollArea } from '@/components/shadcn/ui/scroll-area';

export default function LocalesPage() {
  return (
    <div className="container mx-auto mt-32 flex flex-col items-center justify-center">
      <Tabs defaultValue="experience" className="flex flex-col">
        <div className="mb-8 p-4 lg:p-0">
          <h1 className="text-[28px] font-bold">Tiendas Isadora Argentina</h1>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <TabsList className="mx-auto mr-8 flex w-full max-w-[357px] flex-col xl:mx-0">
            <ScrollArea className="h-[620px] w-[357px] border-t">
              <TabsTrigger value="experience" className="h-[152px] p-4">
                <div className="w-full text-start">
                  <h4 className="mb-4 text-xs font-bold tracking-[2px]">
                    ABASTO 2
                  </h4>
                  <p className="break-words text-xs tracking-[2px]">
                    Av. Corrientes 3247 -Local Nº N 01 L 055., Ciudad Autónoma
                    de Buenos Aires, Ciudad Autónoma de Buenos Aires
                    +541144197924
                  </p>
                </div>
              </TabsTrigger>

              <TabsTrigger value="education" className="h-[152px]">
                <div className="w-full text-start">
                  <h4 className="mb-4 text-xs font-bold tracking-[2px]">
                    ABASTO 2
                  </h4>
                  <p className="break-words text-xs tracking-[2px]">
                    Av. Corrientes 3247 -Local Nº N 01 L 055., Ciudad Autónoma
                    de Buenos Aires, Ciudad Autónoma de Buenos Aires
                    +541144197924
                  </p>
                </div>
              </TabsTrigger>

              <TabsTrigger value="skills" className="h-[152px]">
                <div className="w-full text-start">
                  <h4 className="mb-4 text-xs font-bold tracking-[2px]">
                    ABASTO 2
                  </h4>
                  <p className="break-words text-xs tracking-[2px]">
                    Av. Corrientes 3247 -Local Nº N 01 L 055., Ciudad Autónoma
                    de Buenos Aires, Ciudad Autónoma de Buenos Aires
                    +541144197924
                  </p>
                </div>
              </TabsTrigger>

              <TabsTrigger value="about" className="h-[152px]">
                <div className="w-full text-start">
                  <h4 className="mb-4 text-xs font-bold tracking-[2px]">
                    ABASTO 2
                  </h4>
                  <p className="break-words text-xs tracking-[2px]">
                    Av. Corrientes 3247 -Local Nº N 01 L 055., Ciudad Autónoma
                    de Buenos Aires, Ciudad Autónoma de Buenos Aires
                    +541144197924
                  </p>
                </div>
              </TabsTrigger>

              <TabsTrigger value="address5" className="h-[152px]">
                <div className="w-full text-start">
                  <h4 className="mb-4 text-xs font-bold tracking-[2px]">
                    ABASTO 2
                  </h4>
                  <p className="break-words text-xs tracking-[2px]">
                    Av. Corrientes 3247 -Local Nº N 01 L 055., Ciudad Autónoma
                    de Buenos Aires, Ciudad Autónoma de Buenos Aires
                    +541144197924
                  </p>
                </div>
              </TabsTrigger>
            </ScrollArea>
          </TabsList>

          <div className="ml-0 h-[500px] p-4">
            <TabsContent value="experience">
              <div className="flex items-center justify-start">
                <Image src={mapLocaleImg} alt="Mapa de locais" />
              </div>
            </TabsContent>
            <TabsContent value="education">
              <div className="flex items-center justify-start">
                <Image src={mapLocaleImg} alt="Mapa de locais" />
              </div>
            </TabsContent>
            <TabsContent value="skills">
              <div className="flex items-center justify-start">
                <Image src={mapLocaleImg} alt="Mapa de locais" />
              </div>
            </TabsContent>
            <TabsContent value="about">
              <div className="flex items-center justify-start">
                <Image src={mapLocaleImg} alt="Mapa de locais" />
              </div>
            </TabsContent>
            <TabsContent value="address5">
              <div className="flex items-center justify-start">
                <Image src={mapLocaleImg} alt="Mapa de locais" />
              </div>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  );
}
