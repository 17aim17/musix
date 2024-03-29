'use client';

import { usePathname } from 'next/navigation'
import { useMemo } from 'react';
import  { HiHome} from 'react-icons/hi'
import  { BiSearch } from 'react-icons/bi'

export interface SidebarProps {
  children : React.ReactNode
}

const Sidebar: React.FC<SidebarProps> = ( { children}) => {
    const pathName = usePathname();

    const routes = useMemo(()=> [
        {
            icon : HiHome,   
            label: "Home",
            active: pathName!=='/search',
            href: '/'
        },
        {
            icon : BiSearch,   
            label: "Search",
            active: pathName =='/search',
            href: '/search'
        },

    ] , [pathName])

    return (
        <div className='flex h-full'>
        <div className='hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2'>
        </div>
            {children}
        </div>
    )
}

export default Sidebar