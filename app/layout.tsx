import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/Home/Nav/ResponsiveNav";
import Footer from "./components/Home/Footer/Footer";

const kanit = Kanit({
  weight: ['200','300','400','500','600','700'],
  subsets: ['latin']
});
 
export const metadata: Metadata = {
  title: "Augustine | Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
        {/* Link to Google Fonts */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Kanit:wght@200;300;400;500;600;700&display=swap" />
      </head>
      <body className={'${kanit.className} bg-[#212428]'}>
        <ResponsiveNav />
        {children}
        <Footer />
        </body>
    </html>
  );
};
