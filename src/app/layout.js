import { Inter } from 'next/font/google'
import { Mooli } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArtistaContextProvider } from '@/provider/artistaProvider';

const mooli = Mooli({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Artistas ',
  description: 'Generated by cristian',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={mooli.className}>
        <Navbar />
        <ArtistaContextProvider>
          {children}
        </ArtistaContextProvider>
        <Footer />
      </body>
    </html>
  )
}