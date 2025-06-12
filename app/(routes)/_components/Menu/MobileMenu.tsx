import { Menu } from 'lucide-react'
import React from 'react'

const MobileMenu = () => {
    return (
        <div className='border border-collapse lg:hidden flex items-center justify-between p-4 bg-white shadow-md rounded-full'>
            <Menu />
        </div >
    )
}

export default MobileMenu