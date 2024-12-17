import Image from "next/image"
import Link from "next/link"
import { list } from '@vercel/blob';

export const revalidate = 86400;

async function getHotelImages() {
  const { blobs } = await list({prefix: 'lhw'});
  const images = blobs.filter(image => !image.pathname.includes('Luxurious'));
  return images.slice(1);
}

export async function NewHotelShowcase() {
  const hotelImages = await getHotelImages();
  const images1 = hotelImages.slice(1,3);
  const images2 = hotelImages.slice(3,5);

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">WHERE TO NEXT?</h2>
        <p className="text-lg text-muted-foreground mb-12">
          COMPRISED OF MORE THAN 400 HOTELS IN OVER 80 COUNTRIES, LEADING HOTELS&apos; DISTINCT PROPERTIES MAKE UP
          A COLLECTION OF INDEPENDENT AND UNCOMMON LUXURY HOTELS THROUGHOUT THE WORLD.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">NEW MEMBER HOTELS</h3>
            <div className="grid gap-6">
              {images1.map((image,index) => (
                <Link key={index} href={`/hotels/${index}`} className="group">
                  <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
                    <Image
                      src={image.url}
                      alt={`New Member Hotel ${index}`}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">MOST POPULAR HOTELS</h3>
            <div className="grid gap-6">
              {images2.map((image, index) => (
                <Link key={index} href={`/hotels/${index}`} className="group">
                  <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
                    <Image
                      src={image.url}
                      alt={`Popular Hotel ${index}`}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

