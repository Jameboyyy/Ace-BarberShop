import Navbar from "./components/navbar"
import './globals.css'
import './homepage/homepage.css'
import './team/teampage.css'
import './gallery/gallerypage.css'

export const metadata = {
  title: "Ace BarberShop GG | Best Haircuts in Garden Grove",
  description: "Ace BarberShop GG offers expert haircuts, fades, and grooming services in Garden Grove. Book an appointment today and experience top-tier barbering.",
  keywords: "Ace BarberShop, barber shop Garden Grove, haircuts, fades, grooming, men's haircuts, barber near me, beard trim",
  authors: [{ name: "Ace BarberShop GG", url: "https://acebarbershopgg.com" }],
  icons: {
    icon: "/favicon.ico", // Default favicon
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // Optional for iPhones
  },
  openGraph: {
    title: "Ace BarberShop GG | Best Haircuts in Garden Grove",
    description: "Get the best haircuts, fades, and grooming services at Ace BarberShop GG. Professional barbers, top-quality service, and a welcoming atmosphere.",
    url: "https://acebarbershopgg.com", 
    siteName: "Ace BarberShop GG",
    images: [
      {
        url: "/Ace_Logo.png",
        width: 1200,
        height: 630,
        alt: "Ace BarberShop GG - Best haircuts in Garden Grove",
      },
    ],
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
