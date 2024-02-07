import React from 'react';
import { Card, CardContent } from './ui/card';
import Image from 'next/image';
import { Button } from './ui/button';
import { MenuIcon } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <Card>
      <CardContent className="p-5 flex items-center justify-between">
        <Image src="/logo.png" alt="FSW Barber" height={22} width={120} />
        <Button variant="outline" size="icon" className="h-8 w-8">
          <MenuIcon size={18} />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Header;
