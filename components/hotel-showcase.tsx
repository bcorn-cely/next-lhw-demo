import Image from "next/image"
import Link from "next/link"

export function HotelShowcase() {
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
              {[1, 2].map((index) => (
                <Link key={index} href={`/hotels/${index}`} className="group">
                  <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg"
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
              {[1, 2].map((index) => (
                <Link key={index} href={`/hotels/${index}`} className="group">
                  <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg"
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

