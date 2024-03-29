'use client';

import { ChevronLeftIcon, MapPinIcon, MenuIcon } from 'lucide-react';
import { Barbershop } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { Button } from '@/app/_components/ui/button';
import Image from 'next/image';
import { Sheet, SheetContent, SheetTrigger } from '@/app/_components/ui/sheet';
import SideMenu from '@/app/_components/side-menu';

interface BarbershopInfoProps {
  barbershop: Barbershop;
}

const BarbershopInfo = ({ barbershop }: BarbershopInfoProps) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.replace('/');
  };

  return (
    <div>
      <div className="h-[250px] w-full relative">
        <Button
          size="icon"
          variant="outline"
          className="absolute z-50 top-4 left-4"
          onClick={handleBackClick}
        >
          <ChevronLeftIcon />
        </Button>

        <Image
          src={barbershop.imageUrl}
          fill
          alt={barbershop.name}
          className="opacity-85"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button
            size="icon"
            variant="outline"
            className="absolute z-50 top-4 right-4"
          >
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent className="p-0">
          <SideMenu />
        </SheetContent>
      </Sheet>

      <div className="px-5 pt-3 pb-6 border-b border-solid border-secondary">
        <h1 className="text-xl font-bold ">{barbershop.name}</h1>
        <div className="flex items-center gap-1 mt-2">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop.address}</p>
        </div>

        <div className="flex items-center gap-1 mt-2">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">5,0 (980 avaliações)</p>
        </div>
      </div>
    </div>
  );
};

export default BarbershopInfo;
