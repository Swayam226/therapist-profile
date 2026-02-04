import "./globals.css";
import Header from "@/components/header";
import localFont from "next/font/local";
import Footer from "@/components/footer";
import { Inter, Playfair_Display } from "next/font/google";


export const metadata = {
  title: "Therapist Profile Site",
  description: "A minimal, elegant website for Dr. Maya Reynolds",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased font-sans font-normal`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
