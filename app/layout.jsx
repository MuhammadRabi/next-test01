import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="h-screen px-4 pt-6 bg-slate-700 md:px-8 lg:px-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}