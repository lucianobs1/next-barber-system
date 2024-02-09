'use client';

import Image from 'next/image';
import {
  CalendarIcon,
  HomeIcon,
  LogInIcon,
  LogOutIcon,
  LucideUser2,
  MenuIcon,
  UserCircle,
} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Avatar, AvatarImage } from './ui/avatar';
import Link from 'next/link';

const Header: React.FC = () => {
  const { data } = useSession();

  const handleLoginClick = () => signIn('google');
  const handleLogoutClick = () => signOut();

  return (
    <Card>
      <CardContent className="p-5 flex items-center justify-between">
        <Image src="/logo.png" alt="FSW Barber" height={22} width={120} />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <MenuIcon size={18} />
            </Button>
          </SheetTrigger>

          <SheetContent className="p-0">
            <SheetHeader className="text-left border-b border-solid border-secondary p-5">
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            {data?.user ? (
              <div className="flex justify-between px-5 py-6 items-center">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage
                      src={data?.user?.image ?? ''}
                      alt={data?.user?.name ?? ''}
                    />
                  </Avatar>

                  <h2 className="font-bold">{data.user.name}</h2>
                </div>

                <Button
                  variant="secondary"
                  size="icon"
                  onClick={handleLogoutClick}
                >
                  <LogOutIcon />
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-3 px-5 py-6">
                <div className="flex items-center gap-2">
                  <UserCircle size={32} />
                  <h2>Olá faça seu login</h2>
                </div>
                <Button
                  className="w-full justify-start"
                  variant="secondary"
                  onClick={handleLoginClick}
                >
                  <LogInIcon className="mr-2" size={18} />
                  Fazer login
                </Button>
              </div>
            )}

            <div className="flex flex-col gap-3">
              <Button variant="outline" className="justify-start" asChild>
                <Link href="/">
                  <HomeIcon size={18} className="mr-2" />
                  Inicio
                </Link>
              </Button>

              {data?.user && (
                <Button variant="outline" className="justify-start" asChild>
                  <Link href="/bookings">
                    <CalendarIcon size={18} className="mr-2" />
                    Agendamentos
                  </Link>
                </Button>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
};

export { Header };
