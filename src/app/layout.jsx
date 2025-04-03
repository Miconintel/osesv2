import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav/Nav';
import Footer from '@/components/Footer/Footer';
import StoreProvider from '@/components/Providers/StoreProvider/StoreProvider';
import LoginProviders from '@/components/Providers/LoginProviders/LoginProviders';
import { Poppins } from 'next/font/google';
// const inter = Poppins({ subsets: ["latin"], weight: "100 900" });
const poppins = Poppins({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Osesworld app',
  description: 'best grocery app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StoreProvider>
          <div className="grid-container">
            {/* <Nav /> */}
            <LoginProviders Component={Nav} />
            {children}
            <Footer name="uche" />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
