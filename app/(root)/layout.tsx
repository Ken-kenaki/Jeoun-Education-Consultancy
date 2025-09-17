import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "../globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: {
    default: "Joeun Education Consultancy",
    template: "%s | Joeun Education Consultancy",
  },
  description:
    "Your trusted partner for global education opportunities. We guide students to study in South Korea, Japan, Australia, UK, Malta and more. Offering test preparations for IELTS, PTE, and language courses.",
  keywords: [
    "study abroad",
    "education consultancy Nepal",
    "study in South Korea",
    "consultancy in lalitpur",
    "consultancy in kumaripati",
    "consultancy in kathmandu",
    "consultancy in pokhara",
    "consultancy in butwal",
    "consultancy in biratnagar",
    "consultancy in boudhanath",
    "consultancy in jawalakhel",
    "consultancy in pulchowk",
    "consultancy in new road",
    "consultancy in tripureshwor",
    "consultancy in thamel",
    "consultancy in putalisadak",
    "consultancy in sinamangal",
    "consultancy in baluwatar",
    "consultancy in jawalakhel",
    "consultancy in lagankhel",
    "consultancy in mahendrapool",
    "consultancy in prithvi chowk",
    "Joeun Education Consultancy",
    "study in Japan",
    "study in Australia",
    "IELTS preparation",
    "Korean language course",
    "visa assistance",
    "Joeun Education Consultancy",
    "study abroad consultants",
  ],
  authors: [{ name: "Joeun Education Consultancy" }],
  metadataBase: new URL("https://www.joeuneducationconsultancy.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Joeun Education Consultancy | Study Abroad Consultants",
    description:
      "Your trusted partner for global education opportunities with offices in Kathmandu, Nepal",
    url: "https://www.joeuneducationconsultancy.com",
    siteName: "Joeun Education Consultancy",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Joeun Education Consultancy Logo",
      },
    ],
    locale: "en_US",
    type: "website",
    emails: ["info@joeuneducationconsultancy.com", "joeuneducationconsultancy@gmail.com"],
    phoneNumbers: ["+977-9862358543"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900 overflow-x-hidden">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
