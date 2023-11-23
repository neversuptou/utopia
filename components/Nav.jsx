"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession,
   getProviders} from 'next-auth';

const Nav = () => {
  const isUserLoggedIn = false;

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    }

    setProviders();
  }, [])

  return (
    <div className='flex-between w-full mb-16
     pt-3'>
     <Link href="/" className='flex gap-2 flex-center'>
      <Image
        src="/assets/images/logo.svg"
        alt='Utopia'
        width={30}
        height={30}
        className='object-contain'
        />
        <p className='logo-text'>Utopia</p>
     </Link>

     {/* Desktop Navigation */}
      <div className='sm:flex hidden'>
        {isUserLoggedIn ?(
          <div className='flex gap-3 md:gap-5'> 
            <Link href='/create-prompt'
            className='black_btn'>
              CreatePost
            </Link>

            <button type='button' onClick=
            {signOut} className='outline_btn'>
              Sign Out
            </button>

            <Link href='/profile'>
              <Image
                src='/assets/images/logo.svg'
                alt='Profile Photo'
                width={37}
                height={37}
                className='rounded-full'
              />
            </Link>
          </div>
        ) : (
          <>
          {providers &&
          Object.values(providers).map((providers) => (
            <button
            type='button'
            key={providers.name}
            onClick={() => signIn(provider.id)}
            className='black_btn'
            >
              Sign In
            </button>
          ))}
          </>
        )}
      </div>
     </div>
  )
}

export default Nav