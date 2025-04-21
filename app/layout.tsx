"use client";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Script from "next/script";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <Script src="https://telegram.org/js/telegram-web-app.js" strategy = "beforeInteractive"/>
      </head>
      <body>                
        <div className="flex-col">
          <div >          
            <Navbar/>
          </div>          
          <div className="py-24">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
