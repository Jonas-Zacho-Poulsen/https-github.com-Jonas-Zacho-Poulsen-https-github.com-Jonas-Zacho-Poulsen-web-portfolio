import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import { BackgroundAnimation } from "@/components/background-animation"
import "./globals.css"
import type { Metadata } from 'next'

const inter = Inter({ subsets: ["latin"], display: 'swap' })

export const metadata: Metadata = {
  title: "Jonas Zacho Poulsen - Full Stack Developer",
  description: "Portfolio of Jonas Zacho Poulsen, a Full Stack Developer specializing in modern web technologies.",
  openGraph: {
    title: "Jonas Zacho Poulsen - Full Stack Developer",
    description: "Portfolio of Jonas Zacho Poulsen, a Full Stack Developer specializing in modern web technologies.",
    url: "https://your-portfolio-url.com", // Replace with your actual URL
    siteName: "Jonas Zacho Poulsen Portfolio",
    images: [
      {
        url: "https://your-portfolio-url.com/og-image.png", // Replace with your OG image
        width: 1200,
        height: 630,
        alt: "Jonas Zacho Poulsen Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": "large",
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Jonas Zacho Poulsen - Full Stack Developer",
    description: "Portfolio of Jonas Zacho Poulsen, a Full Stack Developer specializing in modern web technologies.",
    images: ["https://your-portfolio-url.com/twitter-image.png"], // Replace with your Twitter image
    creator: "@yourTwitterHandle", // Replace with your Twitter handle
  },
  metadataBase: new URL('https://your-portfolio-url.com'), // Replace with your actual URL
  alternates: {
    canonical: 'https://your-portfolio-url.com', // Replace with your actual URL
    languages: {
      'en-US': 'https://your-portfolio-url.com/en-US', // Replace with your actual URL
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <BackgroundAnimation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
