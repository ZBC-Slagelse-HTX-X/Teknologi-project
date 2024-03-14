import Image from 'next/image'
import Navbar_client from './ui/navbar/navbar-client'
import Navbar_server from './ui/navbar/navbar-server'
import Skema from './ui/skema/skema'


export default function Home() {
  return ( 
    <main className='bg-slate-100 flex justify-start'>
      <Navbar_client>
        <Navbar_server />
      </Navbar_client>
      
      
      <Skema/>
    </main>
  )
}
