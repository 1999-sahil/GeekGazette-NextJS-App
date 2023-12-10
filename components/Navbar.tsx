import { NavLinks } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AuthProviders from './AuthProviders'
import { getCurrentUser } from '@/lib/session'
import { signOut } from 'next-auth/react';
import ProfileMenu from './ProfileMenu'

const Navbar = async () => {

  const session = await getCurrentUser();

  return (
    <nav className="flexBetween navbar">
        {/** Nav Logo and Unordered list of nav-links */}
        <div className="flex-1 flexStart gap-12">
            <Link href='/' className="flexCenter">
                <Image src='/logo.svg' alt='logo' width={40} height={40} />
                <h1 className="font-bold text-xl font-mukta text-orange-600">Geek<span className="text-black font-mukta">Gazette</span></h1>
            </Link>
            <ul className="xl:flex hidden text-small gap-7">
                {
                    NavLinks.map((link) => (
                        <Link href={link.href} key={link.key} className="hover:text-orange-500 text-rubik font-semibold">
                            {link.text}
                        </Link>
                    ))
                }
            </ul>
        </div>
        {/** Login/SignUp (Authentication) */}
        <div className="flexCenter gap-4">
                {session?.user ? (
                    <>
                        <ProfileMenu session={session} />
                        <Link href='/create-project'>
                            <button className="border-2 border-orange-500 rounded-md px-3 py-2 font-ubuntu font-lg bg-orange-500 text-white">Share Work</button>
                        </Link>
                    </>
                ): (
                    <AuthProviders />
                )}
        </div>
    </nav>
  )
}

export default Navbar