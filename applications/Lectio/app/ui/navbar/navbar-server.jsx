import Link from "next/link";
import { BookmarkIcon, BriefcaseIcon, CalendarDaysIcon, EnvelopeIcon, HomeIcon, KeyIcon } from '@heroicons/react/24/outline'

export default async function navbar_server() {
    return (
        <div className="mx-2 font-medium">       
            <Link href="/"> 
                <div>
                    <span className="flex flex-row items-center hover:bg-slate-100 active:bg-[#1E90FF] px-2 rounded-full"><i><HomeIcon className="w-8 h-8 my-3 mx-1"/></i> Forside</span>
                </div>
            </Link>
            
            <Link href="/skema"> 
                <div>
                    <span className="flex flex-row items-center hover:bg-slate-100 px-2 rounded-full"><i><CalendarDaysIcon className="w-8 h-8 my-3 mx-1"/></i> Skema</span>
                </div>
            </Link>

            <Link href="/"> 
                <div>
                    <span className="flex flex-row items-center hover:bg-slate-100 px-2 rounded-full"><i><BriefcaseIcon className="w-8 h-8 my-3 mx-1"/></i> Lektier</span>
                </div>
            </Link>
            <Link href="/"> 
                <div>
                    <span className="flex flex-row items-center hover:bg-slate-100 px-2 rounded-full"><i><BookmarkIcon className="w-8 h-8 my-3 mx-1"/></i> Opgaver</span>
                </div>
            </Link>
            <Link href="/"> 
                <div>
                    <span className="flex flex-row items-center hover:bg-slate-100 px-2 rounded-full"><i><EnvelopeIcon className="w-8 h-8 my-3 mx-1"/></i> Beskeder</span>
                </div>
            </Link>
            <Link href="/"> 
                <div>
                    <span className="flex flex-row items-center hover:bg-slate-100 px-2 rounded-full"><i><HomeIcon className="w-8 h-8 my-3 mx-1"/></i> Dokumenter</span>
                </div>
            </Link>
            
            <Link href="/"> 
                <div>
                    <span className="flex flex-row items-center hover:bg-slate-100 px-2 rounded-full"><i><CalendarDaysIcon className="w-8 h-8 my-3 mx-1"/></i> Karakterer</span>
                </div>
            </Link>


        <div>
            <Link href="/lokaler"> 
                <div>
                    <span className="flex flex-row items-center hover:bg-slate-100 px-2 rounded-full"><i><KeyIcon className="w-8 h-8 my-3 mx-1"/></i> Lokaler</span>
                </div>
            </Link>

            <Link href="/">
            <div className='px-2 py-[10px] hover:bg-[#f3f3f3] hover:cursor-pointer rounded absolute bottom-2 z-50'>
              <span className='flex flex-row gap-2 items-center'>
                <i>
                  <svg xmlns="http://.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                  </svg>
                </i>
                Tilbage
              </span>
            </div>
          </Link>
        </div>
        </div>
    );
}