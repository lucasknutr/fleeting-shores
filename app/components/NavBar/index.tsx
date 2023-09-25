import React from 'react'
import Link from 'next/link';

const NavBar = () => {
    const components = ["Latest", "Social Media", "Admin Page"];

        return (
            <div className='flex justify-around absolute top-0 left-0 bg-slate-400 text-black w-[100svw] h-16 items-center'>
                <div className="text-xl font-bold">Fleeting Shores</div>
                <ul className="flex gap-5">
                    {components.map(item => {
                        return (
                            
                                <li className='hover:scale-105 hover:bg-slate-200 rounded-md cursor-pointer transition-all duration-100'>{item}</li>
                           
                        )
                    })}
                </ul>
            </div>
        )
}

export default NavBar;