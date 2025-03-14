import { HeroSection } from "@/components/hero-section"
import { FeaturedSection } from "@/components/featured-section"
import { HotelShowcase } from "@/components/hotel-showcase"
import { LuxuryExperiences } from "@/components/luxury-experiences"
import { VirtualConcierge } from "@/components/virtual-concierge"
import { ExclusiveRates } from "@/components/exclusive-rates"
import { PersonalizedRecommendations } from "@/components/personalized-recommendations"
import { showLuxuryExperiences, enableVirtualConcierge, offerExclusiveRates, showPersonalizedRecommendations, lhwFlags } from '../../lib/flags'

type Params = Promise<{ code: string }>;

export async function generateStaticParams() {
  // returning an empty array is enough to enable ISR
  
  return [];
}


export default async function Home({ params }: { params: Params}) {
  const { code } = await params;
  const luxuryExperiences = await showLuxuryExperiences(code, lhwFlags)
  const virtualConcierge = await enableVirtualConcierge(code, lhwFlags)
  const exclusiveRates = await offerExclusiveRates(code, lhwFlags)
  const personalizedRecommendations = await showPersonalizedRecommendations(code, lhwFlags)

  return (
    <main>
      <HeroSection />
      <FeaturedSection />
      {luxuryExperiences && <LuxuryExperiences />}
      {virtualConcierge && <VirtualConcierge />}
      {exclusiveRates && <ExclusiveRates />}
      {personalizedRecommendations && <PersonalizedRecommendations />} 
      <HotelShowcase />
    </main>
  )
}

