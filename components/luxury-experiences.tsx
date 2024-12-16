export function LuxuryExperiences() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Curated Luxury Experiences</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Private Yacht Tours</h3>
            <p>Explore crystal-clear waters in your own private yacht, complete with a personal chef and crew.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Michelin Star Dining</h3>
            <p>Indulge in exquisite culinary experiences at world-renowned Michelin-starred restaurants.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Exclusive Spa Retreats</h3>
            <p>Rejuvenate your body and mind with our specially curated spa packages in serene locations.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

