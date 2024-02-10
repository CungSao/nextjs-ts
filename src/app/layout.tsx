import AppFooter from "@/components/app.footer";
import AppHeader from "@/components/app.header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Container } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppHeader />
        <Container>{children}</Container>
        <AppFooter />
      </body>
    </html>
  );
}
