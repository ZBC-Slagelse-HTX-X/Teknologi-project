import { promises as fs } from 'fs';

export default async function Page( {params} ) {
    const file = await fs.readFile(process.cwd() + '/app/skema/skema.json', 'utf8');
    const data = JSON.parse(file);
    
    return (
        <div className='flex flex-col h-screen w-screen items-center justify-center'>
            <div> 
                Sidens ID: {params.slug}
            </div>

        </div>
    );
}


// export default function Page ({ module }) {
//     return <div>Room Number: {module.slug} </div>
// }