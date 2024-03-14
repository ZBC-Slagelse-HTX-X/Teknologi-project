import Image from 'next/image'
import Navbar_client from './ui/navbar/navbar-client'
import Navbar_server from './ui/navbar/navbar-server'

export default function Home() {
  return ( 
    <main>
      <Navbar_client>
        <Navbar_server />
      </Navbar_client>
    </main>
  )
}
