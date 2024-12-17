import Image from "next/image"
import Link from "next/link"
import { list } from '@vercel/blob';

export const revalidate = 86400;

async function getHotelImages() {
  const { blobs } = await list({prefix: 'lhw'});
  const images = blobs.filter(image => !image.pathname.includes('Luxurious'));
  return images.slice(1);
}

export async function HotelShowcase() {
  const hotelImages = await getHotelImages();
  const images1 = hotelImages.slice(1,3);
  const images2 = hotelImages.slice(3,5);

  
    return (
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-4">WHERE TO NEXT?</h2>
          <p className="text-sm tracking-wide text-center max-w-3xl mx-auto mb-16 text-gray-600">
            COMPRISED OF MORE THAN 400 HOTELS IN OVER 80 COUNTRIES, LEADING HOTELS DISTINCT PROPERTIES MAKE UP
            A COLLECTION OF INDEPENDENT AND UNCOMMON LUXURY HOTELS THROUGHOUT THE WORLD.
          </p>
          <div className="grid grid-cols-1 gap-y-8">
            <div className="grid md:grid-cols-2 gap-x-8">
              <div>
                <h3 className="text-center text-sm font-medium tracking-wide text-[#9B7B4E] mb-4">NEW MEMBER HOTELS</h3>
                <div className="grid grid-cols-2 gap-4">
                  {images1.map((image, index) => (
                    <Link key={index} href={`/hotels/${index + 1}`} className="block">
                      <div className="aspect-[3/4] relative overflow-hidden">
                        <Image
                          src={image.url}
                          alt={`New Member Hotel ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-center text-sm fonat-medium tracking-wide text-[#9B7B4E] mb-4">MOST POPULAR HOTELS</h3>
                <div className="grid grid-cols-2 gap-4">
                  {images2.map((image, index) => (
                    <Link key={index} href={`/hotels/${index + 3}`} className="block">
                      <div className="aspect-[3/4] relative overflow-hidden">
                        <Image
                          src={image.url}
                          alt={`Popular Hotel ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

