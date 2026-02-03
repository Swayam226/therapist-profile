import "./globals.css";
import Header from "@/components/header";
import localFont from "next/font/local";


export const metadata = {
  title: "Therapist Profile Site",
  description: "A minimal, elegant website for Dr. Maya Reynolds",
};

const gopher = localFont({
  src: [
    {
      path: "../public/fonts/Gopher-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Gopher-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Gopher-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${gopher.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
