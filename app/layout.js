import "./globals.css";
import Header from "@/components/header";
// import localFont from "next/font/local";
import Footer from "@/components/footer";
import { Playfair_Display } from "next/font/google";
import { Poppins } from "next/font/google";


export const metadata = {
  title: "Therapist Profile Site",
  description: "A minimal, elegant website for Dr. Maya Reynolds",
};

const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${playfair.variable} antialiased font-sans font-normal`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
