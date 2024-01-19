import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MyStoreProvider from "@/components/MyStoreProvider";
import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("../components/Header"), {
  ssr: false,
});

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Basket E-commerce App",
  description: "A simple e-commerce app for household items.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <MyStoreProvider>
          <DynamicHeader />
          {children}
          <Footer />
        </MyStoreProvider>
      </body>
    </html>
  );
}
