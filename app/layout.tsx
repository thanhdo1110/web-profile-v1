import "./globals.css"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata = {
  title: "Đỗ Trung Thành - Personal Profile",
  description: "Personal profile website of Đỗ Trung Thành - Bug hunter and tech enthusiast",
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${poppins.variable} font-sans`}>{children}</body>
    </html>
  )
}
