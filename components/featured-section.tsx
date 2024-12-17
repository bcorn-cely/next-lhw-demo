import { list } from "@vercel/blob"
import Image from "next/image"
import Link from "next/link"

async function getFeaturedImages() {
  const { blobs } = await list( {prefix: 'lhw' });
  const images = blobs.filter(image => !image.pathname.includes('Luxurious'));
  return images.slice(5);
}

export async function FeaturedSection() {
  const hotelImages = await getFeaturedImages();

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">PURSUE THE REMARKABLE</h2>
        <p className="text-lg text-muted-foreground mb-12">
          DISCOVER THE EXPERIENCES THAT FOREVER SPARK THE SPIRIT AND INSPIRE THE SOUL.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/insider-offers" className="group relative">
            <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
              <Image
                src={hotelImages[0].url}
                alt="Insider Offers"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center text-white p-6 text-center">
                <p className="text-xl font-medium">
                  Venture beyond the ordinary with insider offers take you beyond the tourist attractions.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/prepay-save" className="group relative">
            <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
              <Image
                src={hotelImages[1].url}
                alt="Prepay and Save"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <p className="text-2xl font-medium">PREPAY AND SAVE</p>
              </div>
            </div>
          </Link>
          <Link href="/design-collection" className="group relative">
            <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
              <Image
                src={hotelImages[2].url}
                alt="Design Collection"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <p className="text-2xl font-medium">THE DESIGN COLLECTION</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

