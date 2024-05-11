'use client'

import Image from "next/image";
import ProfileImage from '../navbar/profileImage.jpeg';


export default function navbar_client( { children } ) {
    return (
        <nav className="h-screen min-w-[225px] max-w-[300px] flex  flex-col bg-white z-50">
            <div className="flex flex-row pl-4 pt-4 pr-3">
                <div className="">
                    <Image src={ ProfileImage } width="100" height="100" alt="placeholder text"/> 
                </div>
                <div>
                    <ul className="ml-3">
                        <li>jepp9920</li>
                        <li>Eleven: Jeppe Bøgeskov Bech</li>
                        <li>1. X</li>
                    </ul>
                </div>
            </div>

            <div className="flex justify-center flex-col mt-14">
                { children }
            </div>
        </nav>
    );
}