import "./globals.css";
import Header from "@/components/header";
// import localFont from "next/font/local";
import Footer from "@/components/footer";
import { Playfair_Display } from "next/font/google";
import { Poppins } from "next/font/google";


export const metadata = {
  title: "Anxiety and Burnout Therapy - Dr. Maya Reynolds, PsyD",
  description: "Calm and supportive therapy for stress, trauma and burnout in Santa Monica, CA.",
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
