import Link from 'next/link'


export default function Home() {
  return ( 
    <main className='font-bold flex justify-center items-center w-screen'>
        <div className="flex  w-[900px] flex-wrap flex-row content-start">
          <div className="min-w-[400px] min-h-[200px] bg-white rounded-md p-4 m-4">
            <div className="w-full border-b-2">Kontaktinformation</div>
            <ul className="font-normal ml-2 mt-2">
                <li>Studieadministration: Christina Lodskou Thomsen</li>
              <ul>
                <li><label>Mail: </label>chth@zbc.dk</li>
              </ul>
            </ul>

          </div>
          <div className="w-[400px] h-[200px] bg-white rounded-md p-4 m-4">
            <div className="w-full border-b-2">Dokumenter</div>
              <ul className="font-normal ml-2 mt-2">
                <li>Årsplan 23-24: <span className='ml-2 text-blue-600'><Link href='#'>https://kortlink.dk/2mawu</Link></span></li>
                <li>Studie-, ordens- og eksamensreglement mv: <span className='text-blue-600'><Link href="#">kortlink.dk/2g8zm</Link></span></li>
            </ul>
          </div>
          <div className="w-[400px] h-[200px] bg-white rounded-md p-4 m-4">3</div>
        </div>
    </main>
  )
}