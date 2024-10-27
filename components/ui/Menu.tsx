import { LucideAlignLeft } from 'lucide-react'
import React from 'react'
import { ThemeSwitch } from '../theme-switch'

type Props = {}

const Menu = (props: Props) => {
    return (
        <div className="flex items-center gap-2">
            <div className=" py-1 bg-black flex items-center gap-x-4 rounded-full p-1 pl-4">

                <span className="text-[1.2em]  text-white pt-1 ">Menu</span>
                <span className="bg-white w-7 h-7 rounded-full flex justify-center items-center  ">
                    <LucideAlignLeft className="text-gray-900 w-6 h-6 p-1" />
                </span>

            </div>
            <ThemeSwitch />
        </div>
    )
}

export default Menu