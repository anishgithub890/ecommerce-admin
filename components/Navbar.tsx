import { UserButton } from '@clerk/nextjs';
import React from 'react';
import { MainNav } from './Main-nav';

const Navbar = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div>this will be store switcher</div>
        <MainNav />
        <div className="ml-auto space-x-4">
          <UserButton afterSignOutUrl="/" />
          NM
        </div>
      </div>
    </div>
  );
};

export default Navbar;
