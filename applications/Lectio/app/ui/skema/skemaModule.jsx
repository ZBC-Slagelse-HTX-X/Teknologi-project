import './skema.css';
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";


export default function skemaModule( args ) {

    if ( args.visibility == 'hide' ) {
        return (
            <div className="min-h-[88px]"></div>
        );
    } else {
        return (
        <div className="bg-[#9CCEFF] border-l-[10px] border-l-[#1E90FF] p-4 rounded-lg max-w-[275px] max-h-[88px] flex justify-between cursor-pointer hover:opacity-80 group">
            
            <div className="flex flex-col text-[#0D3F70] justify-center">
                <span className="font-bold text-xl">S 1x { args.subject }</span>
                <span>{ args.teacher }</span>
                <span>{ args.room }</span>
            </div>

        {/* Tooltip */}
        <div className='absolute'>

            <div className='max-w-[275px] flex flex-col flex-wrap mt-16'>
                <div>
                {(() => {
                    if ( args.note != '' ) {
                        return (
                            <span className='sidebar-tooltip group-hover:scale-100 relative left-[-30px]'><h1 className='font-black'>Note:</h1>&nbsp;<span>{ args.note }</span></span>
                            );
                        } else {
                            return (
                                ''
                                );
                            }
                })()} 
                </div>
                <div>
                {(() => {
                    if ( args.homework != '' ) {
                        return (
                            <span className='sidebar-tooltipH group-hover:scale-100 relative left-[-30px]'><h1 className='font-black'>Lektier:</h1>&nbsp;<span>{ args.homework }</span> </span>
                            );
                        } else {
                            return (
                                ''
                                );
                            }
                        })()} 
                </div>
            </div>
            </div>
            <div className="text-[#0D3F70] flex flex-row float-right">
                <div>
                    { (() => {
                        if ( args.note != '' ) {
                            return (
                                <span><ChatBubbleOvalLeftIcon className="h-5"/></span>
                                );
                            } else {
                                return (
                                    <span></span>
                                    );
                                }
                                
                            })()}
                </div>
                <div>
                    { (() => {
                        if ( args.homework != '' ) {
                            return (
                                <span><PencilSquareIcon className="h-5"/></span>
                                );
                            } else {
                                return (
                                    <span></span>
                            );
                        }
                        
                    })()}
                </div>
            </div>
        </div> 
        );
    }
}