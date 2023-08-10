'use client'

import './globals.css'
import Navbar from './components/Navbar'
import { usePathname } from 'next/navigation'
import GoogleAnalytics from "./components/GoogleAnalytics";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  let bgStyle = undefined;
  if (pathname==='/article') {
    bgStyle = {
        backgroundImage:'linear-gradient(to right, white, white, #f5f2fb, #9c7ec5, #b2c59d)'
      };
    } else if(pathname==='/contact'){
      bgStyle = {
        backgroundImage:'linear-gradient(to right, white, #ccb9ea, #ab8bde, #a17dd9, #c6b1e8)'
      };
    } else if(pathname!=='/') {
      bgStyle = {
        backgroundColor: '#ffffff'
      }
    }else{
      bgStyle = {
        backgroundColor: '#35938D'
      };
    }

  return (
    <html lang="en" className=''>
      <head>
        <title>Sonu Aggarwal Portfolio</title>
      </head>
      
      <body className={'flex-col min-h-screen'} style={bgStyle}>
        <Navbar params={pathname} />

        {children}
        
        {/* <Footer/> */}
      </body>
      <GoogleAnalytics/>
    </html>
  )
}
