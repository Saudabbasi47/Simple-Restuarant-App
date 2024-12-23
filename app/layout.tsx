import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Simple Restuarant",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-blue-200 to-purple-200">
        
        
        {children}
        
        
        </body>
    </html>
  );
}
