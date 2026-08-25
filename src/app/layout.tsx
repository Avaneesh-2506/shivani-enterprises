import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shivanienterprises.in"),
  title: "Shivani Enterprises | Distributors of Premium LED Lighting & SRIIVA Cleaning Products Lucknow",
  description:
    "Shivani Enterprises is the authorized distributor of SONSHIV LED Commercial, Industrial, Solar & Architectural Lighting and SRIIVA House Cleaning & Hygiene Essentials in Gomtinagar, Lucknow, Uttar Pradesh. Wholesale & project supplies with ready stock.",
  keywords: [
    "Shivani Enterprises",
    "Sonshiv LED Lights Lucknow",
    "Sriiva House Cleaning Products",
    "LED Flood Lights Lucknow",
    "Solar Street Light Distributor Uttar Pradesh",
    "Gomtinagar LED Wholesale",
    "Industrial High Bay Lights Lucknow",
    "SRIIVA Floor Cleaner Bulk",
    "White Phenyl Lucknow Distributor",
    "Rina Tower Vibhav Khand Lucknow"
  ],
  authors: [{ name: "Shivani Enterprises" }],
  openGraph: {
    title: "Shivani Enterprises | LED Lighting & SRIIVA Cleaning Distributor Lucknow",
    description:
      "Authorized wholesale distributor for SONSHIV LED Lighting & SRIIVA House Cleaning products in Lucknow & Uttar Pradesh. 100+ LED varieties and complete hospital-grade hygiene supplies.",
    url: "https://shivanienterprises.in",
    siteName: "Shivani Enterprises",
    images: [
      {
        url: "/assets/images/brand/flyer-horizontal.jpg",
        width: 1024,
        height: 723,
        alt: "Shivani Enterprises LED Lighting and Sriiva Cleaning Products",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased selection:bg-sky-500 selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
