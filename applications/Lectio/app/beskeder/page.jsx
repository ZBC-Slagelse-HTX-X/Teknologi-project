import Image from "next/image";
import ProfileImage from '../ui/navbar/profileImage.jpeg';
import { XMarkIcon } from '@heroicons/react/24/outline'
import Besked from "../ui/beskeder/besked";

export default function Page() {
    return(
        <main>
            <div className="w-[50vw] bg-white rounded-md">
                <div>
                    qwe
                </div>

                <div>

                <Besked />

                    {/* sigle message */}
                    <div className="p-3 flex max-h-[104px] bg-slate-100 rounded-lg mt-5">
                        <div><Image src={ProfileImage} className="rounded-full h-20 w-20"></Image></div>
                            
                        <div className="flex justify-between w-full">
                            <div className="pl-4 flex">
                                <ul className="max-w-sm">
                                    <li>Jeppe Bøgeskov</li>
                                    <li>1. X - HTX</li>
                                    <li className="max-h-[24px] overflow-hidden">Hey John Doe, jeg kommer ikke i skole imorgen fordi bla blas</li>
                                </ul>
                            </div>
                            <div className="flex items-center">
                                <ul className="flex justify-center items-center flex-col">
                                    <li className="text-center">14.19</li>
                                    <li className="bg-blue-500 text-center text-white rounded-full w-8 h-8 font-bold flex justify-center items-center">2</li>
                                </ul>
                                <ul className="p-2 pl-4">
                                    <li><i className="cursor-pointer active:text-red-600"><XMarkIcon className="w-8 h-8" /></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    

                </div>
            </div>
        </main>
    );
}