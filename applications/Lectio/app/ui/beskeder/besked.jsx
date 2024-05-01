import ProfileImage from '../../ui/navbar/profileImage.jpeg'
import Image from "next/image";
import { XMarkIcon } from '@heroicons/react/24/outline'


const sampleMessage = {
    author: 'Jeppe Bech',
    image: 'ProfileImage',
    class: '1. X - HTX',
    messageTitle: 'Hey John Doe, jeg kommer ikke i skole imorgen fordi bla bla',
    messageSent: '14.22'
}


export default function besked() {

    return (
        <div className="p-3 flex max-h-[104px] bg-slate-100 rounded-lg mt-5">
            <div><Image src={ProfileImage} height={100} width={100} className="rounded-full h-20 w-20"></Image></div>
                
            <div className="flex justify-between w-full">
                <div className="pl-4 flex">
                    <ul className="max-w-sm">
                        <li>{sampleMessage.author}</li>
                        <li>{sampleMessage.class}</li>
                        <li className="max-h-[24px] overflow-hidden">{sampleMessage.messageTitle}</li>
                    </ul>
                </div>
                <div className="flex items-center">
                    <ul className="flex justify-center items-center flex-col">
                        <li className="text-center">{sampleMessage.messageSent}</li>
                        <li className="bg-blue-500 text-center text-white rounded-full w-8 h-8 font-bold flex justify-center items-center">2</li>
                    </ul>
                    <ul className="p-2 pl-4">
                        <li><i className="cursor-pointer active:text-red-600"><XMarkIcon className="w-8 h-8" /></i></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}