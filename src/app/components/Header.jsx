"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'


function Header() {

  const router = useRouter();
  
  const [pokeName, setPokeName] = useState("");

  console.log(pokeName)
  
  const handleInput = (e) => {
    setPokeName(e.target.value);
  }

  const handleForm = (e) => {
    e.preventDefault();
    
    router.push(`/pokesearch/${pokeName}`)
    

  }

  return (
    <header className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[300px] flex justify-center items-center'>
        <div className='text-center'>
            <h1 className='text-white text-5xl'>NextJS Pokemon Finder App</h1>
            <p className='text-white text-2xl'>Find your favourite Pokemon</p>
            <form onSubmit={handleForm} action='' className='flex mt-2'>
                <input
                    type='text'
                    className='w-full rounded-full border border-gray-300 p-3 text-gray-700 shadow-md '
                    placeholder='Pokemon name...'
                    onChange={handleInput}
                />
                <button className='flex items-center mx-2 px-4 py-2 rounded-full bg-green-500 text-white shadow-md' type='submit'>Search</button>
            </form>
        </div>
    </header>
  )
}

export default Header