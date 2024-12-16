export function ExclusiveRates() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Exclusive Member Rates</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Leaders Club Benefits</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Complimentary breakfast for two daily</li>
              <li>Priority room upgrade upon arrival, when available</li>
              <li>Early check-in and late check-out, when available</li>
              <li>Special welcome amenities</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Exclusive Rate Guarantee</h3>
            <p className="mb-4">As a member, you're guaranteed to receive our best available rates, always lower than those found on other travel sites.</p>
            <button className="bg-gold text-white px-6 py-2 rounded hover:bg-gold-dark transition-colors">
              Join Leaders Club
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

