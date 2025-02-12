
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'
import { SearchForm } from "./search-form"
import { list } from '@vercel/blob';

async function getHeroImage() {
  const { blobs } = await list({prefix: 'lhw'});
  const heroImage = blobs.find(blob => blob.pathname.includes('Luxurious'));
  return heroImage ? heroImage.url : '/placeholder.svg';
}

export async function HeroSection() {
  const heroImageUrl = await getHeroImage();

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src={`${heroImageUrl}`}
          alt="Luxury Hotel View"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-white text-6xl md:text-7xl font-light tracking-wide max-w-4xl mx-auto leading-tight">
            UNLOCK AWARD-WINNING STAYS
          </h1>
          <p className="text-white text-xl font-light tracking-wide">
            See where bonus points take you with Leaders Club
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="text-white border-white hover:bg-white hover:text-black transition-colors bg-transparent mt-4"
          >
            LEARN MORE
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="w-full max-w-7xl px-4">
          <SearchForm />
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-sm tracking-wider">
          THE LOWELL, New York, United States
        </div>
      </div>
    </div>
  )
}

