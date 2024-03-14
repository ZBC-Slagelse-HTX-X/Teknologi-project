'use client'

export default function navbar_client( { children } ) {
    return (
        <div className="h-screen w-[225px] flex justify-center items-center flex-col">
            { children }
        </div>
    );
}