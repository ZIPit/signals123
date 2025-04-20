'use client'
import "./globals.css";
import Navbar from "@/components/Navbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script src="https://telegram.org/js/telegram-web-app.js"></script>
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
