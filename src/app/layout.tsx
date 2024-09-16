import type { Metadata } from "next";
import localFont from "next/font/local";

/* Components */
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import "./globals.css";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "High Range Cars",
  description: "Vehículos de la más alta gama",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Header />
        <div className="contain p-3">
          {children}
        </div>
          <Footer />
      </body>
    </html>
  );
}
