"use client";
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { usePathname } from 'next/navigation';
import {  UserGroupIcon, ChatAlt2Icon, PhotographIcon, VideoCameraIcon, CodeIcon, MusicNoteIcon, CogIcon} from '@heroicons/react/solid'
const montserrat = Montserrat({weight: "600", subsets: ["latin"]});

const routes = [
    {
        label: "Dashboard",
        icon: UserGroupIcon,
        href: "/dashboard",
    },
    {
        label: "Conversation",
        icon: ChatAlt2Icon,
        href: "/conversation",
    },
    {
        label: "Image Generation",
        icon: PhotographIcon,
        href: "/image",
    },
    {
        label: "Video Generation",
        icon: VideoCameraIcon,
        href: "/video",
    },
    {
        label: "Music Generation",
        icon: MusicNoteIcon,
        href: "/music",
    },
    {
        label: "Code Generation",
        icon: CodeIcon,
        href: "/code",
    },
    {
        label: "Settings",
        icon: CogIcon,
        href: "/settings",
    },
]

const SideBar = () => {
    const pathname = usePathname(); 
    return (
        <div className='space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white'>
        <div className="px-3 py-2 flex-1">
            <Link href="/dashboard" className='flex items-center pl-3 mb-14'>
                <div className="relative w-8 h-8 mr-4">
                    <Image
                        fill
                        alt='logo'
                        src="/logo.jpg"
                    />
                </div>
                <h1 className='text-2xl font-bold'>Genius</h1>
            </Link>
            <div className="space-y-1">
                {routes.map((route)=>(
                    <Link href={route.href} key={route.href} className={`p-3 group flex w-full text-sm font-medium hover:text-white hover:bg-white/10 rounded-lg transition ${pathname=== route.href? "text-white bg-white/10": "text-zinc-400"}`}>
                        <div className="flex items-center flex-1">
                            <route.icon className='w-6 pr-2 text-sky-200'/>
                            {route.label}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default SideBar