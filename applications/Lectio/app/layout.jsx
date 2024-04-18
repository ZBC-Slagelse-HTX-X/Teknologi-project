import './ui/globals.css';
import { Inter } from 'next/font/google'
import Navbar_client from './ui/navbar/navbar-client'
import Navbar_server from './ui/navbar/navbar-server'

const inter = Inter({ subsets: ['latin'] })

export default function DashboardLayout({ children }) {

  return ( 
    <html lang="en">
      <body className={`${inter.className} antialiased flex justify-start`}>
        <Navbar_client>
          <Navbar_server />
        </Navbar_client>
        {children}
      </body>
    </html> 
    );
}