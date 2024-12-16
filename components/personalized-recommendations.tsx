export function PersonalizedRecommendations() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Personalized Recommendations</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Based on Your Preferences</h3>
            <p>Our AI analyzes your past stays and preferences to suggest hotels that match your unique taste.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Seasonal Recommendations</h3>
            <p>Discover the perfect destinations based on the current season and your travel history.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Exclusive Experiences</h3>
            <p>Get personalized suggestions for unique experiences available at our curated selection of luxury hotels.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

