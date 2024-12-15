import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import StoreProvider from "@/components/Providers/StoreProvider/StoreProvider";
import LoginProviders from "@/components/Providers/LoginProviders/LoginProviders";
// import ProviderSession from "@/components/Providers/ProviderSession/ProviderSession";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Osesworld app",
  description: "best grocery app",
};

export default function RootLayout({ children, naz }) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
