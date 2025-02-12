import { ExclusiveRatesContent, getExclusiveRatesContent } from "@/lib/contentful"


export async function ExclusiveRates() {
  const content: ExclusiveRatesContent | null = await getExclusiveRatesContent()
  if (!content) {
    return null // Or return a fallback UI
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">{content.title}</h2>
        <p className="text-center text-gray-600 mb-8">{content.subtitle}</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">{content.leadersBenefitsTitle}</h3>
            <ul className="list-disc pl-5 space-y-2">
              {content.leadersBenefits.map((benefit, index) => {
                const data = benefit.fields;
                return (
                  <li key={index}>
                    <span className="font-medium">{data.title}:</span> {data.description}
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">{content.rateGuaranteeTitle}</h3>
            <p className="mb-4">{content.rateGuaranteeDescription}</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
              {content.ctaText}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

