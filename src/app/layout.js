import './globals.css';
import Header from '@/components/layout/Header.jsx';
import SideBar from '@/components/layout/SideBar';
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'App React',
  description: 'React project with next',
}

export default function RootLayout({ children }) {
  return (
    <html lang="br">
      <body>
        <Header/>
        <div id='main'>
          <SideBar/>
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
