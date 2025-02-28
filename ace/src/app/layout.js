import Navbar from "./components/navbar"
import './globals.css'
import './homepage/homepage.css'
import './team/teampage.css'
import './gallery/gallerypage.css'

export async function generateMetadata() {
  return {
    metadataBase: new URL("https://acebarbershopgg.com"),
    title: "Ace BarberShop GG | Best Haircuts in Garden Grove",
    description:
      "Ace BarberShop GG offers expert haircuts, fades, and grooming services in Garden Grove. Book an appointment today and experience top-tier barbering.",
    keywords:
      "Ace BarberShop, barber shop Garden Grove, haircuts, fades, grooming, men's haircuts, barber near me, beard trim",
    openGraph: {
      title: "Ace BarberShop GG | Best Haircuts in Garden Grove",
      description:
        "Get the best haircuts, fades, and grooming services at Ace BarberShop GG. Professional barbers, top-quality service, and a welcoming atmosphere.",
      url: "https://acebarbershopgg.com",
      siteName: "Ace BarberShop GG",
      images: [
        {
          url: "https://acebarbershopgg.com/Ace_Logo.png",
          width: 1200,
          height: 630,
          alt: "Ace BarberShop GG - Best haircuts in Garden Grove",
        },
      ],
      type: "website",
    },
  };
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Ace BarberShop GG | Best Haircuts in Garden Grove</title>
        <meta name="description" content="Ace BarberShop GG offers expert haircuts, fades, and grooming services in Garden Grove. Book an appointment today and experience top-tier barbering." />
        <meta name="keywords" content="Ace BarberShop, barber shop Garden Grove, haircuts, fades, grooming, men's haircuts, barber near me, beard trim" />
        <meta property="og:title" content="Ace BarberShop GG | Best Haircuts in Garden Grove" />
        <meta property="og:description" content="Get the best haircuts, fades, and grooming services at Ace BarberShop GG. Professional barbers, top-quality service, and a welcoming atmosphere." />
        <meta property="og:image" content="https://acebarbershopgg.com/Ace_Logo.png" />
        <meta property="og:url" content="https://acebarbershopgg.com" />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
