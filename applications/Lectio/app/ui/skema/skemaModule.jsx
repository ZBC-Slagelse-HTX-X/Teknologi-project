export default function skemaModule( args ) {
    
    if (args.hide) {
        return (
            null
        );
    } else {
        return (
        <div className="bg-[#9CCEFF] border-l-[10px] border-l-[#1E90FF] p-4 rounded-lg">
            <div className="flex flex-col text-[#0D3F70]">
                <span className="font-bold text-xl">S 1x { args.subject }</span>
                <span>{ args.teacher }</span>
                <span>{ args.room }</span>
            </div>
        </div> 
        );
    }


}