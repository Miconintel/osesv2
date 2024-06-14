import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import StoreProvider from "@/components/StoreProvider/StoreProvider";
import ProviderSession from "@/components/Providers/ProviderSession/ProviderSession";
import LoginProviders from "@/components/Providers/LoginProviders/LoginProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <div className="grid-container">
            <LoginProviders Component={Nav}>{/* <Nav /> */}</LoginProviders>

            {children}
            <Footer name="uche" />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
