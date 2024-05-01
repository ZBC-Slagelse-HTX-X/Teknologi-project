import Besked from "../ui/beskeder/besked";
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline'

export default function Page() {
    return(
        <main className="flex justify-center items-center w-full">
            <div className="w-[50vw] rounded-md">
                <div>
                    <div>
                        <div className="border-b-[2px] border-[#999999] flex items-center">
                            <i><MagnifyingGlassIcon className="w-6 text-[#6d6d6d]" /></i><input type="search" name="" id="" placeholder="søg i beskeder" className="bg-[#efefef] p-2 outline-none"/>
                        </div>
                        <button className="flex items-center bg-slate-100 m-2 hover:bg-slate-200 p-3 rounded-md"><i><PlusIcon className="w-6 text-[#6d6d6d]"/></i> <p className="text-sm">Ny besked</p></button>
                    </div>
                </div>

                <div className="m-2">

                <Besked />
                <Besked />
                    
                </div>
            </div>
        </main>
    );
}