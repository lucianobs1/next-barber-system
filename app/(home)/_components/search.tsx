'use client';

import { Button } from '@/app/_components/ui/button';
import { Input } from '@/app/_components/ui/input';
import { SearchIcon } from 'lucide-react';
import React from 'react';

const Search: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <Input placeholder="Busque por uma barbearia..." />
      <Button variant="default" size="icon">
        <SearchIcon size={18} />
      </Button>
    </div>
  );
};

export { Search };
