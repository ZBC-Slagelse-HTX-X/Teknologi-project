'use client'

export default function navbar_client( { children } ) {
    return (
        <div className="h-screen w-[225px] flex justify-center flex-col bg-white">
            { children }
        </div>
    );
}