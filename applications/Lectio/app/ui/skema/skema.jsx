import SkemaModule from "./skemaModule";

// Lav så man kan skrive skema ind og ikke skal lede i filen efter enkelte dage.

export default function skema() {
    return (
        <div className="px-10">
            <div className="container">
                <div className="w-[80vw] h-[100vh] py-10">
                    <table className="w-full h-full bg-white">
                        <thead>
                            <tr className="h-20">
                                <th></th>
                                <th> <span className="px-10 p-4 rounded-xl bg-slate-200 font-normal">Mon</span> </th>
                                <th> <span className="px-10 p-4 rounded-xl bg-slate-200 font-normal">Tue</span> </th>
                                <th> <span className="px-10 p-4 rounded-xl bg-[#1E90FF] text-white font-normal">Wed</span> </th>
                                <th> <span className="px-10 p-4 rounded-xl bg-slate-200 font-normal">Thu</span> </th>
                                <th> <span className="px-10 p-4 rounded-xl bg-slate-200 font-normal">Fri</span> </th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            <tr>
                             <td>  <span className="h-[50px] bg-slate-300 py-10 px-2 rounded-e-md text-slate-600 font-bold">1.</span> </td>
                                <td>
                                    <SkemaModule subject="MA" teacher="jacs" room="SLWI-4110"/> 
                                </td>
                                
                                <td><SkemaModule subject="DA" teacher="kibo" room="SLWI-4110" /></td>   
                                <td>    
                                    <SkemaModule subject="MA" teacher="jacs" room="SLWI-4110" / >
                                </td>
                                <td>d</td>
                                <td>e</td>
                            </tr>

                            {/* Tue */}
                            <tr>
                                <td> <span className="h-[50px] bg-slate-300 py-10 px-2 rounded-e-md text-slate-600 font-bold">2.</span> </td>
                                    <td>
                                        <SkemaModule subject="Ti" teacher="hnpo" room="SLWI-4110" />
                                    </td>

                                <td>                                    <div className="bg-[#9CCEFF] border-l-[10px] border-l-[#1E90FF] p-4 rounded-lg">
                                        <div className="flex flex-col text-[#0D3F70]">
                                            <span className="font-bold text-xl">S 1x MA</span>
                                            <span>jacs</span>
                                            <span>SLWI-4110</span>
                                        </div>
                                    </div></td>
                                <td>c</td>
                                <td>d</td>
                                <td>e</td>
                            </tr>

                            
                            <tr>
                            <td> <span className="h-[50px] bg-slate-300 py-10 px-2 rounded-e-md text-slate-600 font-bold">3.</span> </td>
                                <td>
                                    <SkemaModule subject="Ti" teacher="hnpo" room="SLWI-4110" />
                                </td>
                                <td>b</td>
                                <td>c</td>
                                <td>d</td>
                                <td>e</td>
                            </tr>

                            {/* Thu */}
                            <tr>
                            <td> <span className="h-[50px] bg-slate-300 py-10 px-2 rounded-e-md text-slate-600 font-bold">4.</span> </td>
                                <td>
                                    <div className="bg-[#9CCEFF] border-l-[10px] border-l-[#1E90FF] p-4 rounded-lg">
                                        <div className="flex flex-col text-[#0D3F70]">
                                            <span className="font-bold text-xl">S 1x MA</span>
                                            <span>jacs</span>
                                            <span>SLWI-4110</span>
                                        </div>
                                    </div>
                                </td>
                                <td>b</td>
                                <td>c</td>
                                <td>d</td>
                                <td>e</td>
                            </tr>

                            {/* Fri */}
                            <tr>
                            <td> <span className="h-[50px] bg-slate-300 py-10 px-2 rounded-e-md text-slate-600 font-bold">5.</span> </td>
                                <td>
                                    <div className="bg-[#9CCEFF] border-l-[10px] border-l-[#1E90FF] p-4 rounded-lg">
                                        <div className="flex flex-col text-[#0D3F70]">
                                            <span className="font-bold text-xl">S 1x MA</span>
                                            <span>jacs</span>
                                            <span>SLWI-4110</span>
                                        </div>
                                    </div>
                                </td>
                                <td>b</td>
                                <td>c</td>
                                <td>d</td>
                                <td>e</td>
                            </tr>
                            <tr>
                            <td> <span className="h-[50px] bg-slate-300 py-10 px-2 rounded-e-md text-slate-600 font-bold">6.</span> </td>
                            <td>
                                    <div className="bg-[#9CCEFF] border-l-[10px] border-l-[#1E90FF] p-4 rounded-lg">
                                        <div className="flex flex-col text-[#0D3F70]">
                                            <span className="font-bold text-xl">S 1x MA</span>
                                            <span>jacs</span>
                                            <span>SLWI-4110</span>
                                        </div>
                                    </div>
                                </td>
                                <td>b</td>
                                <td>c</td>
                                <td>d</td>
                                <td>e</td>
                            </tr>
                            <tr>
                            <td> <span className="h-[50px] bg-slate-300 py-10 px-2 rounded-e-md text-slate-600 font-bold">7.</span> </td>
                            <td>
                                    <div className="bg-[#9CCEFF] border-l-[10px] border-l-[#1E90FF] p-4 rounded-lg">
                                        <div className="flex flex-col text-[#0D3F70]">
                                            <span className="font-bold text-xl">S 1x MA</span>
                                            <span>jacs</span>
                                            <span>SLWI-4110</span>
                                        </div>
                                    </div>
                                </td>
                                <td>b</td>
                                <td>c</td>
                                <td>d</td>
                                <td>e</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}